webpackJsonp([13],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(104);
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
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, view, global, rest, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.global = global;
        this.rest = rest;
        this.auth = auth;
        this.searchTerm = '';
        this.hideButton = false;
        this.images = ["CP8100", "CP8101", "CP8102", "CP8103", "CP8104", "CP8105", "CP8106", "CP8200", "CP8201", "CP8202", "CP8203", "CP8204", "CP8205", "CP8206", "CP8300", "CP8301", "CP8302", "CP8303", "CP8304", "CP8305", "CP8306", "CP8400", "CP8401", "CP8402", "CP8403", "CP8404", "CP8405", "CP8406", "CP8500", "CP8501", "CP8502", "CP8503", "CP8504", "CP8505", "CP8506", "CP8600", "CP8601", "CP8602", "CP8603", "CP8604", "CP8605", "CP8606", "CP8700", "CP8701", "CP8702", "CP8703", "CP8704", "CP8705", "CP8706", "CP8800", "CP8801", "CP8802", "CP8803", "CP8804", "CP8805", "CP8806", "CP9100", "CP9101", "CP9102", "CP9103", "CP9104", "CP9105", "CP9106", "CP9200", "CP9201", "CP9202", "CP9203", "CP9204", "CP9205", "CP9206", "CP9300", "CP9301", "CP9302", "CP9303", "CP9304", "CP9305", "CP9306", "CP9400", "CP9401", "CP9402", "CP9403", "CP9404", "CP9405", "CP9406", "CP9500", "CP9501", "CP9502", "CP9503", "CP9504", "CP9505", "CP9506", "CP9600", "CP9601", "CP9602", "CP9603", "CP9604", "CP9605", "CP9606", "CP9700", "CP9701", "CP9702", "CP9703", "CP9704", "CP9705", "CP9706", "CP9800", "CP9801", "CP9802", "CP9803", "CP9804", "CP9805", "CP9806"];
        this.items = [];
        this.productLeave = [];
        this.productReorder = [];
        this.buttonLeave = false;
        this.buttonReorder = false;
    }
    CartPage.prototype.ionViewWillEnter = function () {
        if (!this.auth.authenticated()) {
            this.auth.logout();
            this.navCtrl.setRoot('LoginPage');
            return;
        }
    };
    CartPage.prototype.filterItems = function () {
        var _this = this;
        console.log(this.searchTerm);
        if (this.searchTerm.length < 2) {
            this.items = [];
            return;
        }
        this.rest.searchProduct(this.searchTerm).then(function (scs) {
            _this.items = [];
            scs.products.forEach(function (element) {
                _this.items.push({
                    id: element.id,
                    title: element.name,
                    price: element.price,
                    image: element.image,
                    quantity: 1,
                    color: 'CP8100',
                });
            });
        }, function (err) {
            console.log(err);
        });
    };
    CartPage.prototype.productOrder = function (id, title, price, image) {
        this.global.productCart.push({
            id: id,
            title: title,
            price: price,
            image: image,
            quantity: 1,
            color: 'CP8100',
        });
        this.productLeave[id] = false;
        this.productReorder[id] = false;
        this.searchTerm = '';
        this.items = [];
    };
    CartPage.prototype.CheckOut = function () {
        this.errorCounter = 0;
        if (this.global.productCart == null) {
            alert('Bạn chưa thêm sản phẩm nào');
        }
        else {
            for (var _i = 0, _a = this.global.productCart; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.quantity < 1) {
                    this.errorCounter++;
                }
            }
            if (this.errorCounter > 0) {
                alert('Không được để số lượng sản phẩm bằng 0');
            }
            else {
                this.navCtrl.push('CheckOutPage');
            }
        }
    };
    CartPage.prototype.closeCard = function (product) {
        var _this = this;
        this.buttonLeave = false;
        this.buttonReorder = false;
        var index = this.global.productCart.indexOf(product);
        this.productLeave[product.id] = true;
        if (index > -1 && this.global.productCart.length === 1) {
            this.buttonLeave = true;
        }
        setTimeout(function () {
            if (index > -1) {
                _this.global.productCart.splice(index, 1);
                for (var i = index; i < _this.global.productCart.length; i++) {
                    _this.productReorder[_this.global.productCart[i].id] = true;
                    if (_this.global.productCart.length > 0) {
                        _this.buttonReorder = true;
                    }
                }
            }
        }, 1000);
        setTimeout(function () {
            _this.buttonLeave = false;
            _this.buttonReorder = false;
        }, 2400);
    };
    CartPage.prototype.prepareImageWithLabelSelector = function () {
        var _this = this;
        setTimeout(function () {
            var buttonElements = document.querySelectorAll('div.alert-radio-group button');
            if (!buttonElements.length) {
                _this.prepareImageWithLabelSelector();
            }
            else {
                for (var index = 0; index < buttonElements.length; index++) {
                    var buttonElement = buttonElements[index];
                    var optionLabelElement = buttonElement.querySelector('.alert-radio-label');
                    var image = optionLabelElement.innerHTML.trim();
                    buttonElement.classList.add('imagewithlabelselect', 'image_' + image);
                }
            }
        }, 100);
    };
    CartPage.prototype.setImageWithLabel = function (image) {
        console.log('Selected image with label is', image);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Đặt hàng</ion-title>\n\n\n\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="filterItems()" placeholder="Tìm kiếm..." animated="true">\n\n    </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid ion-fixed no-padding>\n\n    <ion-item *ngFor=" let item of items" (click)="productOrder(item.id, item.title, item.price, item.image)">\n\n      {{item.title}}\n\n    </ion-item>\n\n  </ion-grid>\n\n  <ion-card *ngFor="let product of global.productCart" [ngClass]="{\'animated bounceIn\':true, \'zoomOutDown\': productLeave[product.id], \'bounceInUp\': productReorder[product.id]}">\n\n    <ion-card-header>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <p class="product-code">Mã sản phẩm: {{product.id}}</p>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button class="close-card" ion-button clear color="silver" (click)="closeCard(product)">\n\n            <ion-icon class="checkmark" name=\'close\'></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <img class="product-image" src={{product.image}} />\n\n      <div class="text-center">\n\n        <h2>\n\n          {{product.title}}\n\n        </h2>\n\n        <p>\n\n          Sơn chống thấm tốt cho tường.\n\n        </p>\n\n      </div>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        \n\n        \n\n        <ion-grid>\n\n\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <ion-label color="primary" stacked>Đơn giá</ion-label>\n\n              <ion-input type="text" value="{{ product.price | formatMoney }}" disabled></ion-input>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-label color="primary" stacked>Số lượng</ion-label>\n\n              <ion-input type="number" placeholder="1" min="1" [(ngModel)]="product.quantity"></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row class="imagewithlabelselect image_{{product.color}}">\n\n            <ion-item>\n\n                <ion-label color="primary" stacked>Màu sắc</ion-label>\n\n                <ion-select (click)="prepareImageWithLabelSelector()" (ionChange)="setImageWithLabel(product.color)" [(ngModel)]="product.color">\n\n                <ion-option *ngFor="let optionimage of images" [value]="optionimage">{{optionimage}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-label color="favorite" fixed>Thành tiền</ion-label>\n\n            <ion-input type="text" color="secondary" value="{{ product.price * product.quantity | formatMoney }}" readonly></ion-input>\n\n          </ion-row>\n\n\n\n        </ion-grid>\n\n\n\n      </ion-card-title>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-row>\n\n    <button *ngIf="global.productCart.length > 0" [ngClass]="{\'confirm-order animated bounceIn\':true, \'zoomOutDown\': buttonLeave, \'bounceInUp\': buttonReorder}" ion-button color="primary"\n\n      (click)="CheckOut()" icon-start>\n\n      <ion-icon class="checkmark" name=\'checkmark\' is-active="false"></ion-icon>\n\n      Tiến hành đặt hàng\n\n    </button>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=13.js.map