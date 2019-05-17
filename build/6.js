webpackJsonp([6],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordSendmailPageModule", function() { return PasswordSendmailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_sendmail__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordSendmailPageModule = /** @class */ (function () {
    function PasswordSendmailPageModule() {
    }
    PasswordSendmailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password_sendmail__["a" /* PasswordSendmailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_sendmail__["a" /* PasswordSendmailPage */]),
            ],
        })
    ], PasswordSendmailPageModule);
    return PasswordSendmailPageModule;
}());

//# sourceMappingURL=password-sendmail.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordSendmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loading_loading__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(54);
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
 * Generated class for the PasswordSendmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordSendmailPage = /** @class */ (function () {
    function PasswordSendmailPage(navCtrl, loading, global, alertCtrl, rest) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.rest = rest;
        this.onEvent = function (event) {
            if (event == "onSendmail" && !_this.validate()) {
                return;
            }
            if (_this.events[event]) {
                _this.events[event]({
                    'email': _this.email,
                });
            }
        };
        // login and go to home page
        this.onSendmail = function (params) {
            _this.loading.show();
            _this.rest.sendRequestNewPassword(_this.email).then(function (scs) {
                _this.navCtrl.push('PasswordCodePage', { token: scs.token });
            }, function (err) {
                _this.loading.hide();
                var message = "Không thể kết nối tới máy chủ!";
                if (err.error.error == 'email_not_found') {
                    message = "Không tìm thấy tài khoản với email đã nhập!";
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
        this.events = {
            "onSendmail": this.onSendmail
        };
    }
    PasswordSendmailPage.prototype.validate = function () {
        this.errorEmailEmpty = false;
        this.errorEmailInvalid = false;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.email || this.email.length == 0) {
            this.errorEmailEmpty = true;
        }
        else if (!re.test(String(this.email).toLowerCase())) {
            this.errorEmailInvalid = true;
        }
        return !this.errorEmailEmpty && !this.errorEmailInvalid;
    };
    PasswordSendmailPage.prototype.openLoginPage = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PasswordSendmailPage.prototype, "events", void 0);
    PasswordSendmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-password-sendmail',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\password-sendmail\password-sendmail.html"*/'<ion-content>\n\n  <ion-grid no-padding>\n\n    <!-- logo -->\n\n    <ion-row header align-items-start align-items-stretch>\n\n      <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n        <img logo src="assets/img/logo.png" />\n\n      </ion-col>\n\n\n\n    <!-- Section form>-->\n\n  <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n    <form padding>\n\n      <!-- <ion-row align-items-start>\n\n        <ion-col col-12>\n\n        </ion-col>\n\n      </ion-row> -->\n\n      <!-- Input-field -->\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div input-field>\n\n            <!-- Input-field-text -->\n\n            <ion-item no-padding>\n\n              <ion-input type="text" placeholder="Email" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n\n              <ion-label no-margin *ngIf="errorEmailEmpty">Trường không được để trống.</ion-label>\n\n              <ion-label no-margin *ngIf="errorEmailInvalid">Email không hợp lệ. </ion-label>\n\n            </ion-item>       \n\n          </div>\n\n          <!-- Login button -->\n\n          <ion-col col-12 no-padding>\n\n            <button no-margin ion-button full text-uppercase (click)="onEvent(\'onSendmail\')">Gửi email</button>\n\n          </ion-col>\n\n          <!-- Description -->\n\n          <div description text-center>\n\n            <ion-row>\n\n\n\n              <!-- Signup now button -->\n\n              <ion-col col-12padding>\n\n                <p no-margin no-padding (click)="openLoginPage()">Đã có tài khoản? <a>Đăng nhập</a> </p>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n    </ion-col>\n\n        </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\password-sendmail\password-sendmail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], PasswordSendmailPage);
    return PasswordSendmailPage;
}());

//# sourceMappingURL=password-sendmail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map