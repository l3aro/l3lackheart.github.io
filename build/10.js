webpackJsonp([10],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_push_notification_push_notification__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_loading_loading__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, global, auth, alertCtrl, loading, pushNotification) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.pushNotification = pushNotification;
        this.onEvent = function (event) {
            if (event == "onLogin" && !_this.validate()) {
                return;
            }
            if (_this.events[event]) {
                _this.events[event]({
                    'email': _this.email,
                    'password': _this.password
                });
            }
        };
        // login and go to home page
        this.onLogin = function (params) {
            _this.loading.show();
            _this.auth.signin({ email: _this.email, password: _this.password }).then(function (data) {
                _this.loading.hide();
                _this.pushNotification.initialize();
                _this.navCtrl.setRoot('HomePage');
            }, function (err) {
                _this.loading.hide();
                var message = "Không thể kết nối tới máy chủ!";
                if (err.error.message == 'invalid_email_or_password') {
                    message = "Sai thông tin đăng nhập";
                }
                var alert = _this.alertCtrl.create({
                    title: 'Lỗi',
                    message: message,
                    buttons: [
                        {
                            text: 'OK',
                            role: 'ok',
                        }
                    ]
                });
                alert.present();
            });
        };
        this.errorEmailEmpty = false;
        this.errorEmailInvalid = false;
        this.errorPasswordEmpty = false;
        this.events = {
            "onLogin": this.onLogin
        };
    }
    LoginPage.prototype.validate = function () {
        this.errorEmailEmpty = false;
        this.errorEmailInvalid = false;
        this.errorPasswordEmpty = false;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.email || this.email.length == 0) {
            this.errorEmailEmpty = true;
        }
        else if (!re.test(String(this.email).toLowerCase())) {
            this.errorEmailInvalid = true;
        }
        if (!this.password || this.password.length == 0) {
            this.errorPasswordEmpty = true;
        }
        return !this.errorEmailEmpty && !this.errorEmailInvalid && !this.errorPasswordEmpty;
    };
    LoginPage.prototype.openRegisterPage = function () {
        this.navCtrl.setRoot('RegisterPage');
    };
    LoginPage.prototype.openPasswordSendmailPage = function () {
        this.navCtrl.setRoot('PasswordSendmailPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "events", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-grid no-padding>\n\n    <!-- logo -->\n\n    <ion-row header align-items-start align-items-stretch>\n\n      <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n        <img logo src="assets/img/logo.png" />\n\n      </ion-col>\n\n\n\n    <!-- Section form>-->\n\n  <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n    <form padding>\n\n      <ion-row align-items-start>\n\n        <ion-col col-12>\n\n          <h1><strong>Xin chào,</strong> đăng nhập tài khoản nhà phân phối, đại lý của CPONPAINT</h1>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- Input-field -->\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div input-field>\n\n            <!-- Input-field-text -->\n\n            <ion-item no-padding>\n\n              <ion-input type="text" placeholder="Email" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n\n              <ion-label no-margin *ngIf="errorEmailEmpty">Trường không được để trống.</ion-label>\n\n              <ion-label no-margin *ngIf="errorEmailInvalid">Email không hợp lệ. </ion-label>\n\n            </ion-item>\n\n            <!-- Input-field-password -->\n\n            <ion-item no-padding>\n\n              <ion-input type="password" placeholder="Mật khẩu" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n              <ion-label no-margin *ngIf="errorPasswordEmpty">Trường không được để trống.</ion-label>\n\n            </ion-item>\n\n          </div>\n\n          <!-- Login button -->\n\n          <ion-col col-12 no-padding>\n\n            <button no-margin ion-button full text-uppercase (click)="onEvent(\'onLogin\')">Đăng nhập</button>\n\n          </ion-col>\n\n          <!-- Description -->\n\n          <div description text-center>\n\n            <ion-row>\n\n              <!-- Reset your password button -->\n\n              <ion-col col-12 no-padding no-margin>\n\n                <p no-margin no-padding (click)="openPasswordSendmailPage()">Quên mật khẩu? <a>Đặt lại mật khẩu</a> </p>\n\n              </ion-col>\n\n              <!-- Signup now button -->\n\n              <ion-col col-12padding>\n\n                <p no-margin no-padding (click)="openRegisterPage()">Chưa có tài khoản? <a>Đăng ký</a> </p>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n    </ion-col>\n\n        </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_push_notification_push_notification__["a" /* PushNotificationProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=10.js.map