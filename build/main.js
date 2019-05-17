webpackJsonp([16],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_global__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, global) {
        this.http = http;
        this.global = global;
        this.LOGIN_URL = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_3__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* ServerApi */].BASE_ADDRESS.API_LOGIN;
        this.SIGNUP_URL = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_3__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* ServerApi */].BASE_ADDRESS.API_REGISTER;
        this.contentHeader = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
    }
    /**
     * Check if user authenticated
     *
     * @return boolean
     */
    AuthProvider.prototype.authenticated = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])();
    };
    /**
     * Login
     *
     * @param credentials Login information
     */
    AuthProvider.prototype.signin = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.LOGIN_URL, JSON.stringify(credentials), { headers: _this.contentHeader })
                .subscribe(function (data) {
                _this.authSuccess(data);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Register new user
     *
     * @param credentials Signup information
     */
    AuthProvider.prototype.signup = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.SIGNUP_URL, JSON.stringify(credentials), { headers: _this.contentHeader })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Logout
     */
    AuthProvider.prototype.logout = function () {
        localStorage.removeItem('token');
        this.global.userInfo = null;
    };
    /**
     * Actions to take after succesful login
     *
     * @param data information returned from server
     */
    AuthProvider.prototype.authSuccess = function (data) {
        localStorage.setItem('token', data.token);
        this.global.userInfo = data.info;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__global_global__["a" /* GlobalProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatDateTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FormatDateTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FormatDateTimePipe = /** @class */ (function () {
    function FormatDateTimePipe() {
    }
    FormatDateTimePipe.prototype.transform = function (value) {
        var t = value.split(/[- :]/);
        var d = new Date(parseInt(t[0]), parseInt(t[1]) - 1, parseInt(t[2]), parseInt(t[3]), parseInt(t[4]), parseInt(t[5]));
        var date = new Date(d);
        var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        var second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        return hour + ":" + minute + ":" + second + " " + day + "/" + month + "/" + date.getFullYear();
    };
    FormatDateTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'formatDateTime',
        })
    ], FormatDateTimePipe);
    return FormatDateTimePipe;
}());

//# sourceMappingURL=format-date-time.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatMoneyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FormatMoneyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FormatMoneyPipe = /** @class */ (function () {
    function FormatMoneyPipe() {
    }
    /**
     * Takes a number and format it as money.
     */
    FormatMoneyPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var n = parseInt(value);
        var c = 0;
        var d = ".";
        var t = ",";
        var s = n < 0 ? "-" : "";
        var i = String(parseInt(value = Math.abs(Number(value) || 0).toFixed(0)));
        var j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - parseInt(i)).toFixed(c).slice(2) : "") + '₫';
    };
    FormatMoneyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'formatMoney',
        })
    ], FormatMoneyPipe);
    return FormatMoneyPipe;
}());

//# sourceMappingURL=format-money.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rest_rest__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the PushNotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PushNotificationProvider = /** @class */ (function () {
    function PushNotificationProvider(http, platform, oneSignal, rest) {
        this.http = http;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.rest = rest;
    }
    PushNotificationProvider.prototype.initialize = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return;
        }
        this.platform.ready().then(function () {
            _this.oneSignal.startInit('f1d4c6c9-33b7-4929-938b-852e272f277e', 'cponpaint-df07d');
            _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            // this.oneSignal.handleNotificationReceived().subscribe(() => {
            // // do something when notification is received
            // });
            _this.oneSignal.handleNotificationOpened().subscribe(function (notification) {
                // alert(JSON.stringify(notification));
            });
            _this.oneSignal.endInit();
        });
    };
    PushNotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_4__rest_rest__["a" /* RestProvider */]])
    ], PushNotificationProvider);
    return PushNotificationProvider;
}());

//# sourceMappingURL=push-notification.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart-history-detail/cart-history-detail.module": [
		300,
		15
	],
	"../pages/cart-history/cart-history.module": [
		301,
		14
	],
	"../pages/cart/cart.module": [
		303,
		13
	],
	"../pages/check-out/check-out.module": [
		302,
		12
	],
	"../pages/color-mix/color-mix.module": [
		304,
		1
	],
	"../pages/home/home.module": [
		306,
		11
	],
	"../pages/login/login.module": [
		315,
		10
	],
	"../pages/notification/notification.module": [
		305,
		9
	],
	"../pages/password-change/password-change.module": [
		307,
		8
	],
	"../pages/password-code/password-code.module": [
		308,
		7
	],
	"../pages/password-sendmail/password-sendmail.module": [
		309,
		6
	],
	"../pages/register/register.module": [
		310,
		5
	],
	"../pages/suggest-product/suggest-product.module": [
		312,
		0
	],
	"../pages/tabs/tabs.module": [
		311,
		4
	],
	"../pages/wallet/wallet.module": [
		314,
		3
	],
	"../pages/web-view/web-view.module": [
		313,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerApi; });
