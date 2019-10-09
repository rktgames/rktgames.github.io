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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_tools_json_online_free_db_online_free_db_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tools/json/online-free-db/online-free-db.component */ "./src/app/components/tools/json/online-free-db/online-free-db.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker.component */ "./src/app/components/apps/time-tracker/time-tracker.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_dashboard_time_tracker_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component.ts");
/* harmony import */ var _components_invalid_invalid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/invalid/invalid.component */ "./src/app/components/invalid/invalid.component.ts");
/* harmony import */ var _components_tools_clock_timestamp_timestamp_tools_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tools/clock/timestamp/timestamp-tools.component */ "./src/app/components/tools/clock/timestamp/timestamp-tools.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_dashboard_time_tracker_report_time_tracker_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'tools/json/online-db', component: _components_tools_json_online_free_db_online_free_db_component__WEBPACK_IMPORTED_MODULE_2__["OnlineFreeDbComponent"] },
    { path: 'tools/clock/timestamp', component: _components_tools_clock_timestamp_timestamp_tools_component__WEBPACK_IMPORTED_MODULE_7__["timestampToolsComponent"] },
    { path: 'apps/time-tracker', component: _components_apps_time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_3__["TimeTrackerComponent"] },
    { path: 'apps/time-tracker/:id', component: _components_apps_time_tracker_time_tracker_dashboard_time_tracker_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["TimeTrackerDashboardComponent"] },
    { path: 'apps/time-tracker/:id/report', component: _components_apps_time_tracker_time_tracker_dashboard_time_tracker_report_time_tracker_report_component__WEBPACK_IMPORTED_MODULE_8__["TimeTrackerReportComponent"] },
    { path: '**', component: _components_invalid_invalid_component__WEBPACK_IMPORTED_MODULE_6__["InvalidComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <!--nav class=\"navbar navbar-light navbar-expand-lg\"-->\n    <nav class=\"navbar navbar-light\">\n        <a class=\"navbar-brand\" href=\"//livecode.work\">\n            <img src=\"assets/img/logo.png\" border=\"0\" height=\"50px\" alt=\"livecode.work\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNav()\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div [ngClass]=\"this.navStatus\" id=\"navbarNav\">\n            <ul class=\"navbar-nav bg-white\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/apps/time-tracker']\" (click)=\"toggleNav()\">Time Tracker</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/tools/json/online-db']\" (click)=\"toggleNav()\">Json DB</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    <div class=\"page-header\" id=\"banner\"></div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <footer>\n        <div class=\"row mt-5\">\n            <div class=\"col-lg-12\">\n                <div class=\"float-left\">&copy; <a href=\"//livecode.work/\" rel=\"nofollow\">livecode.work</a></div>\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-bar {\n  z-index: 9999;\n  margin-top: 8px;\n  font-size: 130%; }\n  .menu-bar li {\n    border-bottom: 1px solid grey; }\n  .menu-bar li :hover {\n      background-color: #F8F9FA;\n      font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2lzaC9zYW5kYm94L2xhYi9haW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFRSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixnQkFBZSxFQUNsQjtFQVhEO0lBRVEsOEJBQTZCLEVBS2hDO0VBUEw7TUFJWSwwQkFBeUI7TUFDekIsa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYmFyIHtcbiAgICBsaSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICAgICAgICA6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjlGQTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTMwJTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'aio';
        this.navStatus = 'collapse navbar-collapse menu-bar';
    }
    AppComponent.prototype.toggleNav = function () {
        (this.navStatus == 'collapse navbar-collapse menu-bar') ? this.navStatus = 'navbar-collapse menu-bar' : this.navStatus = 'collapse navbar-collapse menu-bar';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker.component */ "./src/app/components/apps/time-tracker/time-tracker.component.ts");
/* harmony import */ var _components_tools_json_online_free_db_online_free_db_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tools/json/online-free-db/online-free-db.component */ "./src/app/components/tools/json/online-free-db/online-free-db.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_dashboard_time_tracker_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_dashboard_time_tracker_log_time_tracker_log_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker-dashboard/time-tracker-log/time-tracker-log.component */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-log/time-tracker-log.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_dashboard_time_tracker_interact_time_tracker_interact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker-dashboard/time-tracker-interact/time-tracker-interact.component */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-interact/time-tracker-interact.component.ts");
/* harmony import */ var _components_invalid_invalid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/invalid/invalid.component */ "./src/app/components/invalid/invalid.component.ts");
/* harmony import */ var _components_tools_clock_timestamp_timestamp_tools_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tools/clock/timestamp/timestamp-tools.component */ "./src/app/components/tools/clock/timestamp/timestamp-tools.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_dashboard_time_tracker_report_time_tracker_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_dashboard_time_tracker_report_time_tracker_report_daily_time_tracker_report_daily_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-daily/time-tracker-report-daily.component */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-daily/time-tracker-report-daily.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_dashboard_time_tracker_report_time_tracker_report_weekly_time_tracker_report_weekly_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-weekly/time-tracker-report-weekly.component */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-weekly/time-tracker-report-weekly.component.ts");
/* harmony import */ var _components_apps_time_tracker_time_tracker_dashboard_time_tracker_report_time_tracker_report_monthly_time_tracker_report_monthly_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-monthly/time-tracker-report-monthly.component */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-monthly/time-tracker-report-monthly.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_apps_time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_7__["TimeTrackerComponent"],
                _components_tools_json_online_free_db_online_free_db_component__WEBPACK_IMPORTED_MODULE_8__["OnlineFreeDbComponent"],
                _components_tools_clock_timestamp_timestamp_tools_component__WEBPACK_IMPORTED_MODULE_13__["timestampToolsComponent"],
                _components_apps_time_tracker_time_tracker_dashboard_time_tracker_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["TimeTrackerDashboardComponent"],
                _components_apps_time_tracker_time_tracker_dashboard_time_tracker_log_time_tracker_log_component__WEBPACK_IMPORTED_MODULE_10__["TimeTrackerLogComponent"],
                _components_apps_time_tracker_time_tracker_dashboard_time_tracker_interact_time_tracker_interact_component__WEBPACK_IMPORTED_MODULE_11__["TimeTrackerInteractComponent"],
                _components_apps_time_tracker_time_tracker_dashboard_time_tracker_report_time_tracker_report_component__WEBPACK_IMPORTED_MODULE_14__["TimeTrackerReportComponent"],
                _components_apps_time_tracker_time_tracker_dashboard_time_tracker_report_time_tracker_report_daily_time_tracker_report_daily_component__WEBPACK_IMPORTED_MODULE_15__["TimeTrackerReportDailyComponent"],
                _components_apps_time_tracker_time_tracker_dashboard_time_tracker_report_time_tracker_report_weekly_time_tracker_report_weekly_component__WEBPACK_IMPORTED_MODULE_16__["TimeTrackerReportWeeklyComponent"],
                _components_invalid_invalid_component__WEBPACK_IMPORTED_MODULE_12__["InvalidComponent"],
                _components_apps_time_tracker_time_tracker_dashboard_time_tracker_report_time_tracker_report_monthly_time_tracker_report_monthly_component__WEBPACK_IMPORTED_MODULE_17__["TimeTrackerReportMonthlyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-time-tracker-interact></app-time-tracker-interact>\n<app-time-tracker-log></app-time-tracker-log>"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwcy90aW1lLXRyYWNrZXIvdGltZS10cmFja2VyLWRhc2hib2FyZC90aW1lLXRyYWNrZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TimeTrackerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackerDashboardComponent", function() { return TimeTrackerDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _time_tracker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-tracker.service */ "./src/app/components/apps/time-tracker/time-tracker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeTrackerDashboardComponent = /** @class */ (function () {
    function TimeTrackerDashboardComponent(timeTrackerService, route) {
        this.timeTrackerService = timeTrackerService;
        this.route = route;
        this.todayDetail = null;
    }
    TimeTrackerDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.timeTrackerService.setId(this.route.snapshot.paramMap.get('id'))) {
            this.timeTrackerService.getDailyTimesheet()
                .then(function (data) {
                _this.todayDetail = data;
            });
        }
    };
    TimeTrackerDashboardComponent.prototype.receiver = function (data) {
        console.log(data);
    };
    TimeTrackerDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-tracker-dashboard',
            template: __webpack_require__(/*! ./time-tracker-dashboard.component.html */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./time-tracker-dashboard.component.scss */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_time_tracker_service__WEBPACK_IMPORTED_MODULE_2__["TimeTrackerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TimeTrackerDashboardComponent);
    return TimeTrackerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-interact/time-tracker-interact.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-interact/time-tracker-interact.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"buttonStatus.entry && loader\">\n    <button class=\"btn btn-outline-primary btn-lg\" (click)=\"track('entry')\">{{staticContent.button.entry}}</button>\n    <button type=\"button\" class=\"btn btn-info float-right btn-sm btn-report\" (click)=\"redirectToReport()\">\n        Reports\n    </button>\n</div>\n<div *ngIf=\"loader\">\n    <button *ngIf=\"buttonStatus.out\" class=\"btn btn-outline-warning btn-lg\"\n        (click)=\"track('breakstart')\">{{staticContent.button.breakStart}}</button>\n    <button *ngIf=\"buttonStatus.in\" class=\"btn btn-outline-primary btn-lg\"\n        (click)=\"track('breakend')\">{{staticContent.button.breakEnd}}</button>\n    <button *ngIf=\"buttonStatus.exit\" class=\"btn btn-outline-danger btn-sm\"\n        (click)=\"track('exit')\">{{staticContent.button.exit}}</button>\n    <button *ngIf=\"!buttonStatus.entry\" type=\"button\" class=\"btn btn-info float-right btn-sm btn-report\" (click)=\"redirectToReport()\">\n        Reports\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-interact/time-tracker-interact.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-interact/time-tracker-interact.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-report {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2lzaC9zYW5kYm94L2xhYi9haW8vc3JjL2FwcC9jb21wb25lbnRzL2FwcHMvdGltZS10cmFja2VyL3RpbWUtdHJhY2tlci1kYXNoYm9hcmQvdGltZS10cmFja2VyLWludGVyYWN0L3RpbWUtdHJhY2tlci1pbnRlcmFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwcy90aW1lLXRyYWNrZXIvdGltZS10cmFja2VyLWRhc2hib2FyZC90aW1lLXRyYWNrZXItaW50ZXJhY3QvdGltZS10cmFja2VyLWludGVyYWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1yZXBvcnQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-interact/time-tracker-interact.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-interact/time-tracker-interact.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: TimeTrackerInteractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackerInteractComponent", function() { return TimeTrackerInteractComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_tracker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../time-tracker.service */ "./src/app/components/apps/time-tracker/time-tracker.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeTrackerInteractComponent = /** @class */ (function () {
    function TimeTrackerInteractComponent(timeTrackerService, route, router) {
        this.timeTrackerService = timeTrackerService;
        this.route = route;
        this.router = router;
        this.loader = false;
        this.buttonStatus = {
            entry: true,
            in: false,
            out: false,
            exit: false
        };
        this.staticContent = {
            button: {
                entry: 'Login',
                exit: 'Logout',
                breakStart: 'Swipe Out',
                breakEnd: 'Swipe In'
            }
        };
    }
    TimeTrackerInteractComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeTrackerService.receiveData.subscribe(function (res) {
            var data = (res && res.today) ? res.today : res;
            if (typeof data === 'object' && data) {
                switch (true) {
                    case (data['insideOffice'].entry == ''):
                        _this.buttonStatus = _this.swipeOut();
                        break;
                    case (data['insideOffice'].exit != ''):
                        _this.buttonStatus = _this.swipeOut();
                        break;
                    case (data['recent'].start != ''):
                        _this.buttonStatus = _this.breakStart();
                        break;
                    case (data['recent'].start == ''):
                        _this.buttonStatus = _this.swipeIn();
                        break;
                }
                _this.loader = true;
            }
        });
        setTimeout(function () {
            _this.loader = true;
        }, 3000);
    };
    TimeTrackerInteractComponent.prototype.ngOnChanges = function () {
    };
    TimeTrackerInteractComponent.prototype.swipeIn = function () {
        return {
            entry: false,
            in: false,
            out: true,
            exit: true
        };
    };
    TimeTrackerInteractComponent.prototype.breakStart = function () {
        return {
            entry: false,
            in: true,
            out: false,
            exit: true
        };
    };
    TimeTrackerInteractComponent.prototype.breakEnd = function () {
        return {
            entry: false,
            in: false,
            out: true,
            exit: true
        };
    };
    TimeTrackerInteractComponent.prototype.swipeOut = function () {
        return {
            entry: true,
            in: false,
            out: false,
            exit: false
        };
    };
    TimeTrackerInteractComponent.prototype.track = function (param) {
        switch (param) {
            case 'entry':
                this.timeTrackerService.swipeIn();
                break;
            case 'breakstart':
                this.timeTrackerService.break();
                break;
            case 'breakend':
                this.timeTrackerService.break();
                break;
            case 'exit':
                this.timeTrackerService.swipeOut();
                break;
        }
    };
    TimeTrackerInteractComponent.prototype.redirectToReport = function () {
        this.route.snapshot.paramMap.get('id');
        this.router.navigate(['apps/time-tracker', this.route.snapshot.paramMap.get('id'), 'report']);
    };
    TimeTrackerInteractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-tracker-interact',
            template: __webpack_require__(/*! ./time-tracker-interact.component.html */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-interact/time-tracker-interact.component.html"),
            styles: [__webpack_require__(/*! ./time-tracker-interact.component.scss */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-interact/time-tracker-interact.component.scss")]
        }),
        __metadata("design:paramtypes", [_time_tracker_service__WEBPACK_IMPORTED_MODULE_1__["TimeTrackerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TimeTrackerInteractComponent);
    return TimeTrackerInteractComponent;
}());



/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-log/time-tracker-log.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-log/time-tracker-log.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"dailyLog.swipeIn != ''; else notLogedIn\">\n  <div class=\"row\">\n    <div class=\"col-md-3 col-6 right\">Login</div>\n    <div class=\"col-6 right\">{{dailyLog.swipeIn}}</div>\n  </div>\n  <div class=\"row\" *ngIf=\"dailyLog.swipeOut != ''\">\n    <div class=\"col-md-3 col-6 right\">Logout</div>\n    <div class=\"col-6 right\">{{dailyLog.swipeOut}}</div>\n  </div>\n  <div class=\"row\" *ngIf=\"dailyLog.totalBreakTime != ''\">\n    <div class=\"col-md-3 col-6 right\">Total Breaks</div>\n    <div class=\"col-6 right\">{{dailyLog.totalBreakTime}}</div>\n  </div>\n  <div class=\"row\" *ngIf=\"dailyLog.totalWorkingTime != ''\">\n    <div class=\"col-md-3 col-6 right\">Working Hours\n      <div *ngIf=\"networkAvailability && breakDuration == null && officeHourComplete === false\" \n        class=\"spinner-grow text-primary float-right\" style=\"width: 1rem; height: 1rem;\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div *ngIf=\"networkAvailability && breakDuration == null && officeHourComplete === true\"\n        class=\"spinner-grow text-success float-right\" style=\"width: 1rem; height: 1rem;\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n    <div class=\"col-6 right\">{{dailyLog.totalWorkingTime}}</div>\n  </div>\n  <div class=\"row\" *ngIf=\"dailyLog.totalBreakTime != '' && dailyLog.swipeOut == ''\">\n    <div class=\"col-md-3 col-6 right\">Remaining Time</div>\n    <div class=\"col-6 right\" [innerHTML]=\"dailyLog.timeLeft\"></div>\n  </div>\n  <div class=\"row mt-3\" *ngIf=\"dailyLog.breaks.length > 0\">\n    <div class=\"col-12 font-weight-bold\">Breaks</div>\n  </div>\n  <div class=\"row\" *ngFor=\"let item of dailyLog.breaks\">\n    <div class=\"col-md-3 col-6 right\">{{item.start}}\n      <div *ngIf=\"networkAvailability && breakDuration != null && item.end == ''\" [ngClass]=\"breakWarning\" style=\"width: 1rem; height: 1rem;\"\n        role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n    <div class=\"col-5 right\">{{item.end ? item.end : breakDuration}}</div>\n  </div>\n</section>\n<ng-template #notLogedIn>\n  <div class=\"row\" *ngIf=\"!loading\">\n    <div class=\"col-12\">No Entry Found !</div>\n  </div>\n  <div class=\"row\" *ngIf=\"loading\">\n    <div class=\"col-12\">\n      <div class=\"spinner-border text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-log/time-tracker-log.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-log/time-tracker-log.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwcy90aW1lLXRyYWNrZXIvdGltZS10cmFja2VyLWRhc2hib2FyZC90aW1lLXRyYWNrZXItbG9nL3RpbWUtdHJhY2tlci1sb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-log/time-tracker-log.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-log/time-tracker-log.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: TimeTrackerLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackerLogComponent", function() { return TimeTrackerLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_tracker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../time-tracker.service */ "./src/app/components/apps/time-tracker/time-tracker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeTrackerLogComponent = /** @class */ (function () {
    function TimeTrackerLogComponent(timeTrackerService) {
        this.timeTrackerService = timeTrackerService;
        this.param = null;
        this.networkAvailability = false;
        this.loading = true;
        this.breakWarning = '';
        this.breakDuration = null;
        this.officeHourComplete = false;
        this.dailyLog = { swipeIn: '', swipeOut: '', breaks: [], totalBreakTime: '', totalWorkingTime: '', timeLeft: '' };
    }
    TimeTrackerLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeTrackerService.receiveData.subscribe(function (res) {
            var data = (res && res.today) ? res.today : res;
            if (data == null) {
                return false;
            }
            _this.param = data;
            _this.logFormat(true);
        });
        this.networkAvailability = window.navigator.onLine;
        setTimeout(function () {
            _this.networkAvailability = window.navigator.onLine;
            _this.loading = false;
        }, 3000);
    };
    TimeTrackerLogComponent.prototype.formatTimestamp = function (ts) {
        var now = new Date(ts), ap = now.getHours() >= 12 ? 'pm' : 'am', h = now.getHours() < 10 ? '0' + now.getHours() : (now.getHours() > 12) ? (((now.getHours() - 12) < 10) ? '0' + (now.getHours() - 12) : (now.getHours() - 12)) : now.getHours(), m = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes(), s = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
        return h + ':' + m + ':' + s + ' ' + ap;
    };
    TimeTrackerLogComponent.prototype.timeDifference = function (difference) {
        var hoursDifference = 0, minutesDifference = 0, secondsDifference = 0, dtString = '';
        hoursDifference = Math.floor(difference / 1000 / 60 / 60);
        difference -= hoursDifference * 1000 * 60 * 60;
        minutesDifference = Math.floor(difference / 1000 / 60);
        difference -= minutesDifference * 1000 * 60;
        secondsDifference = Math.floor(difference / 1000);
        if (hoursDifference > 0) {
            dtString = (hoursDifference < 10 ? '0' + hoursDifference : hoursDifference) + ':';
        }
        dtString += minutesDifference < 10 ? '0' + minutesDifference : minutesDifference;
        dtString += ':' + ((secondsDifference < 10) ? '0' + secondsDifference : secondsDifference);
        return dtString;
    };
    TimeTrackerLogComponent.prototype.finalHours = function () {
        var swipeIn = this.param['insideOffice'].entry, swipeOut = this.param['insideOffice'].exit, totalBreakTime = 0;
        this.networkAvailability = window.navigator.onLine;
        swipeOut = (swipeOut == '') ? new Date().getTime() : swipeOut;
        this.param['breaks'].forEach(function (val) {
            if (val.end == '') {
                val.end = new Date().getTime();
            }
            totalBreakTime += val.end - val.start;
        });
        if (this.param['recent'].start != '') {
            this.breakDuration = this.timeDifference(new Date().getTime() - this.param['recent'].start);
            if (((new Date().getTime() - this.param['recent'].start) / 60000) > 30) {
                this.breakWarning = 'spinner-grow text-danger float-right';
            }
            else {
                this.breakWarning = 'spinner-grow text-warning float-right';
            }
            totalBreakTime += new Date().getTime() - this.param['recent'].start;
        }
        else if (this.param['insideOffice'].exit == '') {
            this.breakDuration = null;
        }
        if ((((swipeOut - swipeIn) - totalBreakTime) > (8 * 60 * 60 * 1000)) && (this.param['insideOffice'].exit == '')) {
            this.officeHourComplete = true;
        }
        else if (this.param['insideOffice'].exit == '') {
            this.officeHourComplete = false;
        }
        else if (this.param['insideOffice'].exit != '') {
            this.officeHourComplete = null;
        }
        this.dailyLog.totalWorkingTime = this.timeDifference((swipeOut - swipeIn) - totalBreakTime);
        this.dailyLog.totalBreakTime = this.timeDifference(totalBreakTime);
        if (((8 * 60 * 60 * 1000) - ((swipeOut - swipeIn) - totalBreakTime)) > 0) {
            this.dailyLog.timeLeft = this.timeDifference((8 * 60 * 60 * 1000) - ((swipeOut - swipeIn) - totalBreakTime)) +
                "<br />\n        <span class=\"text-muted\"><b>" +
                this.formatTimestamp(swipeOut + ((8 * 60 * 60 * 1000) - ((swipeOut - swipeIn) - totalBreakTime))) +
                "</b> (exit time)</span>";
        }
        else {
            this.dailyLog.timeLeft = '<span class="text-success">Working hours Completed</span>';
        }
        return true;
    };
    TimeTrackerLogComponent.prototype.logFormat = function (data) {
        var _this = this;
        if (typeof this.param === 'object' && this.param && this.param['insideOffice'].entry != '') {
            if (this.param['insideOffice'].exit == '') {
                setInterval(function () {
                    _this.finalHours();
                }, 1000);
            }
            else {
                this.finalHours();
                this.breakDuration = null;
                this.officeHourComplete = null;
            }
            this.dailyLog.swipeIn = (this.param['insideOffice'].entry != '') ? this.formatTimestamp(this.param['insideOffice'].entry) : '';
            this.dailyLog.swipeOut = (this.param['insideOffice'].exit != '') ? this.formatTimestamp(this.param['insideOffice'].exit) : '';
            this.dailyLog.breaks = JSON.parse(JSON.stringify(this.param['breaks']));
            this.dailyLog.breaks.map(function (val) {
                if (val.end != '') {
                    val.end = _this.timeDifference(((val.end - val.start) < 1) ? 0 : (val.end - val.start));
                }
                val.start = _this.formatTimestamp(val.start);
            });
            if (this.param['recent'].start != '') {
                this.dailyLog.breaks.push({
                    start: this.formatTimestamp(this.param['recent'].start),
                    end: ''
                });
            }
            this.dailyLog.breaks = this.dailyLog.breaks.reverse();
        }
        return true;
    };
    TimeTrackerLogComponent.prototype.ngOnChanges = function () {
        //this.logFormat();
    };
    TimeTrackerLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-tracker-log',
            template: __webpack_require__(/*! ./time-tracker-log.component.html */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-log/time-tracker-log.component.html"),
            styles: [__webpack_require__(/*! ./time-tracker-log.component.scss */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-log/time-tracker-log.component.scss")]
        }),
        __metadata("design:paramtypes", [_time_tracker_service__WEBPACK_IMPORTED_MODULE_1__["TimeTrackerService"]])
    ], TimeTrackerLogComponent);
    return TimeTrackerLogComponent;
}());



/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-daily/time-tracker-report-daily.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-daily/time-tracker-report-daily.component.html ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"pagination\">\n    <li class=\"page-item\">\n        <a class=\"page-link cal-nav text-primary\" aria-label=\"Previous\" title=\"Previous Month\"\n            (click)=\"calNav('day', 'prev');\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n    </li>\n    <li class=\"page-item\"><a class=\"page-link cal-nav-month\">{{today}}</a></li>\n    <li class=\"page-item\">\n        <a class=\"page-link cal-nav text-primary\" aria-label=\"Next\" title=\"Next Month\"\n            (click)=\"calNav('day', 'next');\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </li>\n</ul>\n\n<section *ngIf=\"dailyLog!= null && dailyLog.swipeIn != ''; else noTimesheet\">\n    <div class=\"row\">\n        <div class=\"col-md-3 col-6 right\">Login</div>\n        <div class=\"col-5 right\">{{dailyLog.insideOffice.entry | date: 'hh:mm:ss a'}}</div>\n    </div>\n    <div class=\"row\" *ngIf=\"dailyLog.swipeOut != ''\">\n        <div class=\"col-md-3 col-6 right\">Logout</div>\n        <div class=\"col-5 right\">{{(dailyLog.insideOffice.exit != '')?(dailyLog.insideOffice.exit | date: 'hh:mm:ss a'):'No Exit Data !'}}</div>\n    </div>\n    <div class=\"row\" *ngIf=\"dailyLog.totalBreakTime != ''\">\n        <div class=\"col-md-3 col-6 right\">Total Breaks</div>\n        <div class=\"col-5 right\">{{dailyLog.totalBreakTime}}</div>\n    </div>\n    <div class=\"row\" *ngIf=\"dailyLog.totalWorkingTime != ''\">\n        <div class=\"col-md-3 col-6 right\">Inside Office\n        </div>\n        <div class=\"col-5 right\">{{dailyLog.totalWorkingTime}}</div>\n    </div>\n    <div class=\"row\" *ngIf=\"dailyLog.breaks.length > 0\">\n        <div class=\"col-12 right\">Breaks</div>\n    </div>\n    <div class=\"row\" *ngFor=\"let break of dailyLog.breaks\">\n        <div class=\"col-md-3 col-6 right\">{{break.start | date: 'hh:mm:ss a'}}</div>\n        <div class=\"col-5 right\">{{break.diff}}</div>\n    </div>\n</section>\n<ng-template #noTimesheet>\n    <div class=\"row\">Daily Log Not exist for {{today}} !</div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-daily/time-tracker-report-daily.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-daily/time-tracker-report-daily.component.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cal-nav {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2lzaC9zYW5kYm94L2xhYi9haW8vc3JjL2FwcC9jb21wb25lbnRzL2FwcHMvdGltZS10cmFja2VyL3RpbWUtdHJhY2tlci1kYXNoYm9hcmQvdGltZS10cmFja2VyLXJlcG9ydC90aW1lLXRyYWNrZXItcmVwb3J0LWRhaWx5L3RpbWUtdHJhY2tlci1yZXBvcnQtZGFpbHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwcy90aW1lLXRyYWNrZXIvdGltZS10cmFja2VyLWRhc2hib2FyZC90aW1lLXRyYWNrZXItcmVwb3J0L3RpbWUtdHJhY2tlci1yZXBvcnQtZGFpbHkvdGltZS10cmFja2VyLXJlcG9ydC1kYWlseS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWwtbmF2IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-daily/time-tracker-report-daily.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-daily/time-tracker-report-daily.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: TimeTrackerReportDailyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackerReportDailyComponent", function() { return TimeTrackerReportDailyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_tracker_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../time-tracker-report.service */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeTrackerReportDailyComponent = /** @class */ (function () {
    function TimeTrackerReportDailyComponent(timeTrackerReportService) {
        this.timeTrackerReportService = timeTrackerReportService;
        this.dayCounter = 0;
        this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.today = this.getToday(new Date());
        this.dailyLog = null;
        this.dailyLog = this.timeTrackerReportService.getTimesheet('day', new Date());
        this.dailyLog = this.timeTrackerReportService.getDayDetails(this.dailyLog, new Date());
    }
    TimeTrackerReportDailyComponent.prototype.ngOnInit = function () { };
    TimeTrackerReportDailyComponent.prototype.calNav = function (type, action) {
        var date = new Date();
        switch (true) {
            case (type == 'day' && action == 'prev'):
                this.dayCounter -= 1;
                date.setDate(date.getDate() + this.dayCounter);
                this.today = this.getToday(date);
                this.dailyLog = this.timeTrackerReportService.getTimesheet('day', date);
                this.dailyLog = this.timeTrackerReportService.getDayDetails(this.dailyLog, date);
                break;
            case (type == 'day' && action == 'next'):
                this.dayCounter += 1;
                date.setDate(date.getDate() + this.dayCounter);
                this.today = this.getToday(date);
                this.dailyLog = this.timeTrackerReportService.getTimesheet('day', date);
                this.dailyLog = this.timeTrackerReportService.getDayDetails(this.dailyLog, date);
                break;
        }
        return true;
    };
    TimeTrackerReportDailyComponent.prototype.getToday = function (date) {
        return this.monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    };
    TimeTrackerReportDailyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-tracker-report-daily',
            template: __webpack_require__(/*! ./time-tracker-report-daily.component.html */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-daily/time-tracker-report-daily.component.html"),
            styles: [__webpack_require__(/*! ./time-tracker-report-daily.component.scss */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-daily/time-tracker-report-daily.component.scss")]
        }),
        __metadata("design:paramtypes", [_time_tracker_report_service__WEBPACK_IMPORTED_MODULE_1__["TimeTrackerReportService"]])
    ], TimeTrackerReportDailyComponent);
    return TimeTrackerReportDailyComponent;
}());



/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-monthly/time-tracker-report-monthly.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-monthly/time-tracker-report-monthly.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"pagination\">\n  <li class=\"page-item\">\n    <a class=\"page-link cal-nav text-primary\" aria-label=\"Previous\" title=\"Previous Month\"\n      (click)=\"calNav('month', 'prev');\">\n      <span aria-hidden=\"true\">&laquo;</span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n  </li>\n  <li class=\"page-item\"><a class=\"page-link cal-nav-month\">{{currentMonthYear}}</a></li>\n  <li class=\"page-item\">\n    <a class=\"page-link cal-nav text-primary\" aria-label=\"Next\" title=\"Next Month\" (click)=\"calNav('month', 'next');\">\n      <span aria-hidden=\"true\">&raquo;</span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </li>\n</ul>\n<div class=\"monthly-time-report\">\n  <div class=\"row justify-content-md-center cal\" *ngFor=\"let week of calender\">\n    <div class=\"col\" *ngFor=\"let day of week\">\n      <div class=\"text-center cal-head\" *ngIf=\"day.type == 'day'; else showDay\">\n        {{day.day}}\n      </div>\n      <ng-template #showDay>\n        <div class=\"cal-cell\">\n          <div class=\"cal-cell-content\" *ngIf=\"day.date > 0\">\n            <div class=\"cal-cell-date\">\n              <span class=\"badge badge-info float-right\">{{day.date}}</span>\n            </div>\n            <div *ngIf=\"(day.totalHour != 0 || day.totalBreak != 0)\" class=\"text-info font-weight-bold\">\n              {{day.totalHour}}</div>\n            <div *ngIf=\"(day.totalHour != 0 || day.totalBreak != 0)\" class=\"text-muted\">{{day.totalBreak}}</div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-monthly/time-tracker-report-monthly.component.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-monthly/time-tracker-report-monthly.component.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-tabs .nav-item a {\n  cursor: pointer; }\n  .nav-tabs .nav-item a.active {\n    cursor: default; }\n  .cal .cal-head {\n  border-left: 1px solid #DEE2E6;\n  border-top: 1px solid #DEE2E6;\n  font-size: 110%;\n  font-weight: bold;\n  background-color: #F8F9F9; }\n  .cal .cal-cell {\n  height: 50px;\n  border-left: 1px solid #DEE2E6;\n  border-top: 1px solid #DEE2E6;\n  overflow: hidden; }\n  .cal .cal-cell .cal-cell-content {\n    padding: 2px 2px 2px 5px; }\n  .cal .cal-cell .cal-cell-content .cal-cell-date {\n      height: 10px; }\n  .cal .cal-cell .cal-cell-content .cal-cell-date .badge {\n        line-height: 0.9;\n        padding-top: 3px; }\n  .monthly-time-report {\n  border-right: 1px solid #DEE2E6;\n  border-bottom: 1px solid #DEE2E6; }\n  .monthly-time-report .row .col {\n    padding: 0px; }\n  .monthly-time-report .row .col:first-child, .monthly-time-report .row .col:last-child {\n      background-color: #F8F9F9; }\n  .cal-nav {\n  cursor: pointer; }\n  .cal-nav-month {\n  cursor: default; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2lzaC9zYW5kYm94L2xhYi9haW8vc3JjL2FwcC9jb21wb25lbnRzL2FwcHMvdGltZS10cmFja2VyL3RpbWUtdHJhY2tlci1kYXNoYm9hcmQvdGltZS10cmFja2VyLXJlcG9ydC90aW1lLXRyYWNrZXItcmVwb3J0LW1vbnRobHkvdGltZS10cmFja2VyLXJlcG9ydC1tb250aGx5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksZ0JBQWUsRUFJbEI7RUFQVDtJQUtnQixnQkFBZSxFQUNsQjtFQUtiO0VBRVEsK0JBQThCO0VBQzlCLDhCQUE2QjtFQUM3QixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQiwwQkFBeUIsRUFDNUI7RUFQTDtFQVNRLGFBQVk7RUFDWiwrQkFBOEI7RUFDOUIsOEJBQTZCO0VBQzdCLGlCQUFnQixFQVduQjtFQXZCTDtJQWNZLHlCQUF3QixFQVEzQjtFQXRCVDtNQWdCZ0IsYUFBWSxFQUtmO0VBckJiO1FBa0JvQixpQkFBZ0I7UUFDaEIsaUJBQWdCLEVBQ25CO0VBS2pCO0VBQ0ksZ0NBQStCO0VBQy9CLGlDQUFnQyxFQVVuQztFQVpEO0lBS1ksYUFBWSxFQUtmO0VBVlQ7TUFRZ0IsMEJBQXlCLEVBQzVCO0VBSWI7RUFDSSxnQkFBZSxFQUNsQjtFQUNEO0VBQ0ksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcHMvdGltZS10cmFja2VyL3RpbWUtdHJhY2tlci1kYXNoYm9hcmQvdGltZS10cmFja2VyLXJlcG9ydC90aW1lLXRyYWNrZXItcmVwb3J0LW1vbnRobHkvdGltZS10cmFja2VyLXJlcG9ydC1tb250aGx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi10YWJzIHtcbiAgICAubmF2LWl0ZW0ge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuLmNhbCB7XG4gICAgLmNhbC1oZWFkIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjREVFMkU2O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0RFRTJFNjtcbiAgICAgICAgZm9udC1zaXplOiAxMTAlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjlGOTtcbiAgICB9XG4gICAgLmNhbC1jZWxsIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNERUUyRTY7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREVFMkU2O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAuY2FsLWNlbGwtY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMnB4IDJweCA1cHg7XG4gICAgICAgICAgICAuY2FsLWNlbGwtZGF0ZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIC5iYWRnZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLm1vbnRobHktdGltZS1yZXBvcnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNERUUyRTY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERUUyRTY7XG4gICAgLnJvdyB7XG4gICAgICAgIC5jb2wge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjlGOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5jYWwtbmF2IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FsLW5hdi1tb250aCB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-monthly/time-tracker-report-monthly.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-monthly/time-tracker-report-monthly.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: TimeTrackerReportMonthlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackerReportMonthlyComponent", function() { return TimeTrackerReportMonthlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_tracker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../time-tracker.service */ "./src/app/components/apps/time-tracker/time-tracker.service.ts");
/* harmony import */ var _time_tracker_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-tracker-report.service */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeTrackerReportMonthlyComponent = /** @class */ (function () {
    function TimeTrackerReportMonthlyComponent(timeTrackerReportService, timeTrackerService) {
        this.timeTrackerReportService = timeTrackerReportService;
        this.timeTrackerService = timeTrackerService;
        this.displayPanel = 'monthly';
        this.todayDetail = null;
        this.calender = null;
        this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.currentMonthYear = '';
        this.monthCounter = 0;
    }
    TimeTrackerReportMonthlyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeTrackerService.receiveData.subscribe(function (res) {
            _this.calNav('month', 'now');
        });
    };
    TimeTrackerReportMonthlyComponent.prototype.fetchMonthData = function (year, month) {
        this.calender = this.timeTrackerReportService.makeCalender(year, month);
    };
    TimeTrackerReportMonthlyComponent.prototype.generateReport = function (param) {
        this.displayPanel = param;
        this.calender = this.timeTrackerReportService.makeCalender(new Date().getFullYear(), new Date().getMonth());
    };
    TimeTrackerReportMonthlyComponent.prototype.calNav = function (type, method) {
        var date = new Date();
        switch (true) {
            case (type == 'month' && method == 'prev'):
                this.monthCounter = this.monthCounter - 1;
                date.setMonth(date.getMonth() + this.monthCounter);
                this.calender = this.timeTrackerReportService.makeCalender(date.getFullYear(), date.getMonth());
                this.currentMonthYear = this.monthNames[date.getMonth()] + ', ' + date.getFullYear();
                break;
            case (type == 'month' && method == 'next'):
                this.monthCounter = this.monthCounter + 1;
                date.setMonth(date.getMonth() + this.monthCounter);
                this.calender = this.timeTrackerReportService.makeCalender(date.getFullYear(), date.getMonth());
                this.currentMonthYear = this.monthNames[date.getMonth()] + ', ' + date.getFullYear();
                break;
            case (type == 'month' && method == 'now'):
                this.monthCounter = 0;
                date.setMonth(date.getMonth() + this.monthCounter);
                this.calender = this.timeTrackerReportService.makeCalender(date.getFullYear(), date.getMonth());
                this.currentMonthYear = this.monthNames[date.getMonth()] + ', ' + date.getFullYear();
                break;
        }
    };
    TimeTrackerReportMonthlyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-tracker-report-monthly',
            template: __webpack_require__(/*! ./time-tracker-report-monthly.component.html */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-monthly/time-tracker-report-monthly.component.html"),
            styles: [__webpack_require__(/*! ./time-tracker-report-monthly.component.scss */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-monthly/time-tracker-report-monthly.component.scss")]
        }),
        __metadata("design:paramtypes", [_time_tracker_report_service__WEBPACK_IMPORTED_MODULE_2__["TimeTrackerReportService"],
            _time_tracker_service__WEBPACK_IMPORTED_MODULE_1__["TimeTrackerService"]])
    ], TimeTrackerReportMonthlyComponent);
    return TimeTrackerReportMonthlyComponent;
}());



