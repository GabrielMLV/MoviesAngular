(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apimovie.service.ts":
/*!*************************************!*\
  !*** ./src/app/apimovie.service.ts ***!
  \*************************************/
/*! exports provided: ApimovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApimovieService", function() { return ApimovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ApimovieService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL = 'https://api.themoviedb.org/3';
        this.key_id = "c17037565d3e126bc17b1c6e738eb4e2";
    }
    getMovies(numbpage) {
        return this.httpClient.get('' + this.URL + '/movie/popular?api_key=' + this.key_id + '&language=pt-BR&page=' + numbpage + '').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getMoviesUpcoming() {
        return this.httpClient.get('' + this.URL + '/movie/upcoming?api_key=' + this.key_id + '&language=pt-BR&page=1').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getMoviesSearch(search, numbpage) {
        return this.httpClient.get('' + this.URL + '/search/movie?api_key=' + this.key_id + '&language=pt-BR&query=' + search + '&page=' + numbpage + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getTrendingDay(numbpage) {
        return this.httpClient.get('' + this.URL + '/trending/all/day?api_key=' + this.key_id + '&language=pt-BR&page=' + numbpage + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getDetails(id) {
        return this.httpClient.get('' + this.URL + '/movie/' + id + '?api_key=' + this.key_id + '&language=pt-BR' + '').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
ApimovieService.ɵfac = function ApimovieService_Factory(t) { return new (t || ApimovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApimovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApimovieService, factory: ApimovieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApimovieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movie-list/movie-list.component.ts");
/* harmony import */ var _movie_create_movie_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-create/movie-create.component */ "./src/app/movie-create/movie-create.component.ts");
/* harmony import */ var _trending_list_trending_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trending-list/trending-list.component */ "./src/app/trending-list/trending-list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");