var ServerApi;
(function (ServerApi) {
    ServerApi.Environment = "production";
    ServerApi.SERVER_NAME = {
        development: "http://www.cponpaint.grad.stal",
        production: "http://cponpaint.grad.leotive.net"
    };
    ServerApi.BASE_ADDRESS = {
        'API_PREFIX': 'api/v1',
        'API_LOGIN': 'auth/login',
        'API_REGISTER': 'auth/register',
        'SEND_REQUEST_NEW_PASSWORD': 'auth/send_mail',
        'CHECK_RESET_PASSWORD_CODE': 'auth/token',
        'SET_NEW_PASSWORD': 'auth/reset',
        'GET_USER_INFO': 'user/get_user_info',
        'GET_WALLET_INFO': 'user/get_wallet_info',
        'SEARCH_PRODUCT': 'product/search',
        'STORE_CART': 'cart/store',
        'GET_ORDER_HISTORY': 'cart/history',
        'GET_ORDER_DETAIL': 'cart/detail',
        'INIT_SUGGEST_PRODUCT': 'suggest_product/init_session',
        'UPLOAD_SUGGEST_PRODUCT': 'suggest_product/upload_image',
        'UPLOAD_SUGGEST_PRODUCT_ID': 'suggest_product/upload_id',
        'INIT_COLOR_MIX': 'color_mixrequest/init_session',
        'UPLOAD_COLOR_MIX': 'color_mixrequest/upload_image',
        'UPLOAD_COLOR_MIX_ID': 'color_mixrequest/upload_id',
        'NOTIFICATION_STORE_USER_ID': 'notification/store_user_id',
        'NOTIFICATION_GET_ALL': 'notification/get_all',
        'NOTIFICATION_COUNT_UNREAD': 'notification/count_unread',
        'NOTIFICATION_MARK_AS_READ': 'notification/mark_as_read',
        'NOTIFICATION_MARK_ALL_AS_READ': 'notification/mark_all_as_read',
    };
})(ServerApi || (ServerApi = {}));
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingProvider.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoadingProvider.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lower_text_lower_text__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upper_text_upper_text__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__format_money_format_money__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_status_style_order_status_style__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__format_date_time_format_date_time__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__lower_text_lower_text__["a" /* LowerTextPipe */],
                __WEBPACK_IMPORTED_MODULE_2__upper_text_upper_text__["a" /* UpperTextPipe */],
                __WEBPACK_IMPORTED_MODULE_3__format_money_format_money__["a" /* FormatMoneyPipe */],
                __WEBPACK_IMPORTED_MODULE_4__order_status_style_order_status_style__["a" /* OrderStatusStylePipe */],
                __WEBPACK_IMPORTED_MODULE_5__format_date_time_format_date_time__["a" /* FormatDateTimePipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__lower_text_lower_text__["a" /* LowerTextPipe */],
                __WEBPACK_IMPORTED_MODULE_2__upper_text_upper_text__["a" /* UpperTextPipe */],
                __WEBPACK_IMPORTED_MODULE_3__format_money_format_money__["a" /* FormatMoneyPipe */],
                __WEBPACK_IMPORTED_MODULE_4__order_status_style_order_status_style__["a" /* OrderStatusStylePipe */],
                __WEBPACK_IMPORTED_MODULE_5__format_date_time_format_date_time__["a" /* FormatDateTimePipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_transfer__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_format_date_time_format_date_time__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_format_money_format_money__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_image_picker__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_global_global__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_loading_loading__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__node_modules_angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_onesignal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_action_sheet__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_push_notification_push_notification__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_18__node_modules_angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false,
                    backButtonText: '',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/cart-history-detail/cart-history-detail.module#CartHistoryDetailPageModule', name: 'CartHistoryDetailPage', segment: 'cart-history-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart-history/cart-history.module#CartHistoryPageModule', name: 'CartHistoryPage', segment: 'cart-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/check-out/check-out.module#CheckOutPageModule', name: 'CheckOutPage', segment: 'check-out', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/color-mix/color-mix.module#ColorMixPageModule', name: 'ColorMixPage', segment: 'color-mix', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-change/password-change.module#PasswordChangePageModule', name: 'PasswordChangePage', segment: 'password-change', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-code/password-code.module#PasswordCodePageModule', name: 'PasswordCodePage', segment: 'password-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-sendmail/password-sendmail.module#PasswordSendmailPageModule', name: 'PasswordSendmailPage', segment: 'password-sendmail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suggest-product/suggest-product.module#SuggestProductPageModule', name: 'SuggestProductPage', segment: 'suggest-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/web-view/web-view.module#WebViewPageModule', name: 'WebViewPage', segment: 'web-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_action_sheet__["a" /* ActionSheet */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_format_money_format_money__["a" /* FormatMoneyPipe */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_format_date_time_format_date_time__["a" /* FormatDateTimePipe */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_21__providers_push_notification_push_notification__["a" /* PushNotificationProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LowerTextPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the LowerTextPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var LowerTextPipe = /** @class */ (function () {
    function LowerTextPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    LowerTextPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    LowerTextPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'lowerText',
        })
    ], LowerTextPipe);
    return LowerTextPipe;
}());

