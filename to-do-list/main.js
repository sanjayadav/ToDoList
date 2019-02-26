(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'to-do-list';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '*', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


//import observable related code


//importing http client to make the request


var AppService = /** @class */ (function () {
    function AppService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.url = 'http://localhost:3000/api/v1';
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        };
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobile', data.mobile)
            .set('email', data.email)
            .set('password', data.password)
            .set('apiKey', data.apiKey);
        return this.http.post(this.url + "/users/signup", params);
    }; //end of signupFunction
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/users/login", params);
    };
    AppService.prototype.forgotPasswordFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('email', data.email);
        return this.http.post(this.url + "/users/forgot_password", params);
    };
    AppService.prototype.resetPasswordFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('password', data.password);
        return this.http.put(this.url + "/users/reset_password", params);
    };
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'));
        return this.http.post(this.url + "/users/logout", params);
    }; // end logout function
    //function to search for a user
    AppService.prototype.searchUser = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('email', data.email);
        return this.http.post(this.url + "/users/search_people", params);
    };
    AppService.prototype.getSingleUserData = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'));
        return this.http.get(this.url + "/users/details/" + userId, { params: params });
    };
    //******************************Dashboard Routes***************************/
    AppService.prototype.allTasksFunction = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'));
        return this.http.get(this.url + "/dashboard", { params: params });
    };
    //function to create task
    AppService.prototype.createTask = function (title, subTask, status, dueDate, priority) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('task', title)
            .set('subTask', subTask)
            .set('status', status)
            .set('dueDate', dueDate)
            .set('priority', priority);
        return this.http.post(this.url + "/dashboard/create", params);
    };
    //function to display single task
    AppService.prototype.getSingleTaskInformation = function (currentTaskId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'));
        return this.http.get(this.url + "/dashboard/view/" + currentTaskId, { params: params });
    };
    //function to delete task
    AppService.prototype.deleteTask = function (taskId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('taskId', taskId)
            .set('data', null);
        return this.http.post(this.url + "/dashboard/" + taskId + '/delete', params);
    };
    //function to edit task
    AppService.prototype.editTask = function (title, subTask, status, dueDate, priority, taskId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('task', title)
            .set('subTask', subTask)
            .set('status', status)
            .set('dueDate', dueDate)
            .set('priority', priority);
        return this.http.put(this.url + "/dashboard/" + taskId + '/edit', params);
    };
    //function to add yourself as watcher
    AppService.prototype.addYourselfFunction = function (taskId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'));
        return this.http.post(this.url + "/dashboard/" + taskId + '/viewers', params);
    };
    //function to add others as watcher
    AppService.prototype.taskWatchersFunction = function (taskId, watcherEmail) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', this.cookieService.get('authtoken'))
            .set('addOtherViewer', watcherEmail);
        return this.http.post(this.url + "/dashboard/" + taskId + '/otherViewers', params);
    };
    //exception handler
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-page/dashboard-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-page/dashboard-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-grey{\r\n  background:#F2F3F9;\r\n}\r\nh4{\r\n    font-size: 25px;\r\n    font-weight: 400;\r\n    padding: 45px 0 7px 0;\r\n  }\r\n.btn{\r\n    border-radius:50px;\r\n  }\r\na:not([href]):not([tabindex]) {\r\n    color:white;\r\n  }\r\n.table-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n.table-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 600px;\r\n  }\r\n.mat-row:hover:hover {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n  }\r\n.mat-row:nth-of-type(odd) {\r\n      background-color: rgba(180, 176, 176, 0.075);\r\n  }\r\n.title-cell{\r\n    padding-left:10px;\r\n    margin-right:10px;\r\n  }\r\n.description-cell{\r\n    padding-right:20px;\r\n    margin-right:10px;\r\n  }\r\n.status-cell{\r\n    padding-right:25px;\r\n    margin-right:15px;\r\n  }\r\n.reporter-cell{\r\n    padding-right:10px;\r\n    margin-right:5px;\r\n  }\r\n.date-cell{\r\n    padding-right:5px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLG9DQUFvQztFQUN0QztBQUNBO01BQ0ksNENBQTRDO0VBQ2hEO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLXBhZ2UvZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1ncmV5e1xyXG4gIGJhY2tncm91bmQ6I0YyRjNGOTtcclxufVxyXG5oNHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDAgN3B4IDA7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgfVxyXG4gIGE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pIHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuICAudGFibGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgfVxyXG4gIC5tYXQtcm93OmhvdmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgLm1hdC1yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxNzYsIDE3NiwgMC4wNzUpO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtY2VsbHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgfVxyXG4gIC5kZXNjcmlwdGlvbi1jZWxse1xyXG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgfVxyXG4gIC5zdGF0dXMtY2VsbHtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjVweDtcclxuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xyXG4gIH1cclxuICAucmVwb3J0ZXItY2VsbHtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgfVxyXG4gIC5kYXRlLWNlbGx7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard-page/dashboard-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-page/dashboard-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand pointer\" [routerLink]=\"['/dashboard']\"><img src=\"assets/img/logo.png\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link pointer\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</section>\n<!-- Table Section -->\n\n<div class=\"container-fluid bg-grey\" style=\"padding-bottom:60px;\">\n  <div class=\"col-sm-12\">\n      <h4>All Tasks</h4>\n  </div>\n  <div class=\"row\" >\n      <div class=\"col-sm-6\" style=\"padding-left: 30px;\">\n              <i class=\"icon-search\"></i> Search \n              <mat-form-field>\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type here to search...\">\n              </mat-form-field>\n      </div>\n      <div class=\"col-sm-6 text-center\" style=\"margin-bottom:15px;\">\n          <a class=\"btn btn-primary\" [routerLink]=\"['/create']\"> Create new task <i class=\"fa fa-plus\"></i></a> \n      </div>\n  </div>\n\n<div class=\"col\">   \n  <div class=\"table-container table-responsive mat-elevation-z8\">    \n    <mat-table [dataSource]=\"dataSource\" matSort >\n        <!-- Title Column -->\n        <ng-container matColumnDef=\"task\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"task-cell\"> Task </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" class=\"task-cell\"> {{ (row.task.length>20)? (row.task | slice:0:20)+'..':(row.task) }} </mat-cell>\n        </ng-container>\n    \n        <!-- Status Column -->\n        <ng-container matColumnDef=\"status\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"status-cell\"> Status </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" style=\"font-weight:500;\" class=\"status-cell\"> {{row.status}} </mat-cell>\n        </ng-container>\n        \n        <!-- Due By Column -->\n        <ng-container matColumnDef=\"duedate\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"duedate-cell\"> Due By </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" class=\"duedate-cell\" ><small class=\"text-muted\">{{row.dueDate | slice:8:10}} {{row.dueDate | slice:4:7}} {{row.dueDate | slice:11:15}}</small></mat-cell>\n        </ng-container> \n        \n        <!-- Status Column -->\n        <ng-container matColumnDef=\"priority\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"priority-cell\"> Priority </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" style=\"font-weight:500;\" class=\"priority-cell\"> {{row.priority}} </mat-cell>\n        </ng-container>\n          \n                \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/task',row.taskId]\">\n          </mat-row>\n      </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</div>\n</div>\n\n<section id=\"footer\" >\n  <img src=\"assets/img/wave2.png\" class=\"footer-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 footer-box\">\n        <img src=\"assets/img/logo.png\">\n      </div>\n    </div>\n    <p class=\"copyright\">To Do List Management System | 2019</p>\n  </div>\n</section>\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-page/dashboard-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-page/dashboard-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");







var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent(AppService, router, toastr, cookieService) {
        var _this = this;
        this.AppService = AppService;
        this.router = router;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.tasks = [];
        this.displayedColumns = ['task', 'status', 'duedate', 'priority'];
        this.logout = function () {
            _this.AppService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    _this.cookieService.delete('authtoken');
                    _this.cookieService.delete('receiverId');
                    _this.cookieService.delete('receiverName');
                    _this.cookieService.delete('session');
                    _this.cookieService.delete('session.sig');
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end logout
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Authenticate User
        this.authToken = this.cookieService.get('authtoken');
        this.userInfo = this.AppService.getUserInfoFromLocalstorage();
        //Dashboard Table
        // Assign the data to the data source for the table to render
        this.AppService.allTasksFunction().subscribe(function (data) {
            console.log(data);
            _this.tasks = data["data"];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.tasks);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log("some error occured");
            console.log(error);
        });
    };
    DashboardPageComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DashboardPageComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DashboardPageComponent.prototype, "sort", void 0);
    DashboardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-page',
            template: __webpack_require__(/*! ./dashboard-page.component.html */ "./src/app/dashboard/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-page.component.css */ "./src/app/dashboard/dashboard-page/dashboard-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-route-guard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard-route-guard.service.ts ***!
  \************************************************************/
/*! exports provided: DashboardRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRouteGuardService", function() { return DashboardRouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




var DashboardRouteGuardService = /** @class */ (function () {
    function DashboardRouteGuardService(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    DashboardRouteGuardService.prototype.canActivate = function (route) {
        if (this.cookieService.get('authtoken') === undefined || this.cookieService.get('authtoken') === '' || this.cookieService.get('authtoken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    DashboardRouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], DashboardRouteGuardService);
    return DashboardRouteGuardService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./src/app/dashboard/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-create/task-create.component */ "./src/app/dashboard/task-create/task-create.component.ts");
/* harmony import */ var _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-view/task-view.component */ "./src/app/dashboard/task-view/task-view.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/dashboard/notifications/notifications.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_pipe_remove_special_char_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../shared/pipe/remove-special-char.pipe */ "./src/app/shared/pipe/remove-special-char.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _dashboard_route_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-route-guard.service */ "./src/app/dashboard/dashboard-route-guard.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material-module */ "./src/app/dashboard/material-module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _search_people_search_people_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search-people/search-people.component */ "./src/app/dashboard/search-people/search-people.component.ts");





















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_17__["DemoMaterialModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild([
                    { path: 'dashboard', component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__["DashboardPageComponent"] },
                    { path: 'task/:taskId', component: _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__["TaskViewComponent"] },
                    { path: 'create', component: _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_4__["TaskCreateComponent"] },
                    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"] },
                    { path: 'search_people', component: _search_people_search_people_component__WEBPACK_IMPORTED_MODULE_20__["SearchPeopleComponent"] }
                ])
            ],
            declarations: [
                _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__["DashboardPageComponent"],
                _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_4__["TaskCreateComponent"],
                _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__["TaskViewComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"],
                _shared_pipe_remove_special_char_pipe__WEBPACK_IMPORTED_MODULE_8__["RemoveSpecialCharPipe"],
                _search_people_search_people_component__WEBPACK_IMPORTED_MODULE_20__["SearchPeopleComponent"]
            ],
            providers: [_dashboard_route_guard_service__WEBPACK_IMPORTED_MODULE_13__["DashboardRouteGuardService"], { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_DATE_LOCALE"], useValue: 'en-GB' }]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/material-module.ts":
/*!**********************************************!*\
  !*** ./src/app/dashboard/material-module.ts ***!
  \**********************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/dashboard/notifications/notifications.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/notifications/notifications.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".online{\r\n\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:green;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .offline{\r\n  \r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:red;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .rightSideClass {\r\n      float: right;\r\n      background: #ddd;\r\n      border-radius: 0.5em;\r\n    }\r\n  \r\n  .leftSideClass {\r\n      float: left;\r\n      background: #55C1E7;\r\n      border-radius: 0.5em;\r\n    }\r\n  \r\n  .circle-green:before {\r\n      content: ' \\25CF';\r\n      font-size: 1em;\r\n      color: green;\r\n    }\r\n  \r\n  .circle-red:before {\r\n      content: ' \\25CF';\r\n      font-size: 1em;\r\n      color: red;\r\n    }\r\n  \r\n  .cursorPointer {\r\n      cursor: pointer;\r\n    }\r\n  \r\n  .textCenter {\r\n      text-align: center;\r\n    }\r\n  \r\n  .floatLeft {\r\n      float: left;\r\n    }\r\n  \r\n  *,\r\n    *:before,\r\n    *:after {\r\n      box-sizing: border-box;\r\n    }\r\n  \r\n  body {\r\n      padding: 2.5em 0;\r\n      color: white;\r\n    }\r\n  \r\n  .container {\r\n      margin: 0 auto;\r\n      background: #444753;\r\n      border-radius: 0.3em;\r\n    }\r\n  \r\n  .people-list {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list input {\r\n      border-radius: 0.2em;\r\n      border: none;\r\n      padding: 1em;\r\n      color: white;\r\n      background: #6A6C75;\r\n      width: 90%;\r\n      font-size: 1em;\r\n    }\r\n  \r\n  .people-list .fa-search {\r\n      position: relative;\r\n      left: -1.8em;\r\n    }\r\n  \r\n  .people-list ul {\r\n      padding: 0;\r\n    }\r\n  \r\n  .people-list ul li .userPresence {\r\n      float: left;\r\n      padding: 0.7em 0.2em;\r\n      color: white;\r\n      text-transform: capitalize;\r\n    }\r\n  \r\n  .textCapitalize {\r\n      text-transform: capitalize;\r\n      font-size: 1.2em;\r\n    }\r\n  \r\n  .people-list img {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list .about {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list .about {\r\n      padding-left: 0.4em;\r\n    }\r\n  \r\n  .people-list .status {\r\n      color: #92959E;\r\n    }\r\n  \r\n  .notification {\r\n      height: 100vh;\r\n      float: left;\r\n      background: #F2F5F8;\r\n      border-top-right-radius: 0.3em;\r\n      border-bottom-right-radius: 0.3em;\r\n      color: #434651;\r\n    }\r\n  \r\n  .notification .notification-header {\r\n      padding: 0.2em;\r\n      border-bottom: 0.15em solid white;\r\n    }\r\n  \r\n  .notification .notification-header img {\r\n      float: left;\r\n    }\r\n  \r\n  .notification .notification-header .notification-about {\r\n      float: left;\r\n      padding-left: 0.8em;\r\n      margin-top: 0.4em;\r\n    }\r\n  \r\n  .notification .notification-header .notification-with {\r\n      font-weight: bold;\r\n      font-size: 1.1em;\r\n    }\r\n  \r\n  .notification .notification-header .notification-num-messages {\r\n      color: #92959E;\r\n    }\r\n  \r\n  .notification .notification-header .fa-star {\r\n      float: right;\r\n      color: #D8DADF;\r\n      font-size: 1.42em;\r\n      margin-top: 0.85em;\r\n    }\r\n  \r\n  .notification .notification-history {\r\n      padding: 2em 2em 1.42em;\r\n      border-bottom: 0.15em solid white;\r\n      overflow-y: scroll;\r\n      height: 80vh;\r\n    }\r\n  \r\n  .notification .notification-history .message-data {\r\n      margin-bottom: 1em;\r\n    }\r\n  \r\n  .notification .notification-history .message-data-time {\r\n      color: #a8aab1;\r\n      padding-left: 0.4em;\r\n    }\r\n  \r\n  .notification .notification-history .message {\r\n      color: white;\r\n      padding: 0.5em 1.42em;\r\n      line-height: 1.9em;\r\n      font-size: 1.1em;\r\n      border-radius: 7px;\r\n      margin-bottom: 2em;\r\n      width: 90%;\r\n      position: relative;\r\n    }\r\n  \r\n  .notification .notification-history .message:after {\r\n      bottom: 100%;\r\n      left: 7%;\r\n      border: solid transparent;\r\n      content: \" \";\r\n      height: 0;\r\n      width: 0;\r\n      position: absolute;\r\n      pointer-events: none;\r\n      border-bottom-color: #86BB71;\r\n      border-width: 0.8em;\r\n      margin-left: -0.8em;\r\n    }\r\n  \r\n  .notification .notification-history .my-message {\r\n      background: #86BB71;\r\n    }\r\n  \r\n  .notification .notification-history .other-message {\r\n      background: #94C2ED;\r\n    }\r\n  \r\n  .notification .notification-history .other-message:after {\r\n      border-bottom-color: #94C2ED;\r\n      left: 90%;\r\n    }\r\n  \r\n  .notification .notification-message textarea {\r\n      width: 100%;\r\n      border: none;\r\n      padding: 0.8em 1.42em;\r\n      margin-bottom: 0.8em;\r\n      border-radius: 5px;\r\n      resize: none;\r\n    }\r\n  \r\n  .notification .notification-message .fa-file-o,\r\n    .notification .notification-message .fa-file-image-o {\r\n      font-size: 1.1em;\r\n      color: gray;\r\n      cursor: pointer;\r\n    }\r\n  \r\n  .notification .notification-message button {\r\n      float: right;\r\n      color: #94C2ED;\r\n      font-size: 1.1em;\r\n      text-transform: uppercase;\r\n      border: none;\r\n      cursor: pointer;\r\n      font-weight: bold;\r\n      background: #F2F5F8;\r\n    }\r\n  \r\n  .notification .notification-message button:hover {\r\n      color: #75b1e8;\r\n    }\r\n  \r\n  .online,\r\n    .offline,\r\n    .me,\r\n    .warning {\r\n      margin-right: 3px;\r\n      font-size: 0.8em;\r\n    }\r\n  \r\n  .online {\r\n      color: #86BB71;\r\n    }\r\n  \r\n  .offline {\r\n      color: #E38968;\r\n    }\r\n  \r\n  .me {\r\n      color: #94C2ED;\r\n    }\r\n  \r\n  .warning {\r\n      color: #e78930;\r\n    }\r\n  \r\n  .align-left {\r\n      text-align: left;\r\n    }\r\n  \r\n  .align-right {\r\n      text-align: right;\r\n    }\r\n  \r\n  .float-right {\r\n      float: right;\r\n    }\r\n  \r\n  .clearfix:after {\r\n      visibility: hidden;\r\n      display: block;\r\n      font-size: 0;\r\n      content: \" \";\r\n      clear: both;\r\n      height: 0;\r\n    }\r\n  \r\n  .customButton {\r\n      width: 100%;\r\n    }\r\n  \r\n  .activeNotification {\r\n      background: #393a41;\r\n    }\r\n  \r\n  .typeOfNotifications {\r\n      background: #393a41;\r\n      color: white;\r\n      margin-top: 0.2em;\r\n      margin-bottom: 0.2em;\r\n    }\r\n  \r\n  .blankContent{\r\n      height: 100vh;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      font-size: 3rem;\r\n      color: #999;\r\n    }\r\n  \r\n  @media only screen and (max-width:575px) {\r\n      .notification .notification-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:576px) and (max-width:768px) {\r\n      .notification .notification-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:769px) and (max-width:992px) {\r\n      .notification .notification-history {\r\n        height:65vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:993px) and (max-width:1200  px) {\r\n      .notification .notification-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  /* user list items */\r\n  \r\n  .crop {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .about {\r\n    float: left;\r\n    padding-left: 0.4em;\r\n  }\r\n  \r\n  .online,\r\n  .offline,\r\n  .me,\r\n  .warning {\r\n    margin-right: 3px;\r\n    font-size: 0.8em;\r\n  }\r\n  \r\n  .online {\r\n    color: #86BB71;\r\n  }\r\n  \r\n  .offline {\r\n    color: #E38968;\r\n  }\r\n  \r\n  .me {\r\n    color: #94C2ED;\r\n  }\r\n  \r\n  .warning {\r\n    color: #00c8e7;\r\n  }\r\n  \r\n  .status {\r\n    color: #92959E;\r\n  }\r\n  \r\n  .name {\r\n    float: left;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFHQTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsb0JBQW9CO0lBQ3RCOztFQUVBO01BQ0UsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixvQkFBb0I7SUFDdEI7O0VBRUE7TUFDRSxpQkFBaUI7TUFDakIsY0FBYztNQUNkLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsVUFBVTtJQUNaOztFQUVBO01BQ0UsZUFBZTtJQUNqQjs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFdBQVc7SUFDYjs7RUFFQTs7O01BSUUsc0JBQXNCO0lBQ3hCOztFQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsb0JBQW9CO0lBQ3RCOztFQUVBO01BQ0UsV0FBVztJQUNiOztFQUVBO01BQ0Usb0JBQW9CO01BQ3BCLFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGtCQUFrQjtNQUNsQixZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxVQUFVO0lBQ1o7O0VBRUE7TUFDRSxXQUFXO01BQ1gsb0JBQW9CO01BQ3BCLFlBQVk7TUFDWiwwQkFBMEI7SUFDNUI7O0VBRUE7TUFDRSwwQkFBMEI7TUFDMUIsZ0JBQWdCO0lBQ2xCOztFQUVBO01BQ0UsV0FBVztJQUNiOztFQUVBO01BQ0UsV0FBVztJQUNiOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGFBQWE7TUFDYixXQUFXO01BQ1gsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixpQ0FBaUM7TUFDakMsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGNBQWM7TUFDZCxpQ0FBaUM7SUFDbkM7O0VBRUE7TUFDRSxXQUFXO0lBQ2I7O0VBRUE7TUFDRSxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLGlCQUFpQjtJQUNuQjs7RUFFQTtNQUNFLGlCQUFpQjtNQUNqQixnQkFBZ0I7SUFDbEI7O0VBRUE7TUFDRSxjQUFjO0lBQ2hCOztFQUVBO01BQ0UsWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsa0JBQWtCO0lBQ3BCOztFQUVBO01BQ0UsdUJBQXVCO01BQ3ZCLGlDQUFpQztNQUNqQyxrQkFBa0I7TUFDbEIsWUFBWTtJQUNkOztFQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztFQUVBO01BQ0UsY0FBYztNQUNkLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixrQkFBa0I7SUFDcEI7O0VBRUE7TUFDRSxZQUFZO01BQ1osUUFBUTtNQUNSLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osU0FBUztNQUNULFFBQVE7TUFDUixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLDRCQUE0QjtNQUM1QixtQkFBbUI7TUFDbkIsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsNEJBQTRCO01BQzVCLFNBQVM7SUFDWDs7RUFFQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1oscUJBQXFCO01BQ3JCLG9CQUFvQjtNQUNwQixrQkFBa0I7TUFDbEIsWUFBWTtJQUNkOztFQUVBOztNQUVFLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsZUFBZTtJQUNqQjs7RUFFQTtNQUNFLFlBQVk7TUFDWixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixtQkFBbUI7SUFDckI7O0VBRUE7TUFDRSxjQUFjO0lBQ2hCOztFQUVBOzs7O01BSUUsaUJBQWlCO01BQ2pCLGdCQUFnQjtJQUNsQjs7RUFFQTtNQUNFLGNBQWM7SUFDaEI7O0VBRUE7TUFDRSxjQUFjO0lBQ2hCOztFQUVBO01BQ0UsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGNBQWM7SUFDaEI7O0VBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0VBRUE7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUE7TUFDRSxZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLFlBQVk7TUFDWixZQUFZO01BQ1osV0FBVztNQUNYLFNBQVM7SUFDWDs7RUFFQTtNQUNFLFdBQVc7SUFDYjs7RUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLG9CQUFvQjtJQUN0Qjs7RUFFQTtNQUNFLGFBQWE7TUFDYixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixlQUFlO01BQ2YsV0FBVztJQUNiOztFQUNBO01BQ0U7UUFDRSxXQUFXO01BQ2I7SUFDRjs7RUFDQTtNQUNFO1FBQ0UsV0FBVztNQUNiO0lBQ0Y7O0VBQ0E7TUFDRTtRQUNFLFdBQVc7TUFDYjtJQUNGOztFQUNBO01BQ0U7UUFDRSxXQUFXO01BQ2I7SUFDRjs7RUFFRCxvQkFBb0I7O0VBRXBCO0lBQ0MsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBOzs7O0lBSUUsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9ubGluZXtcclxuXHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5vZmZsaW5le1xyXG4gIFxyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnJpZ2h0U2lkZUNsYXNzIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxlZnRTaWRlQ2xhc3Mge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgYmFja2dyb3VuZDogIzU1QzFFNztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaXJjbGUtZ3JlZW46YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyBcXDI1Q0YnO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2lyY2xlLXJlZDpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnIFxcMjVDRic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY3Vyc29yUG9pbnRlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRleHRDZW50ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mbG9hdExlZnQge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgKixcclxuICAgICo6YmVmb3JlLFxyXG4gICAgKjphZnRlciB7XHJcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYm9keSB7XHJcbiAgICAgIHBhZGRpbmc6IDIuNWVtIDA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNDQ0NzUzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBlb3BsZS1saXN0IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZW9wbGUtbGlzdCBpbnB1dCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNkE2Qzc1O1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBlb3BsZS1saXN0IC5mYS1zZWFyY2gge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IC0xLjhlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBlb3BsZS1saXN0IHVsIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBlb3BsZS1saXN0IHVsIGxpIC51c2VyUHJlc2VuY2Uge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgcGFkZGluZzogMC43ZW0gMC4yZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50ZXh0Q2FwaXRhbGl6ZSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGVvcGxlLWxpc3QgaW1nIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZW9wbGUtbGlzdCAuYWJvdXQge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBlb3BsZS1saXN0IC5hYm91dCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC40ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZW9wbGUtbGlzdCAuc3RhdHVzIHtcclxuICAgICAgY29sb3I6ICM5Mjk1OUU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ub3RpZmljYXRpb24ge1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgYmFja2dyb3VuZDogI0YyRjVGODtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuM2VtO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zZW07XHJcbiAgICAgIGNvbG9yOiAjNDM0NjUxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24taGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMC4yZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMTVlbSBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLWhlYWRlciBpbWcge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLWhlYWRlciAubm90aWZpY2F0aW9uLWFib3V0IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC44ZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24taGVhZGVyIC5ub3RpZmljYXRpb24td2l0aCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24taGVhZGVyIC5ub3RpZmljYXRpb24tbnVtLW1lc3NhZ2VzIHtcclxuICAgICAgY29sb3I6ICM5Mjk1OUU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1oZWFkZXIgLmZhLXN0YXIge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiAjRDhEQURGO1xyXG4gICAgICBmb250LXNpemU6IDEuNDJlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMC44NWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24taGlzdG9yeSB7XHJcbiAgICAgIHBhZGRpbmc6IDJlbSAyZW0gMS40MmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjE1ZW0gc29saWQgd2hpdGU7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24taGlzdG9yeSAubWVzc2FnZS1kYXRhIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24taGlzdG9yeSAubWVzc2FnZS1kYXRhLXRpbWUge1xyXG4gICAgICBjb2xvcjogI2E4YWFiMTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLWhpc3RvcnkgLm1lc3NhZ2Uge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDEuNDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuOWVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24taGlzdG9yeSAubWVzc2FnZTphZnRlciB7XHJcbiAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgbGVmdDogNyU7XHJcbiAgICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjODZCQjcxO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDAuOGVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTAuOGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24taGlzdG9yeSAubXktbWVzc2FnZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM4NkJCNzE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1oaXN0b3J5IC5vdGhlci1tZXNzYWdlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzk0QzJFRDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLWhpc3RvcnkgLm90aGVyLW1lc3NhZ2U6YWZ0ZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjOTRDMkVEO1xyXG4gICAgICBsZWZ0OiA5MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHRleHRhcmVhIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZzogMC44ZW0gMS40MmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1tZXNzYWdlIC5mYS1maWxlLW8sXHJcbiAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24tbWVzc2FnZSAuZmEtZmlsZS1pbWFnZS1vIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLW1lc3NhZ2UgYnV0dG9uIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogIzk0QzJFRDtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRjJGNUY4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24tbWVzc2FnZSBidXR0b246aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzc1YjFlODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm9ubGluZSxcclxuICAgIC5vZmZsaW5lLFxyXG4gICAgLm1lLFxyXG4gICAgLndhcm5pbmcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm9ubGluZSB7XHJcbiAgICAgIGNvbG9yOiAjODZCQjcxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAub2ZmbGluZSB7XHJcbiAgICAgIGNvbG9yOiAjRTM4OTY4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWUge1xyXG4gICAgICBjb2xvcjogIzk0QzJFRDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLndhcm5pbmcge1xyXG4gICAgICBjb2xvcjogI2U3ODkzMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFsaWduLWxlZnQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWxpZ24tcmlnaHQge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZsb2F0LXJpZ2h0IHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2xlYXJmaXg6YWZ0ZXIge1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDA7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY3VzdG9tQnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3RpdmVOb3RpZmljYXRpb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzkzYTQxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudHlwZU9mTm90aWZpY2F0aW9ucyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzOTNhNDE7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogMC4yZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmxhbmtDb250ZW50e1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCkge1xyXG4gICAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24taGlzdG9yeSB7XHJcbiAgICAgICAgaGVpZ2h0OjUwdmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1NzZweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgICAgLm5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLWhpc3Rvcnkge1xyXG4gICAgICAgIGhlaWdodDo1MHZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjk5MnB4KSB7XHJcbiAgICAgIC5ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1oaXN0b3J5IHtcclxuICAgICAgICBoZWlnaHQ6NjV2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5M3B4KSBhbmQgKG1heC13aWR0aDoxMjAwICBweCkge1xyXG4gICAgICAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24taGlzdG9yeSB7XHJcbiAgICAgICAgaGVpZ2h0OjUwdmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgLyogdXNlciBsaXN0IGl0ZW1zICovXHJcbiAgXHJcbiAgIC5jcm9wIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwZW07XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5hYm91dCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMC40ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5vbmxpbmUsXHJcbiAgLm9mZmxpbmUsXHJcbiAgLm1lLFxyXG4gIC53YXJuaW5nIHtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcbiAgXHJcbiAgLm9ubGluZSB7XHJcbiAgICBjb2xvcjogIzg2QkI3MTtcclxuICB9XHJcbiAgXHJcbiAgLm9mZmxpbmUge1xyXG4gICAgY29sb3I6ICNFMzg5Njg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZSB7XHJcbiAgICBjb2xvcjogIzk0QzJFRDtcclxuICB9XHJcbiAgXHJcbiAgLndhcm5pbmcge1xyXG4gICAgY29sb3I6ICMwMGM4ZTc7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0dXMge1xyXG4gICAgY29sb3I6ICM5Mjk1OUU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/notifications/notifications.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/notifications/notifications.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n  \n      <div class=\"displayBlockMobile\" style=\"position:fixed;width:100%;z-index:1;\">\n  \n        <div class=\"col-sm-12 p-0\">\n  \n          <nav class=\"navbar navbar-expand-md navbar-fixed navbar-dark bg-dark\">\n  \n            <a class=\"navbar-brand text-white\">\n              {{userInfo.firstName}} {{userInfo.lastName}}\n              <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n              <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n            </a>\n  \n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \n              <span class=\"navbar-toggler-icon\"></span>\n  \n            </button>\n  \n            <div class=\"collapse people-list navbar-collapse\" id=\"navbarSupportedContent\">\n  \n              <ul class=\"list\">\n                <li class=\"p-2 typeOfNotifications\">\n                  Online Users:\n                </li>\n                <li class=\"clearfix cursorPointer\" [ngClass]=\"{'activeNotification': user.notificationing == true}\" (click)=\"userSelectedToNotification(user.userId, user.name)\"\n                  *ngFor=\"let user of userList\">\n                  <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\">\n                    <user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\"></user-details>\n                  </div>\n                </li>\n                \n              </ul>\n  \n            </div>\n  \n          </nav>\n  \n        </div>\n  \n      </div>\n  \n      <div class=\"col-12 displayNoneMobile col-sm-4 col-md-4 people-list p-0\" id=\"people-list\">\n  \n        <div class=\"p-3 text-white textCapitalize textCenter\">\n          {{userInfo.firstName}} {{userInfo.lastName}}\n          <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n          <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n          <br>\n          <br>\n          <button (click)=\"logout()\" class=\"btn btn-info customButton\">Logout</button>\n        </div>\n  \n        <ul class=\"list\">\n          <li class=\"p-2 typeOfNotifications\">\n            Online Users:\n          </li>\n          <li class=\"clearfix cursorPointer\" [ngClass]=\"{'activeNotification': user.notificationing == true}\"\n            *ngFor=\"let user of userList\" (click)=\"userSelectedToNotification(user.userId, user.name)\">\n            <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\"  >\n              <user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\"></user-details>\n            </div>\n          </li>\n         \n        </ul>\n  \n  \n      </div>\n  \n      <div class=\"col-12 col-sm-8 col-md-8 notification\">\n        <div class=\"notification-header clearfix mobileMenu\" *ngIf=\"receiverName\">\n          <first-char [userName]=\"receiverName\" [userBg]=\"'blue'\" [userColor]=\"'white'\"></first-char>\n  \n          <div class=\"notification-about\">\n            <div class=\"notification-with\">Notification with {{receiverName}}</div>\n          </div>\n        </div>\n        <!-- end notification-header -->\n  \n        <div #scrollMe [scrollTop]=\"(scrollToNotificationTop)?0:scrollMe.scrollHeight\" class=\"notification-history\" *ngIf=\"receiverName\">\n  \n          <ul>\n            <li class=\"textCenter\" *ngIf=\"receiverName\">\n  \n              <span  class=\"cursorPointer\" (click)=\"loadEarlierPageOfNotification()\">Load Previous Notification</span>\n  \n              <br>\n  \n              <span *ngIf=\"loadingPreviousNotification == true\">Loading...</span>\n  \n            </li>\n            <li class=\"clearfix\" *ngFor=\"let message of messageList\">\n              <div class=\"message-data\" [ngClass]=\"{'align-right': message.senderId == userInfo.userId}\">\n                <span class=\"message-data-time\">{{message?.createdOn | date: 'medium' }}</span> &nbsp; &nbsp;\n                <span class=\"message-data-name floatLeft\" *ngIf=\"message.senderId != userInfo.userId\">\n                  <i class=\"fa fa-circle online\"></i> {{ message?.senderName }}</span>\n                <span class=\"message-data-name\" *ngIf=\"message.senderId == userInfo.userId\">{{ message?.senderName }}</span>\n                <i class=\"fa fa-circle me\" *ngIf=\"message.senderId == userInfo.userId\"></i>\n  \n              </div>\n              <div class=\"message\" [ngClass]=\"{'float-right other-message': message.senderId == userInfo.userId, 'my-message': message.senderId != userInfo.userId}\">\n                {{message?.message | removeSpecialCharPipe: '#' | removeSpecialCharPipe: '$'}}\n              </div>\n            </li>\n  \n          </ul>\n  \n        </div>\n        <div *ngIf=\"!receiverName\" class=\"col-sm blankContent\">\n          Click on user to see notifications!!!\n        </div>\n        <!-- end notification-history -->\n  \n        <div class=\"notification-message clearfix p-2\" *ngIf=\"receiverName\">\n          <textarea name=\"message-to-send\" id=\"message-to-send\" (keydown)=\"sendMessageUsingKeypress($event)\" [(ngModel)]=\"messageText\"\n            placeholder=\"Type your message\" rows=\"3\"></textarea>\n  \n          <button (click)=\"sendMessage()\">Send</button>\n  \n        </div>\n        <!-- end notification-message -->\n  \n      </div>\n  \n    </div>\n    <!-- end notification -->\n  \n  </div>\n  <!-- end container -->\n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/dashboard/notifications/notifications.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/notifications/notifications.component.ts ***!
  \********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");







var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(AppService, SocketService, router, toastr, cookieService) {
        var _this = this;
        this.AppService = AppService;
        this.SocketService = SocketService;
        this.router = router;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.userList = [];
        this.scrollToNotificationTop = false;
        this.previousNotificationList = [];
        this.messageList = []; // stores the current message list display in notification box
        this.pageValue = 0;
        this.loadingPreviousNotification = false;
        // public checkStatus: any = () => {
        //   if (this.cookieService.get('authtoken') === undefined || this.cookieService.get('authtoken') === '' || this.cookieService.get('authtoken') === null) {
        //     this.router.navigate(['/']);
        //     return false;
        //   } else {
        //     return true;
        //   }
        //} // end checkStatus
        this.verifyUserConfirmation = function () {
            _this.SocketService.verifyUser().subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this.SocketService.setUser(_this.authToken);
            });
        };
        this.getOnlineUserList = function () {
            _this.SocketService.onlineUserList().subscribe(function (userList) {
                _this.userList = [];
                for (var x in userList) {
                    for (var y = 0; y < _this.liveUserInfo.friends.length; y++) {
                        var friend = _this.liveUserInfo.friends[y].userId;
                        if (friend == x) {
                            var temp = { 'userId': x, 'name': userList[x], 'unread': 0, 'notificationing': false };
                            _this.userList.push(temp);
                        }
                    }
                }
                console.log(_this.userList);
            }); // end online-user-list
        };
        // notification related methods 
        this.getPreviousNotifications = function () {
            var previousData = (_this.messageList.length > 0 ? _this.messageList.slice() : []);
            _this.SocketService.getNotification(_this.userInfo.userId, _this.receiverId, _this.pageValue * 10)
                .subscribe(function (apiResponse) {
                console.log(apiResponse);
                if (apiResponse.status == 200) {
                    console.log("this is messageList" + _this.messageList);
                    _this.messageList = apiResponse.data.concat(previousData);
                }
                else {
                    _this.messageList = previousData;
                    _this.toastr.warning('No Messages available');
                }
                _this.loadingPreviousNotification = false;
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end get previous notification with any user
        this.loadEarlierPageOfNotification = function () {
            _this.loadingPreviousNotification = true;
            _this.pageValue++;
            _this.scrollToNotificationTop = true;
            _this.getPreviousNotifications();
        }; // end loadPreviousNotification
        this.userSelectedToNotification = function (id, name) {
            console.log("setting user as active");
            // setting that user to notificationing true   
            _this.userList.map(function (user) {
                if (user.userId == id) {
                    user.notificationing = true;
                }
                else {
                    user.notificationing = false;
                }
            });
            _this.cookieService.set('receiverId', id);
            _this.cookieService.set('receiverName', name);
            _this.receiverName = name;
            _this.receiverId = id;
            _this.messageList = [];
            _this.pageValue = 0;
            var notificationDetails = {
                userId: _this.userInfo.userId,
                senderId: id
            };
            _this.SocketService.markNotificationAsSeen(notificationDetails);
            _this.getPreviousNotifications();
        }; // end userBtnClick function
        this.sendMessageUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                _this.sendMessage();
            }
        }; // end sendMessageUsingKeypress
        this.sendMessage = function () {
            if (_this.messageText) {
                var notificationMsgObject = {
                    senderName: _this.userInfo.firstName + " " + _this.userInfo.lastName,
                    senderId: _this.userInfo.userId,
                    receiverName: _this.cookieService.get('receiverName'),
                    receiverId: _this.cookieService.get('receiverId'),
                    message: _this.messageText,
                    createdOn: new Date()
                }; // end notificationMsgObject
                console.log(notificationMsgObject);
                _this.SocketService.SendNotificationMessage(notificationMsgObject);
                _this.pushToNotificationWindow(notificationMsgObject);
            }
            else {
                _this.toastr.warning('text message can not be empty');
            }
        }; // end sendMessage
        this.pushToNotificationWindow = function (data) {
            _this.messageText = "";
            _this.messageList.push(data);
            _this.scrollToNotificationTop = false;
        }; // end push to notification window
        this.getMessageFromAUser = function () {
            _this.SocketService.notificationByUserId(_this.userInfo.userId)
                .subscribe(function (data) {
                (_this.receiverId == data.senderId) ? _this.messageList.push(data) : '';
                _this.toastr.success("" + data.message);
                _this.scrollToNotificationTop = false;
            }); //end subscribe
        }; // end get message from a user 
        this.logout = function () {
            _this.AppService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    _this.cookieService.delete('authtoken');
                    _this.cookieService.delete('receiverId');
                    _this.cookieService.delete('receiverName');
                    _this.SocketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end logout
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authToken = this.cookieService.get('authtoken');
        this.userInfo = this.AppService.getUserInfoFromLocalstorage();
        this.AppService.getSingleUserData(this.userInfo.userId).subscribe(function (data) {
            console.log(data);
            _this.liveUserInfo = data["data"];
        }, function (error) {
            console.log("some error occured");
            console.log(error);
        });
        this.receiverId = this.cookieService.get("receiverId");
        this.receiverName = this.cookieService.get('receiverName');
        console.log(this.receiverId, this.receiverName);
        if (this.receiverId != null && this.receiverId != undefined && this.receiverId != '') {
            this.userSelectedToNotification(this.receiverId, this.receiverName);
        }
        //this.checkStatus();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getMessageFromAUser();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotificationsComponent.prototype, "scrollMe", void 0);
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/dashboard/notifications/notifications.component.html"),
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]],
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/dashboard/notifications/notifications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/search-people/search-people.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/search-people/search-people.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\n.bg-grey{\r\n    background:#F2F3F9;\r\n}\r\n.col-md-6{\r\n    margin-top:-5%;\r\n}\r\n.card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n}\r\n.card-signin {\r\n    padding: 2rem;\r\n}\r\n.card-body{\r\n    padding:2rem;\r\n}\r\n.form-signin {\r\n    width: 100%;\r\n}\r\n.form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n    width: 70%;\r\n}\r\n.form-group input{\r\n    border-radius:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NlYXJjaC1wZW9wbGUvc2VhcmNoLXBlb3BsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtBQUNGO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDhDQUE4QztBQUNsRDtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc2VhcmNoLXBlb3BsZS9zZWFyY2gtcGVvcGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcclxuICB9XHJcbi5iZy1ncmV5e1xyXG4gICAgYmFja2dyb3VuZDojRjJGM0Y5O1xyXG59XHJcbi5jb2wtbWQtNntcclxuICAgIG1hcmdpbi10b3A6LTUlO1xyXG59XHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOjJyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6MnJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/search-people/search-people.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/search-people/search-people.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n    <nav class=\"navbar navbar-expand-lg navbar-light\">\n      <a class=\"navbar-brand pointer\" (click)=\"goToDashboard()\"><img src=\"assets/img/logo.png\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link pointer\" (click)=\"goToDashboard()\"><i class=\"fa fa-dashboard\" aria-hidden=\"true\"></i> Dashboard</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"goToNotifications()\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i> Notifications</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </section>\n  <div class=\"container-fluid bg-grey \" style=\"padding-top:70px;\">\n  <div class=\"row align-items-center  justify-content-center\" style=\"padding-top:40px; padding-bottom:50px;\">\n    <div class=\"col-md-6\">\n      <div class=\"card card-signin\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Search User</h5>\n          <div class=\"form-signin\">\n            <div class=\"form-group\">\n              <p>Please enter user's registered email here</p>\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter registered email\" required autofocus>\n            </div>\n            <div class=\"row justify-content-center\">\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" (click)=\"searchUserFunction()\">Add as friend</button>\n            </div>\n            <hr>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  <section id=\"footer\">\n  <img src=\"assets/img/wave2.png\" class=\"footer-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 footer-box\">\n        <img src=\"assets/img/logo.png\">\n      </div>\n    </div>\n    <p class=\"copyright\">To Do List Management System | 2019</p>\n  </div>\n  </section>"

/***/ }),

/***/ "./src/app/dashboard/search-people/search-people.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/search-people/search-people.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchPeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPeopleComponent", function() { return SearchPeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");







var SearchPeopleComponent = /** @class */ (function () {
    function SearchPeopleComponent(AppService, SocketService, router, toastr, cookieService) {
        var _this = this;
        this.AppService = AppService;
        this.SocketService = SocketService;
        this.router = router;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.scrollToNotificationTop = false;
        this.messageList = []; // stores the current message list display in notification box
        this.goToDashboard = function () {
            _this.router.navigate(['/dashboard']);
        };
        this.goToNotifications = function () {
            _this.router.navigate(['/notifications']);
        };
        this.searchUserFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('Please enter email.');
            }
            else {
                var data = {
                    email: _this.email
                };
                _this.AppService.searchUser(data).subscribe(function (data) {
                    console.log(data);
                    _this.searchedUserData = data["data"];
                    _this.sendMessage(_this.searchedUserData);
                }, function (error) {
                    console.log("some error occured");
                    console.log(error);
                });
            } // end condition
        }; // end addNewFriendFunction
        this.sendMessage = function (searchedUserData) {
            var notificationMsgObject = {
                senderName: _this.userInfo.firstName + " " + _this.userInfo.lastName,
                senderId: _this.userInfo.userId,
                receiverName: searchedUserData.firstName + " " + searchedUserData.lastName,
                receiverId: searchedUserData.userId,
                message: _this.userInfo.firstName + " " + _this.userInfo.lastName + " has added you as friend.",
                createdOn: new Date()
            }; // end notificationMsgObject
            console.log(notificationMsgObject);
            _this.messageList.push(notificationMsgObject);
            console.log("this is messageList " + _this.messageList);
            _this.scrollToNotificationTop = false;
            _this.SocketService.SendNotificationMessage(notificationMsgObject);
            // this.pushToNotificationWindow(notificationMsgObject);
        }; // end sendMessage
    }
    SearchPeopleComponent.prototype.ngOnInit = function () {
        this.authToken = this.cookieService.get('authtoken');
        this.userInfo = this.AppService.getUserInfoFromLocalstorage();
        this.receiverId = this.cookieService.get("receiverId");
        this.receiverName = this.cookieService.get('receiverName');
    };
    SearchPeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-people',
            template: __webpack_require__(/*! ./search-people.component.html */ "./src/app/dashboard/search-people/search-people.component.html"),
            styles: [__webpack_require__(/*! ./search-people.component.css */ "./src/app/dashboard/search-people/search-people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], SearchPeopleComponent);
    return SearchPeopleComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/task-create/task-create.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/task-create/task-create.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    color:  #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n    color:  #a94442; /* red */\r\n}\r\na:not([href]):not([tabindex]) {\r\n    color:white;\r\n}\r\n.bg-grey{\r\n    background:#F2F3F9;\r\n  }\r\n.btn{\r\n    border-radius: 50px; \r\n}\r\n.btn-outline-success, .btn-outline-danger{\r\n    font-weight: 100;\r\n\r\n}\r\na:hover{\r\n    color:white !important;\r\n}\r\n.createBtn{\r\n    color:white;\r\n    padding-left:30px;\r\n    padding-right:30px;\r\n}\r\nh4{\r\n    font-size: 25px;\r\n    font-weight: 400;\r\n    padding: 45px 0 7px 0;\r\n  }\r\n.form-full-width {\r\n    min-width: 150px;\r\n    max-width: 800px;\r\n    width:100%;\r\n}\r\n.input-full-width {\r\n    min-width: 150px;\r\n    max-width: 800px;\r\n    width:100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Rhc2stY3JlYXRlL3Rhc2stY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlLEVBQUUsVUFBVTtBQUMvQjtBQUNBO0lBQ0ksZUFBZSxFQUFFLFFBQVE7QUFDN0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0VBQ3BCO0FBQ0Y7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCO0FBQ0Y7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdGFzay1jcmVhdGUvdGFzay1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgY29sb3I6ICAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59XHJcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xyXG4gICAgY29sb3I6ICAjYTk0NDQyOyAvKiByZWQgKi9cclxufVxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uYmctZ3JleXtcclxuICAgIGJhY2tncm91bmQ6I0YyRjNGOTtcclxuICB9XHJcbi5idG57XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyBcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2VzcywgLmJ0bi1vdXRsaW5lLWRhbmdlcntcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcblxyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jcmVhdGVCdG57XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDozMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDozMHB4O1xyXG59XHJcbmg0e1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDQ1cHggMCA3cHggMDtcclxuICB9XHJcbi5mb3JtLWZ1bGwtd2lkdGgge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uaW5wdXQtZnVsbC13aWR0aCB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/task-create/task-create.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/task-create/task-create.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand pointer\" [routerLink]=\"['/dashboard']\"><img src=\"assets/img/logo.png\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link pointer\" (click)=\"logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</section>\n<div class=\"container-fluid bg-grey\" style=\"padding-bottom:60px;\">\n  <div class=\"row\" style=\"text-align:left\">\n    <div class=\"col-sm-12 col-md-8 offset-md-1\">\n      <h4>Create a Task</h4>\n    </div>\n    <div class=\"col-md-8 offset-md-1\">\n      <form [formGroup]= \"taskForm\" [hidden]=\"success\" (ngSubmit)=\"createTask()\" class=\"form-full-width\">\n        <label>Task</label><br>\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <mat-form-field class=\"input-full-width\">\n              <input matInput formControlName='taskTitle' placeholder=\"Enter task here...\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-2\">\n            <a (click)=\"addSubTask()\" class=\"btn btn-outline-success\" style=\"color:#5cb85c;\" title=\"Add Sub-Task\"><i class=\"fa fa-plus\"></i></a>\n          </div>\n          <span *ngIf=\"taskTitle.invalid && taskTitle.touched\" class=\"warn\">\n              Please enter task to proceed.\n          </span>\n        </div>\n        <!--Sub Tasks-->\n        <div formArrayName=\"subTaskTitle\">\n          <div *ngFor=\"let subTask of taskForm.get('subTaskTitle').controls; let i=index\">\n            <div [formGroupName]=\"i\">\n              <div class=\"row\">\n                <div class=\"col-8 col-sm-10\">\n                  <mat-form-field class=\"input-full-width\" style=\"width:87.5%;float:right;\">\n                    <input matInput formControlName=\"newSubTaskTitle\" placeholder=\"Enter sub-task here...\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-2  col-sm-1\">\n                  <a (click)=\"addSubSubTask(subTask.controls.subSubTaskTitle)\" class=\"btn btn-outline-success\" style=\"color:#5cb85c;\" title=\"Add Sub-Sub-Task\"><i class=\"fa fa-plus\"></i></a>\n                </div>\n                <div class=\"col-2 col-sm-1\">\n                  <a (click)=\"deleteSubTask(i)\" style=\"color:#d9534f;\" class=\"btn btn-outline-danger\" title=\"Remove Sub-Task\"><i class=\"fa fa-close\"></i></a>\n                </div>\n              </div>\n              <div formArrayName=\"subSubTaskTitle\"> \n                <div *ngFor=\"let newSubSubTaskTitle of subTask.get('subSubTaskTitle').controls; let j=index\">\n                  <div [formGroupName]=\"j\" > \n                    <div class=\"row\"> \n                      <div class=\"col-10\">\n                        <mat-form-field class=\"input-full-width\" style=\"width:75%;float:right;\">\n                          <input matInput formControlName=\"newSubSubTaskTitle\" placeholder=\"Enter sub-sub-task\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-2\">\n                        <a (click)=\"deleteSubSubTask(subTask.controls.subSubTaskTitle, j)\" class=\"btn btn-outline-danger\" style=\"color:#d9534f;\" title=\"Remove Sub-Sub-Task\"><i class=\"fa fa-close\"></i></a>\n                      </div>\n                    </div>\n                  </div> \n                </div>                  \n              </div> \n            </div>\n          </div>\n        </div>\n\n        <br><br><label>Status</label><br>\n        <mat-form-field class=\"input-full-width\">\n          <!-- <input matInput formControlName='taskStatus' placeholder=\"Choose Status\"> -->\n          <mat-select formControlName='taskStatus' placeholder=\"Choose Stautus\">\n            <mat-option value=\"Open\">Open</mat-option>\n            <mat-option value=\"Done\">Done</mat-option>\n          </mat-select>\n        </mat-form-field>\n      \n        <br><br><label>Due By <small class=\"text-muted\">(Click on calendar icon to choose a date)</small></label><br>\n        <mat-form-field >\n          <input matInput formControlName='taskDueDate' [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n        <br><br> <label>Priority</label><br>\n        <mat-form-field class=\"input-full-width\">\n          <!-- <input matInput formControlName='taskPriority' placeholder=\"Select Priotiy\"> -->\n          <mat-select formControlName='taskPriority' placeholder=\"Select Priority\">\n            <mat-option value=\"Low\">Low</mat-option>\n            <mat-option value=\"Medium\">Medium</mat-option>\n            <mat-option value=\"Medium\">High</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <br> \n        <br>\n        <br>\n        <button [disabled]=\"taskForm.invalid\"  class=\"btn createBtn btn-primary\">Create Task</button>\n      </form>\n    </div>\n  </div>   \n</div>\n      \n<section id=\"footer\" >\n  <img src=\"assets/img/wave2.png\" class=\"footer-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 footer-box\">\n        <img src=\"assets/img/logo.png\">\n      </div>\n    </div>\n    <p class=\"copyright\">To Do List Management System | 2019</p>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/dashboard/task-create/task-create.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/task-create/task-create.component.ts ***!
  \****************************************************************/
/*! exports provided: TaskCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreateComponent", function() { return TaskCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent(AppService, _route, router, toastr, location, cookieService, fb) {
        var _this = this;
        this.AppService = AppService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.location = location;
        this.cookieService = cookieService;
        this.fb = fb;
        this.logout = function () {
            _this.AppService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    _this.cookieService.delete('authtoken');
                    _this.cookieService.delete('receiverId');
                    _this.cookieService.delete('receiverName');
                    _this.cookieService.delete('session');
                    _this.cookieService.delete('session.sig');
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end logout;
    }
    TaskCreateComponent.prototype.ngOnInit = function () {
        //Authenticate User
        this.authToken = this.cookieService.get('authtoken');
        this.userInfo = this.AppService.getUserInfoFromLocalstorage();
        this.taskForm = this.fb.group({
            taskTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            subTaskTitle: this.fb.array([]),
            taskStatus: '',
            taskPriority: '',
            taskDueDate: '',
        });
    };
    Object.defineProperty(TaskCreateComponent.prototype, "taskTitle", {
        get: function () {
            return this.taskForm.get('taskTitle');
        },
        enumerable: true,
        configurable: true
    });
    TaskCreateComponent.prototype.addSubTask = function () {
        var control = this.taskForm.controls.subTaskTitle;
        control.push(this.fb.group({
            newSubTaskTitle: '',
            subSubTaskTitle: this.fb.array([])
        }));
    };
    TaskCreateComponent.prototype.deleteSubTask = function (index) {
        var control = this.taskForm.controls.subTaskTitle;
        control.removeAt(index);
    };
    TaskCreateComponent.prototype.addSubSubTask = function (control) {
        control.push(this.fb.group({
            newSubSubTaskTitle: ''
        }));
    };
    TaskCreateComponent.prototype.deleteSubSubTask = function (control, index) {
        control.removeAt(index);
    };
    TaskCreateComponent.prototype.createTask = function () {
        var _this = this;
        var task = this.taskForm.value;
        // console.log(task)
        var title = task.taskTitle;
        var dueDate = task.taskDueDate;
        var status = task.taskStatus;
        var priority = task.taskPriority;
        var subTask = JSON.stringify(task.subTaskTitle);
        console.log(title, subTask, status, dueDate, priority);
        this.AppService.createTask(title, subTask, status, dueDate, priority).subscribe(function (data) {
            console.log("task created");
            console.log(data);
            _this.toastr.success('Task Created', 'Success');
            setTimeout(function () {
                _this.router.navigate(['/dashboard']);
            }, 1000);
        }, function (error) {
            console.log("some error occured");
            console.log(error);
            alert("Some error occured.");
        });
    };
    TaskCreateComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    TaskCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-create',
            template: __webpack_require__(/*! ./task-create.component.html */ "./src/app/dashboard/task-create/task-create.component.html"),
            styles: [__webpack_require__(/*! ./task-create.component.css */ "./src/app/dashboard/task-create/task-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/task-view/task-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/task-view/task-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body\r\n{\r\n    background:#F2F3F9;\r\n}\r\na:not([href]):not([tabindex]) {\r\n    color:white;\r\n}\r\n.bg-grey{\r\n    background:#F2F3F9;\r\n  }\r\n.btn{\r\n    border-radius: 50px; \r\n}\r\n.btn-outline-success, .btn-outline-danger{\r\n    font-weight: 100;\r\n\r\n}\r\nbutton:hover{\r\n    color:white !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Rhc2stdmlldy90YXNrLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0VBQ3BCO0FBQ0Y7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC90YXNrLXZpZXcvdGFzay12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5XHJcbntcclxuICAgIGJhY2tncm91bmQ6I0YyRjNGOTtcclxufVxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uYmctZ3JleXtcclxuICAgIGJhY2tncm91bmQ6I0YyRjNGOTtcclxuICB9XHJcbi5idG57XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyBcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2VzcywgLmJ0bi1vdXRsaW5lLWRhbmdlcntcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcblxyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/task-view/task-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/task-view/task-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand pointer\" [routerLink]=\"['/dashboard']\"><img src=\"assets/img/logo.png\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link pointer\" (click)=\"logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</section>\n\n<div class=\"container\" style=\"padding-bottom:60px;\">\n\n  <div class=\"row\" *ngIf=\"currentTask\" style=\"padding-top:45px;\">\n    <div class=\"col-12 col-md-4\">\n        <p><b>Created by -</b> {{currentTask.submitterFirstName}} {{currentTask.submitterLastName}}<br><small class=\"text-muted\">at {{currentTask.created}}</small></p>\n    </div>\n    <div class=\"col-12 col-md-4\" *ngIf=\"currentTask.editorFirstName\">\n        <p><b>Last Editted by -</b> {{currentTask.editorFirstName}} {{currentTask.editorLastName}}<br><small class=\"text-muted\">at {{currentTask.lastModified}}</small></p>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\" *ngIf=\"currentTask\">\n    <div class=\"col-4\">\n      <p><b>Status</b><br>{{currentTask.status}}</p>\n    </div>\n    <div class=\"col-4\">\n      <p><b>Priority</b><br>{{currentTask.priority}}</p>\n    </div>\n    <div class=\"col-4\">\n      <p><b>Due By</b><br>{{currentTask.dueDate | slice:8:10}} {{currentTask.dueDate | slice:4:7}} {{currentTask.dueDate | slice:11:15}}</p>\n    </div> \n  </div>\n  <br>\n  <br>\n  <div class=\"row\" *ngIf=\"currentTask\">\n    <div class=\"col-6 col-md-9\">\n      <h5 class=\"text-primary\">{{currentTask.task}}</h5>\n    </div>\n    <div class=\"col-6 col-md-3\">\n      <div class=\"row\" style=\"text-align:left;\">\n        <div class=\"col\">\n          <button class=\"btn btn-outline-danger\" (click)=\"deleteThisTask()\">Delete </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <br>\n\n  <div class=\"row\" style=\"text-align:left\">\n    <div class=\"col-md-8\">\n      <form [formGroup]= \"taskForm\" [hidden]=\"success\" (ngSubmit)=\"editTask()\" class=\"form-full-width\">\n        <label>Task</label><br>\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <mat-form-field class=\"input-full-width\">\n              <input matInput formControlName='taskTitle' placeholder=\"Enter task here...\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-2\">\n            <a (click)=\"addSubTask()\" class=\"btn btn-outline-success\" style=\"color:#5cb85c;\" title=\"Add Sub-Task\"><i class=\"fa fa-plus\"></i></a>\n          </div>\n          <span *ngIf=\"taskTitle.invalid && taskTitle.touched\" class=\"warn\">\n              Please enter task to proceed.\n          </span>\n        </div>\n        <!--Sub Tasks-->\n        <div formArrayName=\"subTaskTitle\">\n          <div *ngFor=\"let subTask of taskForm.get('subTaskTitle').controls; let i=index\">\n            <div [formGroupName]=\"i\">\n              <div class=\"row\">\n                <div class=\"col-8 col-sm-10\">\n                  <mat-form-field class=\"input-full-width\" style=\"width:87.5%;float:right;\">\n                    <input matInput formControlName=\"newSubTaskTitle\" placeholder=\"Enter sub-task here...\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-2  col-sm-1\">\n                  <a (click)=\"addSubSubTask(subTask.controls.subSubTaskTitle)\" class=\"btn btn-outline-success\" style=\"color:#5cb85c;\" title=\"Add Sub-Sub-Task\"><i class=\"fa fa-plus\"></i></a>\n                </div>\n                <div class=\"col-2 col-sm-1\">\n                  <a (click)=\"deleteSubTask(i)\" style=\"color:#d9534f;\" class=\"btn btn-outline-danger\" title=\"Remove Sub-Task\"><i class=\"fa fa-close\"></i></a>\n                </div>\n              </div>\n              <div formArrayName=\"subSubTaskTitle\"> \n                <div *ngFor=\"let newSubSubTaskTitle of subTask.get('subSubTaskTitle').controls; let j=index\">\n                  <div [formGroupName]=\"j\" > \n                    <div class=\"row\"> \n                      <div class=\"col-10\">\n                        <mat-form-field class=\"input-full-width\" style=\"width:75%;float:right;\">\n                          <input matInput formControlName=\"newSubSubTaskTitle\" placeholder=\"Enter sub-sub-task\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-2\">\n                        <a (click)=\"deleteSubSubTask(subTask.controls.subSubTaskTitle, j)\" class=\"btn btn-outline-danger\" style=\"color:#d9534f;\" title=\"Remove Sub-Sub-Task\"><i class=\"fa fa-close\"></i></a>\n                      </div>\n                    </div>\n                  </div> \n                </div>                  \n              </div> \n            </div>\n          </div>\n        </div>\n\n        <br><br><label>Status</label><br>\n        <mat-form-field class=\"input-full-width\">\n          <!-- <input matInput formControlName='taskStatus' placeholder=\"Choose Status\"> -->\n          <mat-select formControlName='taskStatus' placeholder=\"Choose Stautus\">\n            <mat-option value=\"Open\">Open</mat-option>\n            <mat-option value=\"Done\">Done</mat-option>\n          </mat-select>\n        </mat-form-field>\n      \n        <br><br><label>Due By <small class=\"text-muted\">(Click on calendar icon to choose a date)</small></label><br>\n        <mat-form-field >\n          <input matInput formControlName='taskDueDate' [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n        <br><br> <label>Priority</label><br>\n        <mat-form-field class=\"input-full-width\">\n          <!-- <input matInput formControlName='taskPriority' placeholder=\"Select Priotiy\"> -->\n          <mat-select formControlName='taskPriority' placeholder=\"Select Priority\">\n            <mat-option value=\"Low\">Low</mat-option>\n            <mat-option value=\"Medium\">Medium</mat-option>\n            <mat-option value=\"Medium\">High</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <br> \n        <br>\n        <br>\n        <button [disabled]=\"taskForm.invalid\" class=\"btn createBtn btn-primary\">Update Task</button>\n      </form>\n    </div>\n  </div>   \n</div>\n<section id=\"footer\" >\n  <img src=\"assets/img/wave2.png\" class=\"footer-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 footer-box\">\n        <img src=\"assets/img/logo.png\">\n      </div>\n    </div>\n    <p class=\"copyright\">To Do List Management System | 2019</p>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/dashboard/task-view/task-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/task-view/task-view.component.ts ***!
  \************************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return TaskViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var TaskViewComponent = /** @class */ (function () {
    function TaskViewComponent(_route, router, AppService, location, cookieService, toastr, fb) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.AppService = AppService;
        this.location = location;
        this.cookieService = cookieService;
        this.toastr = toastr;
        this.fb = fb;
        this.logout = function () {
            _this.AppService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    _this.cookieService.delete('authtoken');
                    _this.cookieService.delete('receiverId');
                    _this.cookieService.delete('receiverName');
                    _this.cookieService.delete('session');
                    _this.cookieService.delete('session.sig');
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end logout
    }
    TaskViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Authenticate User
        this.authToken = this.cookieService.get('authtoken');
        this.userInfo = this.AppService.getUserInfoFromLocalstorage();
        var myTaskId = this._route.snapshot.paramMap.get('taskId');
        this.AppService.getSingleTaskInformation(myTaskId).subscribe(function (data) {
            console.log(data);
            _this.currentTask = data["data"];
        }, function (error) {
            console.log("some error occured");
            console.log(error);
        });
        this.taskForm = this.fb.group({
            taskTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            subTaskTitle: this.fb.array([]),
            taskStatus: '',
            taskPriority: '',
            taskDueDate: '',
        });
        this.setExistingTask();
    };
    Object.defineProperty(TaskViewComponent.prototype, "taskTitle", {
        get: function () {
            return this.taskForm.get('taskTitle');
        },
        enumerable: true,
        configurable: true
    });
    TaskViewComponent.prototype.setExistingTask = function () {
        var _this = this;
        var myTaskId = this._route.snapshot.paramMap.get('taskId');
        this.AppService.getSingleTaskInformation(myTaskId).subscribe(function (data) {
            _this.currentTask = data["data"];
            _this.taskForm.patchValue({
                taskTitle: _this.currentTask.task,
                subTaskTitle: _this.setExistingSubTask(),
                taskStatus: _this.currentTask.status,
                taskPriority: _this.currentTask.priority,
                taskDueDate: _this.currentTask.dueDate
            });
        }, function (error) {
            console.log("some error occured");
            console.log(error);
        });
    };
    TaskViewComponent.prototype.setExistingSubTask = function () {
        var _this = this;
        var myTaskId = this._route.snapshot.paramMap.get('taskId');
        this.AppService.getSingleTaskInformation(myTaskId).subscribe(function (data) {
            _this.currentTask = data["data"];
            var control = _this.taskForm.controls.subTaskTitle;
            _this.currentTask.subTask.forEach(function (x) {
                control.push(_this.fb.group({
                    newSubTaskTitle: x.title,
                    subSubTaskTitle: _this.setExistingSubSubTask(x)
                }));
            });
        }, function (error) {
            console.log("some error occured");
            console.log(error);
        });
    };
    TaskViewComponent.prototype.setExistingSubSubTask = function (s) {
        var _this = this;
        var arr = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormArray"]([]);
        s.subSubTask.forEach(function (y) {
            arr.push(_this.fb.group({
                newSubSubTaskTitle: y.title
            }));
        });
        return arr;
    };
    TaskViewComponent.prototype.addSubTask = function () {
        var control = this.taskForm.controls.subTaskTitle;
        control.push(this.fb.group({
            newSubTaskTitle: '',
            subSubTaskTitle: this.fb.array([])
        }));
    };
    TaskViewComponent.prototype.deleteSubTask = function (index) {
        var control = this.taskForm.controls.subTaskTitle;
        control.removeAt(index);
    };
    TaskViewComponent.prototype.addSubSubTask = function (control) {
        control.push(this.fb.group({
            newSubSubTaskTitle: ''
        }));
    };
    TaskViewComponent.prototype.deleteSubSubTask = function (control, index) {
        control.removeAt(index);
    };
    TaskViewComponent.prototype.viewNotifications = function () {
        this.router.navigate(['/notifications/' + this.currentTask.taskId]);
    };
    TaskViewComponent.prototype.editTask = function () {
        var _this = this;
        var task = this.taskForm.value;
        var title = task.taskTitle;
        var dueDate = task.taskDueDate;
        var status = task.taskStatus;
        var priority = task.taskPriority;
        var subTask = JSON.stringify(task.subTaskTitle);
        var taskId = this.currentTask.taskId;
        console.log(title, subTask, status, dueDate, priority);
        this.AppService.editTask(title, subTask, status, dueDate, priority, taskId).subscribe(function (data) {
            console.log("task created");
            console.log(data);
            _this.toastr.success('Task Created', 'Success');
            setTimeout(function () {
                _this.router.navigate(['/dashboard']);
            }, 1000);
        }, function (error) {
            console.log("some error occured");
            console.log(error);
            alert("Some error occured.");
        });
    };
    TaskViewComponent.prototype.deleteThisTask = function () {
        var _this = this;
        this.AppService.deleteTask(this.currentTask.taskId).subscribe(function (data) {
            console.log(data);
            _this.toastr.success("Issuse Deleted Successfully.");
            setTimeout(function () {
                _this.router.navigate(['/dashboard']);
            }, 1000);
        }, function (error) {
            console.log("Some error occured.");
            console.log(error);
            _this.toastr.error(error);
        });
    };
    TaskViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    TaskViewComponent.prototype.ngOnDestroy = function () {
    };
    TaskViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-view',
            template: __webpack_require__(/*! ./task-view.component.html */ "./src/app/dashboard/task-view/task-view.component.html"),
            styles: [__webpack_require__(/*! ./task-view.component.css */ "./src/app/dashboard/task-view/task-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], TaskViewComponent);
    return TaskViewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#banner\r\n{\r\n    background-image: linear-gradient(to right, #000428, #004e92); \r\n    color: #fff;\r\n    padding-top: 5%; \r\n}\r\n.promo-title\r\n{\r\n    font-size: 40px;\r\n    font-weight: 600;\r\n    margin-top: 50px;\r\n}\r\n#banner a\r\n{\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.bottom-img\r\n{\r\n    width: 100%;\r\n}\r\n/*-----------services section--------------*/\r\n#services\r\n{\r\n    padding: 80px 0;\r\n}\r\n.service-img\r\n{\r\n    width: 100px;\r\n    margin-top: 20px;\r\n}\r\n.services\r\n{\r\n    padding: 20px;\r\n}\r\n.services h4\r\n{\r\n    padding: 5px;\r\n    margin-top: 25px;\r\n    text-transform: uppercase;\r\n}\r\n.title::before\r\n{\r\n    content: '';\r\n    background: #004e92;\r\n    height: 5px;\r\n    width: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    -webkit-transform: translateY(63px);\r\n            transform: translateY(63px);    \r\n}\r\n.title::after\r\n{\r\n    content: '';\r\n    background: #004e92;\r\n    height: 10px;\r\n    width: 50px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 40px;\r\n    display: block;\r\n    -webkit-transform: translateY(8px);\r\n            transform: translateY(8px);    \r\n}\r\n/*---------------about-us section--------------*/\r\n#about-us\r\n{\r\n    background:#F2F3F9;\r\n    padding-bottom: 50px;\r\n    padding-top: 50px;\r\n}\r\n.about-title\r\n{\r\n    font-size: 40px;\r\n    font-weight: 600;\r\n    margin-top: 8%;\r\n}\r\n#about-us ul li\r\n{\r\n    margin: 10px 0;\r\n}\r\n#about-us ul\r\n{\r\n    margin-left: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksNkRBQTZEO0lBQzdELFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0EsNENBQTRDO0FBRTVDOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksYUFBYTtBQUNqQjtBQUNBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7QUFHQSxnREFBZ0Q7QUFFaEQ7O0lBRUksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFubmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDQyOCwgIzAwNGU5Mik7IFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7IFxyXG59XHJcbi5wcm9tby10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4jYmFubmVyIGFcclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmJvdHRvbS1pbWdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLyotLS0tLS0tLS0tLXNlcnZpY2VzIHNlY3Rpb24tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4jc2VydmljZXNcclxue1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG59XHJcbi5zZXJ2aWNlLWltZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5zZXJ2aWNlc1xyXG57XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5zZXJ2aWNlcyBoNFxyXG57XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4udGl0bGU6OmJlZm9yZVxyXG57XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQ6ICMwMDRlOTI7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjNweCk7ICAgIFxyXG59XHJcbi50aXRsZTo6YWZ0ZXJcclxue1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA0ZTkyO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpOyAgICBcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tYWJvdXQtdXMgc2VjdGlvbi0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiNhYm91dC11c1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiNGMkYzRjk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbi5hYm91dC10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbn1cclxuI2Fib3V0LXVzIHVsIGxpXHJcbntcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4jYWJvdXQtdXMgdWxcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><img src=\"assets/img/logo.png\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">HOME</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link pointer\" (click)=\"goToSignIn()\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> LOGIN</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link pointer\" (click)=\"goToSignUp()\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> SIGNUP</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</section>\n<section id=\"banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <p class=\"promo-title\">To Do List</p>\n        <p style=\"margin-bottom:30px;\">Real Time To Do List management system for multiple users, where you can create, edit or delete a list. Keep track of your daily tasks with this simple tool.</p>\n      </div>\n      <div class=\"col-md-6 text-center order-first order-md-6\">\n        <img src=\"assets/img/home1.svg\" class=\"img-fluid\">\n      </div>\n    </div>\n  </div>\n  <img src=\"assets/img/wave1.png\" class=\"bottom-img\">\n</section>\n<section id=\"services\">\n  <div class=\"container text-center\">\n    <h1 class=\"title\">Features</h1>\n    <div class=\"row text-center\">\n      <div class=\"col-md-4 services\">\n        <img src=\"assets/img/user.svg\" class=\"service-img\">\n        <h4>User Management</h4>\n        <p>You can create free account on our website and keep track of your work and data.</p>\n      </div>\n      <div class=\"col-md-4 services\">\n        <img src=\"assets/img/list.svg\" class=\"service-img\">\n        <h4>List Management</h4>\n        <p>User can easily create, edit or delete items from the list.</p>\n      </div>\n      <div class=\"col-md-4 services\">\n        <img src=\"assets/img/team.svg\" class=\"service-img\">\n        <h4>Mutiple Users</h4>\n        <p>User can add multiple friends to an assigned list, friends too can edit the list.</p>\n      </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-primary\">All Services</button>\n  </div>\n</section>\n<section id=\"about-us\">\n  <div class=\"container\">\n    <h1 class=\"title text-center\">ABOUT US</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n          <img src=\"assets/img/home2.svg\" class=\"img-fluid\">\n        </div>\n      <div class=\"col-md-6 about-us\">\n        <p class=\"about-title\">What makes us different</p>\n        <ul>\n          <li>Easy to use To Do List for your daily tasks</li>\n          <li>Multi-User Support</li>\n          <li>Free to use</li>\n          <li>Data protection</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"footer\">\n  <img src=\"assets/img/wave2.png\" class=\"footer-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 footer-box\">\n        <img src=\"assets/img/logo.png\">\n      </div>\n    </div>\n    <p class=\"copyright\">To Do List Management System | 2019</p>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        var _this = this;
        this.router = router;
        this.goToSignIn = function () {
            _this.router.navigate(['/login']);
        }; // end goToSignin
        this.goToSignUp = function () {
            _this.router.navigate(['/signup']);
        }; // end goToSignin
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpcnN0LWNoYXIvZmlyc3QtY2hhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZmlyc3QtY2hhci9maXJzdC1jaGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n    {{firstChar}}\n  </div>"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstCharComponent = /** @class */ (function () {
    function FirstCharComponent() {
        this.userNameAppear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FirstCharComponent.prototype.ngOnInit = function () {
        this.firstChar = this.userName[0];
    }; // end ngOnInit
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FirstCharComponent.prototype, "userName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FirstCharComponent.prototype, "userBg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FirstCharComponent.prototype, "userColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FirstCharComponent.prototype, "userNameAppear", void 0);
    FirstCharComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'first-char',
            template: __webpack_require__(/*! ./first-char.component.html */ "./src/app/shared/first-char/first-char.component.html"),
            styles: [__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")]
        })
    ], FirstCharComponent);
    return FirstCharComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipe/remove-special-char.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipe/remove-special-char.pipe.ts ***!
  \*********************************************************/
/*! exports provided: RemoveSpecialCharPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSpecialCharPipe", function() { return RemoveSpecialCharPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RemoveSpecialCharPipe = /** @class */ (function () {
    function RemoveSpecialCharPipe() {
    }
    RemoveSpecialCharPipe.prototype.transform = function (value, character) {
        return value.replace(character, '');
    };
    RemoveSpecialCharPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'removeSpecialCharPipe'
        })
    ], RemoveSpecialCharPipe);
    return RemoveSpecialCharPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/shared/user-details/user-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"], _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_5__["FirstCharComponent"]],
            exports: [
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"],
                _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_5__["FirstCharComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .about {\r\n    float: left;\r\n    padding-left: 0.4em;\r\n  }\r\n  \r\n  .online,\r\n  .offline,\r\n  .me,\r\n  .warning {\r\n    margin-right: 3px;\r\n    font-size: 0.8em;\r\n  }\r\n  \r\n  .online {\r\n    color: #86BB71;\r\n  }\r\n  \r\n  .offline {\r\n    color: #E38968;\r\n  }\r\n  \r\n  .me {\r\n    color: #94C2ED;\r\n  }\r\n  \r\n  .warning {\r\n    color: #00c8e7;\r\n  }\r\n  \r\n  .status {\r\n    color: #92959E;\r\n  }\r\n  \r\n  .name {\r\n    float: left;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTs7OztJQUlFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG4gIH1cclxuICBcclxuICAub25saW5lLFxyXG4gIC5vZmZsaW5lLFxyXG4gIC5tZSxcclxuICAud2FybmluZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5vbmxpbmUge1xyXG4gICAgY29sb3I6ICM4NkJCNzE7XHJcbiAgfVxyXG4gIFxyXG4gIC5vZmZsaW5lIHtcclxuICAgIGNvbG9yOiAjRTM4OTY4O1xyXG4gIH1cclxuICBcclxuICAubWUge1xyXG4gICAgY29sb3I6ICM5NEMyRUQ7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjMDBjOGU3O1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzIHtcclxuICAgIGNvbG9yOiAjOTI5NTlFO1xyXG4gIH1cclxuICBcclxuICAubmFtZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n    {{firstChar}}\n  </div>\n  <div class=\"about\">\n    <div class=\"name\">{{userFirstName}} {{userLastName}}\n      <i *ngIf=\"messageRead\" class=\"fa fa-circle warning\"></i>\n    </div>\n    <div class=\"status\">\n      <i class=\"fa fa-circle\" [ngClass]=\"userStatus\"></i>{{userStatus}}\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.ts ***!
  \***************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
        this.userNameAppear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.firstChar = this.userFirstName[0];
    }; // end ngOnInit
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserDetailsComponent.prototype, "userFirstName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserDetailsComponent.prototype, "userLastName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserDetailsComponent.prototype, "userStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserDetailsComponent.prototype, "messageRead", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UserDetailsComponent.prototype, "userNameAppear", void 0);
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/shared/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/shared/user-details/user-details.component.css")]
        })
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






//importing http client to make the request

var SocketService = /** @class */ (function () {
    function SocketService(http, cookieService) {
        var _this = this;
        this.http = http;
        this.cookieService = cookieService;
        this.url = 'http://localhost:3000';
        // events to be listened 
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end verifyUser
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("online-user-list", function (userList) {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        this.disconnectedSocket = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("disconnect", function () {
                    observer.next();
                }); // end Socket
            }); // end Observable
        }; // end disconnectSocket
        // end events to be listened
        // events to be emitted
        this.setUser = function (authToken) {
            _this.socket.emit("set-user", authToken);
        }; // end setUser
        this.markNotificationAsSeen = function (userDetails) {
            _this.socket.emit('mark-notification-as-seen', userDetails);
        }; // end markNotificationAsSeen
        this.notificationByUserId = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end notificationByUserId
        this.SendNotificationMessage = function (notificationMsgObject) {
            _this.socket.emit('notification-msg', notificationMsgObject);
        }; // end getNotificationMessage
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        //connection is being created
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    // events to be emitted
    // notification related methods 
    SocketService.prototype.getNotification = function (senderId, receiverId, skip) {
        return this.http.get(this.url + "/api/v1/notifications/get/for/user?senderId=" + senderId + "&receiverId=" + receiverId + "&skip=" + skip + "&authToken=" + this.cookieService.get('authtoken'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log('Data Received'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }; // end logout function
    SocketService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
    }; // END handleError
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\n.my-img{\r\n    padding:25%;\r\n}\r\n.bg-grey{\r\n    background:#F2F3F9;\r\n}\r\n.col-md-6{\r\n    margin-top:-5%;\r\n}\r\n.card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n}\r\n.card-signin {\r\n    padding: 2rem;\r\n}\r\n.card-body{\r\n    padding:2rem;\r\n}\r\n.form-signin {\r\n    width: 100%;\r\n}\r\n.form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n    width: 70%;\r\n}\r\n.form-group input{\r\n    border-radius:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0FBQ0Y7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQiw4Q0FBOEM7QUFDbEQ7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcclxuICB9XHJcbi5teS1pbWd7XHJcbiAgICBwYWRkaW5nOjI1JTtcclxufVxyXG4uYmctZ3JleXtcclxuICAgIGJhY2tncm91bmQ6I0YyRjNGOTtcclxufVxyXG4uY29sLW1kLTZ7XHJcbiAgICBtYXJnaW4tdG9wOi01JTtcclxufVxyXG4uY2FyZC1zaWduaW4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4ge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzoycmVtO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgaW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOjJyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand pointer\" (click)=\"goToHome()\"><img src=\"assets/img/logo.png\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link pointer\" (click)=\"goToHome()\">HOME</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"goToSignIn()\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> LOGIN</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link pointer\" (click)=\"goToSignUp()\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> SIGNUP</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</section>\n<div class=\"container-fluid bg-grey\">\n<div class=\"row align-items-center  justify-content-center\">\n  <div class=\"col-md-6 text-center\">\n    <img src=\"assets/img/forgot-password.svg\" class=\"img-fluid my-img\">\n  </div>\n  <div class=\"col-md-6 order-first order-md-6\">\n    <div class=\"card card-signin\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title text-center\">Forgot Password?</h5>\n        <div class=\"form-signin\">\n          <div class=\"form-group\">\n            <p>Please enter your registered email here</p>\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter registered email\" required autofocus>\n          </div>\n          <div class=\"row justify-content-center\">\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" (click)=\"forgotPasswordFunction()\">Send</button>\n          </div>\n          <hr>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<section id=\"footer\">\n<img src=\"assets/img/wave2.png\" class=\"footer-img\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 footer-box\">\n      <img src=\"assets/img/logo.png\">\n    </div>\n  </div>\n  <p class=\"copyright\">To Do List Management System | 2019</p>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(appService, router, toastr, cookieService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.goToSignUp = function () {
            _this.router.navigate(['/signup']);
        };
        this.goToSignIn = function () {
            _this.router.navigate(['/login']);
        };
        this.goToHome = function () {
            _this.router.navigate(['/home']);
        };
        this.forgotPasswordFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('Please enter email.');
            }
            else {
                var data = {
                    email: _this.email
                };
                _this.appService.forgotPasswordFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        _this.toastr.success('Please check your email inbox to retrieve password.');
                        setTimeout(function () {
                            _this.router.navigate(['/login']);
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('Some error occured!');
                });
            } // end condition
        }; // end forgotPasswordFunction
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\n.my-img{\r\n    padding:30%;\r\n}\r\n.bg-grey{\r\n    background:#F2F3F9;\r\n}\r\n.col-md-6{\r\n    margin-top:-5%;\r\n}\r\n.card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n}\r\n.card-signin {\r\n    padding: 2rem;\r\n}\r\n.card-body{\r\n    padding:2rem;\r\n}\r\n.form-signin {\r\n    width: 100%;\r\n}\r\n.form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n    width: 70%;\r\n}\r\n.form-group input{\r\n    border-radius:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtBQUNGO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsOENBQThDO0FBQ2xEO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0taW5wdXQtcGFkZGluZy14OiAxLjVyZW07XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteTogLjc1cmVtO1xyXG4gIH1cclxuLm15LWltZ3tcclxuICAgIHBhZGRpbmc6MzAlO1xyXG59XHJcbi5iZy1ncmV5e1xyXG4gICAgYmFja2dyb3VuZDojRjJGM0Y5O1xyXG59XHJcbi5jb2wtbWQtNntcclxuICAgIG1hcmdpbi10b3A6LTUlO1xyXG59XHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOjJyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6MnJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand pointer\" (click)=\"goToHome()\"><img src=\"assets/img/logo.png\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link pointer\" (click)=\"goToHome()\">HOME</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> LOGIN</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link pointer\" (click)=\"goToSignUp()\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> SIGNUP</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</section>\n<div class=\"container-fluid bg-grey\">\n  <div class=\"row align-items-center  justify-content-center\">\n    <div class=\"col-md-6 text-center\">\n      <img src=\"assets/img/login.svg\" class=\"img-fluid my-img\">\n    </div>\n    <div class=\"col-md-6 order-first order-md-6\">\n      <div class=\"card card-signin\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Login</h5>\n          <div class=\"form-signin\">\n            <div class=\"form-group\">\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter email\" required autofocus>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\"  placeholder=\"Password\" required> \n            </div>\n            <div class=\"custom-control custom-checkbox mb-3\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n              <label class=\"custom-control-label\" for=\"customCheck1\">Remember Password</label>\n            </div>\n            <a (click)=\"goToForgotPassword()\" style=\"cursor:pointer; color:darkblue;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgot Password?</a><br><br>\n            <div class=\"row justify-content-center\">\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" (click)=\"signinFunction()\">Login</button>\n            </div>              \n            <hr>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<section id=\"footer\">\n  <img src=\"assets/img/wave2.png\" class=\"footer-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 footer-box\">\n        <img src=\"assets/img/logo.png\">\n      </div>\n    </div>\n    <p class=\"copyright\">To Do List Management System | 2019</p>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr, cookieService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.goToSignUp = function () {
            _this.router.navigate(['/signup']);
        };
        this.goToForgotPassword = function () {
            _this.router.navigate(['/forgot-password']);
        };
        this.goToHome = function () {
            _this.router.navigate(['/home']);
        };
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('Please enter email.');
            }
            else if (!_this.password) {
                _this.toastr.warning('Please enter password.');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        _this.cookieService.set('authtoken', apiResponse.data.authToken);
                        _this.cookieService.set('receiverId', apiResponse.data.userDetails.userId);
                        _this.cookieService.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.router.navigate(['/dashboard']);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('Some error occured!');
                });
            } // end condition
        }; // end signinFunction
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\n.my-img{\r\n    padding:25%;\r\n}\r\n.bg-grey{\r\n    background:#F2F3F9;\r\n}\r\n.col-md-6{\r\n    margin-top:-5%;\r\n}\r\n.card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n}\r\n.card-signin {\r\n    padding: 2rem;\r\n}\r\n.card-body{\r\n    padding:2rem;\r\n}\r\n.form-signin {\r\n    width: 100%;\r\n}\r\n.form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n    width: 70%;\r\n}\r\n.form-group input{\r\n    border-radius:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtBQUNGO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsOENBQThDO0FBQ2xEO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0taW5wdXQtcGFkZGluZy14OiAxLjVyZW07XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteTogLjc1cmVtO1xyXG4gIH1cclxuLm15LWltZ3tcclxuICAgIHBhZGRpbmc6MjUlO1xyXG59XHJcbi5iZy1ncmV5e1xyXG4gICAgYmFja2dyb3VuZDojRjJGM0Y5O1xyXG59XHJcbi5jb2wtbWQtNntcclxuICAgIG1hcmdpbi10b3A6LTUlO1xyXG59XHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOjJyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6MnJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n    <nav class=\"navbar navbar-expand-lg navbar-light\">\n      <a class=\"navbar-brand pointer\" (click)=\"goToHome()\"><img src=\"assets/img/logo.png\"></a>\n    </nav>\n  </section>\n  <div class=\"container-fluid bg-grey\">\n  <div class=\"row align-items-center  justify-content-center\">\n    <div class=\"col\">\n      <div class=\"card card-signin\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Enter New Password</h5>\n          <div class=\"form-signin\">\n            <div class=\"form-group\">\n              <p>Please enter your new password here</p>\n              <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\"  placeholder=\"Password\" required> \n            </div>\n            <div class=\"row justify-content-center\">\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" (click)=\"forgotPasswordFunction()\">Confirm</button>\n            </div>\n            <hr>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  <section id=\"footer\">\n  <img src=\"assets/img/wave2.png\" class=\"footer-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 footer-box\">\n        <img src=\"assets/img/logo.png\">\n      </div>\n    </div>\n    <p class=\"copyright\">To Do List Management System | 2019</p>\n  </div>\n  </section>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(appService, router, toastr, cookieService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.goToHomr = function () {
            _this.router.navigate(['/home']);
        };
        this.forgotPasswordFunction = function () {
            if (!_this.password) {
                _this.toastr.warning('Please enter password.');
            }
            else {
                var data = {
                    email: _this.password
                };
                _this.appService.forgotPasswordFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        _this.toastr.success('Password updated successfully. Login to continue.');
                        setTimeout(function () {
                            _this.router.navigate(['/login']);
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('Some error occured!');
                });
            } // end condition
        }; // end resetPasswordFunction
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n  }\r\n.my-img{\r\n    padding:10%;\r\n}\r\n.bg-grey{\r\n    background:#F2F3F9;\r\n}\r\n.col-md-6{\r\n    margin-top:5%;\r\n    margin-bottom:5%;\r\n}\r\n.card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n}\r\n.card-signin {\r\n    padding: 2rem;\r\n}\r\n.card-body{\r\n    padding:2rem;\r\n}\r\n.form-signin {\r\n    width: 100%;\r\n}\r\n.form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n    width: 70%;\r\n}\r\n.form-group input{\r\n    border-radius:2rem;\r\n}\r\n.input-group > .form-control:not(:first-child){\r\n    border-radius:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0FBQ0Y7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQiw4Q0FBOEM7QUFDbEQ7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0taW5wdXQtcGFkZGluZy14OiAxLjVyZW07XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteTogLjc1cmVtO1xyXG4gIH1cclxuLm15LWltZ3tcclxuICAgIHBhZGRpbmc6MTAlO1xyXG59XHJcbi5iZy1ncmV5e1xyXG4gICAgYmFja2dyb3VuZDojRjJGM0Y5O1xyXG59XHJcbi5jb2wtbWQtNntcclxuICAgIG1hcmdpbi10b3A6NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjUlO1xyXG59XHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOjJyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6MnJlbTtcclxufVxyXG4uaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgYm9yZGVyLXJhZGl1czoycmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n    <nav class=\"navbar navbar-expand-lg navbar-light\">\n      <a class=\"navbar-brand pointer\" (click)=\"goToHome()\"><img src=\"assets/img/logo.png\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link pointer\" (click)=\"goToHome()\">HOME</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link pointer\" (click)=\"goToSignIn()\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> LOGIN</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/signup']\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> SIGNUP</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </section>\n  <div class=\"container-fluid bg-grey\">\n    <div class=\"row align-items-center  justify-content-center\">\n      <div class=\"col-md-6 text-center\">\n        <img src=\"assets/img/signup.svg\" class=\"img-fluid my-img\">\n      </div>\n      <div class=\"col-md-6 order-first order-md-6\">\n          <div class=\"card card-signin\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-center\">Sign up</h5>\n                <div class=\"form-signin\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"Enter FirstName\" required autofocus>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"Enter LastName\" required>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" required>\n                  </div>\n                  <div class=\"form-group\" style=\"border-radius:2rem;\"> \n                    <international-phone-number [(ngModel)]=\"mobile\" placeholder=\"Enter phone number\" [maxlength]=\"20\" [defaultCountry]=\"'in'\" required></international-phone-number>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" required>\n                  </div>\n                  <div class=\"row justify-content-center\">\n                    <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" (click)=\"signupFunction()\">Register</button>\n                  </div>\n                  <hr>\n                </div>\n              </div>\n            </div>\n      </div>\n    </div>\n  </div>\n  <section id=\"footer\">\n    <img src=\"assets/img/wave2.png\" class=\"footer-img\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 footer-box\">\n          <img src=\"assets/img/logo.png\">\n        </div>\n      </div>\n      <p class=\"copyright\">To Do List Management System | 2019</p>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignIn = function () {
            _this.router.navigate(['/login']);
        };
        this.goToHome = function () {
            _this.router.navigate(['/home']);
        };
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.warning('Please enter first name.');
            }
            else if (!_this.lastName) {
                _this.toastr.warning('Please enter last name.');
            }
            else if (!_this.mobile) {
                _this.toastr.warning('Please enter mobile.');
            }
            else if (!_this.email) {
                _this.toastr.warning('Please enter email.');
            }
            else if (!_this.password) {
                _this.toastr.warning('Please enter password.');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobile: _this.mobile,
                    email: _this.email,
                    password: _this.password,
                };
                console.log(data);
                _this.appService.signupFunction(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        _this.toastr.success('Signup successful');
                        setTimeout(function () {
                            _this.goToSignIn();
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signupFunction
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _coretech_ngx_international_phone_number_dist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coretech/ngx-international-phone-number/dist */ "./node_modules/@coretech/ngx-international-phone-number/dist/index.js");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");










var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _coretech_ngx_international_phone_number_dist__WEBPACK_IMPORTED_MODULE_8__["InternationalPhoneNumberModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
                    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"] },
                ])
            ],
            declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sanjay1\Desktop\ToDoList\to-do-list\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map