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

module.exports = ".footer {\n  width: 100%;\n  height: 150px;\n}\n\n.f-app-container {\n  display: flex;\n  flex-flow: row wrap;\n  height: 100%;\n}\n\n.f-app-container > * {\n  padding: 10px;\n  flex: 1 100%;\n}\n\n.f-content {\n  background-color: #f7fafa;\n  flex-grow: 1;\n}\n\n.f-footer {\n  background-color: bisque;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n  text-align: center;\n  background-color: #fff;\n}\n\n.f-footer > img {\n  margin-top: 40px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <div>\n      <div>\n        <app-login [authData]=\"authData\" style=\"float: right\"></app-login>\n      </div>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n\n<div class=\"f-app-container\">\n  <div class=\"f-content\">\n      <div *ngIf=\"userUID\">\n          <app-file-uploader [userName]=\"userName\" [userUID]=\"userUID\"></app-file-uploader>\n        </div>\n        <app-image-galary [userUID]=\"userUID\"></app-image-galary>\n  </div>\n  <div class=\"f-footer\">\n      <img [src]=\"'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + baseURL\" alt=\"\">\n      <p>Scan to open app!</p>\n  </div>\n</div>\n"

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
/* harmony import */ var _services_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authorization/authorization.service */ "./src/app/services/authorization/authorization.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(auth, plLocation) {
        this.auth = auth;
        this.plLocation = plLocation;
        this.title = 'Tech train demo app.';
        this.authData = null;
        this.userUID = null;
        this.userName = null;
        this.baseURL = null;
        this.baseURL = this.getBaseUrl();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authData = this.auth.getAuthData();
        this.authData.user
            .subscribe(function (user) {
            user ? _this.userUID = user.uid : _this.userUID = null;
            user ? _this.userName = user.displayName : _this.userName = null;
        });
    };
    AppComponent.prototype.getBaseUrl = function () {
        return this.plLocation.location.origin;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _image_galary_image_galary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image-galary/image-galary.component */ "./src/app/image-galary/image-galary.component.ts");
/* harmony import */ var _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./file-uploader/file-uploader.component */ "./src/app/file-uploader/file-uploader.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _image_galary_image_galary_component__WEBPACK_IMPORTED_MODULE_11__["ImageGalaryComponent"],
                _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_12__["FileUploaderComponent"]
            ],
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/file-uploader/file-uploader.component.css":
/*!***********************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-container {\n  background-color: #fff;\n  padding: 10px;\n  box-shadow: 1px 1px 10px #efe7e7;\n}\n"

/***/ }),

/***/ "./src/app/file-uploader/file-uploader.component.html":
/*!************************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-container\">\n  <p>Upload center:</p>\n  <div class=\"fu-contaier\">\n    <div class=\"fu-controls\">\n      <label for=\"public\">Make public: </label>\n      <input id=\"public\" type=\"checkbox\" [(ngModel)]=\"isPublic\">\n      <input type=\"file\" accept=\"image/*\" (change)=\"uploadFile($event)\">\n    </div>\n    <div class=\"fu-progress\">\n      <mat-spinner *ngIf=\"showSpinner\" [value]=\"processStatus | async\" [mode]=\"'determinate'\"></mat-spinner>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/file-uploader/file-uploader.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.component.ts ***!
  \**********************************************************/
/*! exports provided: FileUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function() { return FileUploaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _services_data_base_connector_data_base_connector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-base-connector/data-base-connector.service */ "./src/app/services/data-base-connector/data-base-connector.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent(storage, db) {
        this.storage = storage;
        this.db = db;
        this.userUID = null;
        this.userName = null;
        this.isPublic = false;
        this.showSpinner = false;
    }
    FileUploaderComponent.prototype.uploadFile = function (event) {
        var _this = this;
        this.showSpinner = true;
        var file = event.target.files[0];
        var filePath = (this.isPublic ? 'public' : this.userUID) + "/" + (new Date().getTime() + file.name);
        var fileRef = this.storage.ref(filePath);
        var uploadTask = this.storage.upload(filePath, file);
        this.processStatus = uploadTask.percentageChanges();
        uploadTask
            .snapshotChanges()
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            return fileRef.getDownloadURL().subscribe(function (url) {
                _this.addUserFile(file.name, url);
                _this.showSpinner = false;
                _this.isPublic = false;
            });
        }))
            .subscribe();
    };
    FileUploaderComponent.prototype.addUserFile = function (fileName, url) {
        if (!this.isPublic && this.userUID) {
            this.db
                .getCollection(this.userUID)
                .add({ fileName: fileName, path: url, user: this.userName });
        }
        else {
            this.db
                .getCollection('public')
                .add({ fileName: fileName, path: url, user: this.userName });
            this.db
                .getCollection(this.userUID)
                .add({ fileName: fileName, path: url, user: this.userName });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploaderComponent.prototype, "userUID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploaderComponent.prototype, "userName", void 0);
    FileUploaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-uploader',
            template: __webpack_require__(/*! ./file-uploader.component.html */ "./src/app/file-uploader/file-uploader.component.html"),
            styles: [__webpack_require__(/*! ./file-uploader.component.css */ "./src/app/file-uploader/file-uploader.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            _services_data_base_connector_data_base_connector_service__WEBPACK_IMPORTED_MODULE_2__["DataBaseConnectorService"]])
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());



/***/ }),

/***/ "./src/app/image-galary/image-galary.component.css":
/*!*********************************************************!*\
  !*** ./src/app/image-galary/image-galary.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bart {\n  background-image: url('bart.png');\n  background-size: contain;\n  height: 240px;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-top: 50px;\n}\n\n.message {\n  text-align: center;\n  padding-top: 20px;\n}\n\n.photo-comment {\n  position: absolute;\n  bottom: 0;\n  background-color: #f5f3f3b5;\n  width: 100%;\n  text-align: left;\n  padding: 5px;\n  font-size: 12px;\n  padding-left: 20px;\n}\n"

/***/ }),

