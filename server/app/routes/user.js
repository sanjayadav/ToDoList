const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig");
const auth = require('./../middlewares/auth');

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;
  
    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);

    app.get(`${baseUrl}/details/:userId`, auth.isAuthorized, userController.getSingleUser);
    
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    app.post(`${baseUrl}/login`, userController.loginFunction);

    app.post(`${baseUrl}/forgot_password`, userController.forgotPasswordFunction);

    app.put(`${baseUrl}/reset_password`,auth.isAuthorized,userController.resetPassword);

    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);

    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);

    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);

    app.post(`${baseUrl}/search_people`,auth.isAuthorized,userController.searchPeople);

}