//# sourceMappingURL=lower-text.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpperTextPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the UpperTextPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var UpperTextPipe = /** @class */ (function () {
    function UpperTextPipe() {
    }
    /**
     * Takes a value and makes it uppercase.
     */
    UpperTextPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value ? value.toUpperCase() : '';
    };
    UpperTextPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'upperText',
        })
    ], UpperTextPipe);
    return UpperTextPipe;
}());

//# sourceMappingURL=upper-text.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatusStylePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the OrderStatusStylePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var OrderStatusStylePipe = /** @class */ (function () {
    function OrderStatusStylePipe() {
    }
    OrderStatusStylePipe.prototype.transform = function (value) {
        if (value === 'unhandle') {
            return '<span class="color-badge color-warning">Chờ</span>';
        }
        else if (value === 'proceed') {
            return '<span class="color-badge color-primary">Đang xử lý</span>';
        }
        else if (value === 'deliver') {
            return '<span class="color-badge color-favorite">Đang giao hàng</span>';
        }
        else if (value === 'success') {
            return '<span class="color-badge color-success">Thành công</span>';
        }
        else if (value === 'error') {
            return '<span class="color-badge color-danger">Hủy</span>';
        }
        else {
            return '<span></span>';
        }
    };
    OrderStatusStylePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderStatusStyle',
        })
    ], OrderStatusStylePipe);
    return OrderStatusStylePipe;
}());