/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-weekly/time-tracker-report-weekly.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-weekly/time-tracker-report-weekly.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"pagination\">\n    <li class=\"page-item\">\n        <a class=\"page-link cal-nav text-primary\" aria-label=\"Previous\" title=\"Previous Month\"\n            (click)=\"calNav('week', 'prev');\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n    </li>\n    <li class=\"page-item\"><a class=\"page-link cal-nav-month\">{{currentMonthYear}}</a></li>\n    <li class=\"page-item\">\n        <a class=\"page-link cal-nav text-primary\" aria-label=\"Next\" title=\"Next Month\"\n            (click)=\"calNav('week', 'next');\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </li>\n</ul>\n<div class=\"weekly-time-report\">\n    <div class=\"row justify-content-md-center cal\">\n        <div class=\"col\" *ngFor=\"let day of week[0]\">\n            <div class=\"text-center cal-head\" *ngIf=\"day.type == 'day'\">\n                {{day.day}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row justify-content-md-center cal\">\n        <div class=\"col\" *ngFor=\"let day of week[1]\">\n            <div class=\"text-center cal-head\">\n                {{day.date}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row justify-content-md-center cal\">\n        <div class=\"col\" *ngFor=\"let day of week[2]\">\n            <div class=\"cal-cell\">\n                <div class=\"cal-cell-content text-center\">\n                    <div *ngIf=\"(day.totalWorkingTime != 0 && day.totalBreakTime != 0)\" class=\"text-info font-weight-bold\">\n                        {{day.totalWorkingTime}}</div>\n                    <div *ngIf=\"(day.totalWorkingTime != 0 && day.totalBreakTime != 0)\" class=\"text-muted\">{{day.totalBreakTime}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-8 col-sm-4 col-md-3\">Days Worked:</div>\n    <div class=\"col-4 col-sm-7\">{{week[3].workingDays}}</div>\n</div>\n<div class=\"row\" *ngIf=\"week[3].workingDays > 0\">\n    <div class=\"col-8 col-sm-4 col-md-3\">Total Working Time:</div>\n    <div class=\"col-4 col-sm-7\">{{week[3].totalWeekWorkHour}}</div>\n</div>\n<div class=\"row\" *ngIf=\"week[3].workingDays > 0\">\n    <div class=\"col-8 col-sm-4 col-md-3\">Total Break Time:</div>\n    <div class=\"col-4 col-sm-7\">{{week[3].totalWeekBreakHour}}</div>\n</div>\n<div class=\"row\" *ngIf=\"week[3].workingDays > 0\">\n    <div class=\"col-8 col-sm-4 col-md-3\">Avg. Working Time:</div>\n    <div class=\"col-4 col-sm-7\">{{week[3].avgTotalWeekWorkHour}}</div>\n</div>\n<div class=\"row\" *ngIf=\"week[3].workingDays > 0\">\n    <div class=\"col-8 col-sm-4 col-md-3\">Avg. Break Time:</div>\n    <div class=\"col-4 col-sm-7\">{{week[3].avgTotalWeekBreakHour}}</div>\n</div>"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-weekly/time-tracker-report-weekly.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-weekly/time-tracker-report-weekly.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-tabs .nav-item a {\n  cursor: pointer; }\n  .nav-tabs .nav-item a.active {\n    cursor: default; }\n  .cal .cal-head {\n  border-left: 1px solid #DEE2E6;\n  border-top: 1px solid #DEE2E6;\n  font-size: 110%;\n  font-weight: bold;\n  background-color: #F8F9F9; }\n  .cal .cal-cell {\n  height: 50px;\n  border-left: 1px solid #DEE2E6;\n  border-top: 1px solid #DEE2E6;\n  overflow: hidden; }\n  .cal .cal-cell .cal-cell-content {\n    padding: 2px; }\n  .cal .cal-cell .cal-cell-content .cal-cell-date {\n      height: 10px; }\n  .cal .cal-cell .cal-cell-content .cal-cell-date .badge {\n        line-height: 0.9;\n        padding-top: 3px; }\n  .weekly-time-report {\n  border-right: 1px solid #DEE2E6;\n  border-bottom: 1px solid #DEE2E6; }\n  .weekly-time-report .row .col {\n    padding: 0px; }\n  .weekly-time-report .row .col:first-child, .weekly-time-report .row .col:last-child {\n      background-color: #F8F9F9; }\n  .cal-nav {\n  cursor: pointer; }\n  .cal-nav-month {\n  cursor: default; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2lzaC9zYW5kYm94L2xhYi9haW8vc3JjL2FwcC9jb21wb25lbnRzL2FwcHMvdGltZS10cmFja2VyL3RpbWUtdHJhY2tlci1kYXNoYm9hcmQvdGltZS10cmFja2VyLXJlcG9ydC90aW1lLXRyYWNrZXItcmVwb3J0LXdlZWtseS90aW1lLXRyYWNrZXItcmVwb3J0LXdlZWtseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLGdCQUFlLEVBSWxCO0VBUFQ7SUFLZ0IsZ0JBQWUsRUFDbEI7RUFLYjtFQUVRLCtCQUE4QjtFQUM5Qiw4QkFBNkI7RUFDN0IsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsMEJBQXlCLEVBQzVCO0VBUEw7RUFTUSxhQUFZO0VBQ1osK0JBQThCO0VBQzlCLDhCQUE2QjtFQUM3QixpQkFBZ0IsRUFXbkI7RUF2Qkw7SUFjWSxhQUFZLEVBUWY7RUF0QlQ7TUFnQmdCLGFBQVksRUFLZjtFQXJCYjtRQWtCb0IsaUJBQWdCO1FBQ2hCLGlCQUFnQixFQUNuQjtFQU1qQjtFQUNJLGdDQUErQjtFQUMvQixpQ0FBZ0MsRUFXbkM7RUFiRDtJQU1ZLGFBQVksRUFLZjtFQVhUO01BU2dCLDBCQUF5QixFQUM1QjtFQUliO0VBQ0ksZ0JBQWUsRUFDbEI7RUFDRDtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHBzL3RpbWUtdHJhY2tlci90aW1lLXRyYWNrZXItZGFzaGJvYXJkL3RpbWUtdHJhY2tlci1yZXBvcnQvdGltZS10cmFja2VyLXJlcG9ydC13ZWVrbHkvdGltZS10cmFja2VyLXJlcG9ydC13ZWVrbHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXRhYnMge1xuICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4uY2FsIHtcbiAgICAuY2FsLWhlYWQge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNERUUyRTY7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREVFMkU2O1xuICAgICAgICBmb250LXNpemU6IDExMCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUY5O1xuICAgIH1cbiAgICAuY2FsLWNlbGwge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0RFRTJFNjtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNERUUyRTY7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC5jYWwtY2VsbC1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIC5jYWwtY2VsbC1kYXRlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuOTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi53ZWVrbHktdGltZS1yZXBvcnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNERUUyRTY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERUUyRTY7XG4gICAgXG4gICAgLnJvdyB7XG4gICAgICAgIC5jb2wge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjlGOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5jYWwtbmF2IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FsLW5hdi1tb250aCB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-weekly/time-tracker-report-weekly.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-weekly/time-tracker-report-weekly.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: TimeTrackerReportWeeklyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackerReportWeeklyComponent", function() { return TimeTrackerReportWeeklyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_tracker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../time-tracker.service */ "./src/app/components/apps/time-tracker/time-tracker.service.ts");
/* harmony import */ var _time_tracker_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-tracker-report.service */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeTrackerReportWeeklyComponent = /** @class */ (function () {
    function TimeTrackerReportWeeklyComponent(timeTrackerReportService, timeTrackerService) {
        this.timeTrackerReportService = timeTrackerReportService;
        this.timeTrackerService = timeTrackerService;
        this.displayPanel = 'monthly';
        this.todayDetail = null;
        this.week = null;
        this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.currentMonthYear = '';
        this.weekCounter = 0;
    }
    TimeTrackerReportWeeklyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeTrackerService.receiveData.subscribe(function (res) {
            _this.calNav('week', 'now');
        });
    };
    TimeTrackerReportWeeklyComponent.prototype.fetchMonthData = function (year, month) {
        this.week = this.timeTrackerReportService.makeCalender(year, month);
    };
    TimeTrackerReportWeeklyComponent.prototype.generateReport = function (param) {
        this.displayPanel = param;
        this.week = this.timeTrackerReportService.getWeekData(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    };
    TimeTrackerReportWeeklyComponent.prototype.calNav = function (type, method) {
        var date = new Date();
        switch (true) {
            case (type == 'week' && method == 'prev'):
                this.weekCounter = this.weekCounter - 1;
                date.setDate(date.getDate() + (this.weekCounter * 7));
                this.week = this.timeTrackerReportService.getWeekData(date.getFullYear(), date.getMonth(), date.getDate());
                this.currentMonthYear = this.week[1][0].date + ' - ' + this.week[1][6].date;
                break;
            case (type == 'week' && method == 'next'):
                this.weekCounter = this.weekCounter + 1;
                date.setDate(date.getDate() + (this.weekCounter * 7));
                this.week = this.timeTrackerReportService.getWeekData(date.getFullYear(), date.getMonth(), date.getDate());
                this.currentMonthYear = this.week[1][0].date + ' - ' + this.week[1][6].date;
                break;
            case (type == 'week' && method == 'now'):
                this.weekCounter = 0;
                date.setMonth(date.getMonth() + this.weekCounter);
                this.week = this.timeTrackerReportService.getWeekData(date.getFullYear(), date.getMonth(), date.getDate());
                this.currentMonthYear = this.week[1][0].date + ' - ' + this.week[1][6].date;
                break;
        }
    };
    TimeTrackerReportWeeklyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-tracker-report-weekly',
            template: __webpack_require__(/*! ./time-tracker-report-weekly.component.html */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-weekly/time-tracker-report-weekly.component.html"),
            styles: [__webpack_require__(/*! ./time-tracker-report-weekly.component.scss */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report-weekly/time-tracker-report-weekly.component.scss")]
        }),
        __metadata("design:paramtypes", [_time_tracker_report_service__WEBPACK_IMPORTED_MODULE_2__["TimeTrackerReportService"],
            _time_tracker_service__WEBPACK_IMPORTED_MODULE_1__["TimeTrackerService"]])
    ], TimeTrackerReportWeeklyComponent);
    return TimeTrackerReportWeeklyComponent;
}());



