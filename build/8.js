webpackJsonp([8],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangePageModule", function() { return PasswordChangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_change__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordChangePageModule = /** @class */ (function () {
    function PasswordChangePageModule() {
    }
    PasswordChangePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password_change__["a" /* PasswordChangePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_change__["a" /* PasswordChangePage */]),
            ],
        })
    ], PasswordChangePageModule);
    return PasswordChangePageModule;
}());

//# sourceMappingURL=password-change.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_loading_loading__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(55);
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
 * Generated class for the PasswordChangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordChangePage = /** @class */ (function () {
    function PasswordChangePage(navCtrl, global, alertCtrl, auth, loading, rest, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.loading = loading;
        this.rest = rest;
        this.navParams = navParams;
        this.onEvent = function (event) {
            if (event == "onPasswordChange" && !_this.validate()) {
                return;
            }
            if (_this.events[event]) {
                _this.events[event]({
                    'password': _this.password,
                    'password_confirmation': _this.password_confirmation
                });
            }
        };
        // login and go to home page
        this.onPasswordChange = function (params) {
            _this.loading.show();
            var token = _this.navParams.get('token');
            _this.rest.setNewPassword(_this.password, _this.password_confirmation, token).then(function (scs) {
                _this.authSuccess(scs);
                _this.navCtrl.setRoot('HomePage');
            }, function (err) {
                _this.loading.hide();
                var message = "Không thể kết nối tới máy chủ!";
                if (err.error.error == 'token_not_found') {
                    message = "Không tìm thấy token!";
                }
                if (err.error.error == 'code_not_confirm') {
                    message = "Mã xác thực chưa được xác nhận lại!";
                }
                if (err.error.error == 'input_format_fail') {
                    message = "Mật khẩu không hợp lệ!";
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
        this.errorPasswordEmpty = false;
        this.errorPasswordConfirmEmpty = false;
        this.errorPasswordConfirmInvalid = false;
        this.events = {
            "onPasswordChange": this.onPasswordChange
        };
    }
    PasswordChangePage.prototype.validate = function () {
        this.errorPasswordEmpty = false;
        this.errorPasswordConfirmEmpty = false;
        this.errorPasswordConfirmInvalid = false;
        if (!this.password || this.password.length == 0) {
            this.errorPasswordEmpty = true;
        }
        if (!this.password_confirmation || this.password_confirmation.length == 0) {
            this.errorPasswordConfirmEmpty = true;
        }
        else if (this.password !== this.password_confirmation) {
            this.errorPasswordConfirmInvalid = true;
        }
        return !this.errorPasswordEmpty && !this.errorPasswordConfirmEmpty && !this.errorPasswordConfirmInvalid;
    };
    PasswordChangePage.prototype.openLoginPage = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    /**
     * Actions to take after succesful login
     *
     * @param data information returned from server
     */
    PasswordChangePage.prototype.authSuccess = function (data) {
        localStorage.setItem('token', data.token);
        this.global.userInfo = data.info;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PasswordChangePage.prototype, "events", void 0);
    PasswordChangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-password-change',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\password-change\password-change.html"*/'<ion-content>\n\n  <ion-grid no-padding>\n\n    <!-- logo -->\n\n    <ion-row header align-items-start align-items-stretch>\n\n      <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n        <img logo src="assets/img/logo.png" />\n\n      </ion-col>\n\n\n\n      <!-- Section form>-->\n\n      <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n        <form padding>\n\n          <!-- <ion-row align-items-start>\n\n            <ion-col col-12>\n\n            </ion-col>\n\n          </ion-row> -->\n\n          <!-- Input-field -->\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <div input-field>\n\n                <!-- Input-field-password -->\n\n                <ion-item no-padding>\n\n                  <ion-input type="password" placeholder="Mật khẩu" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n                  <ion-label no-margin *ngIf="errorPasswordEmpty">Trường không được để trống.</ion-label>\n\n                </ion-item>\n\n                <!-- Input-field-password-confirm -->\n\n                <ion-item no-padding>\n\n                  <ion-input type="password" placeholder="Nhập lại mật khẩu" [(ngModel)]="password_confirmation" [ngModelOptions]="{standalone: true}"></ion-input>\n\n                  <ion-label no-margin *ngIf="errorPasswordConfirmEmpty">Trường không được để trống.</ion-label>\n\n                  <ion-label no-margin *ngIf="errorPasswordConfirmInvalid">Mật khẩu nhập lại không khớp. </ion-label>\n\n                </ion-item>\n\n              </div>\n\n              <!-- Login button -->\n\n              <ion-col col-12 no-padding>\n\n                <button no-margin ion-button full text-uppercase (click)="onEvent(\'onPasswordChange\')">Đổi mật khẩu</button>\n\n              </ion-col>\n\n              <!-- Description -->\n\n              <div description text-center>\n\n                <ion-row>\n\n                  <!-- Signup now button -->\n\n                  <ion-col col-12padding>\n\n                    <p no-margin no-padding (click)="openLoginPage()">Đã có tài khoản? <a>Đăng nhập</a> </p>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\password-change\password-change.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */]])
    ], PasswordChangePage);
    return PasswordChangePage;
}());

//# sourceMappingURL=password-change.js.map

/***/ })

});
//# sourceMappingURL=8.js.map