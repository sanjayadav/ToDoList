/**
 * module dependencies.
 */
const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')

/* Models */
const NotificationModel = mongoose.model('Notification')
const UserModel = mongoose.model('User')
const AuthModel = mongoose.model('Auth')

/**
 * function to retrieve notification of the user.
 * params: receiverId, senderId, skip.
 */
let getUsersNotification = (req, res) => {
  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.senderId) ) {
        logger.info('parameters missing', 'getUsersNotification handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // function to get notifications.
  let findNotifications = () => {
    return new Promise((resolve, reject) => {  
       // creating find query.
      //  let findQuery = {
      //   $or: [
      //     {
      //       $and: [
      //         {senderId: req.query.senderId},
      //         {receiverId: req.query.receiverId}
      //       ]
      //     },
      //     {
      //       $and: [
      //         {receiverId: req.query.senderId},
      //         {senderId: req.query.receiverId}
      //       ]
      //     }
      //   ]
      // }
      NotificationModel.find({senderId: req.query.senderId})
        .select('-_id -__v -notificationRoom')
        .sort('-createdOn')
        .skip(parseInt(req.query.skip) || 0)
        .lean()
        .limit(10)
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Notification Controller: getUsersNotification', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (check.isEmpty(result)) {
            logger.info('No Notification Found', 'Notification Controller: getUsersNotification')
            let apiResponse = response.generate(true, 'No Notification Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('notification found and listed.')

            // reversing array.
            let reverseResult = result.reverse()

            resolve(result)
          }
        })
    })
  } // end of the findNotifications function.

  // making promise call.
  validateParams()
    .then(findNotifications)
    .then((result) => {
      let apiResponse = response.generate(false, 'All Notifications Listed', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the getUsersNotification function.

/**
 * function to retrieve notification of the group.
 * params: notificationRoom, skip.
 */
let getGroupNotification = (req, res) => {
  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.notificationRoom)) {
        logger.info('parameters missing', 'getUsersNotification handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // function to get notifications.
  let findNotifications = () => {
    return new Promise((resolve, reject) => {
      // creating find query.
      let findQuery = {
        notificationRoom: req.query.notificationRoom
      }

      NotificationModel.find(findQuery)
        .select('-_id -__v -receiverName -receiverId')
        .sort('-createdOn')
        .skip(parseInt(req.query.skip) || 0)
        .lean()
        .limit(10)
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Notification Controller: getUsersNotification', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (check.isEmpty(result)) {
            logger.info('No Notification Found', 'Notification Controller: getUsersNotification')
            let apiResponse = response.generate(true, 'No Notification Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('notification found and listed.')

            // reversing array.
            let reverseResult = result.reverse()

            resolve(result)
          }
        })
    })
  } // end of the findNotifications function.

  // making promise call.
  validateParams()
    .then(findNotifications)
    .then((result) => {
      let apiResponse = response.generate(false, 'All Group Notifications Listed', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the getGroupNotification function.

/**
 * function to mark multi notification as seen.
 * params: notificationIdCsv
 */
let markNotificationAsSeen = (req, res) => {
  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.notificationIdCsv)) {
        logger.info('parameters missing', 'markNotificationAsSeen handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // function to mark notification as seen.
  let modifyNotification = () => {
    return new Promise((resolve, reject) => {
      let findQuery = {
        notificationId: req.query.notificationIdCsv
      }

      let updateQuery = {
        seen: true
      }

      NotificationModel.update(findQuery, updateQuery, {multi: true})
      .exec((err, result) => {
        if (err) {
          console.log(err)
          logger.error(err.message, 'Notification Controller: markNotificationAsSeen', 10)
          let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
          reject(apiResponse)
        } else if (result.n === 0) {
          logger.info('No Notification Found', 'Notification Controller: markNotificationAsSeen')
          let apiResponse = response.generate(true, 'No Notification Found', 404, null)
          reject(apiResponse)
        } else {
          console.log('notification found and updated.')

          resolve(result)
        }
      })
    })
  } // end of the modifyNotification function.

  // making promise call.
  validateParams()
    .then(modifyNotification)
    .then((result) => {
      let apiResponse = response.generate(false, 'notification found and updated.', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the markNotificationAsSeen function.

/**
 * function to get number of unread messages.
 * params: userId, senderId.
 */
let countUnSeenNotification = (req, res) => {
  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.userId)) {
        logger.info('parameters missing', 'countUnSeenNotification handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // function to get notifications.
  let countNotification = () => {
    return new Promise((resolve, reject) => {
      // creating find query.
      let findQuery = {}

      findQuery['receiverId'] = req.query.userId
      findQuery['seen'] = false

      if (check.isEmpty(req.query.senderId) === false) {
        findQuery['senderId'] = req.query.senderId
      }

      NotificationModel.count(findQuery)
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Notification Controller: countUnSeenNotification', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else {
            console.log('unseen notification count found.')

            resolve(result)
          }
        })
    })
  } // end of the countNotification function.

  // making promise call.
  validateParams()
    .then(countNotification)
    .then((result) => {
      let apiResponse = response.generate(false, 'unseen notification count found.', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the countUnSeenNotification function.

/**
 * function to get unread messages.
 * params: userId, senderId.
 */
let findUnSeenNotification = (req, res) => {
  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.userId)) {
        logger.info('parameters missing', 'findUnSeenNotification handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // function to get notifications.
  let findNotifications = () => {
    return new Promise((resolve, reject) => {
      // creating find query.
      let findQuery = {}

      findQuery['receiverId'] = req.query.userId
      findQuery['seen'] = false

      if (check.isEmpty(req.query.senderId) === false) {
        findQuery['senderId'] = req.query.senderId
      }

      NotificationModel.find(findQuery)
        .select('-_id -__v')
        .sort('-createdOn')
        .skip(parseInt(req.query.skip) || 0)
        .lean()
        .limit(10)
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Notification Controller: findUnSeenNotification', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (check.isEmpty(result)) {
            logger.info('No Notification Found', 'Notification Controller: findUnSeenNotification')
            let apiResponse = response.generate(true, 'No Notification Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('notification found and listed.')

            // reversing array.
            let reverseResult = result.reverse()

            resolve(result)
          }
        })
    })
  } // end of the findNotifications function.

  // making promise call.
  validateParams()
    .then(findNotifications)
    .then((result) => {
      let apiResponse = response.generate(false, 'notification found and listed.', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the findUnSeenNotification function.

/**
 * function to find user from whom notification is unseen.
 * params: userId.
 */
let findUserListOfUnseenNotification = (req, res) => {
  console.log('--- inside findUserListOfNotification function ---')

  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.userId)) {
        logger.info('parameters missing', 'findUserListOfUnseenNotification handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // find distinct sender.
  let findDistinctSender = () => {
    return new Promise((resolve, reject) => {
      NotificationModel.distinct('senderId', {receiverId: req.query.userId, seen: false})
        .exec((err, senderIdList) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Notification Controller: findUserListOfUnseenNotification', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (check.isEmpty(senderIdList)) {
            logger.info('No Unseen Notification User Found', 'Notification Controller: findUserListOfUnseenNotification')
            let apiResponse = response.generate(true, 'No Unseen Notification User Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('User found and userIds listed.')

            console.log(senderIdList)

            resolve(senderIdList)
          }
        })
    })
  } // find findDistinctSender function.

  // function to find user info.
  let findUserInfo = (senderIdList) => {
    return new Promise((resolve, reject) => {
      UserModel.find({userId: {$in: senderIdList}})
        .select('-_id -__v -password -email -mobileNumber')
        .lean()
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Notification Controller: findUserListOfUnseenNotification', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (check.isEmpty(result)) {
            logger.info('No User Found', 'Notification Controller: findUserListOfUnseenNotification')
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('User found and userIds listed.')

            // console.log(result)

            resolve(result)
          }
        })
    })
  } // end of the findUserInfo function.

  // making promise call.
  validateParams()
    .then(findDistinctSender)
    .then(findUserInfo)
    .then((result) => {
      let apiResponse = response.generate(false, 'user found and listed.', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the findUserListOfUnseenNotification function.

/**
 * exporting functions.
 */
module.exports = {
  getUsersNotification: getUsersNotification,
  getGroupNotification: getGroupNotification,
  markNotificationAsSeen: markNotificationAsSeen,
  countUnSeenNotification: countUnSeenNotification,
  findUnSeenNotification: findUnSeenNotification,
  findUserListOfUnseenNotification: findUserListOfUnseenNotification
}