/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <button class=\"btn btn-link\" (click)=\"backToTrack()\">&#x21da; back</button>\n</div>\n<ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n        <a [ngClass]=\"{'nav-link': true, 'active': displayPanel == 'monthly'}\" (click)=\"generateReport('monthly')\">Monthly</a>\n    </li>\n    <li class=\"nav-item\">\n        <a [ngClass]=\"{'nav-link': true, 'active': displayPanel == 'weekly'}\" (click)=\"generateReport('weekly')\">Weekly</a>\n    </li>\n    <li class=\"nav-item\">\n        <a [ngClass]=\"{'nav-link': true, 'active': displayPanel == 'daily'}\" (click)=\"generateReport('daily')\">Daily</a>\n    </li>\n</ul>\n<br />\n<div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" *ngIf=\"displayPanel == 'monthly'\" role=\"tabpanel\" aria-labelledby=\"Monthly-Report-Tab\">\n        <app-time-tracker-report-monthly></app-time-tracker-report-monthly>\n    </div>\n    <div class=\"tab-pane fade show active\" id=\"weekly\" *ngIf=\"displayPanel == 'weekly'\" role=\"tabpanel\" aria-labelledby=\"Weekly-Report-Tab\">\n        <app-time-tracker-report-weekly></app-time-tracker-report-weekly>\n    </div>\n    <div class=\"tab-pane fade show active\" id=\"daily\" *ngIf=\"displayPanel == 'daily'\" role=\"tabpanel\" aria-labelledby=\"Daily-Report-tab\">\n        <app-time-tracker-report-daily></app-time-tracker-report-daily>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwcy90aW1lLXRyYWNrZXIvdGltZS10cmFja2VyLWRhc2hib2FyZC90aW1lLXRyYWNrZXItcmVwb3J0L3RpbWUtdHJhY2tlci1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: TimeTrackerReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackerReportComponent", function() { return TimeTrackerReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _time_tracker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-tracker.service */ "./src/app/components/apps/time-tracker/time-tracker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeTrackerReportComponent = /** @class */ (function () {
    function TimeTrackerReportComponent(timeTrackerService, route, router) {
        this.timeTrackerService = timeTrackerService;
        this.route = route;
        this.router = router;
        this.displayPanel = 'monthly';
    }
    TimeTrackerReportComponent.prototype.ngOnInit = function () {
        if (this.timeTrackerService.setId(this.route.snapshot.paramMap.get('id'))) {
            this.timeTrackerService.getDailyTimesheet();
        }
    };
    TimeTrackerReportComponent.prototype.generateReport = function (param) {
        this.displayPanel = param;
    };
    TimeTrackerReportComponent.prototype.backToTrack = function () {
        this.router.navigate(['apps/time-tracker', this.route.snapshot.paramMap.get('id')]);
        return true;
    };
    TimeTrackerReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-tracker-report',
            template: __webpack_require__(/*! ./time-tracker-report.component.html */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component.html"),
            styles: [__webpack_require__(/*! ./time-tracker-report.component.scss */ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_time_tracker_service__WEBPACK_IMPORTED_MODULE_2__["TimeTrackerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TimeTrackerReportComponent);
    return TimeTrackerReportComponent;
}());



/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.service.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker-dashboard/time-tracker-report/time-tracker-report.service.ts ***!
  \************************************************************************************************************************/
/*! exports provided: TimeTrackerReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackerReportService", function() { return TimeTrackerReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_tracker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../time-tracker.service */ "./src/app/components/apps/time-tracker/time-tracker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeTrackerReportService = /** @class */ (function () {
    function TimeTrackerReportService(timeTrackerService) {
        var _this = this;
        this.timeTrackerService = timeTrackerService;
        this.timesheet = null;
        this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.timeTrackerService.receiveData.subscribe(function (res) {
            _this.timesheet = (res && res.full) ? res.full : res;
        });
    }
    TimeTrackerReportService.prototype.fetchApi = function (param) {
        this.timeTrackerService.getDailyTimesheet(param);
    };
    TimeTrackerReportService.prototype.getTimesheet = function (type, date) {
        if (!this.timesheet) {
            return null;
        }
        return this.timesheet[date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()];
    };
    TimeTrackerReportService.prototype.getDayDetails = function (dayObj, date) {
        var _this = this;
        if (!dayObj) {
            return null;
        }
        var totalBreak = 0, totalWorking = 0, tmpExitTime = dayObj['insideOffice'].exit;
        dayObj['breaks'].forEach(function (breakObj) {
            totalBreak += breakObj.end - breakObj.start;
            totalWorking = breakObj.end;
            if (!breakObj.diff)
                breakObj.diff = _this.convertTimestampToReadable(breakObj.end - breakObj.start).withsec;
        });
        if (dayObj['recent'].start != '') {
            dayObj['breaks'].push({ 'start': dayObj['recent'].start, 'end': dayObj['recent'].start, 'diff': 'Not Swipe In !' });
            totalWorking = dayObj['recent'].start;
            totalBreak += new Date().getTime() - dayObj['recent'].start;
            dayObj['recent'].start = '';
        }
        if (!dayObj.breakSwap)
            dayObj.breaks = dayObj.breaks.reverse();
        dayObj.breakSwap = true;
        if (dayObj['insideOffice'].exit == '') {
            tmpExitTime = totalWorking;
            if ((new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()) == (date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate())) {
                tmpExitTime = new Date().getTime();
            }
        }
        if (!dayObj.totalWorkingTime) {
            dayObj.totalWorkingTime = this.convertTimestampToReadable((tmpExitTime - dayObj['insideOffice'].entry) - totalBreak).withsec;
        }
        if (!dayObj.totalBreakTime) {
            dayObj.totalBreakTime = this.convertTimestampToReadable(totalBreak).withsec;
        }
        return dayObj;
    };
    TimeTrackerReportService.prototype.convertTimestampToReadable = function (timeDiff) {
        var hoursDifference = 0, minutesDifference = 0, secondsDifference = 0, dtString = '', dtStringWithoutSec = '';
        hoursDifference = Math.floor(timeDiff / 1000 / 60 / 60);
        timeDiff -= hoursDifference * 1000 * 60 * 60;
        minutesDifference = Math.floor(timeDiff / 1000 / 60);
        timeDiff -= minutesDifference * 1000 * 60;
        secondsDifference = Math.floor(timeDiff / 1000);
        dtStringWithoutSec = (hoursDifference < 10 ? '0' + hoursDifference : hoursDifference) + ':';
        if (hoursDifference > 0) {
            dtString = dtStringWithoutSec;
        }
        dtStringWithoutSec += minutesDifference < 10 ? '0' + minutesDifference : minutesDifference;
        dtString += minutesDifference < 10 ? '0' + minutesDifference : minutesDifference;
        dtString += ':' + ((secondsDifference < 10) ? '0' + secondsDifference : secondsDifference);
        return {
            withsec: dtString,
            withoutsec: dtStringWithoutSec
        };
    };
    TimeTrackerReportService.prototype.weekCount = function (year, month) {
        var weeks = [], firstDate = new Date(year, month, 1), lastDate = new Date(year, month + 1, 0), numDays = lastDate.getDate();
        var start = 1;
        var end = 7 - firstDate.getDay();
        while (start <= numDays) {
            weeks.push({ start: start, end: end });
            start = end + 1;
            end = end + 7;
            if (end > numDays)
                end = numDays;
        }
        return weeks;
    };
    TimeTrackerReportService.prototype.makeCalender = function (year, month) {
        var _this = this;
        if (!this.timesheet) {
            return null;
        }
        var weekCounter = this.weekCount(year, month), calender = [
            [
                { type: 'day', day: 'Sun' },
                { type: 'day', day: 'Mon' },
                { type: 'day', day: 'Tue' },
                { type: 'day', day: 'Wed' },
                { type: 'day', day: 'Thu' },
                { type: 'day', day: 'Fri' },
                { type: 'day', day: 'Sat' }
            ]
        ], key = 0, tmpWeek = [], type = 'absent';
        weekCounter.forEach(function (data) {
            if (data.start == 1) {
                for (key = 0; key <= 6 - data.end; key++) {
                    tmpWeek.push({
                        date: 0,
                        type: 'absent',
                        totalHour: 0,
                        totalBreak: 0
                    });
                }
            }
            for (key = data.start; key <= data.end; key++) {
                if (_this.timesheet[year + '-' + month + '-' + key]) {
                    type = 'present';
                }
                tmpWeek.push({
                    date: key,
                    type: type,
                    totalHour: _this.finalHours(year + '-' + month + '-' + key).totalWorkingTime,
                    totalBreak: _this.finalHours(year + '-' + month + '-' + key).totalBreakTime
                });
            }
            if (tmpWeek.length < 7) {
                for (key = tmpWeek.length; key <= 6; key++) {
                    tmpWeek.push({
                        date: 0,
                        type: 'absent',
                        totalHour: 0,
                        totalBreak: 0
                    });
                }
            }
            calender.push(tmpWeek);
            tmpWeek = [];
        });
        return calender;
    };
    TimeTrackerReportService.prototype.getWeekData = function (year, month, day) {
        var date = null, weekTimesheet = [], weekDay = {}, today = '', dateHead = [], timeDetail = [], weekTotalWorkTime = 0, WeekTotalBreakTime = 0, avgWeekWorkTime = '00:00', avgWeekBreakTime = '00:00', weekWorkingDays = 0;
        weekTimesheet = [
            [
                { type: 'day', day: 'Sun' },
                { type: 'day', day: 'Mon' },
                { type: 'day', day: 'Tue' },
                { type: 'day', day: 'Wed' },
                { type: 'day', day: 'Thu' },
                { type: 'day', day: 'Fri' },
                { type: 'day', day: 'Sat' }
            ]
        ];
        date = new Date(year + '-' + (month + 1) + '-' + day);
        date.setDate(date.getDate() - date.getDay());
        for (var i = 0; i < 7; i++) {
            weekDay = {};
            today = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
            weekDay = this.finalHours(today);
            for (var obj in weekDay) {
                if (obj == 'totalBreakTimeTimestamp') {
                    WeekTotalBreakTime += weekDay['totalBreakTimeTimestamp'];
                }
                if (obj == 'totalWorkTimeTimestamp') {
                    weekTotalWorkTime += weekDay['totalWorkTimeTimestamp'];
                }
            }
            weekDay['type'] = 'absent';
            if (this.timesheet[today] && this.timesheet[today]['insideOffice'].entry != '') {
                weekDay['type'] = 'present';
                weekWorkingDays++;
            }
            dateHead.push({
                date: this.monthNames[date.getMonth()] + ' ' + date.getDate(),
                type: weekDay['type']
            });
            timeDetail.push(weekDay);
            date.setDate(date.getDate() + 1);
        }
        weekTimesheet.push(dateHead);
        weekTimesheet.push(timeDetail);
        avgWeekWorkTime = this.convertTimestampToReadable(weekTotalWorkTime / weekWorkingDays).withsec;
        avgWeekBreakTime = this.convertTimestampToReadable(WeekTotalBreakTime / weekWorkingDays).withsec;
        weekTimesheet.push({
            totalWeekWorkHour: this.convertTimestampToReadable(weekTotalWorkTime).withsec,
            totalWeekBreakHour: this.convertTimestampToReadable(WeekTotalBreakTime).withsec,
            avgTotalWeekWorkHour: avgWeekWorkTime,
            avgTotalWeekBreakHour: avgWeekBreakTime,
            workingDays: weekWorkingDays
        });
        return weekTimesheet;
    };
    TimeTrackerReportService.prototype.finalHours = function (todayDate) {
        if (!this.timesheet) {
            return null;
        }
        var totalWorkingTime = '00:00';
        if (!this.timesheet[todayDate] || (this.timesheet[todayDate] && this.timesheet[todayDate]['insideOffice'].entry == '')) {
            return {
                totalWorkingTime: 0,
                totalBreakTime: 0
            };
        }
        var param = this.timesheet[todayDate], swipeIn = param['insideOffice'].entry, swipeOut = param['insideOffice'].exit, totalBreakTime = 0, totalWorkTimeTimestamp = 0, tempEndWorkTime = param['insideOffice'].entry;
        param['breaks'].forEach(function (val) {
            totalBreakTime += val.end - val.start;
            tempEndWorkTime = val.end;
        });
        if (param['recent'].start != '') {
            if (todayDate == (new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate())) {
                totalBreakTime += new Date().getTime() - param['recent'].start;
            }
            tempEndWorkTime = param['recent'].start;
        }
        if (swipeOut == 0 || swipeOut == '') {
            swipeOut = tempEndWorkTime;
            if (todayDate == (new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate())) {
                swipeOut = new Date().getTime();
            }
        }
        totalWorkTimeTimestamp = (swipeOut - swipeIn) - totalBreakTime;
        totalWorkingTime = this.convertTimestampToReadable(totalWorkTimeTimestamp).withoutsec;
        if ((((swipeOut - swipeIn) - totalBreakTime) > 24 * 60 * 60 * 1000) && (param['insideOffice'].exit == '')) {
            totalWorkingTime = '08:00';
        }
        return {
            totalWorkingTime: totalWorkingTime,
            totalBreakTime: this.convertTimestampToReadable(totalBreakTime).withoutsec,
            totalBreakTimeTimestamp: totalBreakTime,
            totalWorkTimeTimestamp: totalWorkTimeTimestamp
        };
    };
    TimeTrackerReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_time_tracker_service__WEBPACK_IMPORTED_MODULE_1__["TimeTrackerService"]])
    ], TimeTrackerReportService);
    return TimeTrackerReportService;
}());



