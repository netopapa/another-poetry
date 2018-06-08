webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".slide {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0,0,0,0.6);\n}\n\n#pelicula {\n    position: absolute;\n    top: 0;\n    left:0;\n    background-color: #ffffff;\n    z-index: 9999;\n    height: 100%;\n    width: 100%;\n}\n\n#video-source {\n    width: 100%;\n}\n\n.swiper-slide {\n    height: 100%;   \n}\n\n.verso {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\np {\n    text-align: justify;\n}\n\n@media screen and (max-width: 600px) {\n    #video-source {\n        width: auto;\n        -webkit-transform: translateX(-30%);\n                transform: translateX(-30%);\n    }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"pelicula\"></div>\n<div id=\"main-content\">\n  <video id=\"video-source\" preload=\"auto\" loop=\"loop\" muted=\"muted\" volume=\"0\">\n    <source src=\"assets/video/Fire-snow.mp4\" type=\"video/mp4\">\n  </video>\n\n  <swiper class=\"slide\" [config]=\"config\">\n    <div class=\"swiper-wrapper total-h\">\n      <div class=\"swiper-slide\">\n        <div class=\"verso\">\n          <p>\n            Se der vê o que eu te fiz\n            <br> Só mais um poema nostálgico\n            <br> Fala da nossa história feliz\n            <br> Mas dona de um final trágico\n          </p>\n        </div>\n      </div>\n      <div class=\"swiper-slide\">\n        <div class=\"verso\">\n          <p>\n            Íamos numa pizzaria\n            <br> Queria que você fosse\n            <br> Primeiro beijo, tu sabia\n            <br> Dia vinte e um de noite\n          </p>\n        </div>\n      </div>\n      <div class=\"swiper-slide\">\n        <div class=\"verso\">\n          <p>\n            Roubei um celinho teu\n            <br> E que gosto bom tinha\n            <br> Quero pra sempre meu\n            <br> Me da essa boca minha\n          </p>\n        </div>\n      </div>\n      <div class=\"swiper-slide\">\n        <div class=\"verso\">\n          <p>\n            Eu ainda tava de muleta\n            <br> Mas queria segurar tua mão\n            <br> Namorava a menina perfeita\n            <br> As vezes eu caia no chão\n          </p>\n        </div>\n      </div>\n      <div class=\"swiper-slide\">\n        <div class=\"verso\">\n          <p>\n            Nunca dei flores\n            <br> Foi só pra você\n            <br> E se todas as dores\n            <br> Fossem pra acontecer?\n          </p>\n        </div>\n      </div>\n      <div class=\"swiper-slide\">\n        <div class=\"verso\">\n          <p>\n            Olha o que a gente fez\n            <br> Podíamos estar a sós\n            <br> Amanha já é dia seis\n            <br> E é parabéns pra nós\n          </p>\n        </div>\n      </div>\n      <div class=\"swiper-slide\">\n        <div class=\"verso\">\n          <p>\n            Navegamos em oceano\n            <br> Mas não soubemos remar\n            <br> As ondas iam nos levando\n            <br> E não conseguimos parar\n          </p>\n        </div>\n      </div>\n      <div class=\"swiper-slide\">\n        <div class=\"verso\">\n          <p>\n            Não é mais minha\n            <br> Onde foi que errei?\n            <br> Tu era minha rainha\n            <br> E eu fui teu rei\n          </p>\n        </div>\n      </div>\n      <div class=\"swiper-slide\">\n        <div class=\"verso\">\n          <p>\n            Todo conto tem moral, bebê\n            <br> Essa é dura e sincera\n            <br> Serve pra mim e pra você\n            <br> Tipo assim, bela e a fera\n          </p>\n        </div>\n      </div>\n      <div class=\"swiper-slide\">\n        <div class=\"verso\">\n          <p>\n            O amor é doce igual açucar\n            <br> Vê se dosa a quantidade\n            <br> Se for pouco ele machuca\n            <br> Se for muito faz maldade\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- Add Arrows -->\n    <div class=\"swiper-button-next\"></div>\n    <div class=\"swiper-button-prev\"></div>\n  </swiper>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.playBackgroundVideo();
    };
    AppComponent.prototype.playBackgroundVideo = function () {
        var id_video = document.getElementById('video-source');
        id_video.play();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_useful_swiper__ = __webpack_require__("./node_modules/angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_useful_swiper__);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_useful_swiper__["SwiperModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map