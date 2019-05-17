webpackJsonp([9],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__notification__["a" /* NotificationPage */]),
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_format_date_time_format_date_time__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(alert, view, loading, rest, formatDateTime) {
        this.alert = alert;
        this.view = view;
        this.loading = loading;
        this.rest = rest;
        this.formatDateTime = formatDateTime;
        this.page = 1;
        this.perPage = 0;
        this.totalData = 0;
        this.totalPage = 0;
        this.items = [];
    }
    NotificationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loadNotif = this.loading.create();
        loadNotif.present();
        this.rest.getAllNotification().then(function (scs) {
            for (var i = 0; i < scs.notification.data.length; i++) {
                _this.items.push(scs.notification.data[i]);
            }
            _this.nextSelector = scs.notification.next_page_url;
            _this.page = scs.notification.current_page;
            _this.totalData = scs.notification.total;
            _this.totalPage = scs.notification.last_page;
            loadNotif.dismiss();
        });
    };
    NotificationPage.prototype.showNotificaltionDetail = function (notifData, i) {
        var _this = this;
        var notif = this.alert.create();
        notif.setTitle(JSON.parse(notifData.data).heading);
        notif.setSubTitle(this.formatDateTime.transform(notifData.created_at));
        notif.setMessage(JSON.parse(notifData.data).content);
        notif.addButton('OK');
        notif.setCssClass('alert-notification');
        notif.present();
        console.log(notifData.id);
        this.rest.markAsRead(notifData.id).then(function (scs) {
            _this.items[i].read_at = scs.read_at;
        }, function (err) {
            console.log(err);
        });
    };
    NotificationPage.prototype.parseNotificationData = function (data) {
        return JSON.parse(data);
    };
    NotificationPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.rest.getAllNotification(this.nextSelector).then(function (scs) {
            for (var i = 0; i < scs.notification.data.length; i++) {
                _this.items.push(scs.notification.data[i]);
            }
            _this.nextSelector = scs.notification.next_page_url;
            _this.page = scs.notification.current_page;
            _this.totalData = scs.notification.total;
            _this.totalPage = scs.notification.last_page;
            infiniteScroll.complete();
            if (_this.items.length > 90) {
                infiniteScroll.enable(false);
            }
        }, function (err) {
            console.log(err);
        });
    };
    NotificationPage.prototype.markAllAsRead = function () {
        var _this = this;
        this.rest.markAllAsRead().then(function () {
            for (var i = 0; i < _this.items.length; i++) {
                _this.items[i].read_at = 1;
            }
        }, function (err) {
            console.log(err);
        });
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\notification\notification.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{ "Thông báo" | upperText }}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button tappable (click)="markAllAsRead()">\n\n          <div>\n\n              <ion-icon name="checkmark-circle-outline"></ion-icon>\n\n          </div>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <div *ngIf="items.length < 1" text-center >\n\n    <br><br><br><br>\n\n    <img src="assets/img/no-notif.png">\n\n    <br>\n\n    <p>Không có thông báo mới</p>\n\n    <br>\n\n    <button ion-button >Quay lại trang chủ</button>\n\n  </div>\n\n  <div *ngIf="items.length > 0">\n\n    <ion-card *ngFor="let item of items; index as i" (click)="showNotificaltionDetail(item, i)" [ngClass]="{\'read\': item.read_at !== null}" >\n\n      <ion-item>\n\n        <ion-avatar item-left>\n\n          <img src="assets/img/logo-square.jpg">\n\n        </ion-avatar>\n\n        <h2 [innerHTML]="parseNotificationData(item.data).heading"></h2>\n\n        <p>{{ item.created_at | formatDateTime }}</p>\n\n      </ion-item>\n\n      <img src="">\n\n      <ion-card-content>\n\n        <p [innerHTML]="parseNotificationData(item.data).content"></p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" threshold="100px" *ngIf="page < totalPage">\n\n      <ion-infinite-scroll-content loadingSpinner="bubbles"></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__pipes_format_date_time_format_date_time__["a" /* FormatDateTimePipe */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=9.js.map