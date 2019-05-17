webpackJsonp([12],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutPageModule", function() { return CheckOutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_out__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckOutPageModule = /** @class */ (function () {
    function CheckOutPageModule() {
    }
    CheckOutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check_out__["a" /* CheckOutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_out__["a" /* CheckOutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CheckOutPageModule);
    return CheckOutPageModule;
}());

//# sourceMappingURL=check-out.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_loading_loading__ = __webpack_require__(206);
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
 * Generated class for the CheckOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckOutPage = /** @class */ (function () {
    function CheckOutPage(navCtrl, global, rest, loading, alert, auth) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.rest = rest;
        this.loading = loading;
        this.alert = alert;
        this.auth = auth;
    }
    CheckOutPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (!this.auth.authenticated()) {
            this.auth.logout();
            this.navCtrl.setRoot('LoginPage');
            return;
        }
        this.sum = 0;
        this.global.productCart.forEach(function (element) {
            _this.sum += element.price * element.quantity;
        });
    };
    CheckOutPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    CheckOutPage.prototype.sendCart = function () {
        var _this = this;
        this.loading.show();
        this.rest.sendCartOrder(this.global.productCart, this.note).then(function (scs) {
            console.log(scs);
            _this.loading.hide();
            var alertSuccessfulOrder = _this.alert.create({
                title: "Thành công",
                message: "Đơn hàng của bạn đã được gửi lên.",
                buttons: [
                    {
                        text: 'Ok',
                        role: 'ok',
                        handler: function () {
                            _this.global.productCart = [];
                            _this.note = '';
                            _this.navCtrl.popToRoot();
                        }
                    }
                ]
            });
            alertSuccessfulOrder.present();
        }, function (err) {
            console.log(err);
            _this.loading.hide();
        });
    };
    CheckOutPage.prototype.presentNotifications = function (myEvent) {
        // let popover = this.popoverCtrl.create('NotificationPage');
        // popover.present({
        //   ev: myEvent
        // });
        this.navCtrl.push('NotificationPage');
    };
    CheckOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-check-out',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\check-out\check-out.html"*/'<!--\n\n  Generated template for the CheckOutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Xác nhận thanh toán</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="presentNotifications($event)">\n\n        <div class="badge1" [attr.data-badge]="global.unreadNotificationCount">\n\n            <ion-icon [ngClass]="{\'animated infinite swing delay-2s\':global.unreadNotificationCount > 0}" name="notifications"></ion-icon>\n\n        </div>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let product of global.productCart">\n\n    <ion-card-header>\n\n        <p class="product-code">Mã sản phẩm: {{product.id}}</p>\n\n        <img class="product-image" src={{product.image}}/>\n\n        <ion-card-title>\n\n          {{product.title}}\n\n        </ion-card-title>\n\n        <p>\n\n          Sơn chống thấm tốt cho tường.\n\n        </p>\n\n    </ion-card-header>\n\n  \n\n  <ion-card-content>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label color="primary" fixed>Đơn giá</ion-label>\n\n        <ion-input type="text" value="{{product.price | formatMoney}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item >\n\n        <ion-label color="primary" fixed>Số lượng</ion-label>\n\n        <ion-input type="text" value="{{product.quantity}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" fixed>Màu sắc</ion-label>\n\n        <ion-input type="text" value="{{product.color}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" fixed>Thành tiền</ion-label>\n\n        <ion-input type="text" value="{{product.price * product.quantity| formatMoney}}"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card-content>  \n\n\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Tổng tiền\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      {{ sum | formatMoney}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Ghi chú\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row >\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-input type="text" placeholder="Ghi chú thêm cho đơn hàng" [(ngModel)]="note"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-row class="checkout-buttons">\n\n    <ion-col col-4>\n\n      <button ion-button icon-start (click)="goback()" clear>\n\n        <ion-icon name="arrow-dropleft-circle"></ion-icon>\n\n        Trở lại\n\n      </button>\n\n    </ion-col>\n\n    <ion-col offset-2 col-4>\n\n      <button ion-button icon-end (click)="sendCart()">\n\n        Đặt hàng\n\n        <ion-icon name="cart"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\check-out\check-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
    ], CheckOutPage);
    return CheckOutPage;
}());

//# sourceMappingURL=check-out.js.map

/***/ })

});
//# sourceMappingURL=12.js.map