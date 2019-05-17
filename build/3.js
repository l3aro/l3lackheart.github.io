webpackJsonp([3],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], WalletPageModule);
    return WalletPageModule;
}());

//# sourceMappingURL=wallet.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_format_date_time_format_date_time__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_format_money_format_money__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(104);
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
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletPage = /** @class */ (function () {
    function WalletPage(alert, rest, global, auth, navCtrl, formatMoney, formatDateTime) {
        var _this = this;
        this.alert = alert;
        this.rest = rest;
        this.global = global;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.formatMoney = formatMoney;
        this.formatDateTime = formatDateTime;
        this.page = 1;
        this.perPage = 0;
        this.totalData = 0;
        this.totalPage = 0;
        this.items = [];
        this.rest.getWalletHistory().then(function (scs) {
            for (var i = 0; i < scs.transactions.data.length; i++) {
                _this.items.push(scs.transactions.data[i]);
            }
            _this.nextSelector = scs.transactions.next_page_url;
            _this.page = scs.transactions.current_page;
            _this.totalData = scs.transactions.total;
            _this.totalPage = scs.transactions.last_page;
        }, function (err) {
            console.log(err);
        });
    }
    WalletPage.prototype.ionViewWillEnter = function () {
        if (!this.auth.authenticated()) {
            this.auth.logout();
            this.navCtrl.setRoot('LoginPage');
            return;
        }
        this.global.getUserInfo();
    };
    WalletPage.prototype.showTransactionDetail = function (item) {
        var arrow = item.direction === 'in' ? '&nearr;' : '&searr;';
        var content = item.content ? item.content : "";
        var transaction = this.alert.create();
        transaction.setTitle(item.title);
        transaction.setSubTitle(this.formatDateTime.transform(item.created_at));
        transaction.setMessage('<p><span class="' + item.direction + '">' + arrow + ' </span>&nbsp;' + this.formatMoney.transform(item.amount) + '</p>' + '<p>' + content + '</p>');
        transaction.setCssClass('alert-transaction');
        transaction.addButton('OK');
        transaction.present();
    };
    WalletPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.rest.getWalletHistory(this.nextSelector).then(function (scs) {
            for (var i = 0; i < scs.transactions.data.length; i++) {
                _this.items.push(scs.transactions.data[i]);
            }
            _this.nextSelector = scs.transactions.next_page_url;
            _this.page = scs.transactions.current_page;
            _this.totalData = scs.transactions.total;
            _this.totalPage = scs.transactions.last_page;
            infiniteScroll.complete();
            if (_this.items.length > 90) {
                infiniteScroll.enable(false);
            }
        }, function (err) {
            console.log(err);
        });
    };
    WalletPage.prototype.presentNotifications = function (myEvent) {
        // let popover = this.popoverCtrl.create('NotificationPage');
        // popover.present({
        //   ev: myEvent
        // });
        this.navCtrl.push('NotificationPage');
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\wallet\wallet.html"*/'<!--\n\n  Generated template for the WalletPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{ "Ví tiền" | upperText }}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="presentNotifications($event)">\n\n        <div class="badge1" [attr.data-badge]="global.unreadNotificationCount">\n\n            <ion-icon [ngClass]="{\'animated infinite swing delay-2s\':global.unreadNotificationCount > 0}" name="notifications"></ion-icon>\n\n        </div>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Số dư trong ví\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      {{ global.userInfo?.wallet | formatMoney}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Lịch sử giao dịch\n\n    </ion-card-header>\n\n  \n\n    <ion-list>\n\n      <button ion-item *ngFor="let item of items" (click)="showTransactionDetail(item)">\n\n        <h2> {{item.title}} </h2>\n\n        <p> {{item.created_at | formatDateTime}} </p>\n\n        <h6><span class="{{item.direction}}"><ion-icon name="md-arrow-round-{{item.direction===\'in\'?\'up\':\'down\'}}"></ion-icon></span> {{item.amount | formatMoney}}</h6>\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" threshold="100px" *ngIf="page < totalPage">\n\n      <ion-infinite-scroll-content loadingSpinner="bubbles"></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__pipes_format_money_format_money__["a" /* FormatMoneyPipe */],
            __WEBPACK_IMPORTED_MODULE_0__pipes_format_date_time_format_date_time__["a" /* FormatDateTimePipe */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ })

});
//# sourceMappingURL=3.js.map