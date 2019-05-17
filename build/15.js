webpackJsonp([15],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartHistoryDetailPageModule", function() { return CartHistoryDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_history_detail__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartHistoryDetailPageModule = /** @class */ (function () {
    function CartHistoryDetailPageModule() {
    }
    CartHistoryDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cart_history_detail__["a" /* CartHistoryDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__cart_history_detail__["a" /* CartHistoryDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CartHistoryDetailPageModule);
    return CartHistoryDetailPageModule;
}());

//# sourceMappingURL=cart-history-detail.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartHistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
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
 * Generated class for the CartHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartHistoryDetailPage = /** @class */ (function () {
    function CartHistoryDetailPage(navParams, view, rest) {
        this.navParams = navParams;
        this.view = view;
        this.rest = rest;
        this.images = ["CP8100", "CP8101", "CP8102", "CP8103", "CP8104", "CP8105", "CP8106", "CP8200", "CP8201", "CP8202", "CP8203", "CP8204", "CP8205", "CP8206", "CP8300", "CP8301", "CP8302", "CP8303", "CP8304", "CP8305", "CP8306", "CP8400", "CP8401", "CP8402", "CP8403", "CP8404", "CP8405", "CP8406", "CP8500", "CP8501", "CP8502", "CP8503", "CP8504", "CP8505", "CP8506", "CP8600", "CP8601", "CP8602", "CP8603", "CP8604", "CP8605", "CP8606", "CP8700", "CP8701", "CP8702", "CP8703", "CP8704", "CP8705", "CP8706", "CP8800", "CP8801", "CP8802", "CP8803", "CP8804", "CP8805", "CP8806", "CP9100", "CP9101", "CP9102", "CP9103", "CP9104", "CP9105", "CP9106", "CP9200", "CP9201", "CP9202", "CP9203", "CP9204", "CP9205", "CP9206", "CP9300", "CP9301", "CP9302", "CP9303", "CP9304", "CP9305", "CP9306", "CP9400", "CP9401", "CP9402", "CP9403", "CP9404", "CP9405", "CP9406", "CP9500", "CP9501", "CP9502", "CP9503", "CP9504", "CP9505", "CP9506", "CP9600", "CP9601", "CP9602", "CP9603", "CP9604", "CP9605", "CP9606", "CP9700", "CP9701", "CP9702", "CP9703", "CP9704", "CP9705", "CP9706", "CP9800", "CP9801", "CP9802", "CP9803", "CP9804", "CP9805", "CP9806"];
        this.order = this.navParams.get('order');
        this.details = this.navParams.get('details');
    }
    CartHistoryDetailPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    CartHistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-cart-history-detail',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\cart-history-detail\cart-history-detail.html"*/'<!--\n\n  Generated template for the CartHistoryDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Hóa đơn</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeModal()"><ion-icon name="md-close"></ion-icon></button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="order">\n\n      <ion-card>\n\n          <ion-card-header>\n\n            Thông tin chung\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n              <ion-item>\n\n                <h3>Thời điểm đặt hàng: <span>{{order?.created_at | formatDateTime}}</span> </h3>\n\n                <h3>Tổng tiền: <span>{{order?.total | formatMoney}}</span></h3>\n\n                <h3>Tình trạng: <span [innerHTML]="order?.status | orderStatusStyle"></span></h3>\n\n              </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      \n\n        <ion-card>\n\n          <ion-card-header>\n\n            Ghi chú\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            {{ order?.content }}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      \n\n        <ion-card *ngFor="let product of details">\n\n            <ion-card-header>\n\n              <ion-row>\n\n                <ion-col col-9>\n\n                  <p class="product-code">Mã sản phẩm: {{product.id}}</p>\n\n                </ion-col>\n\n              </ion-row>\n\n              <img class="product-image" src={{product.image}} />\n\n              <div text-center>\n\n                <h2>\n\n                  {{product.title}}\n\n                </h2>\n\n              </div>\n\n            </ion-card-header>\n\n        \n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                \n\n                \n\n                <ion-grid>\n\n        \n\n                  <ion-row>\n\n                    <ion-col col-6>\n\n                      <ion-label color="primary" stacked>Đơn giá</ion-label>\n\n                      <ion-input type="text" value="{{ product.price | formatMoney }}" readonly></ion-input>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                      <ion-label color="primary" stacked>Số lượng</ion-label>\n\n                      <ion-input type="number" placeholder="1" min="1" [(ngModel)]="product.quantity" readonly></ion-input>\n\n                    </ion-col>\n\n                  </ion-row>\n\n        \n\n                  <ion-row class="imagewithlabelselect image_{{product.color}}">\n\n                    <ion-item>\n\n                        <ion-label color="primary" stacked>Màu sắc</ion-label>\n\n                        <ion-select [(ngModel)]="product.color" class="disable" detail-none>\n\n                          <ion-option *ngFor="let optionimage of images" [value]="optionimage">{{optionimage}}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                  </ion-row>\n\n        \n\n                  <ion-row>\n\n                    <ion-label color="favorite" fixed>Thành tiền</ion-label>\n\n                    <ion-input type="text" color="secondary" value="{{ product.price * product.quantity | formatMoney }}" readonly></ion-input>\n\n                  </ion-row>\n\n        \n\n                </ion-grid>\n\n        \n\n              </ion-card-title>\n\n        \n\n            </ion-card-content>\n\n          </ion-card>\n\n      \n\n  </div>\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\cart-history-detail\cart-history-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */]])
    ], CartHistoryDetailPage);
    return CartHistoryDetailPage;
}());

//# sourceMappingURL=cart-history-detail.js.map

/***/ })

});
//# sourceMappingURL=15.js.map