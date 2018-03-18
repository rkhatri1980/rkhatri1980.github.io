webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__ = __webpack_require__("./src/app/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_add_employee_add_employee_component__ = __webpack_require__("./src/app/components/add-employee/add-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_manage_employees_manage_employees_component__ = __webpack_require__("./src/app/components/manage-employees/manage-employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_edit_employee_edit_employee_component__ = __webpack_require__("./src/app/components/edit-employee/edit-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_employee_detail_employee_detail_component__ = __webpack_require__("./src/app/components/employee-detail/employee-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_landing_page_landing_page_component__ = __webpack_require__("./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/shared/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__components_landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'employee/create', component: __WEBPACK_IMPORTED_MODULE_4__components_add_employee_add_employee_component__["a" /* AddEmployeeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'employee/manage-employee', component: __WEBPACK_IMPORTED_MODULE_5__components_manage_employees_manage_employees_component__["a" /* ManageEmployeesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'edit-employee-detail/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_edit_employee_edit_employee_component__["a" /* EditEmployeeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'employee-detail/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_employee_detail_employee_detail_component__["a" /* EmployeeDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__shared_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar> -->\n<div class=\"container\">\n    <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard_service__ = __webpack_require__("./src/app/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_add_employee_add_employee_component__ = __webpack_require__("./src/app/components/add-employee/add-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_manage_employees_manage_employees_component__ = __webpack_require__("./src/app/components/manage-employees/manage-employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_edit_employee_edit_employee_component__ = __webpack_require__("./src/app/components/edit-employee/edit-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_employee_detail_employee_detail_component__ = __webpack_require__("./src/app/components/employee-detail/employee-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_landing_page_landing_page_component__ = __webpack_require__("./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__employee_service__ = __webpack_require__("./src/app/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_manage_employees_manage_employees_component__["a" /* ManageEmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_add_employee_add_employee_component__["a" /* AddEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_edit_employee_edit_employee_component__["a" /* EditEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_employee_detail_employee_detail_component__["a" /* EmployeeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_19__employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-employee/add-employee.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-employee/add-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"card\">\n  <div class=\"card-header text-center\">\n    Add Employee\n  </div>\n  <form (submit)=\"addEmployee()\" novalidate #employeeForm=\"ngForm\">\n    <div class=\"form-group row text-right mt-3\">\n      <label for=\"emp_name\" class=\"col-sm-2 col-form-label\">Fullname </label>\n      <div class=\"col-sm-10 text-left\">\n        <input type=\"text\" required class=\"form-control\" id=\"emp_name\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\">\n        <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n          <span>Fullname is required</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row text-right\">\n      <label for=\"emp_position\" class=\"col-sm-2 col-form-label\">Position </label>\n      <div class=\"col-sm-10 text-left\">\n        <input type=\"text\" required class=\"form-control\" id=\"emp_position\" name=\"position\" [(ngModel)]=\"model.position\" #position=\"ngModel\">\n        <div *ngIf=\"position.errors && (position.dirty || position.touched)\" class=\"alert alert-danger\">\n          <span>Position is required</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row text-right\">\n      <label for=\"emp_department\" class=\"col-sm-2 col-form-label\">Department </label>\n      <div class=\"col-sm-10 text-left\">\n        <input type=\"text\" required class=\"form-control\" id=\"emp_department\" name=\"department\" [(ngModel)]=\"model.department\" #department=\"ngModel\">\n        <div *ngIf=\"department.errors && (department.dirty || department.touched)\" class=\"alert alert-danger\">\n          <span>Department is required</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row text-right\">\n      <label for=\"emp_status\" class=\"col-sm-2 col-form-label\">Hire Type </label>\n      <div class=\"col-sm-10 text-left\">\n        <input type=\"text\" required class=\"form-control\" id=\"emp_status\" name=\"status\" [(ngModel)]=\"model.hireType\" #status=\"ngModel\">\n        <div *ngIf=\"status.errors && (status.dirty || status.touched)\" class=\"alert alert-danger\">\n          <span>Status is required</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row text-right\">\n      <label for=\"emp_salary\" class=\"col-sm-2 col-form-label\">Salary </label>\n      <div class=\"col-sm-10 text-left\">\n        <input type=\"text\" pattern=\"[0-9]*\" required class=\"form-control\" id=\"emp_salary\" name=\"salary\" [(ngModel)]=\"model.salary\" #salary=\"ngModel\">\n        <div *ngIf=\"salary.errors && (salary.dirty || salary.touched)\" class=\"alert alert-danger\">\n          <span [hidden]=\"!salary.errors.pattern\">Enter numerical value</span>\n          <span [hidden]=\"!salary.errors.required\">Salary is required</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"offset-sm-2 col-sm-5\">\n        <button type=\"submit\" class=\"btn btn-outline-secondary btn-sm\" [disabled]=\"!employeeForm.form.valid\">Save</button>\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" (click)=\"goBack()\">Cancel</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-employee/add-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_service__ = __webpack_require__("./src/app/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee__ = __webpack_require__("./src/app/employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(_employeeService, _router, _route, _flashMessagesService) {
        this._employeeService = _employeeService;
        this._router = _router;
        this._route = _route;
        this._flashMessagesService = _flashMessagesService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__employee__["a" /* Employee */]();
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
    };
    // add employee method
    AddEmployeeComponent.prototype.addEmployee = function () {
        var _this = this;
        this._employeeService.addEmployee(this.model)
            .subscribe(function () {
            _this._flashMessagesService.show('Employee added successfully', { cssClass: 'alert-success', timeout: 3000 });
            _this.goBack();
        });
    };
    AddEmployeeComponent.prototype.goBack = function () {
        this._router.navigate(['dashboard']);
    };
    AddEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/components/add-employee/add-employee.component.html"),
            styles: [__webpack_require__("./src/app/components/add-employee/add-employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-employee/edit-employee.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-employee/edit-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header text-center\">\r\n    Add Employee\r\n  </div>\r\n  <form (submit)=\"updateEmployee()\">\r\n    <div class=\"form-group row text-right mt-3\">\r\n      <label for=\"emp_name\" class=\"col-sm-2 col-form-label\">Fullname </label>\r\n      <div class=\"col-sm-10 text-left\">\r\n        <input type=\"text\" required class=\"form-control\" id=\"emp_name\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\">\r\n        <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n          <span>Fullname is required</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row text-right\">\r\n      <label for=\"emp_position\" class=\"col-sm-2 col-form-label\">Position </label>\r\n      <div class=\"col-sm-10 text-left\">\r\n        <input type=\"text\" required class=\"form-control\" id=\"emp_position\" name=\"position\" [(ngModel)]=\"model.position\" #position=\"ngModel\">\r\n        <div *ngIf=\"position.errors && (position.dirty || position.touched)\" class=\"alert alert-danger\">\r\n          <span>Position is required</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row text-right\">\r\n      <label for=\"emp_department\" class=\"col-sm-2 col-form-label\">Department </label>\r\n      <div class=\"col-sm-10 text-left\">\r\n        <input type=\"text\" required class=\"form-control\" id=\"emp_department\" name=\"department\" [(ngModel)]=\"model.department\" #department=\"ngModel\">\r\n        <div *ngIf=\"department.errors && (department.dirty || department.touched)\" class=\"alert alert-danger\">\r\n          <span>Department is required</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row text-right\">\r\n      <label for=\"emp_status\" class=\"col-sm-2 col-form-label\">Status </label>\r\n      <div class=\"col-sm-10 text-left\">\r\n        <input type=\"text\" required class=\"form-control\" id=\"emp_status\" name=\"status\" [(ngModel)]=\"model.hireType\" #status=\"ngModel\">\r\n        <div *ngIf=\"status.errors && (status.dirty || status.touched)\" class=\"alert alert-danger\">\r\n          <span>Status is required</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row text-right\">\r\n      <label for=\"emp_salary\" class=\"col-sm-2 col-form-label\">Salary </label>\r\n      <div class=\"col-sm-10 text-left\">\r\n        <input type=\"text\" pattern=\"[0-9]*\" required class=\"form-control\" id=\"emp_salary\" name=\"salary\" [(ngModel)]=\"model.salary\" #salary=\"ngModel\">\r\n        <div *ngIf=\"salary.errors && (salary.dirty || salary.touched)\" class=\"alert alert-danger\">\r\n          <span [hidden]=\"!salary.errors.pattern\">Enter numerical value</span>\r\n          <span [hidden]=\"!salary.errors.required\">Salary is required</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <div class=\"offset-sm-2 col-sm-5\">\r\n        <button type=\"submit\" class=\"btn btn-outline-secondary btn-sm\">Update</button>\r\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" (click)=\"goBack()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit-employee/edit-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_service__ = __webpack_require__("./src/app/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee__ = __webpack_require__("./src/app/employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditEmployeeComponent = /** @class */ (function () {
    function EditEmployeeComponent(_employeeService, _router, _route, _flashMessagesService) {
        this._employeeService = _employeeService;
        this._router = _router;
        this._route = _route;
        this._flashMessagesService = _flashMessagesService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__employee__["a" /* Employee */]();
        this.id = this._route.snapshot.params['id'];
    }
    EditEmployeeComponent.prototype.ngOnInit = function () {
        this.getEmployee();
    };
    // first get data
    EditEmployeeComponent.prototype.getEmployee = function () {
        var _this = this;
        this._employeeService.getEmployee(this.id)
            .subscribe(function (employees) {
            _this.model = employees;
        });
    };
    // update employee method
    EditEmployeeComponent.prototype.updateEmployee = function () {
        var _this = this;
        this._employeeService.updateEmployee(this.id, this.model)
            .subscribe(function () {
            _this._flashMessagesService.show('Employee updated successfully', { cssClass: 'alert-success', timeout: 3000 });
            _this.goBack();
        });
    };
    EditEmployeeComponent.prototype.goBack = function () {
        this._router.navigate(['employee/manage-employee']);
    };
    EditEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/components/edit-employee/edit-employee.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-employee/edit-employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-detail/employee-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/employee-detail/employee-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n<div class=\"card\">\n  <div class=\"card-header text-center\">\n    Employee detail\n  </div>\n  <form *ngIf=\"employee\">\n    <div class=\"form-group row text-right mt-3\">\n      <label class=\"col-sm-2 col-form-label\">Fullname </label>\n      <div class=\"col-sm-10 text-left\">\n        <p class=\"form-control\"> {{employee.name}} </p>\n      </div>\n    </div>\n    <div class=\"form-group row text-right\">\n      <label class=\"col-sm-2 col-form-label\">Position </label>\n      <div class=\"col-sm-10 text-left\">\n        <p class=\"form-control\">{{employee.position}}</p>\n      </div>\n    </div>\n    <div class=\"form-group row text-right\">\n      <label class=\"col-sm-2 col-form-label\">Department </label>\n      <div class=\"col-sm-10 text-left\">\n        <p class=\"form-control\">{{employee.department}}</p>\n      </div>\n    </div>\n    <div class=\"form-group row text-right\">\n      <label class=\"col-sm-2 col-form-label\">Status </label>\n      <div class=\"col-sm-10 text-left\">\n        <p class=\"form-control\">{{employee.hireType}}</p>\n      </div>\n    </div>\n    <div class=\"form-group row text-right\">\n      <label class=\"col-sm-2 col-form-label\">Salary </label>\n      <div class=\"col-sm-10 text-left\">\n        <p class=\"form-control\">{{employee.salary}}</p>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"offset-sm-2 col-sm-5\">\n        <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-outline-secondary btn-sm\">Back</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/employee-detail/employee-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_service__ = __webpack_require__("./src/app/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeDetailComponent = /** @class */ (function () {
    function EmployeeDetailComponent(_employeeService, _router, _route) {
        this._employeeService = _employeeService;
        this._router = _router;
        this._route = _route;
        this.id = this._route.snapshot.params['id'];
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        this.getEmployee();
    };
    // Show employee details
    EmployeeDetailComponent.prototype.getEmployee = function () {
        var _this = this;
        this._employeeService.getEmployee(this.id)
            .subscribe(function (employees) {
            _this.employee = employees;
        });
    };
    EmployeeDetailComponent.prototype.goBack = function () {
        this._router.navigate(['employee/manage-employee']);
    };
    EmployeeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-detail',
            template: __webpack_require__("./src/app/components/employee-detail/employee-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/employee-detail/employee-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<div class=\"card\">\n  <div class=\"card-header text-center\">\n    <h4>Employee Lists</h4>\n  </div>\n  <table class=\"table\">\n    <thead class=\"thead-light\">\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Position</th>\n      <th scope=\"col\">Department</th>\n      <th scope=\"col\">Hire Type</th>\n      <th scope=\"col\">Salary</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let employee of employees\">\n        <td> {{employee.name}} </td>\n        <td> {{employee.position}} </td>\n        <td> {{employee.department}} </td>\n        <td> {{employee.hireType}} </td>\n        <td> {{employee.salary}} </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_service__ = __webpack_require__("./src/app/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_employeeService) {
        this._employeeService = _employeeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    HomeComponent.prototype.getEmployees = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employeees) {
            _this.employees = employeees;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeeService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  padding-top: 0px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\na {\r\n  color: #6c757d;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\" *ngIf=\"!show\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" id=\"login-tab\" data-toggle=\"tab\" routerLink=\"/login\" role=\"tab\" aria-controls=\"login\" aria-selected=\"true\">Login</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"register-tab\" data-toggle=\"tab\" routerLink=\"/register\" role=\"tab\" aria-controls=\"register\" aria-selected=\"true\">Register</a>\n  </li>\n</ul>\n<div class=\"tab-content\" id=\"myTabContent\">\n  <div class=\"tab-pane fade show active\" id=\"login\" role=\"tabpanel\" aria-labelledby=\"login-tab\">\n    <app-login></app-login>\n  </div>\n  <div class=\"tab-pane fade\" id=\"register\" role=\"tabpanel\" aria-labelledby=\"register-tab\">\n      <app-register></app-register>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.show = true;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("./src/app/components/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  padding-top: 0px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 430px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\na {\r\n  color: #6c757d;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\" *ngIf=\"!show\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"login-tab\" data-toggle=\"tab\" routerLink=\"/login\" role=\"tab\" aria-controls=\"login\" aria-selected=\"true\">Login</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"register-tab\" data-toggle=\"tab\" routerLink=\"/register\" role=\"tab\" aria-controls=\"register\" aria-selected=\"false\">Register</a>\n    </li>\n  </ul>\n\n<div class=\"text-center\">\n  <form class=\"form-signin\"  (submit) = \"onLoginSubmit()\">\n    <img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n    <label for=\"si-username\" class=\"sr-only\">Username</label>\n    <input type=\"text\" name=\"si-username\" id=\"si-username\" class=\"form-control\" placeholder=\"Username\" required autofocus [(ngModel)]=\"user.username\">\n    <label for=\"si-password\" class=\"sr-only\">Password</label>\n    <input type=\"password\" name=\"si-password\" id=\"si-password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"user.password\">\n    <button class=\"btn btn-outline-secondary btn-lg btn-block\" type=\"submit\">Sign in</button>\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("./src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, _router, _flashMessagesService) {
        this._userService = _userService;
        this._router = _router;
        this._flashMessagesService = _flashMessagesService;
        this.show = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // console.log(this.user);
        this._userService.authenticateUser(this.user)
            .subscribe(function (data) {
            // console.log('this is login', data.user);
            if (data.success) {
                _this._userService.storeUserData(data.token, data.user);
                _this._flashMessagesService.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this._flashMessagesService.grayOut(true);
                _this._router.navigate(['dashboard']);
            }
            else {
                _this._flashMessagesService.show(data.message, { cssClass: 'alert-danger', timeout: 3000 });
                _this._flashMessagesService.grayOut(true);
                _this._router.navigate(['/login']);
            }
        });
    };
    ;
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-employees/manage-employees.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/manage-employees/manage-employees.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n<div class=\"card\">\n  <div class=\"card-header text-center\">\n    <h4>Manage Employees</h4>\n  </div>\n  <table class=\"table\">\n    <thead class=\"thead-light\">\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Position</th>\n      <th scope=\"col\">Department</th>\n      <th scope=\"col\">Hire Type</th>\n      <th scope=\"col\">Salary</th>\n      <th scope=\"col\" style=\"width:20%\">Action</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let employee of employees\">\n        <td> {{employee.name}} </td>\n        <td> {{employee.position}} </td>\n        <td> {{employee.department}} </td>\n        <td> {{employee.hireType}} </td>\n        <td> {{employee.salary}} </td>\n        <td style=\"width:20%\">\n        <a routerLink=\"/employee-detail/{{employee._id}}\" class=\"btn btn-outline-secondary btn-sm\" role=\"button\">Details</a>\n        <a routerLink=\"/edit-employee-detail/{{employee._id}}\" class=\"btn btn-outline-secondary btn-sm\" role=\"button\">Edit</a>\n        <button type=\"button\" (click)=\"deleteEmployee(employee._id)\" class=\"btn btn-outline-secondary btn-sm\">Delete</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/manage-employees/manage-employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageEmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_service__ = __webpack_require__("./src/app/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageEmployeesComponent = /** @class */ (function () {
    function ManageEmployeesComponent(_employeeService, _flashMessagesService) {
        this._employeeService = _employeeService;
        this._flashMessagesService = _flashMessagesService;
    }
    ManageEmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    ManageEmployeesComponent.prototype.getEmployees = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (data) {
            _this.employees = data;
        });
    };
    // Delete single employee
    ManageEmployeesComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this._employeeService.deleteEmployee(id)
            .subscribe(function () {
            _this._flashMessagesService.show('Employee deleted successfully', { cssClass: 'alert-success', timeout: 3000 });
            _this.getEmployees();
        });
    };
    ManageEmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/components/manage-employees/manage-employees.component.html"),
            styles: [__webpack_require__("./src/app/components/manage-employees/manage-employees.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], ManageEmployeesComponent);
    return ManageEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/dashboard\">EMS</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive='active' routerLink=\"/dashboard\">\n            <i class=\"fas fa-home\"></i> Dashboard\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive='active' routerLink=\"/employee/create\">\n            <i class=\"fas fa-plus\"></i> Add Employee</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive='active' routerLink=\"/employee/manage-employee\">\n            <i class=\"fas fa-briefcase\"></i> Manage Employee</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\">Welcome  </a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"onLogOut()\">\n            <i class=\"fas fa-sign-out-alt\"></i>Logout\n          </a>\n        </li>\n        </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_userService, _flashMessagesService, _router) {
        this._userService = _userService;
        this._flashMessagesService = _flashMessagesService;
        this._router = _router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogOut = function () {
        this._userService.logout();
        this._flashMessagesService.show('You are successfully logged out', {
            cssClass: 'alert-success', timeout: 2000
        });
        this._router.navigate(['/login']);
        return false;
    };
    ;
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  padding-top: 0px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 430px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\na {\r\n  color: #6c757d;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\" *ngIf=\"!show\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"login-tab\" data-toggle=\"tab\" routerLink=\"/login\" role=\"tab\" aria-controls=\"login\" aria-selected=\"true\">Login</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"register-tab\" data-toggle=\"tab\" routerLink=\"/register\" role=\"tab\" aria-controls=\"register\" aria-selected=\"false\">Register</a>\n    </li>\n  </ul>\n\n<div class=\"text-center\">\n  <form class=\"form-signin\" (submit)=\"onRegisterSubmit()\" #registrationForm=\"ngForm\" novalidate>\n    <img class=\"mb-2\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign up</h1>\n    <label for=\"su-email\" class=\"sr-only\">email</label>\n    <input type=\"text\" name=\"su-email\" id=\"su-email\" class=\"form-control\" placeholder=\"Email\" required [(ngModel)]=\"user.email\" #email=\"ngModel\">\n    <div [hidden]=\"email.valid || email.pristine\"\n         class=\"alert alert-danger\">\n      Email is required, example john@doe.com\n    </div>\n    <label for=\"su_username\" class=\"sr-only\">Username</label>\n    <input type=\"text\" name=\"su_username\" id=\"su_username\" class=\"form-control\" placeholder=\"Username\" required autofocus [(ngModel)]=\"user.username\" #username=\"ngModel\">\n    <div [hidden]=\"username.valid || username.pristine\"\n         class=\"alert alert-danger\">\n      Name is required\n    </div>\n    <label for=\"su-password\" class=\"sr-only\">Password</label>\n    <input type=\"password\" name=\"su-password\" id=\"su-password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"user.password\" #password=\"ngModel\">\n    <div [hidden]=\"password.valid || password.pristine\"\n         class=\"alert alert-danger\">\n      Password is required\n    </div>\n    <label for=\"conf-password\" class=\"sr-only\">Password</label>\n    <input type=\"password\" name=\"conf-password\" id=\"conf-password\" class=\"form-control\" placeholder=\"Confirm password\" required [(ngModel)]=\"user.passwordConf\" #conf_password=\"ngModel\">\n    <div [hidden]=\"conf_password.valid || conf_password.pristine\"\n         class=\"alert alert-danger\">\n      Retype password\n    </div>\n    <button class=\"btn btn-outline-secondary btn-lg btn-block\" type=\"submit\" [disabled]=\"registrationForm.invalid\">Sign up</button>\n    <p class=\"mt-4 mb-3 text-muted\">&copy; 2017-2018</p>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("./src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService, _router, _flashMessagesService) {
        this._userService = _userService;
        this._router = _router;
        this._flashMessagesService = _flashMessagesService;
        this.show = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // email validation
        if (!this._userService.validateEmail(this.user.email)) {
            this._flashMessagesService.show('Please use a valid email!', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this._userService.registerUser(this.user)
                .subscribe(function (data) {
                console.log(data, _this.user);
                if (data.success) {
                    _this._flashMessagesService.show(data.message, {
                        cssClass: 'alert-success',
                        timeout: 3000
                    });
                    _this._router.navigate(['/login']);
                }
                else {
                    _this._flashMessagesService.show(data.message, { cssClass: 'alert-danger', timeout: 2000 });
                    _this._router.navigate(['/register']);
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this._employeeUrl = "employee/";
        console.log('Service is running ..');
    }
    // Get all employees method
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get(this._employeeUrl)
            .map(function (res) { return res.json(); });
    };
    // Get single employee method
    EmployeeService.prototype.getEmployee = function (id) {
        return this._http.get(this._employeeUrl + id)
            .map(function (res) { return res.json(); });
    };
    // Insert Employee method
    EmployeeService.prototype.addEmployee = function (info) {
        return this._http.post(this._employeeUrl, info)
            .map(function (res) { return res.json(); });
    };
    // Delete employee method
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this._http.delete(this._employeeUrl + id)
            .map(function (res) { return res.json(); });
    };
    // Update employee method
    EmployeeService.prototype.updateEmployee = function (id, info) {
        return this._http.put(this._employeeUrl + id, info)
            .map(function (res) { return res.json(); });
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/employee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this._userService.isAuthenticated()) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.error-template {padding: 40px 15px;text-align: center;}\r\n.error-actions {margin-top:15px;margin-bottom:15px;}\r\n.error-actions .btn { margin-right:10px; }\r\n"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>\r\n          Oops!</h1>\r\n        <h2>\r\n          404 Not Found</h2>\r\n        <div class=\"error-details\">\r\n          Sorry, an error has occured, Requested page not found!\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a routerLink=\"/home\" class=\"btn btn-outline-secondary btn-lg\"><i class=\"fas fa-home\"></i>\r\n            Take Me Home </a>\r\n          <a routerLink=\"/home\" class=\"btn btn-outline-secondary btn-lg\"><i class=\"fas fa-envelope\"></i>\r\n            Contact Support </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/shared/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/shared/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.registerUrl = "users/register";
        this.loginUrl = "users/login";
    }
    // validate email
    UserService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    // Register User method
    UserService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.registerUrl, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    //  Login authenticate user
    UserService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.loginUrl, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.token = token;
        this.user = user;
    };
    //JWT authentication token check for can-activate
    UserService.prototype.isAuthenticated = function () {
        // Check whether the token is expired and return
        // true or false
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    UserService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.user = null;
        this.token = null;
        localStorage.clear();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map