/**
 * modules dependencies.
 */
const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const logger = require('./loggerLib.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const tokenLib = require("./tokenLib.js");
const check = require("./checkLib.js");
const response = require('./responseLib')
const NotificationModel = mongoose.model('Notification');

const redisLib = require("./redisLib.js");



let setServer = (server) => {

    //let allOnlineUsers = []

    let io = socketio.listen(server);

    let myIo = io.of('/')

    myIo.on('connection', (socket) => {

        console.log("on connection--emitting verify user");

        socket.emit("verifyUser", "");

        // code to verify the user and make him online

        socket.on('set-user', (authToken) => {

            console.log("set-user called")
            tokenLib.verifyClaimWithoutSecret(authToken, (err, user) => {
                if (err) {
                    socket.emit('auth-error', { status: 500, error: 'Please provide correct auth token' })
                }
                else {

                    console.log("user is verified..setting details");
                    let currentUser = user.data;
                    // setting socket user id 
                    socket.userId = currentUser.userId
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    let key = currentUser.userId
                    let value = fullName

                    let setUserOnline = redisLib.setANewOnlineUserInHash("onlineUsers", key, value, (err, result) => {
                        if (err) {
                            console.log(`some error occurred`)
                        } else {
                            // getting online users list.

                            redisLib.getAllUsersInAHash('onlineUsers', (err, result) => {
                                console.log(`--- inside getAllUsersInAHas function ---`)
                                if (err) {
                                    console.log(err)
                                } else {

                                    console.log(`${fullName} is online`);
                                    // setting room name
                                    socket.room = 'edNotification'
                                    // joining notification-group room.
                                    socket.join(socket.room)
                                    socket.to(socket.room).broadcast.emit('online-user-list', result);


                                }
                            })
                        }
                    })



                    // let userObj = {userId:currentUser.userId,fullName:fullName}
                    // allOnlineUsers.push(userObj)
                    // console.log(allOnlineUsers)




                }


            })

        }) // end of listening set-user event


        socket.on('disconnect', () => {
            // disconnect the user from socket
            // remove the user from online list
            // unsubscribe the user from his own channel

            console.log("user is disconnected");
            // console.log(socket.connectorName);
            console.log(socket.userId);


            // var removeIndex = allOnlineUsers.map(function (user) { return user.userId; }).indexOf(socket.userId);
            // allOnlineUsers.splice(removeIndex, 1)
            // console.log(allOnlineUsers)
            
            if (socket.userId) {
                redisLib.deleteUserFromHash('onlineUsers', socket.userId)
                redisLib.getAllUsersInAHash('onlineUsers', (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        socket.leave(socket.room)
                        socket.to(socket.room).broadcast.emit('online-user-list', result);


                    }
                })
            }









        }) // end of on disconnect


        socket.on('notification-msg', (data) => {
            console.log("socket notification-msg called")
            console.log(data);
            data['notificationId'] = shortid.generate()
            console.log(data);

            // event to save notification.
            setTimeout(function () {

                eventEmitter.emit('save-notification', data);

            }, 2000)
            myIo.emit(data.receiverId, data)

        });

        socket.on('typing', (fullName) => {

            socket.to(socket.room).broadcast.emit('typing', fullName);

        });


    });

}


// database operations are kept outside of socket.io code.

// saving notifications to database.
eventEmitter.on('save-notification', (data) => {

    // let today = Date.now();

    let newNotification = new NotificationModel({

        notificationId: data.notificationId,
        senderName: data.senderName,
        senderId: data.senderId,
        receiverName: data.receiverName || '',
        receiverId: data.receiverId || '',
        message: data.message,
        notificationRoom: data.notificationRoom || '',
        createdOn: data.createdOn

    });

    newNotification.save((err, result) => {
        if (err) {
            console.log(`error occurred: ${err}`);
        }
        else if (result == undefined || result == null || result == "") {
            console.log("Notification Is Not Saved.");
        }
        else {
            console.log("Notification Saved.");
            console.log(result);
        }
    });

}); // end of saving notification.

///redis code 




module.exports = {
    setServer: setServer
}
