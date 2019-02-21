const shortid = require('shortid');
const mongoose = require('mongoose');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
const time = require('./../libs/timeLib');
/* Models */
const TaskModel = require('../models/Task');
const UserModel = require('../models/User');
const SubTaskModel = require('../models/SubTask');
/**
 * function to read all tasks.
 */
let getAllTasks = (req, res) => {
    TaskModel.find()
    .select('-__v -_id')
    .lean()
    .exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'Task Controller: getAllTask', 10)
            let apiResponse = response.generate(true, 'Failed To Find Task Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Task Found', 'Task Controller: getAllTask')
            let apiResponse = response.generate(true, 'No Task Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Task Details Found', 200, result)
            res.send(apiResponse)
        }
    })
}// end get all tasks

/**
 * function to create the task.
 */
let createTask = (req, res) => {
    let findTaskCreator=() =>{
        return new Promise((resolve, reject) => {
            UserModel.findOne({ 'userId': req.user.userId })
            .exec((err,retrievedUserDetails)=>{
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Dashboard Controller: findTaskCreator', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedUserDetails)) {
                    logger.info('User Not Found!', 'Dashboard Controller: findTaskCreator')
                    let apiResponse = response.generate(true, 'User Not Found!', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'User Details Found!', 200, retrievedUserDetails)
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
                }
            })
        })
    }
    let taskCreationFunction = (userDetails) => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.task)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'Required parameters are missing!', 403, null)
                reject(apiResponse)
            } else {
                var today = time.standardFormat()
                let taskId = shortid.generate()
                
                let newTask = new TaskModel({
                    _id: new mongoose.Types.ObjectId(),
                    taskId: taskId,
                    task: req.body.task,
                    status: req.body.status,
                    dueDate:req.body.dueDate,
                    priority: req.body.priority,
                    email:userDetails.email,
                    submitterFirstName: userDetails.firstName,
                    submitterLastName: userDetails.lastName,
                    editorFirstName:null,
                    editorLastName:null,
                    created: today,
                    lastModified: today
                }) // end new task model
             
                newTask.save((err,result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        // console.log("this is subtask title "+JSON.stringify(req.body.subTask[0].newSubTaskTitle))
                        // let newSubTask = new SubTaskModel({
                        //     title:JSON.stringify(req.body.subTask)
                           
                        // })
                       
                        // newSubTask.save((err,result)=> {
                        //     if (err) {
                        //         console.log('Error Occured.')
                        //         logger.error(`Error Occured : ${err}`, 'Database', 10)
                        //         let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        //         reject(apiResponse)
                        //     }else{
                        //         console.log('Success in task creation')
                               
                        //         resolve(result)}       
                        // }) // end new task save
                        resolve(result)
                    }
                
                }) 
                
            }//else end
        })//promise end
    }//taskcreationfunction end

    let subTaskCreationFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.task)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'Required parameters are missing!', 403, null)
                reject(apiResponse)
            } else{
                TaskModel.find({ 'task':req.body.task }).populate('subTask').exec((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(result)) {
                        console.log('Task Not Found.')
                        let apiResponse = response.generate(true, 'Task Not Found.', 404, null)
                        reject(apiResponse)
                    } else {
                        logger.info("SubTask Populated","TaskController:ViewTaskById",5)
                        let apiResponse = response.generate(false, 'SubTask Populated', 200, result)
                        console.log(result)
                        resolve(result)
                    }
                })
            }
        })
    }

    findTaskCreator()
    .then(taskCreationFunction)
    .then(subTaskCreationFunction)
    .then((result) => {
        let apiResponse = response.generate(false, 'Task Created', 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
}// end create task function



/**
 * function to read single task.
 */
let viewByTaskId = (req, res) => {

    if (check.isEmpty(req.params.taskId)) {
        console.log('taskId should be passed')
        let apiResponse = response.generate(true, 'taskId is missing', 403, null)
        res.send(apiResponse)
    } else {
        TaskModel.findOne({ 'taskId': req.params.taskId }).select('-__v -_id') 
        .exec((err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Task Not Found.')
                let apiResponse = response.generate(true, 'Task Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Task found successfully","TaskController:ViewTaskById",5)
                let apiResponse = response.generate(false, 'Task Found Successfully.', 200, result)
                res.send(apiResponse);
            }
        })
    }
}


/**
 * function to read tasks by submitter.
 */
let viewBySubmitter = (req, res) => {
    if (check.isEmpty(req.params.submitter)) {
        console.log('submitter should be passed')
        let apiResponse = response.generate(true, 'Reporter is missing!', 403, null)
        res.send(apiResponse)
    } else {
        TaskModel.find({ 'submitter': req.params.submitter }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Tasks Not Found.')
                let apiResponse = response.generate(true, 'Tasks Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Tasks Found Successfully')
                let apiResponse = response.generate(false, 'Tasks Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to edit task by admin.
 */
let editTask = (req, res) => {
    let findTaskEditor=() =>{
        return new Promise((resolve, reject) => {
            UserModel.findOne({ 'userId': req.user.userId })
            .exec((err,retrievedUserDetails)=>{
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Dashboard Controller: findTaskCreator', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedUserDetails)) {
                    logger.info('User Not Found!', 'Dashboard Controller: findTaskCreator')
                    let apiResponse = response.generate(true, 'User Not Found!', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'User Details Found.', 200, retrievedUserDetails)
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
                }
            })
        })
    }
    let assignTaskEditor=(userDetails) =>{
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.taskId)) {
                console.log('taskId should be passed')
                let apiResponse = response.generate(true, 'taskId is missing', 403, null)
                reject(apiResponse)
            } else {
                    TaskModel.findOne({'taskId': req.params.taskId}).exec((err, result) => { 
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    }
                    else {
                        if(result.viewers.length!=0){
                            let flag = 0;
                            for(let i = 0; i < result.viewers.length; i++){
                                let viewer = result.viewers[i].emailId;
                                if(viewer==userDetails.email){
                                    flag=1;
                                }
                            }
                            if(flag==0){
                                logger.info('Not Authorized to edit tasks.', 'Dashboard Controller: findTaskViewer')
                                let apiResponse = response.generate(true, 'Not Authorized to Edit tasks.', 500, null)
                                reject(apiResponse)
                            }
                            else if(flag==1){
                                logger.info('Authorized to add watchers', 'Dashboard Controller: findTaskViewer')
                                let apiResponse = response.generate(false, 'Authorized to add watchers!', 200,  null)

                                result.set({ editorFirstName: userDetails.firstName,editorLastName:userDetails.lastName,lastModified:time.standardFormat() });
                                result.notification.push({'firstName': userDetails.firstName,'lastName':userDetails.lastName,'emailId':userDetails.email,'notification': 'has edited task "','taskTitle':result.title+'"'});
                                result.save(function (err, updatedResult) {
                                    if (err){
                                        console.log(err)
                                        logger.error(err.message, 'Dashboard Controller: assignTaskEditor', 10)
                                        let apiResponse = response.generate(true, 'Failed To Find Editor Details', 500, null)
                                        reject(apiResponse)
                                    }else{
                                        let apiResponse = response.generate(false, 'Edited Successfully.', 200, updatedResult)
                                        resolve(updatedResult)
                                    }   
                                });
                            }
                        }
                        else{ 
                            logger.info('Add Yourself as a watcher first.', 'Dashboard Controller: findTaskViewer')
                            let apiResponse = response.generate(true, 'Add Yourself as a watcher first.', 500, null)
                            reject(apiResponse)
                        }                     
                    }
                })
            }
        })
    }
    let taskEditFunction=(updatedResult) =>{
        return new Promise((resolve, reject) => {
            if (check.isEmpty(updatedResult.taskId)) {
                console.log('taskId should be passed')
                let apiResponse = response.generate(true, 'taskId is missing', 403, null)
                reject(apiResponse)
            } else {
                let options = req.body;        
                if (options.status == "Backlog") options.color = "#FF3F3F";
                else if(options.status == "In-Progress") options.color = "#FFCE2B";
                else if(options.status == "In-Test") options.color = "#F74E00";
                else if(options.status == "Completed") options.color = "#006400";
                else options.color = "black";
                TaskModel.update({ 'taskId': updatedResult.taskId}, options, { multi: true}).
                exec((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(result)) {
                        console.log('Task Not Found.')
                        let apiResponse = response.generate(true, 'Task Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        console.log('Task Edited Successfully')
                        let apiResponse = response.generate(false, 'Task Edited Successfully!', 200, result)
                        resolve(result)
                    }
                })
            }
        })
    }
    findTaskEditor()
    .then(assignTaskEditor)
    .then(taskEditFunction)
    .then((result) => {
        let apiResponse = response.generate(false, 'Task Edited successfully!', 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
}
/**
 * function to delete the assignment collection.
 */
let deleteTask = (req, res) => {
    let findCurrentUser=() =>{
        return new Promise((resolve, reject) => {
            UserModel.findOne({ 'userId': req.user.userId })
            .exec((err,retrievedUserDetails)=>{
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Dashboard Controller: findTaskCreator', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedUserDetails)) {
                    logger.info('User Not Found!', 'Dashboard Controller: findTaskCreator')
                    let apiResponse = response.generate(true, 'User Not Found!', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'User Details Found', 200, retrievedUserDetails)
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
                }
            })
        })
    }
    let findTask=(userDetails) =>{
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.taskId)) {
                console.log('taskId should be passed')
                let apiResponse = response.generate(true, 'taskId is missing', 403, null)
                reject(apiResponse)
            } 
            else {
                TaskModel.findOne({ 'taskId': req.params.taskId }, (err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } 
                    else if (check.isEmpty(result)) {
                        console.log('Task Not Found.')
                        let apiResponse = response.generate(true, 'Task Not Found!', 404, null)
                        reject(apiResponse)
                    } 
                    else {          
                        console.log('Task Found')
                        let apiResponse = response.generate(false, 'Task Found', 200, result)
                        if(userDetails.email!=result.email){
                            console.log('Not Authorized to delete this Task!')
                            let apiResponse = response.generate(true, 'Not authorized to delete this task!', 500, null)
                            reject(apiResponse)
                        }
                        else if(userDetails.email==result.email){
                            userEmail = result.email
                            console.log('Authorized to delete this task!')
                            let apiResponse = response.generate(true, 'Authorized to delete this task!', 200, userEmail)
                            resolve(userEmail)
                        }
                    }
                });                       
            }
        })
    }
   
    let deleteThisTask=() =>{
        return new Promise((resolve, reject) => {
            TaskModel.remove({'taskId': req.params.taskId }, (err, result) => {
                if (err) {
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    console.log('Task Not Found.')
                    let apiResponse = response.generate(true, 'Task Not Found.', 404, null)
                    reject(apiResponse)
                } else {
                    console.log('Task Deletion Success')
                    let apiResponse = response.generate(false, 'Task Deleted Successfully!', 200, result)
                    resolve(apiResponse)
                }
            })
        })
    }
    findCurrentUser(req,res)
    .then(findTask)
    .then(deleteThisTask)
    .then((result) => {
        let apiResponse = response.generate(false, 'Task Deleted.', 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
}

/**
 * function to add user as a viewer of an task.
 */
let addYourselfAsTaskViewer = (req, res) => {
    
    let findTask=() =>{
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.taskId)) {
                console.log('taskId should be passed')
                let apiResponse = response.generate(true, 'taskId is missing', 403, null)
                reject(apiResponse)
            } 
            else {
                TaskModel.findOne({ 'taskId': req.params.taskId }, (err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } 
                    else if (check.isEmpty(result)) {
                        console.log('Task Not Found.')
                        let apiResponse = response.generate(true, 'Task Not Found', 404, null)
                        reject(apiResponse)
                    } 
                    else {          
                        console.log('Task Found')
                        let apiResponse = response.generate(false, 'Task Found', 200, result)
                        resolve(result)
                    }
                });                       
            }
        })
    }

    let findTaskCreator=(taskDetails) =>{
        return new Promise((resolve, reject) => {
            UserModel.findOne({ 'userId': req.user.userId })
            .exec((err,retrievedUserDetails)=>{
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Dashboard Controller: findTaskCreator', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedUserDetails)) {
                    logger.info('No User Found', 'Dashboard Controller: findTaskCreator')
                    let apiResponse = response.generate(true, 'User Not Found!', 404, null)
                    reject(apiResponse)
                }else {
                    let apiResponse = response.generate(false, 'User Details Found', 200, retrievedUserDetails)
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    if(taskDetails.viewers.length!=0){
                        let flag=0;
                        for(let i = 0; i < taskDetails.viewers.length; i++){
                            let viewer = taskDetails.viewers[i].emailId;                            
                            if(viewer==retrievedUserDetailsObj.email){
                                flag=1;
                            }   
                        }
                        if(flag==1){
                            logger.info('You are already a watcher!', 'Dashboard Controller: findTaskCreator')
                            let apiResponse = response.generate(true, 'You are already a watcher!', 500, null)
                            reject(apiResponse)
                        }
                        else if(flag==0){
                            let newViewer = {'firstName':retrievedUserDetailsObj.firstName,'lastName':retrievedUserDetailsObj.lastName,'emailId':retrievedUserDetailsObj.email};
                            logger.info('New Viewer Found', 'Dashboard Controller: findTaskCreator')
                            let apiResponse = response.generate(true, 'New Viewer Found!', 200,  newViewer)
                            resolve(newViewer)
                        }
                    
                    }else{ 
                        let newViewer = {'firstName':retrievedUserDetailsObj.firstName,'lastName':retrievedUserDetailsObj.lastName,'emailId':retrievedUserDetailsObj.email};                       
                        logger.info('New Viewer Found', 'Dashboard Controller: findTaskCreator')
                        let apiResponse = response.generate(true, 'New Viewer Found', 200, newViewer)
                        resolve(newViewer)
                    }
                }
            })
        })
    }
    let addNewViewer=(viewerID) =>{
        return new Promise((resolve, reject) => {      
            TaskModel.findOne({'taskId': req.params.taskId}).exec((err, result) => {        
                if (err) {
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    reject(apiResponse)
                }
                else {
                    result.viewers.push({'firstName': viewerID.firstName,'lastName':viewerID.lastName, 'emailId':viewerID.emailId});
                    result.notification.push({'firstName': viewerID.firstName,'lastName':viewerID.lastName, 'emailId':viewerID.emailId,'notification':" is added as a watcher."});
                    result.save(function (err, updatedViewers) {
                        if (err){
                            console.log(err)
                            logger.error(err.message, 'Dashboard Controller: addNewViewer', 10)
                            let apiResponse = response.generate(true, 'Failed To Find Viewer Details!', 500, null)
                            reject(apiResponse)
                        }else{
                            let apiResponse = response.generate(false, 'Viewer Added Successfully.', 200, updatedViewers)
                            resolve(updatedViewers)
                        }                      
                    });
                }
            })      
        })
    }

    findTask(req,res)
    .then(findTaskCreator)
    .then(addNewViewer)
    .then((result) => {
        let apiResponse = response.generate(false, 'Viewer Added Successfully.', 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
}
/**
 * function to add other users as a viewer of an task.
 */
let addOthersAsTaskViewer = (req, res) => {
    
    let findTask=() =>{
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.taskId)) {
                console.log('taskId should be passed')
                let apiResponse = response.generate(true, 'taskId is missing', 403, null)
                reject(apiResponse)
            } 
            else {
                TaskModel.findOne({ 'taskId': req.params.taskId }, (err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } 
                    else if (check.isEmpty(result)) {
                        console.log('Task Not Found.')
                        let apiResponse = response.generate(true, 'Task Not Found', 404, null)
                        reject(apiResponse)
                    } 
                    else {          
                        console.log('Task Found')
                        let apiResponse = response.generate(false, 'Task Found', 200, result)
                        resolve(result)
                    }
                });                       
            }
        })
    }

    let findTaskViewers=(taskDetails) =>{
        return new Promise((resolve, reject) => {
            UserModel.findOne({ 'userId': req.user.userId })
            .exec((err,retrievedUserDetails)=>{
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Dashboard Controller: findTaskCreator', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    reject(apiResponse)
                } else if(check.isEmpty(retrievedUserDetails)) {
                    logger.info('No User Found', 'Dashboard Controller: findTaskCreator')
                    let apiResponse = response.generate(true, 'User Not Found!', 404, null)
                    reject(apiResponse)
                }else {
                    let apiResponse = response.generate(false, 'User Details Found', 200, retrievedUserDetails)
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    if(taskDetails.viewers.length!=0){
                        let flag =0;
                        for(let i = 0; i < taskDetails.viewers.length; i++){
                            let viewer = taskDetails.viewers[i].emailId;   
                            if(viewer==retrievedUserDetailsObj.email) {
                                flag=1;
                            }   
                        }
                        if(flag==0){
                            logger.info('Not Authorized to add watchers', 'Dashboard Controller: findTaskViewer')
                            let apiResponse = response.generate(true, 'Not authorized to add watchers', 500, null)
                            reject(apiResponse)
                        }
                        else if(flag==1){
                            let viewerID = {'firstName':retrievedUserDetailsObj.firstName,'lastName':retrievedUserDetailsObj.lastName,'emailId':retrievedUserDetailsObj.email};
                            logger.info('Authorized to add watchers', 'Dashboard Controller: findTaskViewer')
                            let apiResponse = response.generate(false, 'Authorized to add watchers', 200,  viewerID)
                            resolve(viewerID)
                        }                
                    }else{ 
                        logger.info('Add Yourself as a watcher first.', 'Dashboard Controller: findTaskViewer')
                            let apiResponse = response.generate(true, 'Please add yourself as a watcher first.', 500, null)
                            reject(apiResponse)
                    }
                }
            })
        })
    }
    let addNewViewer=(viewerID) =>{
        return new Promise((resolve, reject) => {      
            TaskModel.findOne({'taskId': req.params.taskId}).exec((err, result) => {        
                if (err) {
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    reject(apiResponse)
                }
                else {
                    UserModel.findOne({ 'email': req.body.addOtherViewer})
                    .exec((err,retrievedUserDetails)=>{
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'Dashboard Controller: addNewViewer', 10)
                            let apiResponse = response.generate(true, 'No User Found by that Email ID.', 500, null)
                            reject(apiResponse)
                        } else if(check.isEmpty(retrievedUserDetails)) {
                            logger.info('No User Found by that Email ID.', 'Dashboard Controller: addNewViewer')
                            let apiResponse = response.generate(true, 'No User Found by that Email ID', 404, null)
                            reject(apiResponse)
                        }else {
                            let retrievedUserDetailsObj=retrievedUserDetails.toObject();
                            let newOtherViewer = {'firstName': retrievedUserDetailsObj.firstName,'lastName':retrievedUserDetailsObj.lastName,'emailId': retrievedUserDetailsObj.email};
                            let flagx=0;
                            for(let i = 0; i < result.viewers.length; i++){
                                let viewer = result.viewers[i].newOtherWatcherEmailId;
                                if(viewer==newOtherViewer.emailId){      
                                    flagx=1;
                                }                     
                            }
                            if(flagx==1){
                                logger.info('Already a Viewer', 'Dashboard Controller: findTaskCreator')
                                let apiResponse = response.generate(true, 'Already a Viewer', 500, null)
                                reject(apiResponse)
                            }
                            else if(flagx==0){
                                result.viewers.push({'firstName':viewerID.firstName,'lastName':viewerID.lastName,'emailId':viewerID.emailId,'newOtherWatcherFirstName': newOtherViewer.firstName,'newOtherWatcherLastName':newOtherViewer.lastName, 'newOtherWatcherEmailId':newOtherViewer.emailId});
                                result.notification.push({'firstName':  viewerID.firstName,'lastName': viewerID.lastName,'emailId':viewerID.emailId ,'notification':" added as a watcher by ", 'newOtherWatcherFirstName': newOtherViewer.firstName,'newOtherWatcherLastName':newOtherViewer.lastName, 'newOtherWatcherEmailId':newOtherViewer.emailId });
                                result.save(function (err, updatedViewers) {
                                    if (err){
                                        console.log(err)
                                        logger.error(err.message, 'Dashboard Controller: addNewViewer', 10)
                                        let apiResponse = response.generate(true, 'Failed To Find Viewer Details', 500, null)
                                        reject(apiResponse)
                                    }else{
                                        let apiResponse = response.generate(false, 'Viewer Added Successfully.', 200, updatedViewers)
                                        resolve(updatedViewers)
                                    }                      
                                }); 
                            }                                                     
                        }
                    })
                }
            })      
        })
    }

    findTask(req,res)
    .then(findTaskViewers)
    .then(addNewViewer)
    .then((result) => {
        let apiResponse = response.generate(false, 'Viewer Added Successfully', 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
}

/**
 * function to post comments on an task.
 */
let postComment = (req, res) => {
    let findUser=() =>{
        return new Promise((resolve, reject) => {
            UserModel.findOne({ 'userId': req.user.userId })
            .exec((err,retrievedUserDetails)=>{
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Dashboard Controller: findTaskCreator', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    reject(apiResponse)
                } else if(check.isEmpty(retrievedUserDetails)) {
                    logger.info('No User Found', 'Dashboard Controller: findTaskCreator')
                    let apiResponse = response.generate(true, 'User Not Found!', 404, null)
                    reject(apiResponse)
                }else {
                    let apiResponse = response.generate(false, 'User Details Found', 200, retrievedUserDetails)
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
                }
            })
        })
    }
    let findTask=(userDetails) =>{
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.taskId)) {
                console.log('taskId should be passed')
                let apiResponse = response.generate(true, 'taskId is missing', 403, null)
                reject(apiResponse)
            } 
            else {
                TaskModel.findOne({ 'taskId': req.params.taskId }, (err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } 
                    else if (check.isEmpty(result)) {
                        console.log('Task Not Found.')
                        let apiResponse = response.generate(true, 'Task Not Found', 404, null)
                        reject(apiResponse)
                    } 
                    else {          
                        console.log('Task Found')
                        let apiResponse = response.generate(false, 'Task Found', 200, result)
                        result.userComment.push({'comment': req.body.userComment,'commenterFirstName': userDetails.firstName,'commenterLastName':userDetails.lastName});
                        result.notification.push({'firstName': userDetails.firstName,'lastName':userDetails.lastName,'emailId':userDetails.email,'notification': 'has posted a comment on "', 'taskTitle':result.title+'".'});
                        result.save(function (err, updatedComments) {
                            if (err){
                                console.log(err)
                                logger.error(err.message, 'Dashboard Controller: postComment', 10)
                                let apiResponse = response.generate(true, 'Failed to post comment.', 500, null)
                                reject(apiResponse)
                            }else{
                                let apiResponse = response.generate(false, 'Comment Posted Successfully.', 200, updatedComments)
                                resolve(updatedComments)
                            }                      
                        });
                    }
                });                       
            }
        })
    }
    findUser(req,res)
    .then(findTask)
    .then((result) => {
        let apiResponse = response.generate(false, 'Comment Posted Successfully!', 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
}

//function to see comments of an task without reloading the page
let viewComments = (req, res) => {

    if (check.isEmpty(req.params.taskId)) {
        console.log('taskId should be passed')
        let apiResponse = response.generate(true, 'taskId is missing', 403, null)
        res.send(apiResponse)
    } else {
        TaskModel.findOne({ 'taskId': req.params.taskId }).select('-__v -_id') 
        .exec((err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Task Not Found.')
                let apiResponse = response.generate(true, 'Task Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Task found successfully","TaskController:ViewTaskById",5)
                let apiResponse = response.generate(false, 'Task Found Successfully.', 200, result)
                res.send(result.userComment);
            }
        })
    }
}


module.exports = {
    getAllTasks: getAllTasks,
    createTask: createTask,
    viewByTaskId : viewByTaskId, 
    viewBySubmitter: viewBySubmitter,
    editTask: editTask,
    deleteTask: deleteTask,
    addYourselfAsTaskViewer : addYourselfAsTaskViewer,
    addOthersAsTaskViewer : addOthersAsTaskViewer,
    postComment : postComment,
    viewComments : viewComments
}// end exports