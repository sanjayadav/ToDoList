const dashboardController = require("./../../app/controllers/dashboardController");
const appConfig = require("./../../config/appConfig");
const auth = require('./../middlewares/auth');


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/dashboard`;
  
    app.get(`${baseUrl}/`,dashboardController.getAllTasks);
    app.post(`${baseUrl}/create`,auth.isAuthorized,dashboardController.createTask);
    app.get(`${baseUrl}/view/:taskId`,dashboardController.viewByTaskId);
    app.get(`${baseUrl}/view/by/submitter/:submitter`,dashboardController.viewBySubmitter);
    app.post(`${baseUrl}/:taskId/delete`,auth.isAuthorized,dashboardController.deleteTask);
    app.put(`${baseUrl}/:taskId/edit`,auth.isAuthorized,dashboardController.editTask);
    app.post(`${baseUrl}/:taskId/friends`,auth.isAuthorized,dashboardController.addYourselfAsTaskViewer);
    app.post(`${baseUrl}/:taskId/otherViewers`,auth.isAuthorized,dashboardController.addOthersAsTaskViewer);
}