/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row \">\n  <div class=\"input-group mb-3 col align-self-center col-12 col-md-7 col-lg-5\">\n      <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Unique Code</span>\n      </div>\n      <input type=\"text\" class=\"form-control form-control--muted\" (keyup)=\"setUniqueCode($event)\" [(ngModel)]=\"uniqueCode\" aria-label=\"Unique Code\"\n          aria-describedby=\"basic-addon1\" placeholder=\"Enter here\" maxlength=\"32\">\n      <div class=\"input-group-append\">\n          <button class=\"btn btn-primary\" type=\"button\" id=\"button-addon1\" (click)=\"login()\">Go &raquo;</button>\n      </div>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"input-group mb-3 col align-self-center col-12 col-md-7 col-lg-5\">\n        <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"basic-addon1\">Generate Unique Code</span>\n        </div>\n        <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" type=\"button\" id=\"button-addon2\" (click)=\"generateUniqueCode()\">Create New &raquo;</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container > .row {\n  margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2lzaC9zYW5kYm94L2xhYi9haW8vc3JjL2FwcC9jb21wb25lbnRzL2FwcHMvdGltZS10cmFja2VyL3RpbWUtdHJhY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwcy90aW1lLXRyYWNrZXIvdGltZS10cmFja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgPiAucm93IHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker.component.ts ***!
  \************************************************************************/
