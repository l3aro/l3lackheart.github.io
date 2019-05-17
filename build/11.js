webpackJsonp([11],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loading_loading__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, popoverCtrl, global, modal, alertCtrl, auth, rest, loading, oneSignal, platform) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.global = global;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.rest = rest;
        this.loading = loading;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.global.getUserInfo();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return;
        }
        else {
            this.oneSignal.getIds().then(function (scs) {
                console.log('onesignal user id: ' + scs.userId);
                _this.rest.storeOneSignalUserId(scs.userId).then(function (scs) {
                    console.log('thanh cong roi');
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
        }
    };
    HomePage.prototype.ionViewWillEnter = function () {
        if (!this.auth.authenticated()) {
            this.auth.logout();
            this.navCtrl.setRoot('LoginPage');
            return;
        }
        this.checkNotification();
    };
    HomePage.prototype.checkNotification = function () {
        var _this = this;
        this.rest.countUnreadNotification().then(function (scs) {
            _this.global.unreadNotificationCount = scs.count;
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        // let popover = this.popoverCtrl.create('NotificationPage');
        // popover.present({
        //   ev: myEvent
        // });
        this.navCtrl.push('NotificationPage');
    };
    HomePage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.setRoot('LoginPage');
    };
    HomePage.prototype.openWalletPage = function () {
        this.navCtrl.push('WalletPage');
    };
    HomePage.prototype.openCartHistoryPage = function () {
        this.navCtrl.push('CartHistoryPage');
    };
    HomePage.prototype.openSuggestProductPage = function () {
        this.navCtrl.push('SuggestProductPage');
    };
    HomePage.prototype.openColorMixPage = function () {
        this.navCtrl.push('ColorMixPage');
    };
    HomePage.prototype.presentLogoutConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Xác nhận',
            message: 'Bạn có chắc chắn muốn đăng xuất??',
            cssClass: 'alert-logout',
            buttons: [
                {
                    text: 'Hủy',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel');
                    }
                },
                {
                    text: 'Đăng xuất',
                    role: 'ok',
                    handler: function () {
                        _this.logout();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{ "Bảng điều khiển" | upperText }}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="presentNotifications($event)">\n\n        <div class="badge1" [attr.data-badge]="global.unreadNotificationCount">\n\n            <ion-icon [ngClass]="{\'animated infinite swing delay-2s\':global.unreadNotificationCount > 0}" name="notifications"></ion-icon>\n\n        </div>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <div class="avatar" [style.background-image]="\'url(\' + global.userInfo?.avatar + \')\'">\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-8 class="padit">\n\n        <h3>\n\n            {{ global.userInfo?.user_role === \'distributor\'?\'Nhà phân phối\':\'\' | upperText }}\n\n            {{ global.userInfo?.user_role === \'contractor\'?\'Thầu thợ\':\'\' | upperText }}\n\n        </h3>\n\n        <h5>{{ global.userInfo?.email }}</h5>\n\n        <p *ngIf="global.userInfo?.user_role === \'distributor\'"><b>Ví:</b> {{ global.userInfo?.wallet | formatMoney }}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div class="choice">\n\n    <ion-list no-lines>\n\n      <button *ngIf="global.userInfo?.user_role === \'distributor\'" ion-item full color="primary" tappable (click)="openWalletPage()">{{ "Ví tiền" | upperText }}</button>\n\n      <button *ngIf="global.userInfo?.user_role === \'distributor\'" ion-item full color="primary" tappable (click)="openCartHistoryPage()">{{ "Đặt hàng" | upperText }}</button>\n\n      <button *ngIf="global.userInfo?.user_role === \'contractor\'" ion-item full color="primary" tappable (click)="openSuggestProductPage()">{{ "Đề xuất công trình" | upperText }}</button>\n\n      <button ion-item full color="primary" tappable (click)="openColorMixPage()">{{ "Yêu cầu phối màu" | upperText }}</button>\n\n      <button ion-button full color="danger" tappable (click)="presentLogoutConfirm()">{{ "Đăng xuất" | upperText }}</button>\n\n    </ion-list>\n\n  </div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=11.js.map