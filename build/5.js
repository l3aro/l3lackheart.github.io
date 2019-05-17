webpackJsonp([5],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loading_loading__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global_global__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(104);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, global, alertCtrl, app, auth, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.auth = auth;
        this.loading = loading;
        this.onEvent = function (event) {
            if (event == "onRegister" && !_this.validate()) {
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
        this.onRegister = function (params) {
            _this.loading.show();
            _this.auth.signup({ name: _this.name, email: _this.email, password: _this.password, password_confirmation: _this.password_confirmation, user_type: _this.user_type }).then(function (data) {
                console.log(data.success);
                _this.loading.hide();
                var alert = _this.alertCtrl.create({
                    title: 'Đã gửi bản đăng ký',
                    subTitle: 'Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất!',
                    buttons: [
                        {
                            text: 'OK',
                            role: 'ok',
                            handler: function () {
                                _this.global.isAuthenticated = true;
                                var tabsNav = _this.app.getNavByIdOrName('mainTabs');
                                tabsNav.select(0);
                            }
                        }
                    ]
                });
                alert.present();
            }, function (err) {
                console.log(err.error.message);
                _this.loading.hide();
                var message = "Không thể kết nối tới máy chủ!";
                if (err.error.message == 'email_used') {
                    message = "Email đã được sử dụng";
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
        this.errorNameEmpty = false;
        this.errorEmailEmpty = false;
        this.errorEmailInvalid = false;
        this.errorPasswordEmpty = false;
        this.errorPasswordConfirmEmpty = false;
        this.errorPasswordConfirmInvalid = false;
        this.user_type = 'distributor';
        this.events = {
            "onRegister": this.onRegister
        };
    }
    RegisterPage.prototype.validate = function () {
        this.errorNameEmpty = false;
        this.errorEmailEmpty = false;
        this.errorEmailInvalid = false;
        this.errorPasswordEmpty = false;
        this.errorPasswordConfirmEmpty = false;
        this.errorPasswordConfirmInvalid = false;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.name || this.name.length == 0) {
            this.errorNameEmpty = true;
        }
        if (!this.email || this.email.length == 0) {
            this.errorEmailEmpty = true;
        }
        else if (!re.test(String(this.email).toLowerCase())) {
            this.errorEmailInvalid = true;
        }
        if (!this.password || this.password.length == 0) {
            this.errorPasswordEmpty = true;
        }
        if (!this.password_confirmation || this.password_confirmation.length == 0) {
            this.errorPasswordConfirmEmpty = true;
        }
        else if (this.password !== this.password_confirmation) {
            this.errorPasswordConfirmInvalid = true;
        }
        return !this.errorNameEmpty && !this.errorEmailEmpty && !this.errorEmailInvalid && !this.errorPasswordEmpty && !this.errorPasswordConfirmEmpty && !this.errorPasswordConfirmInvalid;
    };
    RegisterPage.prototype.openLoginPage = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "events", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content>\n\n  <ion-grid no-padding>\n\n    <!-- logo -->\n\n    <ion-row header align-items-start align-items-stretch>\n\n      <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n        <img logo src="assets/img/logo.png" />\n\n      </ion-col>\n\n\n\n    <!-- Section form>-->\n\n  <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n    <form padding>\n\n      <!-- <ion-row align-items-start>\n\n        <ion-col col-12>\n\n        </ion-col>\n\n      </ion-row> -->\n\n      <!-- Input-field -->\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div input-field>\n\n            <!-- Input-field-text -->\n\n            <ion-item no-padding>\n\n              <ion-input type="text" placeholder="Tên hiển thị" [(ngModel)]="name" [ngModelOptions]="{standalone: true}"></ion-input>\n\n              <ion-label no-margin *ngIf="errorNameEmpty">Trường không được để trống.</ion-label>\n\n            </ion-item>           \n\n            <!-- Input-field-text -->\n\n            <ion-item no-padding>\n\n              <ion-input type="text" placeholder="Email" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n\n              <ion-label no-margin *ngIf="errorEmailEmpty">Trường không được để trống.</ion-label>\n\n              <ion-label no-margin *ngIf="errorEmailInvalid">Email không hợp lệ. </ion-label>\n\n            </ion-item>\n\n            <!-- Input-field-password -->\n\n            <ion-item no-padding>\n\n              <ion-input type="password" placeholder="Mật khẩu" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n              <ion-label no-margin *ngIf="errorPasswordEmpty">Trường không được để trống.</ion-label>\n\n            </ion-item>\n\n            <!-- Input-field-password-confirm -->\n\n            <ion-item no-padding>\n\n              <ion-input type="password" placeholder="Nhập lại mật khẩu" [(ngModel)]="password_confirmation" [ngModelOptions]="{standalone: true}"></ion-input>\n\n              <ion-label no-margin *ngIf="errorPasswordConfirmEmpty">Trường không được để trống.</ion-label>\n\n              <ion-label no-margin *ngIf="errorPasswordConfirmInvalid">Mật khẩu nhập lại không khớp. </ion-label>\n\n            </ion-item>\n\n            <div class="middle">\n\n              <!-- <h6>CSS Radio Button</h6> -->\n\n              <label>\n\n                <input type="radio" name="radio" value="distributor" [(ngModel)]="user_type" [ngModelOptions]="{standalone: true}"/>\n\n                <div class="front-end box">\n\n                  <span>Nhà phân phối</span>\n\n                </div>\n\n              </label>\n\n              \n\n              <label>\n\n                <input type="radio" name="radio" value="contractor" [(ngModel)]="user_type" [ngModelOptions]="{standalone: true}"/>\n\n                <div class="back-end box">\n\n                  <span>Thầu thợ</span>\n\n                </div>\n\n              </label>\n\n            </div>\n\n          </div>\n\n          <!-- Login button -->\n\n          <ion-col col-12 no-padding>\n\n            <button no-margin ion-button full text-uppercase (click)="onEvent(\'onRegister\')">Đăng ký</button>\n\n          </ion-col>\n\n          <!-- Description -->\n\n          <div description text-center>\n\n            <ion-row>\n\n              <!-- Reset your password button -->\n\n              <ion-col col-12 no-padding no-margin>\n\n                <p no-margin no-padding>Quên mật khẩu? <a>Đặt lại mật khẩu</a> </p>\n\n              </ion-col>\n\n              <!-- Signup now button -->\n\n              <ion-col col-12padding>\n\n                <p no-margin no-padding (click)="openLoginPage()">Đã có tài khoản? <a>Đăng nhập</a> </p>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n    </ion-col>\n\n        </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_loading_loading__["a" /* LoadingProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=5.js.map