/*! exports provided: TimeTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackerComponent", function() { return TimeTrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _time_tracker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-tracker.service */ "./src/app/components/apps/time-tracker/time-tracker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeTrackerComponent = /** @class */ (function () {
    function TimeTrackerComponent(router, timeTrackerService) {
        this.router = router;
        this.timeTrackerService = timeTrackerService;
        this.uniqueCode = null;
    }
    TimeTrackerComponent.prototype.login = function () {
        this.router.navigate(['apps/time-tracker', this.uniqueCode]);
    };
    TimeTrackerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeTrackerService.receiveData.subscribe(function (res) {
            var data = (res && res.today) ? res.today : res;
            if (data && data.type == 'generate-code' && data.url['uri']) {
                _this.uniqueCode = data.url['uri'].split('/')[4];
                alert('Your New Code: ' + _this.uniqueCode + "\n Save it at safe place !");
            }
        });
    };
    TimeTrackerComponent.prototype.setUniqueCode = function (event) {
        if (event.which == 13) {
            this.login();
        }
    };
    TimeTrackerComponent.prototype.generateUniqueCode = function () {
        if (confirm('Are you sure to generate code ?')) {
            this.timeTrackerService.jsonCreate();
        }
    };
    TimeTrackerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-tracker',
            template: __webpack_require__(/*! ./time-tracker.component.html */ "./src/app/components/apps/time-tracker/time-tracker.component.html"),
            styles: [__webpack_require__(/*! ./time-tracker.component.scss */ "./src/app/components/apps/time-tracker/time-tracker.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _time_tracker_service__WEBPACK_IMPORTED_MODULE_2__["TimeTrackerService"]])
    ], TimeTrackerComponent);
    return TimeTrackerComponent;
}());



