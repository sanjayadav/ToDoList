const shortid = require('shortid');
const mongoose = require('mongoose');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
const time = require('./../libs/timeLib');
/* Models */
const TaskModel = require('../models/Task');
const UserModel = require('../models/User');

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
 * function to read tasks by submitter.
 */
let userTasks = (req, res) => {
    let findUser=() =>{
        return new Promise((resolve, reject) => {
            UserModel.findOne({ 'userId': req.user.userId })
            .exec((err,retrievedUserDetails)=>{
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Dashboard Controller: findUser', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedUserDetails)) {
                    logger.info('User Not Found!', 'Dashboard Controller: findUser')
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

    let getAllTasks=(userDetails) =>{
        return new Promise((resolve, reject) => {
            TaskModel.find({ 'email': userDetails.email }, (err, result) => {
                if (err) {
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    console.log('Tasks Not Found.')
                    let apiResponse = response.generate(true, 'Tasks Not Found', 404, null)
                    reject(apiResponse)
                } else {
                    console.log('Tasks Found Successfully')
                    let apiResponse = response.generate(false, 'Tasks Found Successfully.', 200, result)
                    resolve(result)
                }
            })
        })
    }

    findUser()
    .then(getAllTasks)
    .then((result) => {
        let apiResponse = response.generate(false, 'All Tasks Found.', 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
}


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
            console.log("this is tasktitle "+req.body.task)
            if (check.isEmpty(req.body.task)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'Required parameters are missing!', 403, null)
                reject(apiResponse)
            } else {
                var today = time.standardFormat()
                let taskId = shortid.generate()
                
                let newTask = new TaskModel({
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
                        resolve(result)
                    }
                })     
            }//else end
        })//promise end
    }//taskcreationfunction end

    let addSubTasks=(taskDetails) =>{
        return new Promise((resolve, reject) => {
            let bodySubTask = JSON.parse(req.body.subTask)
            TaskModel.findOne({ 'taskId': taskDetails.taskId }, (err, result) => {
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
                    for(let subtasks in bodySubTask){
                        console.log(bodySubTask[subtasks].newSubTaskTitle);
                        result.subTask.push({'title': bodySubTask[subtasks].newSubTaskTitle});
                        for(let subsubtasks in bodySubTask[subtasks].subSubTaskTitle){
                            console.log(bodySubTask[subtasks].subSubTaskTitle[subsubtasks].newSubSubTaskTitle);
                            result.subTask[subtasks].subSubTask.push({'title':bodySubTask[subtasks].subSubTaskTitle[subsubtasks].newSubSubTaskTitle})
                        }
                    }
                    result.save(function (err, updatedResult) {
                        if (err){
                            console.log(err)
                            logger.error(err.message, 'Dashboard Controller: assignTaskEditor', 10)
                            let apiResponse = response.generate(true, 'Failed To Add Sub-tasks', 500, null)
                            reject(apiResponse)
                        }else{
                            let apiResponse = response.generate(false, 'Sub-tasks Added', 200, updatedResult)
                            resolve(updatedResult)
                        }   
                    });
                }
            });                       
            
        })
    }

    findTaskCreator()
    .then(taskCreationFunction)
    .then(addSubTasks)
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
    let findUser=() =>{
        return new Promise((resolve, reject) => {
            UserModel.findOne({ 'userId': req.user.userId })
            .exec((err,retrievedUserDetails)=>{
                if (err) {
                    console.log(err)
                    logger.error(err.message, ' viewByTaskId Controller: findUser', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedUserDetails)) {
                    logger.info('User Not Found!', ' viewByTaskId Controller: findUser')
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
    let findTask=() =>{
        return new Promise((resolve, reject) => {
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
        })
    }
    findUser()
    .then(findTask)
    .then((result) => {
        let apiResponse = response.generate(false, 'Task Created', 200, result)
        res.send(apiResponse)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })    
}

/**
 * function to edit task by admin.
 */
let editTask = (req, res) => {
   let findTask=()=>{
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
                    else{
                        console.log('Task Found')
                        let apiResponse = response.generate(false, 'Task Found', 200, result)
                        resolve(result)
                    }
                })
            }
        })
   }
   let findTaskCreator=(taskDetails)=>{
    return new Promise((resolve, reject) => {
        UserModel.findOne({ 'email': taskDetails.email})
        .exec((err,retrievedUserDetails)=>{
            if (err) {
                console.log(err)
                logger.error(err.message, ' findTaskCreator Controller: findUser', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                reject(apiResponse)
            } else if (check.isEmpty(retrievedUserDetails)) {
                logger.info('User Not Found!', ' findTaskCreator Controller: findUser')
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
    let findCreatorFriends=(creatorDetails)=>{
        return new Promise((resolve, reject) => {
            UserModel.findOne({'userId': creatorDetails.userId}).exec((err, result) => { 
                if (err) {
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    reject(apiResponse)
                }
                else {
                    let currentUser=req.user;
                    let flag = 0;
                    for(let i = 0; i < result.friends.length; i++){
                        let friend = result.friends[i].emailId;
                        if(friend==currentUser.email){
                            flag=1;
                        }
                    }
                    if(result.email==creatorDetails.email){
                        flag=1;
                    }
                    if(flag==0){
                        logger.info('Not Authorized to edit tasks.', 'Dashboard Controller: findTaskViewer')
                        let apiResponse = response.generate(true, 'Not Authorized to Edit tasks.', 500, null)
                        reject(apiResponse)
                    }
                    else if(flag==1){
                        logger.info('Authorized to edit tasks', 'Dashboard Controller: findTaskViewer')
                        let apiResponse = response.generate(false, 'Authorized to edit tasks!', 200,  null)
                        resolve(currentUser)
                    }                   
                }
            })
            
        })     
    }
    let taskEditFunction = (currentUser) =>{

        return new Promise((resolve, reject) => {
          
            TaskModel.findOne({ 'taskId': req.params.taskId }, (err, result) => {
                if (err) {
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    reject(apiResponse)
                } 
                else {          
                    result.set({ editorFirstName: currentUser.firstName,editorLastName:currentUser.lastName,lastModified:time.standardFormat() });
                    result.notification.push({'firstName': currentUser.firstName,'lastName':currentUser.lastName,'emailId':currentUser.email,'notification': 'has edited issue "','issueTitle':result.title+'"'});
                    result.save(function (err, updatedResult) {
                        if (err){
                            console.log(err)
                            logger.error(err.message, 'Dashboard Controller: assignIssueEditor', 10)
                            let apiResponse = response.generate(true, 'Failed To Find Editor Details', 500, null)
                            reject(apiResponse)
                        }else{
                            let apiResponse = response.generate(false, 'Edited Successfully.', 200, updatedResult)
                            resolve(updatedResult)
                        }   
                    });
                }
            });                       
            
        })
    }
    let taskUpdateFunction=(updatedResult) =>{
        return new Promise((resolve, reject) => {    
            let options = req.body;        
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
            
        })
    }
    findTask()
    .then(findTaskCreator)
    .then(findCreatorFriends)
    .then(taskEditFunction)
    .then(taskUpdateFunction)
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


module.exports = {
    getAllTasks: getAllTasks,
    createTask: createTask,
    viewByTaskId : viewByTaskId, 
    userTasks: userTasks,
    editTask: editTask,
    deleteTask: deleteTask
}// end exports