const routes = [
    { path: 'moviecreate', component: _movie_create_movie_create_component__WEBPACK_IMPORTED_MODULE_3__["MovieCreateComponent"] },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'movies', component: _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__["MovieListComponent"] },
    { path: 'trends', component: _trending_list_trending_list_component__WEBPACK_IMPORTED_MODULE_4__["TrendingListComponent"] },
    { path: 'detail/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: '**', redirectTo: '' }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _apimovie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apimovie.service */ "./src/app/apimovie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(apimovieService, router) {
        this.apimovieService = apimovieService;
        this.router = router;
        this.title = 'movies-gm';
    }
    ngOnInit() {
        //this.callTrendDay(this.numbpage);
        this.router.navigate(['/trends']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 171, vars: 0, consts: [["id", "site-head", 2, "padding", "20px 0px", "background", "#333", "color", "white"], [1, "uk-container", "uk-container-expand"], ["data-uk-grid", "", 1, "uk-grid", "uk-grid-medium", "uk-flex", "uk-flex-middle"], [1, "uk-width-auto"], ["href", "#", "title", "", 1, "uk-logo"], ["src", "img/logo.svg", "alt", ""], [1, "uk-width-expand"], [1, "uk-search", "uk-search-default", 2, "width", "350px"], ["href", "", "uk-search-icon", "", 1, "uk-search-icon-flip"], ["type", "search", "placeholder", "O que voc\u00EA procura ?", 1, "uk-search-input", "uk-input", "uk-form-width-large", 2, "background", "white"], ["data-uk-margin", "", 1, "uk-subnav"], [1, "uk-visible@s"], ["href", "#", "routerLink", "/trends"], ["href", "#", "routerLink", "/movies"], ["href", "#", "data-uk-icon", "icon:comments"], ["data-uk-dropdown", "mode: click; offset: 20;animation: uk-animation-slide-bottom-small; duration: 150", 1, "drop-nav", "drop-comments", "uk-dropdown"], ["data-uk-tab", "animation: uk-animation-fade", 1, "uk-child-width-expand"], ["href", "#"], [1, "uk-switcher", "uk-margin"], [1, "uk-height-small", "uk-overflow-auto"], [1, "message"], ["href", "", 1, "uk-link"], ["href", "#", "data-uk-icon", "icon:more"], ["data-uk-dropdown", "mode: click; offset: 20;animation: uk-animation-slide-bottom-small; duration: 150", 1, "drop-nav", "uk-dropdown"], [1, "uk-margin-small-bottom", "uk-margin-remove-adjacent"], [1, "uk-text-small", "uk-text-muted"], ["href", "#", 1, "uk-button", "uk-button-primary", "uk-width-1-1"], ["data-uk-nav", "", 1, "uk-nav-default", "uk-nav-parent-icon"], [1, "uk-nav-header"], ["data-uk-icon", "icon: table", 1, "uk-margin-small-right"], ["data-uk-icon", "icon: thumbnails", 1, "uk-margin-small-right"], [1, "uk-nav-divider"], ["data-uk-icon", "icon: trash", 1, "uk-margin-small-right"], [1, "uk-hidden@s"], ["data-uk-navbar-toggle-icon", "", "data-uk-toggle", "", "href", "#offcanvas-nav"], [1, "spacer"], ["id", "offcanvas-nav", "data-uk-offcanvas", "flip: true; overlay: true"], [1, "uk-offcanvas-bar", "uk-offcanvas-bar-animation", "uk-offcanvas-slide"], ["type", "button", "data-uk-close", "", 1, "uk-offcanvas-close", "uk-close", "uk-icon"], [1, "uk-nav", "uk-nav-default"], [1, "uk-active"], [1, "uk-parent"], [1, "uk-nav-sub"], ["href", "#js-options"], ["data-uk-icon", "icon: table", 1, "uk-margin-small-right", "uk-icon"], ["data-uk-icon", "icon: thumbnails", 1, "uk-margin-small-right", "uk-icon"], ["data-uk-icon", "icon: trash", 1, "uk-margin-small-right", "uk-icon"], ["uk-scrollspy", "cls: uk-animation-fade; target: .uk-container; delay: 500; repeat: true", 1, "uk-section", "uk-section-secondary", "uk-padding-remove-bottom"], [1, "uk-container"], ["data-uk-grid", "", 1, "uk-grid", "uk-grid-large"], [1, "uk-width-1-2@m"], ["href", "#", "title", ""], ["href", "", "data-uk-icon", "twitter", 1, "uk-icon-button"], ["target", "_blank", "href", "https://www.linkedin.com/in/gabriel-matheus-a54907144/", "data-uk-icon", "linkedin", 1, "uk-icon-button"], ["href", "", "data-uk-icon", "instagram", 1, "uk-icon-button"], [1, "uk-width-1-6@m"], [1, "uk-list"], [1, "uk-text-center", "uk-padding", "uk-padding-remove-horizontal"], ["href", "http://getuikit.com", "title", "Visit UIkit 3 site", "target", "_blank", "data-uk-tooltip", ""], ["data-uk-icon", "uikit"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "GM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Filmes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Your Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "VIEW MESSAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "VIEW MESSAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "VIEW MESSAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "VIEW MESSAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "UPDATE YOUR ACCOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Parent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Sub item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sub item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "footer", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Gabriel Matheus Lopes de Veras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud cillum dolore eu fugiat nulla contact to: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "info@company.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "ul", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Big Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "AI Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "OUR COMPANY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ul", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Culture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "OUR OFFICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "ul", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "London");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Chicago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Dubai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Brussels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u00A9 2020 Created by Gabriel Matheus | Built with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#site-head[_ngcontent-%COMP%] {\r\n\tpadding: 10px 0;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tz-index: 99;\r\n\tbackground-color: white;\r\n\tborder-bottom: 1px solid rgba(0,0,0,0.06);\r\n}\r\n#site-foot[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\tz-index: 3;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tfont-size: 0.8rem;\r\n}\r\n.uk-section-xsmall[_ngcontent-%COMP%] {\r\n    padding-top: 0.6rem;\r\n    padding-bottom: 0.6rem;\r\n}\r\n.uk-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 50px;\r\n}\r\n.spacer[_ngcontent-%COMP%] {\r\n\theight: 60px;\r\n}\r\n.uk-card[_ngcontent-%COMP%] {\r\n\tborder-top: 2px solid;\r\n\tposition: relative;\r\n\ttransition: box-shadow 0.15s ease-out;\r\n\tborder-radius: 3px;\r\n}\r\n.uk-card[_ngcontent-%COMP%]:hover {\r\n\tbox-shadow: 0 0 0 7px rgba(0,0,0,0.045);\r\n}\r\n.uk-card[_ngcontent-%COMP%]   .uk-inline[_ngcontent-%COMP%] {\r\n\tz-index: 99;\r\n}\r\n.uk-card[_ngcontent-%COMP%]   .uk-card-footer[_ngcontent-%COMP%] {\r\n\tpadding: 0.55rem 1rem;\r\n}\r\n.uk-card[_ngcontent-%COMP%]   .uk-card-header[_ngcontent-%COMP%] {\r\n\tpadding: 0.55rem 1rem;\r\n}\r\n.uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n\tfont-weight: 600;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 0.75rem;\r\n\tletter-spacing: 0.01em;\r\n}\r\n.nature-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n\tborder-top-color: #1E87F0;\r\n}\r\n.uk-subnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tborder-radius: 3px; \r\n}\r\n.uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\r\n\tbackground-color:#8630F0;\r\n}\r\n.uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\r\n\tbackground-color:#F03A7F;\r\n}\r\n.uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\r\n\tbackground-color:#E84DF0;\r\n}\r\n.nature-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n\tcolor: #1E87F0;\r\n}\r\n.music-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n\tborder-top-color: #8630F0;\r\n}\r\n.music-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n\tcolor: #8630F0;\r\n}\r\n.design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n\tborder-top-color: #E84DF0;\r\n}\r\n.design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n\tcolor: #E84DF0;\r\n}\r\n.photo-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n\tborder-top-color: #F03A7F;\r\n}\r\n.photo-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n\tcolor: #F03A7F;\r\n}\r\n.uk-card[_ngcontent-%COMP%]   .uk-overlay-primary[_ngcontent-%COMP%] {\r\n\tpadding:  0.5rem;\r\n\ttext-align: center;\r\n\tfont-size: 0.7rem;\r\n\ttext-transform: uppercase;\r\n\topacity: 0.7;\r\n}\r\nimg[data-src][src*='data:image'][_ngcontent-%COMP%] { background: rgba(0,0,0,0.1); }\r\n.search-fld[_ngcontent-%COMP%] {\r\n\tborder-radius: 50px;\r\n\tpadding: 0 1rem;\r\n}\r\n.uk-dropdown.drop-nav[_ngcontent-%COMP%] {\r\n\tborder-radius: 4px;\r\n\tbox-shadow: 0 2px 24px rgba(0,0,0,.1);\r\n\twidth: 300px;\r\n}\r\n.uk-dropdown.drop-comments[_ngcontent-%COMP%] {\r\n\twidth: 370px;\r\n}\r\n.drop-nav[_ngcontent-%COMP%]::after {\r\n\tbottom: 100%;\r\n\tright: 4%;\r\n\tborder: solid transparent;\r\n\tcontent: '';\r\n\theight: 0;\r\n\twidth: 0;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder-color: rgba(255, 255, 255, 0);\r\n\tborder-bottom-color: #ffffff;\r\n\tborder-width: 6px;\r\n\tmargin-left: -6px;\r\n}\r\n.uk-dropdown.uk-dropdown-right-center[_ngcontent-%COMP%]::after {\r\n\tright: 100%;\r\n\ttop: 50%;\r\n\tborder: solid transparent;\r\n\tcontent: \" \";\r\n\theight: 0;\r\n\twidth: 0;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder-color: rgba(255, 255, 255, 0);\r\n\tborder-right-color: #ffffff;\r\n\tborder-width: 6px;\r\n\tmargin-top: -6px;\r\n}\r\n.uk-dropdown.uk-dropdown-left-center[_ngcontent-%COMP%]::after {\r\n\tleft: 100%;\r\n\ttop: 50%;\r\n\tborder: solid transparent;\r\n\tcontent: \" \";\r\n\theight: 0;\r\n\twidth: 0;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder-color: rgba(255, 255, 255, 0);\r\n\tborder-left-color: #ffffff;\r\n\tborder-width: 6px;\r\n\tmargin-top: -6px;\r\n}\r\n.message[_ngcontent-%COMP%] {\r\n\tfont-size: 0.85rem;\r\n\tdisplay: block;\r\n\tline-height: 1.3rem;\r\n\tpadding: 0.5rem 0;\r\n}\r\n.uk-notification-message[_ngcontent-%COMP%] {\r\n\tbackground-color: #1e87f0;\r\n\tcolor:  white;\r\n\tfont-size: 0.9rem;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0 4px 14px rgba(0,0,0,0.1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtDQUNmLE1BQU07Q0FDTixPQUFPO0NBQ1AsUUFBUTtDQUNSLFdBQVc7Q0FDWCx1QkFBdUI7Q0FDdkIseUNBQXlDO0FBQzFDO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtDQUNWLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsUUFBUTtDQUNSLGlCQUFpQjtBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIscUNBQXFDO0NBQ3JDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsdUNBQXVDO0FBQ3hDO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2I7QUFDQSxtQ0FBbUMsMkJBQTJCLEVBQUU7QUFDaEU7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFDQUFxQztDQUNyQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsWUFBWTtDQUNaLFNBQVM7Q0FDVCx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLFNBQVM7Q0FDVCxRQUFRO0NBQ1Isa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixvQ0FBb0M7Q0FDcEMsNEJBQTRCO0NBQzVCLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxRQUFRO0NBQ1IseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixTQUFTO0NBQ1QsUUFBUTtDQUNSLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsb0NBQW9DO0NBQ3BDLDJCQUEyQjtDQUMzQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsUUFBUTtDQUNSLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osU0FBUztDQUNULFFBQVE7Q0FDUixrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLG9DQUFvQztDQUNwQywwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsc0NBQXNDO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2l0ZS1oZWFkIHtcclxuXHRwYWRkaW5nOiAxMHB4IDA7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHotaW5kZXg6IDk5O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpO1xyXG59XHJcbiNzaXRlLWZvb3Qge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR6LWluZGV4OiAzO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbi51ay1zZWN0aW9uLXhzbWFsbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC42cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNnJlbTtcclxufVxyXG4udWstbG9nbyBpbWcge1xyXG5cdHdpZHRoOiA1MHB4O1xyXG59XHJcbi5zcGFjZXIge1xyXG5cdGhlaWdodDogNjBweDtcclxufVxyXG4udWstY2FyZCB7XHJcblx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGVhc2Utb3V0O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4udWstY2FyZDpob3ZlciB7XHJcblx0Ym94LXNoYWRvdzogMCAwIDAgN3B4IHJnYmEoMCwwLDAsMC4wNDUpO1xyXG59XHJcbi51ay1jYXJkIC51ay1pbmxpbmUge1xyXG5cdHotaW5kZXg6IDk5O1xyXG59XHJcbi51ay1jYXJkIC51ay1jYXJkLWZvb3RlciB7XHJcblx0cGFkZGluZzogMC41NXJlbSAxcmVtO1xyXG59XHJcbi51ay1jYXJkIC51ay1jYXJkLWhlYWRlciB7XHJcblx0cGFkZGluZzogMC41NXJlbSAxcmVtO1xyXG59XHJcbi51ay1jYXJkIC5jYXQtdHh0IHtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbn1cclxuLm5hdHVyZS1jYXJkIC51ay1jYXJkIHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjMUU4N0YwO1xyXG59XHJcbi51ay1zdWJuYXYgbGkgYSB7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4OyBcclxufVxyXG4udWstc3VibmF2IGxpLnVrLWFjdGl2ZTpudGgtY2hpbGQoMykgYSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojODYzMEYwO1xyXG59XHJcbi51ay1zdWJuYXYgbGkudWstYWN0aXZlOm50aC1jaGlsZCg0KSBhIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGMDNBN0Y7XHJcbn1cclxuLnVrLXN1Ym5hdiBsaS51ay1hY3RpdmU6bnRoLWNoaWxkKDUpIGEge1xyXG5cdGJhY2tncm91bmQtY29sb3I6I0U4NERGMDtcclxufVxyXG4ubmF0dXJlLWNhcmQgLnVrLWNhcmQgLmNhdC10eHQge1xyXG5cdGNvbG9yOiAjMUU4N0YwO1xyXG59XHJcbi5tdXNpYy1jYXJkIC51ay1jYXJkIHtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjODYzMEYwO1xyXG59XHJcbi5tdXNpYy1jYXJkIC51ay1jYXJkIC5jYXQtdHh0IHtcclxuXHRjb2xvcjogIzg2MzBGMDtcclxufVxyXG4uZGVzaWduLWNhcmQgLnVrLWNhcmQge1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICNFODRERjA7XHJcbn1cclxuLmRlc2lnbi1jYXJkIC51ay1jYXJkIC5jYXQtdHh0IHtcclxuXHRjb2xvcjogI0U4NERGMDtcclxufVxyXG4ucGhvdG8tY2FyZCAudWstY2FyZCB7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogI0YwM0E3RjtcclxufVxyXG4ucGhvdG8tY2FyZCAudWstY2FyZCAuY2F0LXR4dCB7XHJcblx0Y29sb3I6ICNGMDNBN0Y7XHJcbn1cclxuLnVrLWNhcmQgLnVrLW92ZXJsYXktcHJpbWFyeSB7XHJcblx0cGFkZGluZzogIDAuNXJlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAwLjdyZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRvcGFjaXR5OiAwLjc7XHJcbn1cclxuaW1nW2RhdGEtc3JjXVtzcmMqPSdkYXRhOmltYWdlJ10geyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7IH1cclxuLnNlYXJjaC1mbGQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0cGFkZGluZzogMCAxcmVtO1xyXG59XHJcbi51ay1kcm9wZG93bi5kcm9wLW5hdiB7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMnB4IDI0cHggcmdiYSgwLDAsMCwuMSk7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG59XHJcbi51ay1kcm9wZG93bi5kcm9wLWNvbW1lbnRzIHtcclxuXHR3aWR0aDogMzcwcHg7XHJcbn1cclxuLmRyb3AtbmF2OjphZnRlciB7XHJcblx0Ym90dG9tOiAxMDAlO1xyXG5cdHJpZ2h0OiA0JTtcclxuXHRib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGhlaWdodDogMDtcclxuXHR3aWR0aDogMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyLXdpZHRoOiA2cHg7XHJcblx0bWFyZ2luLWxlZnQ6IC02cHg7XHJcbn1cclxuLnVrLWRyb3Bkb3duLnVrLWRyb3Bkb3duLXJpZ2h0LWNlbnRlcjo6YWZ0ZXIge1xyXG5cdHJpZ2h0OiAxMDAlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Y29udGVudDogXCIgXCI7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdHdpZHRoOiAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmZmZmO1xyXG5cdGJvcmRlci13aWR0aDogNnB4O1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcbn1cclxuLnVrLWRyb3Bkb3duLnVrLWRyb3Bkb3duLWxlZnQtY2VudGVyOjphZnRlciB7XHJcblx0bGVmdDogMTAwJTtcclxuXHR0b3A6IDUwJTtcclxuXHRib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdGhlaWdodDogMDtcclxuXHR3aWR0aDogMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmZmZmO1xyXG5cdGJvcmRlci13aWR0aDogNnB4O1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcbn1cclxuLm1lc3NhZ2Uge1xyXG5cdGZvbnQtc2l6ZTogMC44NXJlbTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRsaW5lLWhlaWdodDogMS4zcmVtO1xyXG5cdHBhZGRpbmc6IDAuNXJlbSAwO1xyXG59XHJcbi51ay1ub3RpZmljYXRpb24tbWVzc2FnZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFlODdmMDtcclxuXHRjb2xvcjogIHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movie_create_movie_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-create/movie-create.component */ "./src/app/movie-create/movie-create.component.ts");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movie-list/movie-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _trending_list_trending_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trending-list/trending-list.component */ "./src/app/trending-list/trending-list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




//news

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routing"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _movie_create_movie_create_component__WEBPACK_IMPORTED_MODULE_4__["MovieCreateComponent"],
        _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_5__["MovieListComponent"],
        _trending_list_trending_list_component__WEBPACK_IMPORTED_MODULE_16__["TrendingListComponent"],
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_17__["DetailComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _movie_create_movie_create_component__WEBPACK_IMPORTED_MODULE_4__["MovieCreateComponent"],
                    _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_5__["MovieListComponent"],
                    _trending_list_trending_list_component__WEBPACK_IMPORTED_MODULE_16__["TrendingListComponent"],
                    _detail_detail_component__WEBPACK_IMPORTED_MODULE_17__["DetailComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routing"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _apimovie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apimovie.service */ "./src/app/apimovie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function DetailComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comp_r1.name);
} }
const _c0 = function () { return ["/trends"]; };
class DetailComponent {
    constructor(apimovieService, _Activatedroute, router) {
        this.apimovieService = apimovieService;
        this._Activatedroute = _Activatedroute;
        this.router = router;
    }
    ngOnInit() {
        this.sub = this._Activatedroute.paramMap.subscribe(params => {
            console.log(params);
            this.id = params.get('id');
            this.apimovieService.getDetails(this.id).subscribe((data) => {
                console.log(data);
                this.details = data;
            });
            //this.detail=details.find(p => p.id==this.id);   
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goToLink(url) {
        window.open(url, "_blank");
    }
    timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + " hora(s) e " + rminutes + " minuto(s).";
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 36, vars: 13, consts: [[1, "uk-section", "uk-section-small", "uk-section-default", "uk-padding-remove-bottom"], [1, "uk-container", "uk-container-expand", "uk-margin-large-bottom"], [1, "uk-breadcrumb"], [3, "routerLink"], ["uk-grid", "", 1, "uk-card", "uk-card-secondary", "uk-grid-collapse", "uk-child-width-1-2@s", "uk-margin"], ["uk-scrollspy", "cls: uk-animation-slide-left; repeat: false", 1, "uk-card-media-left", "uk-cover-container"], ["alt", "", "uk-cover", "", 3, "src"], ["width", "600", "height", "400"], ["uk-scrollspy", "cls: uk-animation-slide-right; repeat: false", 1, "uk-card-body"], [1, "uk-card-badge", "uk-label", 2, "background", "goldenrod", "color", "white", "font-weight", "900"], [1, "uk-card-title", 2, "font-weight", "bold"], [1, "uk-text-meta", "uk-margin-remove-top"], ["datetime", "2016-04-01T19:00"], [2, "color", "white"], [1, "uk-flex", "uk-flex-left"], [4, "ngFor", "ngForOf"], [1, "uk-card-footer"], ["target", "_blank", 1, "uk-button", "uk-button-text", 3, "href"], [1, "uk-margin-left", 2, "padding", "10px 0px"], [2, "padding", "5px", "border", "1px solid gray"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "canvas", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "time", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Dura\u00E7\u00E3o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "G\u00EAnero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DetailComponent_div_32_Template, 4, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Acesse a p\u00E1gina principal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", ctx.details.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details.vote_average, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Data de lan\u00E7amento ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 9, ctx.details.release_date, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.timeConvert(ctx.details.runtime), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.details.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.css']
            }]
    }], function () { return [{ type: _apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie-create/movie-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-create/movie-create.component.ts ***!
  \********************************************************/
/*! exports provided: MovieCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCreateComponent", function() { return MovieCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MovieCreateComponent {
    constructor() { }
    ngOnInit() {
    }
}
MovieCreateComponent.ɵfac = function MovieCreateComponent_Factory(t) { return new (t || MovieCreateComponent)(); };
MovieCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieCreateComponent, selectors: [["app-movie-create"]], decls: 2, vars: 0, template: function MovieCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "movie-create works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWNyZWF0ZS9tb3ZpZS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-create',
                templateUrl: './movie-create.component.html',
                styleUrls: ['./movie-create.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/movie-list/movie-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.ts ***!
  \****************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _apimovie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apimovie.service */ "./src/app/apimovie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MovieListComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ups_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", ups_r6.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ups_r6.title);
} }
function MovieListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieListComponent_div_7_div_2_Template, 8, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.upcomings.results);
} }
function MovieListComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieListComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.goToPrevMovie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieListComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieListComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Saiba mais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", movie_r10.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", movie_r10.vote_average, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r10.overview || movie_r10.title, "");
} }
function MovieListComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieListComponent_div_21_div_1_Template, 21, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.movies.results);
} }
function MovieListComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieListComponent_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goToPrevMovie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MovieListComponent {
    constructor(apimovieService, router) {
        this.apimovieService = apimovieService;
        this.router = router;
        this.numbpage = 1;
    }
    ngOnInit() {
        this.callMovie(this.numbpage);
        this.callUpcoming();
    }
    callMovie(numbpage) {
        this.apimovieService.getMovies(numbpage).subscribe((data) => {
            console.log(data);
            this.movies = data;
        });
    }
    callUpcoming() {
        this.apimovieService.getMoviesUpcoming().subscribe((data) => {
            console.log(data);
            this.upcomings = data;
        });
    }
    callMovieSearch(search, numbpage) {
        this.apimovieService.getMoviesSearch(search, numbpage).subscribe((data) => {
            console.log(data);
            this.movies = data;
        });
    }
    goToMovie() {
        //this.router.navigate(['/movie']);
        this.callMovieSearch(this.searchMovie, this.numbpage);
    }
    goToNextMovie() {
        this.numbpage += 1;
        console.log(this.searchMovie);
        if (typeof this.searchMovie == "undefined" || this.searchMovie == "" || this.searchMovie == null || this.searchMovie.trim().length == 0) {
            this.callMovie(this.numbpage);
        }
        else {
            this.callMovieSearch(this.searchMovie, this.numbpage);
        }
    }
    goToPrevMovie() {
        this.numbpage -= 1;
        if (typeof this.searchMovie == "undefined" || this.searchMovie == "" || this.searchMovie == null || this.searchMovie.trim().length == 0) {
            this.callMovie(this.numbpage);
        }
        else {
            this.callMovieSearch(this.searchMovie, this.numbpage);
        }
    }
}
MovieListComponent.ɵfac = function MovieListComponent_Factory(t) { return new (t || MovieListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MovieListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieListComponent, selectors: [["app-movie-list"]], decls: 29, vars: 5, consts: [[1, "uk-section", "uk-section-default", 2, "padding-top", "0px !important"], ["id", "topId", 1, "uk-container"], [1, "uk-margin"], [1, "uk-search", "uk-search-default"], ["id", "nameMovie", "type", "search", "placeholder", "Pesquisar...", 1, "uk-search-input", 3, "input"], [1, "uk-button", "uk-button-primary", 3, "click"], ["style", "padding-bottom: 10px;", "class", "uk-position-relative uk-visible-toggle uk-dark", "tabindex", "-1", "uk-slider", "", 4, "ngIf"], [1, "uk-pagination"], ["style", "color:white;", "class", "uk-button uk-button-primary", 3, "click", 4, "ngIf"], [1, "uk-margin-auto-left"], [1, "uk-button", "uk-button-primary", 2, "color", "white", 3, "click"], ["uk-pagination-next", "", 1, "uk-margin-small-left"], [1, "uk-heading-line"], ["class", "uk-flex uk-flex-center", 4, "ngIf"], ["class", "uk-grid-small uk-child-width-1-3@s", "uk-grid", "", 4, "ngIf"], ["href", "#topId", "uk-scroll", "", 3, "click", 4, "ngIf"], ["href", "#topId", "uk-scroll", "", 3, "click"], ["tabindex", "-1", "uk-slider", "", 1, "uk-position-relative", "uk-visible-toggle", "uk-dark", 2, "padding-bottom", "10px"], [1, "uk-slider-items", "uk-child-width-1-2", "uk-child-width-1-3@s", "uk-child-width-1-5@m", "uk-grid"], [4, "ngFor", "ngForOf"], ["href", "#", "uk-slidenav-previous", "", "uk-slider-item", "previous", 1, "uk-position-center-left", "uk-position-small", "uk-hidden-hover"], ["href", "#", "uk-slidenav-next", "", "uk-slider-item", "next", 1, "uk-position-center-right", "uk-position-small", "uk-hidden-hover"], [1, "uk-card", "uk-card-primary", "uk-link-toggle", "uk-light", 2, "height", "100%"], [1, "uk-card-media-top"], ["alt", "", 1, "uk-card-hover", 3, "src"], ["href", "#", "uk-marker", "", 1, "uk-position-absolute", 2, "left", "85%", "top", "1%"], [1, "uk-card-body", "uk-card-small"], [1, "uk-card-title", "uk-text-truncate", "uk-link-heading"], ["uk-pagination-previous", "", 1, "uk-margin-small-right"], [1, "uk-flex", "uk-flex-center"], ["uk-spinner", "ratio: 3", 1, "uk-margin-small-right", "uk-position-center"], ["uk-grid", "", 1, "uk-grid-small", "uk-child-width-1-3@s"], ["uk-grid", "", 1, "uk-card", "uk-card-default", "uk-link-toggle", "uk-card-small", "uk-card-hover", "uk-grid-collapse", "uk-margin", "uk-animation-slide-top-small"], [1, "uk-card-header", 2, "width", "100%"], ["uk-grid", "", 1, "uk-grid-small", "uk-flex-middle"], [1, "uk-width-auto"], ["width", "100", "height", "180", 3, "src"], [1, "uk-width-expand"], [1, "uk-card-title", "uk-margin-remove-bottom"], ["href", "#", 1, "uk-link-heading"], [1, "uk-text-meta", "uk-margin-remove-top"], [1, "uk-badge"], [2, "width", "100% !important"], [1, "uk-panel", "uk-panel-box", "uk-text-truncate", "uk-dropcap"], [1, "uk-card-footer"], ["href", "#", 1, "uk-button", "uk-button-text"]], template: function MovieListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MovieListComponent_Template_input_input_4_listener($event) { return ctx.searchMovie = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieListComponent_Template_button_click_5_listener() { return ctx.goToMovie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pesquisar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovieListComponent_div_7_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MovieListComponent_button_11_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieListComponent_Template_button_click_13_listener() { return ctx.goToNextMovie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pr\u00F3ximo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Filmes populares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MovieListComponent_div_20_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MovieListComponent_div_21_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MovieListComponent_a_24_Template, 3, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieListComponent_Template_a_click_26_listener() { return ctx.goToNextMovie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pr\u00F3ximo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.upcomings !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numbpage !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movies !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numbpage !== 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".example-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  #site-head[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n    background-color: white;\r\n    border-bottom: 1px solid rgba(0,0,0,0.06);\r\n  }\r\n  \r\n  #site-foot[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 3;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    font-size: 0.8rem;\r\n  }\r\n  \r\n  .uk-section-xsmall[_ngcontent-%COMP%] {\r\n      padding-top: 0.6rem;\r\n      padding-bottom: 0.6rem;\r\n  }\r\n  \r\n  .uk-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n  \r\n  .spacer[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%] {\r\n    border-top: 2px solid;\r\n    position: relative;\r\n    transition: box-shadow 0.15s ease-out;\r\n    border-radius: 3px;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 0 7px rgba(0,0,0,0.045);\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-inline[_ngcontent-%COMP%] {\r\n    z-index: 99;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-card-footer[_ngcontent-%COMP%] {\r\n    padding: 0.55rem 1rem;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-card-header[_ngcontent-%COMP%] {\r\n    padding: 0.55rem 1rem;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    font-size: 0.75rem;\r\n    letter-spacing: 0.01em;\r\n  }\r\n  \r\n  .nature-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #1E87F0;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border-radius: 3px; \r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\r\n    background-color:#8630F0;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\r\n    background-color:#F03A7F;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\r\n    background-color:#E84DF0;\r\n  }\r\n  \r\n  .nature-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #1E87F0;\r\n  }\r\n  \r\n  .music-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #8630F0;\r\n  }\r\n  \r\n  .music-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #8630F0;\r\n  }\r\n  \r\n  .design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #E84DF0;\r\n  }\r\n  \r\n  .design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #E84DF0;\r\n  }\r\n  \r\n  .photo-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #F03A7F;\r\n  }\r\n  \r\n  .photo-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #F03A7F;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-overlay-primary[_ngcontent-%COMP%] {\r\n    padding:  0.5rem;\r\n    text-align: center;\r\n    font-size: 0.7rem;\r\n    text-transform: uppercase;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  img[data-src][src*='data:image'][_ngcontent-%COMP%] { background: rgba(0,0,0,0.1); }\r\n  \r\n  .search-fld[_ngcontent-%COMP%] {\r\n    border-radius: 50px;\r\n    padding: 0 1rem;\r\n  }\r\n  \r\n  .uk-dropdown.drop-nav[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 24px rgba(0,0,0,.1);\r\n    width: 300px;\r\n  }\r\n  \r\n  .uk-dropdown.drop-comments[_ngcontent-%COMP%] {\r\n    width: 370px;\r\n  }\r\n  \r\n  .drop-nav[_ngcontent-%COMP%]::after {\r\n    bottom: 100%;\r\n    right: 4%;\r\n    border: solid transparent;\r\n    content: '';\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-bottom-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-left: -6px;\r\n  }\r\n  \r\n  .uk-dropdown.uk-dropdown-right-center[_ngcontent-%COMP%]::after {\r\n    right: 100%;\r\n    top: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-right-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-top: -6px;\r\n  }\r\n  \r\n  .uk-dropdown.uk-dropdown-left-center[_ngcontent-%COMP%]::after {\r\n    left: 100%;\r\n    top: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-left-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-top: -6px;\r\n  }\r\n  \r\n  .message[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    display: block;\r\n    line-height: 1.3rem;\r\n    padding: 0.5rem 0;\r\n  }\r\n  \r\n  .uk-notification-message[_ngcontent-%COMP%] {\r\n    background-color: #1e87f0;\r\n    color:  white;\r\n    font-size: 0.9rem;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 14px rgba(0,0,0,0.1);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5Q0FBeUM7RUFDM0M7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtFQUNuQjs7RUFDQTtNQUNJLG1CQUFtQjtNQUNuQixzQkFBc0I7RUFDMUI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFDQSxtQ0FBbUMsMkJBQTJCLEVBQUU7O0VBQ2hFO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQ0FBc0M7RUFDeEMiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNzaXRlLWhlYWQge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpO1xyXG4gIH1cclxuICAjc2l0ZS1mb290IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgLnVrLXNlY3Rpb24teHNtYWxsIHtcclxuICAgICAgcGFkZGluZy10b3A6IDAuNnJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDAuNnJlbTtcclxuICB9XHJcbiAgLnVrLWxvZ28gaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuICAuc3BhY2VyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgLnVrLWNhcmQge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyBlYXNlLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgLnVrLWNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgN3B4IHJnYmEoMCwwLDAsMC4wNDUpO1xyXG4gIH1cclxuICAudWstY2FyZCAudWstaW5saW5lIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICAudWstY2FyZCAudWstY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMC41NXJlbSAxcmVtO1xyXG4gIH1cclxuICAudWstY2FyZCAudWstY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMC41NXJlbSAxcmVtO1xyXG4gIH1cclxuICAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG4gIC5uYXR1cmUtY2FyZCAudWstY2FyZCB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMUU4N0YwO1xyXG4gIH1cclxuICAudWstc3VibmF2IGxpIGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyBcclxuICB9XHJcbiAgLnVrLXN1Ym5hdiBsaS51ay1hY3RpdmU6bnRoLWNoaWxkKDMpIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojODYzMEYwO1xyXG4gIH1cclxuICAudWstc3VibmF2IGxpLnVrLWFjdGl2ZTpudGgtY2hpbGQoNCkgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGMDNBN0Y7XHJcbiAgfVxyXG4gIC51ay1zdWJuYXYgbGkudWstYWN0aXZlOm50aC1jaGlsZCg1KSBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0U4NERGMDtcclxuICB9XHJcbiAgLm5hdHVyZS1jYXJkIC51ay1jYXJkIC5jYXQtdHh0IHtcclxuICAgIGNvbG9yOiAjMUU4N0YwO1xyXG4gIH1cclxuICAubXVzaWMtY2FyZCAudWstY2FyZCB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjODYzMEYwO1xyXG4gIH1cclxuICAubXVzaWMtY2FyZCAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBjb2xvcjogIzg2MzBGMDtcclxuICB9XHJcbiAgLmRlc2lnbi1jYXJkIC51ay1jYXJkIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNFODRERjA7XHJcbiAgfVxyXG4gIC5kZXNpZ24tY2FyZCAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBjb2xvcjogI0U4NERGMDtcclxuICB9XHJcbiAgLnBob3RvLWNhcmQgLnVrLWNhcmQge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI0YwM0E3RjtcclxuICB9XHJcbiAgLnBob3RvLWNhcmQgLnVrLWNhcmQgLmNhdC10eHQge1xyXG4gICAgY29sb3I6ICNGMDNBN0Y7XHJcbiAgfVxyXG4gIC51ay1jYXJkIC51ay1vdmVybGF5LXByaW1hcnkge1xyXG4gICAgcGFkZGluZzogIDAuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbiAgaW1nW2RhdGEtc3JjXVtzcmMqPSdkYXRhOmltYWdlJ10geyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7IH1cclxuICAuc2VhcmNoLWZsZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gIH1cclxuICAudWstZHJvcGRvd24uZHJvcC1uYXYge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMjRweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgLnVrLWRyb3Bkb3duLmRyb3AtY29tbWVudHMge1xyXG4gICAgd2lkdGg6IDM3MHB4O1xyXG4gIH1cclxuICAuZHJvcC1uYXY6OmFmdGVyIHtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIHJpZ2h0OiA0JTtcclxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcclxuICB9XHJcbiAgLnVrLWRyb3Bkb3duLnVrLWRyb3Bkb3duLXJpZ2h0LWNlbnRlcjo6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgfVxyXG4gIC51ay1kcm9wZG93bi51ay1kcm9wZG93bi1sZWZ0LWNlbnRlcjo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gIH1cclxuICAubWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICB9XHJcbiAgLnVrLW5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTg3ZjA7XHJcbiAgICBjb2xvcjogIHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-list',
                templateUrl: './movie-list.component.html',
                styleUrls: ['./movie-list.component.css']
            }]
    }], function () { return [{ type: _apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/trending-list/trending-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/trending-list/trending-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TrendingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingListComponent", function() { return TrendingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _apimovie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apimovie.service */ "./src/app/apimovie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TrendingListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendingListComponent_div_17_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendingListComponent_div_17_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "S\u00E9rie / Tv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/detail", a1]; };
function TrendingListComponent_div_17_div_1_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const td_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r3.overview.length > 120 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, td_r3.overview, 0, 120) + "..." : td_r3.overview || td_r3.original_title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, td_r3.id));
} }
function TrendingListComponent_div_17_div_1_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const td_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u00EDtulo original: ", td_r3.original_title || td_r3.original_name, " ( Descri\u00E7\u00E3o em falta ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, td_r3.id));
} }
function TrendingListComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrendingListComponent_div_17_div_1_span_6_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TrendingListComponent_div_17_div_1_span_7_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TrendingListComponent_div_17_div_1_p_24_Template, 5, 8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TrendingListComponent_div_17_div_1_p_25_Template, 4, 4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Mais ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const td_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](td_r3.media_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, td_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", td_r3.media_type == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", td_r3.media_type == "tv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 14, td_r3.release_date, "dd/MM/yyyy"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 17, td_r3.first_air_date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", td_r3.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r3.popularity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r3.vote_average, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r3.title || td_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", td_r3.overview !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", td_r3.overview == "");
} }
function TrendingListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendingListComponent_div_17_div_1_Template, 35, 22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.trends.results);
} }
class TrendingListComponent {
    constructor(apimovieService, router) {
        this.apimovieService = apimovieService;
        this.router = router;
        this.numbpage = 1;
    }
    ngOnInit() {
        this.callTrendDay(this.numbpage);
    }
    callTrendDay(numbpage) {
        this.apimovieService.getTrendingDay(numbpage).subscribe((data) => {
            console.log(data);
            this.trends = data;
        });
    }
}
TrendingListComponent.ɵfac = function TrendingListComponent_Factory(t) { return new (t || TrendingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TrendingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendingListComponent, selectors: [["app-trending-list"]], decls: 18, vars: 2, consts: [[1, "uk-section", "uk-section-small", "uk-section-default", "uk-padding-remove-bottom"], ["uk-filter", "target: .js-filter", 1, "uk-container", "uk-container-expand", "uk-margin-large-bottom"], [1, "uk-subnav", "uk-subnav-pill"], ["data-uk-filter-control", "", 1, "uk-active"], ["href", "#"], ["data-uk-filter-control", ".movie"], ["data-uk-filter-control", ".tv"], [1, "uk-heading-line"], ["class", "uk-flex uk-flex-center", 4, "ngIf"], ["class", "uk-grid uk-text-justify uk-grid-medium uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl uk-grid-match js-filter", "data-uk-grid", "masonry: true", "data-uk-sortable", "handle: .drag-icon", 4, "ngIf"], [1, "uk-flex", "uk-flex-center"], ["uk-spinner", "ratio: 3", 1, "uk-margin-small-right", "uk-position-center"], ["data-uk-grid", "masonry: true", "data-uk-sortable", "handle: .drag-icon", 1, "uk-grid", "uk-text-justify", "uk-grid-medium", "uk-child-width-1-3@s", "uk-child-width-1-4@m", "uk-child-width-1-5@l", "uk-child-width-1-6@xl", "uk-grid-match", "js-filter"], [4, "ngFor", "ngForJs-filter", "ngForOf"], ["data-tags", "a beautiful landscape - nature outdoor"], [1, "uk-card", "uk-card-small", "uk-link-toggle", "uk-card-default", 3, "routerLink"], [1, "uk-card-header"], ["data-uk-grid", "", 1, "uk-grid", "uk-grid-small", "uk-text-small"], [1, "uk-width-expand"], ["class", "cat-txt", 4, "ngIf"], [1, "uk-width-auto", "uk-text-right", "uk-text-muted"], ["data-uk-icon", "icon:clock; ratio: 0.8"], [1, "uk-card-media"], ["tabindex", "0", 1, "uk-inline-clip", "uk-transition-toggle"], ["data-width", "100", "data-height", "100", "alt", "", 1, "lazy", 3, "src"], [1, "uk-transition-slide-bottom", "uk-position-bottom", "uk-overlay", "uk-overlay-primary"], ["data-uk-icon", "icon:heart; ratio: 0.8"], ["data-uk-icon", "icon:star; ratio: 0.8"], [1, "uk-card-body"], [1, "uk-margin-small-bottom", "uk-margin-remove-adjacent", "uk-text-bold", "uk-link-heading"], ["class", "uk-text-small uk-text-muted", 4, "ngIf"], [1, "uk-card-footer"], ["data-uk-grid", "", 1, "uk-grid", "uk-grid-small", "uk-grid-divider", "uk-flex", "uk-flex-middle"], [1, "uk-width-expand", "uk-text-small"], [1, "uk-width-auto", "uk-text-right"], ["href", "#", "data-uk-tooltip", "title: Twitter", "data-uk-icon", "icon:twitter; ratio: 0.8", 1, "uk-icon-link"], ["href", "#", "data-uk-tooltip", "title: Instagram", "data-uk-icon", "icon:instagram; ratio: 0.8", 1, "uk-icon-link"], ["data-uk-tooltip", "title: Arraste o cart\u00E3o", "href", "#", "data-uk-icon", "icon:move; ratio: 1", 1, "uk-icon-link", "drag-icon"], [1, "cat-txt"], [1, "uk-text-small", "uk-text-muted"], [3, "routerLink"]], template: function TrendingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mostrar todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filmes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "S\u00E9ries / TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Populares hoje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TrendingListComponent_div_16_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TrendingListComponent_div_17_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.trends);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trends !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".example-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  #site-head[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n    background-color: white;\r\n    border-bottom: 1px solid rgba(0,0,0,0.06);\r\n  }\r\n  \r\n  #site-foot[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 3;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    font-size: 0.8rem;\r\n  }\r\n  \r\n  .uk-section-xsmall[_ngcontent-%COMP%] {\r\n      padding-top: 0.6rem;\r\n      padding-bottom: 0.6rem;\r\n  }\r\n  \r\n  .uk-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n  \r\n  .spacer[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%] {\r\n    border-top: 2px solid;\r\n    position: relative;\r\n    transition: box-shadow 0.15s ease-out;\r\n    border-radius: 3px;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 0 7px rgba(0,0,0,0.045);\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-inline[_ngcontent-%COMP%] {\r\n    z-index: 99;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-card-footer[_ngcontent-%COMP%] {\r\n    padding: 0.55rem 1rem;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-card-header[_ngcontent-%COMP%] {\r\n    padding: 0.55rem 1rem;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    font-size: 0.75rem;\r\n    letter-spacing: 0.01em;\r\n  }\r\n  \r\n  .movie[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #1E87F0;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border-radius: 3px; \r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\r\n    background-color:#8630F0;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\r\n    background-color:#F03A7F;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\r\n    background-color:#E84DF0;\r\n  }\r\n  \r\n  .movie[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #1E87F0;\r\n  }\r\n  \r\n  .movie2[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #8630F0;\r\n  }\r\n  \r\n  .music-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #8630F0;\r\n  }\r\n  \r\n  .design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #E84DF0;\r\n  }\r\n  \r\n  .design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #E84DF0;\r\n  }\r\n  \r\n  .tv[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #F03A7F;\r\n  }\r\n  \r\n  .tv[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #F03A7F;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-overlay-primary[_ngcontent-%COMP%] {\r\n    padding:  0.5rem;\r\n    text-align: center;\r\n    font-size: 0.7rem;\r\n    text-transform: uppercase;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  img[data-src][src*='data:image'][_ngcontent-%COMP%] { background: rgba(0,0,0,0.1); }\r\n  \r\n  .search-fld[_ngcontent-%COMP%] {\r\n    border-radius: 50px;\r\n    padding: 0 1rem;\r\n  }\r\n  \r\n  .uk-dropdown.drop-nav[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 24px rgba(0,0,0,.1);\r\n    width: 300px;\r\n  }\r\n  \r\n  .uk-dropdown.drop-comments[_ngcontent-%COMP%] {\r\n    width: 370px;\r\n  }\r\n  \r\n  .drop-nav[_ngcontent-%COMP%]::after {\r\n    bottom: 100%;\r\n    right: 4%;\r\n    border: solid transparent;\r\n    content: '';\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-bottom-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-left: -6px;\r\n  }\r\n  \r\n  .uk-dropdown.uk-dropdown-right-center[_ngcontent-%COMP%]::after {\r\n    right: 100%;\r\n    top: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-right-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-top: -6px;\r\n  }\r\n  \r\n  .uk-dropdown.uk-dropdown-left-center[_ngcontent-%COMP%]::after {\r\n    left: 100%;\r\n    top: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-left-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-top: -6px;\r\n  }\r\n  \r\n  .message[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    display: block;\r\n    line-height: 1.3rem;\r\n    padding: 0.5rem 0;\r\n  }\r\n  \r\n  .uk-notification-message[_ngcontent-%COMP%] {\r\n    background-color: #1e87f0;\r\n    color:  white;\r\n    font-size: 0.9rem;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 14px rgba(0,0,0,0.1);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlbmRpbmctbGlzdC90cmVuZGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5Q0FBeUM7RUFDM0M7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtFQUNuQjs7RUFDQTtNQUNJLG1CQUFtQjtNQUNuQixzQkFBc0I7RUFDMUI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFDQSxtQ0FBbUMsMkJBQTJCLEVBQUU7O0VBQ2hFO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQ0FBc0M7RUFDeEMiLCJmaWxlIjoic3JjL2FwcC90cmVuZGluZy1saXN0L3RyZW5kaW5nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNzaXRlLWhlYWQge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpO1xyXG4gIH1cclxuICAjc2l0ZS1mb290IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgLnVrLXNlY3Rpb24teHNtYWxsIHtcclxuICAgICAgcGFkZGluZy10b3A6IDAuNnJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDAuNnJlbTtcclxuICB9XHJcbiAgLnVrLWxvZ28gaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuICAuc3BhY2VyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgLnVrLWNhcmQge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyBlYXNlLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgLnVrLWNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgN3B4IHJnYmEoMCwwLDAsMC4wNDUpO1xyXG4gIH1cclxuICAudWstY2FyZCAudWstaW5saW5lIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICAudWstY2FyZCAudWstY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMC41NXJlbSAxcmVtO1xyXG4gIH1cclxuICAudWstY2FyZCAudWstY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMC41NXJlbSAxcmVtO1xyXG4gIH1cclxuICAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG4gIC5tb3ZpZSAudWstY2FyZCB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMUU4N0YwO1xyXG4gIH1cclxuICAudWstc3VibmF2IGxpIGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyBcclxuICB9XHJcbiAgLnVrLXN1Ym5hdiBsaS51ay1hY3RpdmU6bnRoLWNoaWxkKDMpIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojODYzMEYwO1xyXG4gIH1cclxuICAudWstc3VibmF2IGxpLnVrLWFjdGl2ZTpudGgtY2hpbGQoNCkgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGMDNBN0Y7XHJcbiAgfVxyXG4gIC51ay1zdWJuYXYgbGkudWstYWN0aXZlOm50aC1jaGlsZCg1KSBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0U4NERGMDtcclxuICB9XHJcbiAgLm1vdmllIC51ay1jYXJkIC5jYXQtdHh0IHtcclxuICAgIGNvbG9yOiAjMUU4N0YwO1xyXG4gIH1cclxuICAubW92aWUyIC51ay1jYXJkIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICM4NjMwRjA7XHJcbiAgfVxyXG4gIC5tdXNpYy1jYXJkIC51ay1jYXJkIC5jYXQtdHh0IHtcclxuICAgIGNvbG9yOiAjODYzMEYwO1xyXG4gIH1cclxuICAuZGVzaWduLWNhcmQgLnVrLWNhcmQge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI0U4NERGMDtcclxuICB9XHJcbiAgLmRlc2lnbi1jYXJkIC51ay1jYXJkIC5jYXQtdHh0IHtcclxuICAgIGNvbG9yOiAjRTg0REYwO1xyXG4gIH1cclxuICAudHYgLnVrLWNhcmQge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI0YwM0E3RjtcclxuICB9XHJcbiAgLnR2IC51ay1jYXJkIC5jYXQtdHh0IHtcclxuICAgIGNvbG9yOiAjRjAzQTdGO1xyXG4gIH1cclxuICAudWstY2FyZCAudWstb3ZlcmxheS1wcmltYXJ5IHtcclxuICAgIHBhZGRpbmc6ICAwLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIGltZ1tkYXRhLXNyY11bc3JjKj0nZGF0YTppbWFnZSddIHsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpOyB9XHJcbiAgLnNlYXJjaC1mbGQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcbiAgLnVrLWRyb3Bkb3duLmRyb3AtbmF2IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDI0cHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIC51ay1kcm9wZG93bi5kcm9wLWNvbW1lbnRzIHtcclxuICAgIHdpZHRoOiAzNzBweDtcclxuICB9XHJcbiAgLmRyb3AtbmF2OjphZnRlciB7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICByaWdodDogNCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci13aWR0aDogNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgfVxyXG4gIC51ay1kcm9wZG93bi51ay1kcm9wZG93bi1yaWdodC1jZW50ZXI6OmFmdGVyIHtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gIH1cclxuICAudWstZHJvcGRvd24udWstZHJvcGRvd24tbGVmdC1jZW50ZXI6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci13aWR0aDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxuICB9XHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgfVxyXG4gIC51ay1ub3RpZmljYXRpb24tbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4N2YwO1xyXG4gICAgY29sb3I6ICB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendingListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trending-list',
                templateUrl: './trending-list.component.html',
                styleUrls: ['./trending-list.component.css']
            }]
    }], function () { return [{ type: _apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gabriel M\Documents\Projeto angular site filmes\MoviesAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map