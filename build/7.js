webpackJsonp([7],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordCodePageModule", function() { return PasswordCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_code__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordCodePageModule = /** @class */ (function () {
    function PasswordCodePageModule() {
    }
    PasswordCodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password_code__["a" /* PasswordCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_code__["a" /* PasswordCodePage */]),
            ],
        })
    ], PasswordCodePageModule);
    return PasswordCodePageModule;
}());

//# sourceMappingURL=password-code.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_loading_loading__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(55);
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
 * Generated class for the PasswordCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordCodePage = /** @class */ (function () {
    function PasswordCodePage(navCtrl, loading, global, alertCtrl, rest, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.rest = rest;
        this.navParams = navParams;
        this.onEvent = function (event) {
            if (event == "onSendcode" && !_this.validate()) {
                return;
            }
            if (_this.events[event]) {
                _this.events[event]({
                    'code': _this.code,
                });
            }
        };
        // login and go to home page
        this.onSendcode = function (params) {
            _this.loading.show();
            var token = _this.navParams.get('token');
            _this.rest.checkResetPasswordCode(_this.code, token).then(function (scs) {
                // console.log(scs.token);
                // let token = scs.token;
                _this.navCtrl.push('PasswordChangePage', { token: scs.token });
            }, function (err) {
                _this.loading.hide();
                var message = "Không thể kết nối tới máy chủ!";
                if (err.error.error == 'token_not_found') {
                    message = "Không tìm thấy token!";
                }
                if (err.error.error == 'code_not_format' || err.error.error == 'code_fail') {
                    message = "Mã xác thực không hợp lệ!";
                }
                if (err.error.error == 'token_expries') {
                    message = "Mã xác thực đã hết hạn sử dụng!";
                }
                if (err.error.error == 'input_max_5_code') {
                    message = "Nhập quá số lần cho phép! Vui lòng liên hệ ban quản trị để được hỗ trợ thêm.";
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
        this.errorCodeEmpty = false;
        this.events = {
            "onSendcode": this.onSendcode
        };
    }
    PasswordCodePage.prototype.validate = function () {
        this.errorCodeEmpty = false;
        if (!this.code || this.code.length == 0) {
            this.errorCodeEmpty = true;
        }
        return !this.errorCodeEmpty;
    };
    PasswordCodePage.prototype.openLoginPage = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PasswordCodePage.prototype, "events", void 0);
    PasswordCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-password-code',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\password-code\password-code.html"*/'<ion-content>\n\n  <ion-grid no-padding>\n\n    <!-- logo -->\n\n    <ion-row header align-items-start align-items-stretch>\n\n      <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n        <img logo src="assets/img/logo.png" />\n\n      </ion-col>\n\n\n\n    <!-- Section form>-->\n\n  <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n    <form padding>\n\n      <!-- <ion-row align-items-start>\n\n        <ion-col col-12>\n\n        </ion-col>\n\n      </ion-row> -->\n\n      <!-- Input-field -->\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div input-field>\n\n            <!-- Input-field-text -->\n\n            <ion-item no-padding>\n\n              <ion-input type="text" placeholder="Code" [(ngModel)]="code" [ngModelOptions]="{standalone: true}"></ion-input>\n\n              <ion-label no-margin *ngIf="errorCodeEmpty">Trường không được để trống.</ion-label>\n\n            </ion-item>       \n\n          </div>\n\n          <!-- Login button -->\n\n          <ion-col col-12 no-padding>\n\n            <button no-margin ion-button full text-uppercase (click)="onEvent(\'onSendcode\')">Xác nhận</button>\n\n          </ion-col>\n\n          <!-- Description -->\n\n          <div description text-center>\n\n            <ion-row>\n\n\n\n              <!-- Signup now button -->\n\n              <ion-col col-12padding>\n\n                <p no-margin no-padding (click)="openLoginPage()">Đã có tài khoản? <a>Đăng nhập</a> </p>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n    </ion-col>\n\n        </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\password-code\password-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
    ], PasswordCodePage);
    return PasswordCodePage;
}());

//# sourceMappingURL=password-code.js.map

/***/ })

});
//# sourceMappingURL=7.js.map