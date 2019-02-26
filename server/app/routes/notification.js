const express = require('express');
const notificationController = require("./../controllers/notificationController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

  let baseUrl = `${appConfig.apiVersion}/notifications`;

  app.get(`${baseUrl}/get/for/user`, auth.isAuthorized, notificationController.getUsersNotification);
  
  app.post(`${baseUrl}/mark/as/seen`, auth.isAuthorized, notificationController.markNotificationAsSeen);

  app.get(`${baseUrl}/count/unseen`, auth.isAuthorized, notificationController.countUnSeenNotification);

  app.get(`${baseUrl}/find/unseen`, auth.isAuthorized, notificationController.findUnSeenNotification);

  app.get(`${baseUrl}/unseen/user/list`, auth.isAuthorized, notificationController.findUserListOfUnseenNotification);

}