/***/ }),

/***/ "./src/app/components/apps/time-tracker/time-tracker.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/apps/time-tracker/time-tracker.service.ts ***!
  \**********************************************************************/
/*! exports provided: TimeTrackerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackerService", function() { return TimeTrackerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeTrackerService = /** @class */ (function () {
    function TimeTrackerService(http) {
        this.http = http;
        this.jsonId = null;
        this.now = null;
        this.todayDate = '';
        this.dummyObj = { 'insideOffice': { 'entry': '', 'exit': '' }, 'recent': { 'start': '' }, 'breaks': [] };
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.receiveData = this.dataSource.asObservable();
        this.dailyTimesheet = {};
    }
    TimeTrackerService.prototype.getTime = function () {
        this.now = new Date();
        this.todayDate = this.now.getFullYear() + '-' + this.now.getMonth() + '-' + this.now.getDate();
        return true;
    };
    TimeTrackerService.prototype.setId = function (id) {
        this.jsonId = id;
        return true;
    };
    TimeTrackerService.prototype.getDailyTimesheet = function (type) {
        var _this = this;
        if (!type) {
            type = '';
        }
        /*if (this.dummyObj.url) { //this one set while creating fresh id
            delete this.dummyObj.url;
        }
        if (this.dummyObj.type) { //this one set while creating fresh id
            delete this.dummyObj.type;
        }*/
        this.getTime();
        return new Promise(function (resolve, reject) {
            if (/--http\:\/\/localhost\:/.test(window.location.href)) {
                _this.http.get('../../assets/data/sample.json').subscribe(function (data) {
                    resolve(data);
                });
            }
            else {
                _this.http.get('https://api.myjson.com/bins/' + _this.jsonId).subscribe(function (data) {
                    resolve(data);
                });
            }
        }).then(function (data) {
            _this.dailyTimesheet = data;
            _this.dailyTimesheet[_this.todayDate] = (_this.dailyTimesheet[_this.todayDate] == undefined) ? _this.dummyObj : _this.dailyTimesheet[_this.todayDate];
            if (type != 'none') {
                _this.dataSource.next({ today: _this.dailyTimesheet[_this.todayDate], full: _this.dailyTimesheet, type: type });
            }
            return _this.dailyTimesheet[_this.todayDate];
        });
    };
    TimeTrackerService.prototype.swipeIn = function () {
        var _this = this;
        this.getTime();
        new Promise(function (resolve, reject) {
            resolve(_this.getDailyTimesheet('none'));
        }).then(function () {
            if (_this.dailyTimesheet[_this.todayDate] && _this.dailyTimesheet[_this.todayDate].insideOffice.exit != '') {
                _this.dailyTimesheet[_this.todayDate].breaks.push({
                    'start': _this.dailyTimesheet[_this.todayDate].insideOffice.exit,
                    'end': _this.now.getTime()
                });
                _this.dailyTimesheet[_this.todayDate].insideOffice.exit = '';
            }
            else if (_this.dailyTimesheet[_this.todayDate] && _this.dummyObj) {
                if (_this.dailyTimesheet[_this.todayDate].insideOffice &&
                    _this.dailyTimesheet[_this.todayDate].insideOffice.entry != '') {
                }
                else {
                    _this.dailyTimesheet[_this.todayDate].insideOffice.entry = _this.dummyObj.insideOffice.entry = _this.now.getTime();
                }
            }
            _this.jsonUpdate();
        }).then(function () {
            return _this.dailyTimesheet[_this.todayDate];
        });
    };
    TimeTrackerService.prototype.swipeOut = function () {
        var _this = this;
        this.getTime();
        new Promise(function (resolve, reject) {
            resolve(_this.getDailyTimesheet('none'));
        }).then(function () {
            if (_this.dailyTimesheet[_this.todayDate].recent.start != '') {
                _this.dailyTimesheet[_this.todayDate].breaks.push({
                    'start': _this.dailyTimesheet[_this.todayDate].recent.start,
                    'end': _this.now.getTime()
                });
                _this.dailyTimesheet[_this.todayDate].recent.start = '';
            }
            _this.dailyTimesheet[_this.todayDate].insideOffice.exit = _this.now.getTime();
            _this.jsonUpdate();
        }).then(function () {
            return _this.dailyTimesheet[_this.todayDate];
        });
    };
    TimeTrackerService.prototype.break = function () {
        var _this = this;
        this.getTime();
        new Promise(function (resolve, reject) {
            resolve(_this.getDailyTimesheet('none'));
        }).then(function () {
            if (_this.dailyTimesheet[_this.todayDate].recent.start == '') {
                _this.dailyTimesheet[_this.todayDate].recent.start = _this.now.getTime();
            }
            else {
                _this.dailyTimesheet[_this.todayDate].breaks.push({
                    'start': _this.dailyTimesheet[_this.todayDate].recent.start,
                    'end': _this.now.getTime()
                });
                _this.dailyTimesheet[_this.todayDate].recent.start = '';
            }
            _this.jsonUpdate();
        });
        return true;
    };
    TimeTrackerService.prototype.jsonUpdate = function () {
        var _this = this;
        if (/--http\:\/\/localhost\:/.test(window.location.href)) {
            return false;
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        this.http.put('https://api.myjson.com/bins/' + this.jsonId, JSON.stringify(this.dailyTimesheet), { headers: headers }).subscribe(function (res) {
            _this.dailyTimesheet[_this.todayDate] = res[_this.todayDate];
            _this.dataSource.next(res[_this.todayDate]);
            return true;
        });
    };
    TimeTrackerService.prototype.jsonCreate = function () {
        var _this = this;
        if (/--http\:\/\/localhost\:/.test(window.location.href)) {
            return false;
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        this.http.post('https://api.myjson.com/bins', '{}', { headers: headers }).subscribe(function (res) {
            var tmpData = JSON.parse(JSON.stringify(_this.dummyObj));
            tmpData.url = res;
            tmpData.type = 'generate-code';
            _this.dataSource.next(tmpData);
            return true;
        });
    };
    TimeTrackerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimeTrackerService);
    return TimeTrackerService;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Welcome !\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/invalid/invalid.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/invalid/invalid.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <h2>Oops!</h2>\n    we can't serve the page, that you are looking for :(\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/invalid/invalid.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/invalid/invalid.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52YWxpZC9pbnZhbGlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/invalid/invalid.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/invalid/invalid.component.ts ***!
  \*********************************************************/
/*! exports provided: InvalidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidComponent", function() { return InvalidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvalidComponent = /** @class */ (function () {
    function InvalidComponent() {
    }
    InvalidComponent.prototype.ngOnInit = function () {
    };
    InvalidComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invalid',
            template: __webpack_require__(/*! ./invalid.component.html */ "./src/app/components/invalid/invalid.component.html"),
            styles: [__webpack_require__(/*! ./invalid.component.scss */ "./src/app/components/invalid/invalid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvalidComponent);
    return InvalidComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/clock/timestamp/timestamp-tools.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/tools/clock/timestamp/timestamp-tools.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-5 col-md-2 text-right\">Timestamp:</div>\n    <div class=\"col-7 col-md-10\">\n        <input type=\"number\" maxlength=\"10\" />\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-5 col-md-2 text-right\">Date & Time:</div>\n    <div class=\"col-7 col-md-10\">\n        <input type=\"number\" min=\"1970\" max=\"3000\" id=\"txtYear\" class=\"dtLarge\" placeholder=\"YYYY\" />\n        <input type=\"number\" min=\"01\" max=\"12\" id=\"txtMonth\" class=\"dtSmall\" placeholder=\"MM\" />\n        <input type=\"number\" min=\"01\" max=\"31\" max-length=\"2\" id=\"txtDay\" class=\"dtSmall\" placeholder=\"DD\" />\n        <input type=\"number\" min=\"00\" max=\"59\" max-length=\"2\" id=\"txtHour\" class=\"dtSmall\" placeholder=\"HR\" />\n        <input type=\"number\" min=\"00\" max=\"59\" max-length=\"2\" id=\"txtMin\" class=\"dtSmall\" placeholder=\"Min\" />\n        <input type=\"number\" min=\"00\" max=\"59\" max-length=\"2\" id=\"txtSec\" class=\"dtSmall\" placeholder=\"Sec\" />\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tools/clock/timestamp/timestamp-tools.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/tools/clock/timestamp/timestamp-tools.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dtSmall {\n  width: 40px; }\n\n.dtLarge {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2lzaC9zYW5kYm94L2xhYi9haW8vc3JjL2FwcC9jb21wb25lbnRzL3Rvb2xzL2Nsb2NrL3RpbWVzdGFtcC90aW1lc3RhbXAtdG9vbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xzL2Nsb2NrL3RpbWVzdGFtcC90aW1lc3RhbXAtdG9vbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHRTbWFsbCB7XG4gICAgd2lkdGg6IDQwcHg7XG59XG4uZHRMYXJnZSB7XG4gICAgd2lkdGg6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/tools/clock/timestamp/timestamp-tools.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tools/clock/timestamp/timestamp-tools.component.ts ***!
  \*******************************************************************************/
/*! exports provided: timestampToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampToolsComponent", function() { return timestampToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var timestampToolsComponent = /** @class */ (function () {
    function timestampToolsComponent() {
    }
    timestampToolsComponent.prototype.ngOnInit = function () { };
    timestampToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tools-timestamp',
            template: __webpack_require__(/*! ./timestamp-tools.component.html */ "./src/app/components/tools/clock/timestamp/timestamp-tools.component.html"),
            styles: [__webpack_require__(/*! ./timestamp-tools.component.scss */ "./src/app/components/tools/clock/timestamp/timestamp-tools.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], timestampToolsComponent);
    return timestampToolsComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/json/online-free-db/online-free-db.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/tools/json/online-free-db/online-free-db.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"container\">\n  <div class=\"alert alert-success\" role=\"alert\">\n    <h4 class=\"alert-heading\">Supported JSON Storage !</h4>\n    <hr>\n    <p>http://myjson.com/ [API: https://api.myjson.com/bins/&#123;Unique Id&#125; ]</p>\n    <p class=\"mb-0\">https://jsonstorage.net/ [API: https://jsonstorage.net/api/items/&#123;Unique Id&#125; ]</p>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-group mb-3 col-12\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon3\">Json url</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" id=\"txt_url\" aria-describedby=\"basic-addon3\" placeholder=\"Enter here\" [(ngModel)]=\"txtUrl\" (keyup)=\"fetch($event)\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-primary\" type=\"button\" id=\"button-addon2\" (click)=\"fetch()\">Fetch</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-group col-12\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">Content</span>\n      </div>\n      <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"txt_content\" rows=\"20\" [(ngModel)]=\"txtContent\"></textarea>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-6 btn-group\">\n      <button class=\"btn btn-info active\" (click)=\"format()\">Format</button>\n      <button class=\"btn btn-info\" (click)=\"minify()\">Minify</button>\n      <button class=\"btn btn-warning\" (click)=\"update()\">Update</button>\n    </div>\n    <div class=\"col-6 text-right\">\n      <button class=\"btn btn-outline-danger\" (click)=\"update('delete')\">Erase</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tools/json/online-free-db/online-free-db.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/tools/json/online-free-db/online-free-db.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHMvanNvbi9vbmxpbmUtZnJlZS1kYi9vbmxpbmUtZnJlZS1kYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tools/json/online-free-db/online-free-db.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/tools/json/online-free-db/online-free-db.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OnlineFreeDbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFreeDbComponent", function() { return OnlineFreeDbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tools_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tools-global.service */ "./src/app/components/tools/tools-global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OnlineFreeDbComponent = /** @class */ (function () {
    function OnlineFreeDbComponent(toolsGlobalService) {
        this.toolsGlobalService = toolsGlobalService;
        this.txtUrl = 'https://api.myjson.com/bins/';
        this.txtContent = '';
    }
    OnlineFreeDbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolsGlobalService.toolsDataReceiver.subscribe(function (param) {
            if (param.type == 'RAW-JSON' || param.type == 'UPDATED-JSON') {
                _this.txtContent = JSON.stringify(param.data, null, 4);
            }
        });
    };
    OnlineFreeDbComponent.prototype.fetch = function (event) {
        if (typeof event != 'undefined') {
            if (event.code != 'Enter') {
                return;
            }
        }
        if (this.toolsGlobalService.validateJsonUrl(this.txtUrl)) {
            this.toolsGlobalService.httpFetch(this.txtUrl);
        }
        else {
            alert('Invalid Url !');
        }
    };
    OnlineFreeDbComponent.prototype.minify = function () {
        this.txtContent = JSON.stringify(JSON.parse(this.txtContent));
        return this.txtContent;
    };
    OnlineFreeDbComponent.prototype.format = function () {
        this.txtContent = JSON.stringify(JSON.parse(this.txtContent), null, 4);
        return true;
    };
    OnlineFreeDbComponent.prototype.update = function (param) {
        if (param == 'delete' && !confirm('Are you sure to erase content ?')) {
            return false;
        }
        else if (!confirm('Are you sure to update content ?')) {
            return false;
        }
        try {
            JSON.parse(this.txtContent);
        }
        catch (e) {
            alert('Invalid Json !');
            return false;
        }
        if (param == 'delete') {
            this.txtContent = '{}';
        }
        this.toolsGlobalService.httpUpdate(this.txtUrl, JSON.stringify(JSON.parse(this.txtContent)));
    };
    OnlineFreeDbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-online-free-db',
            template: __webpack_require__(/*! ./online-free-db.component.html */ "./src/app/components/tools/json/online-free-db/online-free-db.component.html"),
            styles: [__webpack_require__(/*! ./online-free-db.component.scss */ "./src/app/components/tools/json/online-free-db/online-free-db.component.scss")]
        }),
        __metadata("design:paramtypes", [_tools_global_service__WEBPACK_IMPORTED_MODULE_1__["ToolsGlobalService"]])
    ], OnlineFreeDbComponent);
    return OnlineFreeDbComponent;
}());



/***/ }),

/***/ "./src/app/components/tools/tools-global.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/tools/tools-global.service.ts ***!
  \**********************************************************/
/*! exports provided: ToolsGlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsGlobalService", function() { return ToolsGlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolsGlobalService = /** @class */ (function () {
    function ToolsGlobalService(http) {
        this.http = http;
        this.toolsDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ type: '', data: {} });
        this.toolsDataReceiver = this.toolsDataSource.asObservable();
    }
    ToolsGlobalService.prototype.validateJsonUrl = function (param) {
        return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(param);
    };
    ToolsGlobalService.prototype.httpFetch = function (jsonUrl) {
        var _this = this;
        this.http.get(jsonUrl).subscribe(function (jsonResponse) {
            _this.toolsDataSource.next({ type: 'RAW-JSON', data: jsonResponse });
            return true;
        });
    };
    ToolsGlobalService.prototype.httpUpdate = function (jsonUrl, jsonData) {
        var _this = this;
        try {
            JSON.parse(jsonData);
        }
        catch (e) {
            alert('Invalid Json !');
            return false;
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        this.http.put(jsonUrl, jsonData, { headers: headers }).subscribe(function (res) {
            _this.toolsDataSource.next({ type: 'UPDATED-JSON', data: res });
            return true;
        });
    };
    ToolsGlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ToolsGlobalService);
    return ToolsGlobalService;
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

module.exports = __webpack_require__(/*! /Users/asish/sandbox/lab/aio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