//# sourceMappingURL=order-status-style.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_push_notification_push_notification__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, global, menu, pushNotification, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.global = global;
        this.menu = menu;
        this.pushNotification = pushNotification;
        this.auth = auth;
        this.rootPage = "LoginPage";
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        if (!this.auth.authenticated()) {
            this.rootPage = 'LoginPage';
        }
        else {
            this.rootPage = 'HomePage';
        }
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            _this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            _this.pushNotification.initialize();
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n  '/*ion-inline-end:"D:\Projects\cponpaint\gradutation\cponpaint-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_push_notification_push_notification__["a" /* PushNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.contentHeader = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        this.SEND_REQUEST_NEW_PASSWORD_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.SEND_REQUEST_NEW_PASSWORD;
        this.CHECK_RESET_PASSWORD_CODE_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.CHECK_RESET_PASSWORD_CODE;
        this.SET_NEW_PASSWORD_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.SET_NEW_PASSWORD;
        this.USER_GET_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.GET_USER_INFO;
        this.PRODUCT_SEARCH_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.SEARCH_PRODUCT;
        this.SEND_CART_ORDER_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.STORE_CART;
        this.GET_CART_HISTORY_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.GET_ORDER_HISTORY;
        this.GET_CART_DETAIL_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.GET_ORDER_DETAIL;
        this.GET_WALLET_HISTORY_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.GET_WALLET_INFO;
        this.INIT_SUGGEST_PRODUCT_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.INIT_SUGGEST_PRODUCT;
        this.UPLOAD_SUGGEST_PRODUCT_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.UPLOAD_SUGGEST_PRODUCT;
        this.UPLOAD_SUGGEST_PRODUCT_ID_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.UPLOAD_SUGGEST_PRODUCT_ID;
        this.INIT_COLOR_MIX_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.INIT_COLOR_MIX;
        this.UPLOAD_COLOR_MIX_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.UPLOAD_COLOR_MIX;
        this.UPLOAD_COLOR_MIX_ID_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.UPLOAD_COLOR_MIX_ID;
        this.NOTIFICATION_STORE_USER_ID_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.NOTIFICATION_STORE_USER_ID;
        this.NOTIFICATION_GET_ALL_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.NOTIFICATION_GET_ALL;
        this.NOTIFICATION_COUNT_UNREAD_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.NOTIFICATION_COUNT_UNREAD;
        this.NOTIFICATION_MARK_AS_READ_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.NOTIFICATION_MARK_AS_READ;
        this.NOTIFICATION_MARK_ALL_AS_READ_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].SERVER_NAME[__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].Environment] + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.API_PREFIX + "/" + __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ServerApi */].BASE_ADDRESS.NOTIFICATION_MARK_ALL_AS_READ;
    }
    /**
     * Get authenticated user info
     */
    RestProvider.prototype.getUserInfo = function () {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.USER_GET_URL + '?token=' + user_token, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Search products with name contain search term
     */
    RestProvider.prototype.searchProduct = function (searchTerm) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.PRODUCT_SEARCH_URL + '?token=' + user_token, { searchTerm: searchTerm }, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Send cart order request
     */
    RestProvider.prototype.sendCartOrder = function (productCart, note) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.SEND_CART_ORDER_URL + '?token=' + user_token, JSON.stringify({ productCart: productCart, note: note }), { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Get cart order history
     */
    RestProvider.prototype.getOrderHistory = function (url) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        if (url === undefined) {
            url = this.GET_CART_HISTORY_URL + '?token=' + user_token;
        }
        else {
            url = url + '&&token=' + user_token;
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Get cart order history detail
     */
    RestProvider.prototype.getOrderHistoryDetail = function (id) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.GET_CART_DETAIL_URL + '?id=' + id + '&&token=' + user_token, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Get wallet transaction history
     */
    RestProvider.prototype.getWalletHistory = function (url) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        if (url === undefined) {
            url = this.GET_WALLET_HISTORY_URL + '?token=' + user_token;
        }
        else {
            url = url + '&&token=' + user_token;
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Initialize new upload session
     */
    RestProvider.prototype.initSuggestProduct = function (timestamp) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.INIT_SUGGEST_PRODUCT_URL + '?token=' + user_token + '&&timestamp=' + timestamp, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Post suggest product image id that uploaded
     */
    RestProvider.prototype.postSuggestProductId = function (dataUpload, timestamp) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.UPLOAD_SUGGEST_PRODUCT_ID_URL + '?token=' + user_token, JSON.stringify({ name: dataUpload.name, content: dataUpload.content, timestamp: timestamp }), { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Initialize new upload session
     */
    RestProvider.prototype.initColorMix = function (timestamp) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.INIT_COLOR_MIX_URL + '?token=' + user_token + '&&timestamp=' + timestamp, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Post color request image id that uploaded
     */
    RestProvider.prototype.postColorMixId = function (dataUpload, timestamp) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.UPLOAD_COLOR_MIX_ID_URL + '?token=' + user_token, JSON.stringify({ name: dataUpload.name, content: dataUpload.content, timestamp: timestamp }), { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Client forgot his/her password and request new
     */
    RestProvider.prototype.sendRequestNewPassword = function (email) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.SEND_REQUEST_NEW_PASSWORD_URL + '?token=' + user_token, JSON.stringify({ email: email }), { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Check confirm reset passoword code
     */
    RestProvider.prototype.checkResetPasswordCode = function (code, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.CHECK_RESET_PASSWORD_CODE_URL + '?token=' + token, JSON.stringify({ code: code }), { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Set new passord
     */
    RestProvider.prototype.setNewPassword = function (password, password_confirmation, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.SET_NEW_PASSWORD_URL + '?token=' + token, JSON.stringify({ password: password, password_confirmation: password_confirmation }), { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Upload and store onesignal user id
     */
    RestProvider.prototype.storeOneSignalUserId = function (userId) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.NOTIFICATION_STORE_USER_ID_URL + '?token=' + user_token, JSON.stringify({ user_id: userId }), { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Get all notification
     */
    RestProvider.prototype.getAllNotification = function (url) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        if (url === undefined) {
            url = this.NOTIFICATION_GET_ALL_URL + '?token=' + user_token;
        }
        else {
            url = url + '&&token=' + user_token;
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Check if exist unread notification
     */
    RestProvider.prototype.countUnreadNotification = function () {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.NOTIFICATION_COUNT_UNREAD_URL + '?token=' + user_token, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Mark notification as read
     */
    RestProvider.prototype.markAsRead = function (id) {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.NOTIFICATION_MARK_AS_READ_URL + '?token=' + user_token + '&id=' + id, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /**
     * Mark all notifications as read
     */
    RestProvider.prototype.markAllAsRead = function () {
        var _this = this;
        var user_token = localStorage.getItem('token');
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.NOTIFICATION_MARK_ALL_AS_READ_URL + '?token=' + user_token, { headers: _this.contentHeader })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(rest) {
        this.rest = rest;
        this.isAuthenticated = false;
        this.productCart = [];
        this.unreadNotificationCount = 0;
    }
    GlobalProvider.prototype.getUserInfo = function () {
        var _this = this;
        // this.loading.show()
        this.rest.getUserInfo().then(function (res) {
            // this.loading.hide();
            _this.userInfo = res.user;
        }, function (err) {
            // this.loading.hide();
            console.log(err);
        });
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__rest_rest__["a" /* RestProvider */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map