/***/ "./src/app/image-galary/image-galary.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-galary/image-galary.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf=\"!userUID ; else showGallery\">\n    <h3>Public photo board</h3>\n  </div>\n  <mat-grid-list cols=\"3\" rowHeight=\"2:1\">\n    <mat-grid-tile\n      *ngFor=\"let image of imageList | async\">\n      <a [href]=\"image.path\" target=\"_blank\" ><img [src]=\"image.path\" width=\"100%\"></a>\n      <div *ngIf=\"!userUID\" class=\"photo-comment\">\n        <span>From:</span> {{image.user}}\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n\n<ng-template #showGallery>\n  <div>\n    <h4>Your photos:</h4>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/image-galary/image-galary.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-galary/image-galary.component.ts ***!
  \********************************************************/
/*! exports provided: ImageGalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalaryComponent", function() { return ImageGalaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _services_data_base_connector_data_base_connector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-base-connector/data-base-connector.service */ "./src/app/services/data-base-connector/data-base-connector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageGalaryComponent = /** @class */ (function () {
    function ImageGalaryComponent(db, storage) {
        this.db = db;
        this.storage = storage;
    }
    ImageGalaryComponent.prototype.ngOnInit = function () {
    };
    ImageGalaryComponent.prototype.ngOnChanges = function (changes) {
        if (changes.userUID) {
            if (this.userUID) {
                this.imageList = this.db.getCollection(this.userUID).valueChanges();
            }
            else {
                this.imageList = this.db.getCollection('public').valueChanges();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageGalaryComponent.prototype, "userUID", void 0);
    ImageGalaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-galary',
            template: __webpack_require__(/*! ./image-galary.component.html */ "./src/app/image-galary/image-galary.component.html"),
            styles: [__webpack_require__(/*! ./image-galary.component.css */ "./src/app/image-galary/image-galary.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_base_connector_data_base_connector_service__WEBPACK_IMPORTED_MODULE_2__["DataBaseConnectorService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]])
    ], ImageGalaryComponent);
    return ImageGalaryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  display: flex;\n  flex-direction: row;\n  height: 40px;\n}\n\n.avatar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.user-info {\n  padding-right: 10px;\n  display: contents;\n}\n\n.action-bt {\n  order: 1;\n  flex-grow: 1;\n  position: absolute;\n  right: 10px;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\" *ngIf=\"authData.user | async as user; else showLogin\">\n  <div class=\"user-info\">\n    <h1>Hello {{ user.displayName }}!</h1>\n    <div class=\"avatar\">\n      <img [src]=\"user.photoURL\" width=\"30\" [alt]=\"user.displayName\">\n    </div>\n  </div>\n  <button class=\"action-bt\" mat-raised-button (click)=\"logout()\">Logout</button>\n</div>\n<ng-template #showLogin>\n  <span>Login in Photoßoard!</span>\n  <button class=\"action-bt\" mat-raised-button (click)=\"login()\">Login</button>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authorization/authorization.service */ "./src/app/services/authorization/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.login = function () {
        this.auth.loginGoogle();
    };
    LoginComponent.prototype.logout = function () {
        this.auth.logout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "authData", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/authorization/authorization.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/authorization/authorization.service.ts ***!
  \*****************************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthorizationService.prototype.loginGoogle = function () {
        this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    AuthorizationService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthorizationService.prototype.getAuthData = function () {
        return this.afAuth;
    };
    AuthorizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ }),

/***/ "./src/app/services/data-base-connector/data-base-connector.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/data-base-connector/data-base-connector.service.ts ***!
  \*****************************************************************************/
/*! exports provided: DataBaseConnectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBaseConnectorService", function() { return DataBaseConnectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataBaseConnectorService = /** @class */ (function () {
    function DataBaseConnectorService(db) {
        this.db = db;
    }
    DataBaseConnectorService.prototype.getCollection = function (collection) {
        return this.db.collection(collection);
    };
    DataBaseConnectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], DataBaseConnectorService);
    return DataBaseConnectorService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCFwDGG1c1LNgfKqrqGFaup0E9-dCz7of8',
        authDomain: 'techtrainconf.firebaseapp.com',
        databaseURL: 'https://techtrainconf.firebaseio.com',
        projectId: 'techtrainconf',
        storageBucket: 'techtrainconf.appspot.com',
        messagingSenderId: '914894061378'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/morko_mac/Projects/techtrain/ng_app/PhotoBoard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map