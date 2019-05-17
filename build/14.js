webpackJsonp([14],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartHistoryPageModule", function() { return CartHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_history__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartHistoryPageModule = /** @class */ (function () {
    function CartHistoryPageModule() {
    }
    CartHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart_history__["a" /* CartHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart_history__["a" /* CartHistoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CartHistoryPageModule);
    return CartHistoryPageModule;
}());

//# sourceMappingURL=cart-history.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loading_loading__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(54);
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
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartHistoryPage = /** @class */ (function () {
    function CartHistoryPage(navCtrl, navParams, view, rest, auth, modal, loading, global) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.rest = rest;
        this.auth = auth;
        this.modal = modal;
        this.loading = loading;
        this.global = global;
        this.page = 1;
        this.perPage = 0;
        this.totalData = 0;
        this.totalPage = 0;
        this.items = [];
        this.rest.getOrderHistory().then(function (scs) {
            for (var i = 0; i < scs.order.data.length; i++) {
                _this.items.push(scs.order.data[i]);
            }
            _this.nextSelector = scs.order.next_page_url;
            _this.page = scs.order.current_page;
            _this.totalData = scs.order.total;
            _this.totalPage = scs.order.last_page;
        }, function (err) {
            console.log(err);
        });
    }
    CartHistoryPage.prototype.ionViewWillEnter = function () {
        if (!this.auth.authenticated()) {
            this.auth.logout();
            this.navCtrl.setRoot('LoginPage');
            return;
        }
    };
    CartHistoryPage.prototype.showTransactionDetail = function (itemId) {
        var _this = this;
        this.loading.show();
        this.rest.getOrderHistoryDetail(itemId).then(function (scs) {
            _this.loading.hide();
            var transaction = _this.modal.create('CartHistoryDetailPage', { order: scs.order, details: scs.details });
            transaction.present();
        }, function (err) {
            console.log(err);
        });
    };
    CartHistoryPage.prototype.openCartPage = function () {
        this.navCtrl.push('CartPage');
    };
    CartHistoryPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.rest.getOrderHistory(this.nextSelector).then(function (scs) {
            for (var i = 0; i < scs.order.data.length; i++) {
                _this.items.push(scs.order.data[i]);
            }
            _this.nextSelector = scs.order.next_page_url;
            _this.page = scs.order.current_page;
            _this.totalData = scs.order.total;
            _this.totalPage = scs.order.last_page;
            infiniteScroll.complete();
            if (_this.items.length > 90) {
                infiniteScroll.enable(false);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CartHistoryPage.prototype.presentNotifications = function (myEvent) {
        // let popover = this.popoverCtrl.create('NotificationPage');
        // popover.present({
        //   ev: myEvent
        // });
        this.navCtrl.push('NotificationPage');
    };
    CartHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-cart-history',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\cart-history\cart-history.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Lịch sử đặt hàng</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="presentNotifications($event)">\n\n        <div class="badge1" [attr.data-badge]="global.unreadNotificationCount">\n\n            <ion-icon [ngClass]="{\'animated infinite swing delay-2s\':global.unreadNotificationCount > 0}" name="notifications"></ion-icon>\n\n        </div>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n      <ion-list>\n\n        <button ion-item detail-none *ngFor="let item of items" (click)="showTransactionDetail(item.id)">\n\n          <h3>Thời điểm đặt hàng: <span>{{item.created_at | formatDateTime}}</span> </h3>\n\n          <h3>Tổng tiền: <span>{{item.total | formatMoney}}</span></h3>\n\n          <h3>Tình trạng: <div outerHTML="{{item.status | orderStatusStyle}}"></div></h3>\n\n          <p text-right>Xem chi tiết &#62;&#62;</p>\n\n        </button>\n\n      </ion-list>\n\n    \n\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" threshold="100px" *ngIf="page < totalPage">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles"></ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    \n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="primary" (click)="openCartPage()" ><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\cart-history\cart-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]])
    ], CartHistoryPage);
    return CartHistoryPage;
}());

//# sourceMappingURL=cart-history.js.map

/***/ })

});
//# sourceMappingURL=14.js.map