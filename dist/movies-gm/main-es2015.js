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
        return this.httpClient.get('' + this.URL + '/movie/popular?api_key=' + this.key_id + '&language=pt-BR&page=' + numbpage + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getTv(numbpage) {
        return this.httpClient.get('' + this.URL + '/tv/popular?api_key=' + this.key_id + '&language=pt-BR&page=' + numbpage + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getMoviesUpcoming() {
        return this.httpClient.get('' + this.URL + '/movie/upcoming?api_key=' + this.key_id + '&language=pt-BR&page=1&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getMoviesSearch(search, numbpage) {
        return this.httpClient.get('' + this.URL + '/search/movie?api_key=' + this.key_id + '&language=pt-BR&query=' + search + '&page=' + numbpage + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getMultiSearch(search, numbpage) {
        return this.httpClient.get('' + this.URL + '/search/multi?api_key=' + this.key_id + '&language=pt-BR&query=' + search + '&page=' + numbpage + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getTrendingDay(numbpage) {
        return this.httpClient.get('' + this.URL + '/trending/all/day?api_key=' + this.key_id + '&language=pt-BR&page=' + numbpage + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getDetailsMovie(id) {
        return this.httpClient.get('' + this.URL + '/movie/' + id + '?api_key=' + this.key_id + '&language=pt-BR' + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getDetailsTv(id) {
        return this.httpClient.get('' + this.URL + '/tv/' + id + '?api_key=' + this.key_id + '&language=pt-BR' + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getSimilarMovie(id, numbpage) {
        return this.httpClient.get('' + this.URL + '/movie/' + id + '/similar?api_key=' + this.key_id + '&language=pt-BR&page=' + numbpage + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getSimilarTv(id, numbpage) {
        return this.httpClient.get('' + this.URL + '/tv/' + id + '/similar?api_key=' + this.key_id + '&language=pt-BR&page=' + numbpage + '&include_adult=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _result_search_result_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result-search/result-search.component */ "./src/app/result-search/result-search.component.ts");










const routes = [
    { path: 'moviecreate', component: _movie_create_movie_create_component__WEBPACK_IMPORTED_MODULE_3__["MovieCreateComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'movies', component: _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__["MovieListComponent"] },
    { path: 'trends', component: _trending_list_trending_list_component__WEBPACK_IMPORTED_MODULE_4__["TrendingListComponent"] },
    { path: 'detail/:type/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'search/:pesquisa', component: _result_search_result_search_component__WEBPACK_IMPORTED_MODULE_7__["ResultSearchComponent"] },
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
        this.router.navigate(['/home']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 129, vars: 0, consts: [["id", "site-head", 2, "padding", "20px 0px", "background", "#333", "color", "white"], [1, "uk-container", "uk-container-large"], ["data-uk-grid", "", 1, "uk-grid", "uk-grid-medium", "uk-flex", "uk-flex-middle"], [1, "uk-width-auto"], ["href", "#", "title", "", 1, "uk-logo", 2, "color", "white"], [1, "uk-width-expand"], ["data-uk-margin", "", 1, "uk-subnav"], [1, "uk-visible@s"], ["href", "#", "routerLink", "/home"], ["href", "#", "routerLink", "/movies"], ["href", "#", "data-uk-icon", "icon:comments"], ["data-uk-dropdown", "mode: click; offset: 20;animation: uk-animation-slide-bottom-small; duration: 150", 1, "drop-nav", "drop-comments", "uk-dropdown"], ["data-uk-tab", "animation: uk-animation-fade", 1, "uk-child-width-expand"], ["href", "#"], [1, "uk-switcher", "uk-margin"], [1, "uk-height-small", "uk-overflow-auto"], [1, "message"], ["href", "", 1, "uk-link"], ["href", "#", "data-uk-icon", "icon:more"], ["data-uk-dropdown", "mode: click; offset: 20;animation: uk-animation-slide-bottom-small; duration: 150", 1, "drop-nav", "uk-dropdown"], [1, "uk-margin-small-bottom", "uk-margin-remove-adjacent"], [1, "uk-text-small", "uk-text-muted"], ["href", "#", 1, "uk-button", "uk-button-primary", "uk-width-1-1"], ["data-uk-nav", "", 1, "uk-nav-default", "uk-nav-parent-icon"], [1, "uk-nav-header"], ["data-uk-icon", "icon: table", 1, "uk-margin-small-right"], ["data-uk-icon", "icon: thumbnails", 1, "uk-margin-small-right"], [1, "uk-nav-divider"], ["data-uk-icon", "icon: trash", 1, "uk-margin-small-right"], [1, "uk-hidden@s"], ["data-uk-navbar-toggle-icon", "", "data-uk-toggle", "", "href", "#offcanvas-nav"], [1, "spacer"], ["id", "offcanvas-nav", "data-uk-offcanvas", "flip: true; overlay: true"], [1, "uk-offcanvas-bar", "uk-offcanvas-bar-animation", "uk-offcanvas-slide"], ["type", "button", "data-uk-close", "", 1, "uk-offcanvas-close", "uk-close", "uk-icon"], [1, "uk-nav", "uk-nav-default"], [1, "uk-active"], [1, "uk-parent"], [1, "uk-nav-sub"], ["href", "#js-options"], ["data-uk-icon", "icon: table", 1, "uk-margin-small-right", "uk-icon"], ["data-uk-icon", "icon: thumbnails", 1, "uk-margin-small-right", "uk-icon"], ["data-uk-icon", "icon: trash", 1, "uk-margin-small-right", "uk-icon"], [1, "uk-section", "uk-text-center", "uk-section-secondary", "uk-padding-remove-bottom", "uk-animation-fade"], [1, "uk-container"], ["data-uk-grid", "", 1, "uk-grid", "uk-grid-large"], [1, "uk-width-1-1@m"], ["href", "#", "title", "gabriellopesveras@gmail.com"], ["target", "_blank", "href", "https://www.linkedin.com/in/gabriel-matheus-a54907144/", "data-uk-icon", "linkedin", 1, "uk-icon-button"], [1, "uk-text-center", "uk-padding", "uk-padding-remove-horizontal"], ["href", "http://getuikit.com", "title", "Visit UIkit 3 site", "target", "_blank", "data-uk-tooltip", ""], ["data-uk-icon", "uikit"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Filmes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Your Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "VIEW MESSAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "VIEW MESSAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "VIEW MESSAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "VIEW MESSAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "UPDATE YOUR ACCOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Parent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Sub item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sub item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "footer", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Gabriel Matheus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Ol\u00E1, voc\u00EA pode entrar em contato comigo em: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "gabriellopesveras@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u00A9 2020 Created by Gabriel Matheus | Built with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "span", 51);
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _result_search_result_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./result-search/result-search.component */ "./src/app/result-search/result-search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




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
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_17__["DetailComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        _result_search_result_search_component__WEBPACK_IMPORTED_MODULE_19__["ResultSearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
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
                    _detail_detail_component__WEBPACK_IMPORTED_MODULE_17__["DetailComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                    _result_search_result_search_component__WEBPACK_IMPORTED_MODULE_19__["ResultSearchComponent"]
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





function DetailComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dura\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.timeConvert(ctx_r0.details.runtime), " ");
} }
function DetailComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dura\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.timeConvert(ctx_r1.details.episode_run_time), " ");
} }
function DetailComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comp_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comp_r4.name);
} }
function DetailComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ups_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", ups_r5.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ups_r5.title);
} }
const _c0 = function () { return ["/home"]; };
class DetailComponent {
    constructor(apimovieService, _Activatedroute, router) {
        this.apimovieService = apimovieService;
        this._Activatedroute = _Activatedroute;
        this.router = router;
        this.detailNamePage = "Detalhes";
        this.numbpage = 1;
    }
    ngOnInit() {
        this.sub = this._Activatedroute.paramMap.subscribe(params => {
            console.log(params);
            this.id = params.get('id');
            this.type = params.get('type');
            console.log(this.type);
            if (this.type == 'movie') {
                this.callSimilarMovies(this.id);
                this.apimovieService.getDetailsMovie(this.id).subscribe((data) => {
                    console.log(data);
                    this.details = data;
                });
            }
            else if (this.type == 'tv') {
                this.callSimilarTv(this.id);
                this.apimovieService.getDetailsTv(this.id).subscribe((data) => {
                    console.log(data);
                    this.details = data;
                });
            }
            else {
            }
            //this.detail=details.find(p => p.id==this.id);   
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goToLink(url) {
        window.open(url, "_blank");
    }
    callSimilarMovies(idSimilar) {
        this.apimovieService.getSimilarMovie(idSimilar, this.numbpage).subscribe((data) => {
            console.log(data);
            this.similar = data;
        });
    }
    callSimilarTv(idSimilar) {
        this.apimovieService.getSimilarTv(idSimilar, this.numbpage).subscribe((data) => {
            console.log(data);
            this.similar = data;
        });
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
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 40, vars: 16, consts: [[1, "uk-section", "uk-section-small", "uk-section-default", "uk-padding-remove-bottom"], [1, "uk-container", "uk-container-large", "uk-margin-large-bottom"], [1, "uk-breadcrumb"], [3, "routerLink"], ["uk-grid", "", 1, "uk-card", "uk-card-secondary", "uk-grid-collapse", "uk-child-width-1-2@s", "uk-margin", "uk-animation-fade"], [1, "uk-card-media-left", "uk-animation-slide-left-small"], ["alt", "", 3, "src"], [1, "uk-card-body", "uk-animation-slide-right-small"], [1, "uk-card-badge", "uk-label", 2, "background", "goldenrod", "color", "white", "font-weight", "900"], [1, "uk-card-title", 2, "font-weight", "bold"], [1, "uk-text-meta", "uk-margin-remove-top"], ["datetime", "2016-04-01T19:00"], [4, "ngIf"], [1, "uk-flex", "uk-flex-left"], [4, "ngFor", "ngForOf"], [1, "uk-card-footer"], ["target", "_blank", 1, "uk-button", "uk-button-text", 3, "href"], ["tabindex", "-1", "uk-slider", "", 1, "uk-position-relative", "uk-visible-toggle", "uk-dark", "uk-animation-fade", 2, "padding-bottom", "10px"], [1, "uk-slider-items", "uk-child-width-1-2", "uk-child-width-1-3@s", "uk-child-width-1-6@m", "uk-grid"], ["href", "#", "uk-slidenav-previous", "", "uk-slider-item", "previous", 1, "uk-position-center-left", "uk-position-small", "uk-hidden-hover"], ["href", "#", "uk-slidenav-next", "", "uk-slider-item", "next", 1, "uk-position-center-right", "uk-position-small", "uk-hidden-hover"], [2, "color", "white"], [1, "uk-margin-left", 2, "padding", "10px 0px"], [2, "padding", "5px", "border", "1px solid gray"], [1, "uk-card", "uk-card-default", "uk-link-toggle"], [1, "uk-card-media-top"], ["alt", "", 1, "uk-card-hover", 3, "src"], [1, "uk-card-title", "uk-text-truncate", "uk-link-heading"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "time", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DetailComponent_p_24_Template, 4, 1, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DetailComponent_p_25_Template, 4, 1, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "G\u00EAnero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DetailComponent_div_29_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Acesse a p\u00E1gina principal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Similares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DetailComponent_div_37_Template, 6, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailNamePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", ctx.details.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details.vote_average, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details.title || ctx.details.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Data de lan\u00E7amento ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 12, ctx.details.release_date, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.details.runtime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.details.episode_run_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.details.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.similar.results);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.css']
            }]
    }], function () { return [{ type: _apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _apimovie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apimovie.service */ "./src/app/apimovie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_15_div_5_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_15_div_5_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "S\u00E9rie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a2) { return ["/detail", a1, a2]; };
function HomeComponent_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_15_div_5_span_6_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_15_div_5_span_7_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const td_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](td_r7.media_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, td_r7.media_type, td_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", td_r7.media_type == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", td_r7.media_type == "tv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r7.vote_average, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", td_r7.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r7.popularity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", td_r7.title || td_r7.name, " ");
} }
const _c1 = function () { return ["/trends"]; };
function HomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Populares hoje");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_15_div_5_Template, 20, 13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Visualizar mais populares");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.trendsHome.results);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
} }
function HomeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a2) { return ["/detail", "movie", a2]; };
function HomeComponent_div_19_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const td_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, td_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r11.vote_average, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", td_r11.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r11.popularity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", td_r11.title || td_r11.name, " ");
} }
const _c3 = function () { return ["/movie"]; };
function HomeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filmes populares");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_19_div_5_Template, 20, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Visualizar mais filmes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.popularHome.results);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a2) { return ["/detail", "tv", a2]; };
function HomeComponent_div_23_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tv / S\u00E9rie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const td_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, td_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r13.vote_average, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", td_r13.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r13.popularity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", td_r13.title || td_r13.name, " ");
} }
const _c5 = function () { return ["/tv"]; };
function HomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "S\u00E9ries populares");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_23_div_5_Template, 20, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Visualizar mais s\u00E9ries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.tvLatest.results);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c5));
} }
class HomeComponent {
    constructor(apimovieService, router) {
        this.apimovieService = apimovieService;
        this.router = router;
        this.numbpage = 1;
        this.imgDefault = "../../assets/notImg.png";
    }
    ngOnInit() {
        this.callTrendDay(this.numbpage);
        this.callMoviePopular(this.numbpage);
        this.calTvLatest(this.numbpage);
    }
    callTrendDay(numbpage) {
        this.apimovieService.getTrendingDay(numbpage).subscribe((data) => {
            console.log(data);
            this.trendsHome = data;
        });
    }
    callMoviePopular(numbpage) {
        this.apimovieService.getMovies(numbpage).subscribe((data) => {
            console.log(data);
            this.popularHome = data;
        });
    }
    calTvLatest(numbpage) {
        this.apimovieService.getTv(numbpage).subscribe((data) => {
            console.log(data);
            this.tvLatest = data;
        });
    }
    callMovieSearch(search, numbpage) {
        this.apimovieService.getMultiSearch(search, numbpage).subscribe((data) => {
            console.log(data);
            this.trendsHome = data;
        });
    }
    goMovieSearch() {
        this.router.navigate(['/search', this.searchMovieTrend]);
        //console.log(this.searchMovieTrend);
        //this.callMovieSearch(this.searchMovieTrend, this.numbpage);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 24, vars: 6, consts: [["id", "modal-full", "uk-modal", "", 1, "uk-modal-full", "uk-modal"], ["uk-height-viewport", "", 1, "uk-modal-dialog", "uk-flex", "uk-flex-center", "uk-flex-middle"], ["type", "button", "uk-close", "", 1, "uk-modal-close-full"], [1, "uk-search", "uk-search-large"], ["type", "search", "placeholder", "Ex: Batman", "autofocus", "", 1, "uk-search-input", "uk-text-center", 3, "input"], ["type", "submit", 1, "uk-button", "uk-button-secondary", "uk-modal-close", 3, "click"], [1, "uk-section", "uk-section-small", "uk-section-default", "uk-padding-remove-bottom"], ["uk-filter", "target: .js-filter", 1, "uk-container", "uk-container-large", "uk-margin-large-bottom"], ["type", "button", "href", "#modal-full", "uk-toggle", "", 1, "uk-button", "uk-button-secondary"], ["uk-icon", "icon: search; ratio: 1"], ["class", "uk-flex uk-flex-center", 4, "ngIf"], ["style", "padding: 25px;border-radius: 10px;border: 1px solid rgba(0, 0, 0, 0.14);", "class", "uk-position-relative uk-section-muted uk-visible-toggle uk-dark", "tabindex", "-1", "uk-slider", "autoplay: true; autoplay-interval: 4500", 4, "ngIf"], ["style", "padding: 25px;border-radius: 10px;border: 1px solid rgba(0, 0, 0, 0.14);", "class", "uk-slider-container uk-section-muted uk-position-relative uk-visible-toggle uk-dark", "tabindex", "-1", "uk-slider", "autoplay: true; autoplay-interval: 4500", 4, "ngIf"], [1, "uk-flex", "uk-flex-center"], ["uk-spinner", "ratio: 3", 1, "uk-margin-small-right", "uk-position-center"], ["tabindex", "-1", "uk-slider", "autoplay: true; autoplay-interval: 4500", 1, "uk-position-relative", "uk-section-muted", "uk-visible-toggle", "uk-dark", 2, "padding", "25px", "border-radius", "10px", "border", "1px solid rgba(0, 0, 0, 0.14)"], [1, "uk-heading-line"], [1, "uk-slider-items", "uk-child-width-1-2", "uk-child-width-1-3@s", "uk-child-width-1-4@m", "uk-child-width-1-5@l", "uk-child-width-1-6@xl", "uk-grid"], [4, "ngFor", "ngForOf"], ["href", "#", "uk-slidenav-previous", "", "uk-slider-item", "previous", 1, "uk-position-center-left", "uk-position-small", "uk-hidden-hover"], ["href", "#", "uk-slidenav-next", "", "uk-slider-item", "next", 1, "uk-position-center-right", "uk-position-small", "uk-hidden-hover"], [1, "uk-button", "uk-button-text", "uk-align-center", 2, "margin-bottom", "0px", 3, "routerLink"], ["data-tags", "a beautiful landscape - nature outdoor"], [1, "uk-card", "uk-card-small", "uk-box-shadow-small", "uk-box-shadow-hover-large", "uk-link-toggle", "uk-card-default", 3, "routerLink"], [1, "uk-card-header"], ["data-uk-grid", "", 1, "uk-grid", "uk-grid-small", "uk-text-small"], [1, "uk-width-expand"], ["class", "cat-txt", 4, "ngIf"], [1, "uk-width-auto", "uk-text-right", "uk-text-muted"], ["data-uk-icon", "icon:star; ratio: 0.8"], [1, "uk-card-media"], ["tabindex", "0", 1, "uk-inline-clip", "uk-transition-toggle", "uk-flex", "uk-flex-center"], ["data-width", "100", "data-height", "100", "alt", "", 1, "lazy", 3, "src"], [1, "uk-transition-slide-bottom", "uk-position-bottom", "uk-overlay", "uk-overlay-primary"], ["data-uk-icon", "icon:heart; ratio: 0.8", 2, "color", "red"], [1, "uk-margin-top", "uk-margin-remove-adjacent", "uk-text-bold"], [1, "cat-txt"], ["tabindex", "-1", "uk-slider", "autoplay: true; autoplay-interval: 4500", 1, "uk-slider-container", "uk-section-muted", "uk-position-relative", "uk-visible-toggle", "uk-dark", 2, "padding", "25px", "border-radius", "10px", "border", "1px solid rgba(0, 0, 0, 0.14)"], ["data-tags", "a beautiful landscape - nature outdoor", 1, "movie"], ["data-tags", "a beautiful landscape - nature outdoor", 1, "tv"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HomeComponent_Template_input_input_4_listener($event) { return ctx.searchMovieTrend = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.goMovieSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Pesquisar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pesquisar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_15_Template, 10, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_18_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 10, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_23_Template, 10, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.trendsHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trendsHome !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.popularHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popularHome !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tvLatest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tvLatest !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n#site-head[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 99;\r\n  background-color: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\r\n}\r\n\r\n#site-foot[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 3;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.uk-section-xsmall[_ngcontent-%COMP%] {\r\n  padding-top: 0.6rem;\r\n  padding-bottom: 0.6rem;\r\n}\r\n\r\n.uk-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n}\r\n\r\n.uk-card[_ngcontent-%COMP%] {\r\n  border-top: 2px solid;\r\n  position: relative;\r\n  transition: box-shadow 0.15s ease-out;\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n\r\n.uk-card[_ngcontent-%COMP%]   .uk-inline[_ngcontent-%COMP%] {\r\n  z-index: 99;\r\n}\r\n\r\n.uk-card[_ngcontent-%COMP%]   .uk-card-footer[_ngcontent-%COMP%] {\r\n  padding: 0.55rem 1rem;\r\n}\r\n\r\n.uk-card[_ngcontent-%COMP%]   .uk-card-header[_ngcontent-%COMP%] {\r\n  padding: 0.55rem 1rem;\r\n}\r\n\r\n.uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  font-size: 0.75rem;\r\n  letter-spacing: 0.01em;\r\n}\r\n\r\n.movie[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n  border-top-color: #1e87f0;\r\n}\r\n\r\n.uk-subnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  border-radius: 3px;\r\n}\r\n\r\n.uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\r\n  background-color: #8630f0;\r\n}\r\n\r\n.uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\r\n  background-color: #f03a7f;\r\n}\r\n\r\n.uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\r\n  background-color: #e84df0;\r\n}\r\n\r\n.movie[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n  color: #1e87f0;\r\n}\r\n\r\n.movie2[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n  border-top-color: #8630f0;\r\n}\r\n\r\n.music-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n  color: #8630f0;\r\n}\r\n\r\n.design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n  border-top-color: #e84df0;\r\n}\r\n\r\n.design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n  color: #e84df0;\r\n}\r\n\r\n.tv[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n  border-top-color: #f03a7f;\r\n}\r\n\r\n.tv[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n  color: #f03a7f;\r\n}\r\n\r\n.uk-card[_ngcontent-%COMP%]   .uk-overlay-primary[_ngcontent-%COMP%] {\r\n  color:white;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 0.9rem;\r\n  text-transform: uppercase;\r\n  \r\n}\r\n\r\nimg[data-src][src*=\"data:image\"][_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.search-fld[_ngcontent-%COMP%] {\r\n  border-radius: 50px;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.uk-dropdown.drop-nav[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.1);\r\n  width: 300px;\r\n}\r\n\r\n.uk-dropdown.drop-comments[_ngcontent-%COMP%] {\r\n  width: 370px;\r\n}\r\n\r\n.drop-nav[_ngcontent-%COMP%]::after {\r\n  bottom: 100%;\r\n  right: 4%;\r\n  border: solid transparent;\r\n  content: \"\";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-color: rgba(255, 255, 255, 0);\r\n  border-bottom-color: #ffffff;\r\n  border-width: 6px;\r\n  margin-left: -6px;\r\n}\r\n\r\n.uk-dropdown.uk-dropdown-right-center[_ngcontent-%COMP%]::after {\r\n  right: 100%;\r\n  top: 50%;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-color: rgba(255, 255, 255, 0);\r\n  border-right-color: #ffffff;\r\n  border-width: 6px;\r\n  margin-top: -6px;\r\n}\r\n\r\n.uk-dropdown.uk-dropdown-left-center[_ngcontent-%COMP%]::after {\r\n  left: 100%;\r\n  top: 50%;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-color: rgba(255, 255, 255, 0);\r\n  border-left-color: #ffffff;\r\n  border-width: 6px;\r\n  margin-top: -6px;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n  font-size: 0.85rem;\r\n  display: block;\r\n  line-height: 1.3rem;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n.uk-notification-message[_ngcontent-%COMP%] {\r\n  background-color: #1e87f0;\r\n  color: white;\r\n  font-size: 0.9rem;\r\n  border-radius: 3px;\r\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.search[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n\r\n.searchTerm[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border: 3px solid #a5a5a5;\r\n  border-right: none;\r\n  padding: 5px;\r\n  height: 25px;\r\n  border-radius: 5px 0 0 5px;\r\n  outline: none;\r\n  color: #5a5a5a;\r\n  padding-left: 10px;\r\n}\r\n\r\n.searchTerm[_ngcontent-%COMP%]:focus {\r\n  color: #313131;\r\n  border: 3px solid #313131;\r\n}\r\n\r\n.searchButton[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 41px;\r\n  border: 1px solid #313131;\r\n  background: #313131;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 0 5px 5px 0;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n\r\n.styleStars[_ngcontent-%COMP%] {\r\n  left: 0px;\r\n  top: 0%;\r\n  height: 22px;\r\n  width: 40px;\r\n  background: white;\r\n  text-align: center;\r\n  box-shadow: 3px 2px 0 0px #999;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  color: #333;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qiw0Q0FBNEM7QUFDOUM7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBQ0E7O0dBRUc7O0FBQ0g7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jc2l0ZS1oZWFkIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG59XHJcbiNzaXRlLWZvb3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbi51ay1zZWN0aW9uLXhzbWFsbCB7XHJcbiAgcGFkZGluZy10b3A6IDAuNnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xyXG59XHJcbi51ay1sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnNwYWNlciB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi51ay1jYXJkIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgZWFzZS1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi8qIC51ay1jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxufSAqL1xyXG4udWstY2FyZCAudWstaW5saW5lIHtcclxuICB6LWluZGV4OiA5OTtcclxufVxyXG4udWstY2FyZCAudWstY2FyZC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDAuNTVyZW0gMXJlbTtcclxufVxyXG4udWstY2FyZCAudWstY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDAuNTVyZW0gMXJlbTtcclxufVxyXG4udWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG59XHJcbi5tb3ZpZSAudWstY2FyZCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzFlODdmMDtcclxufVxyXG4udWstc3VibmF2IGxpIGEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4udWstc3VibmF2IGxpLnVrLWFjdGl2ZTpudGgtY2hpbGQoMykgYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2MzBmMDtcclxufVxyXG4udWstc3VibmF2IGxpLnVrLWFjdGl2ZTpudGgtY2hpbGQoNCkgYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwM2E3ZjtcclxufVxyXG4udWstc3VibmF2IGxpLnVrLWFjdGl2ZTpudGgtY2hpbGQoNSkgYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4NGRmMDtcclxufVxyXG4ubW92aWUgLnVrLWNhcmQgLmNhdC10eHQge1xyXG4gIGNvbG9yOiAjMWU4N2YwO1xyXG59XHJcbi5tb3ZpZTIgLnVrLWNhcmQge1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICM4NjMwZjA7XHJcbn1cclxuLm11c2ljLWNhcmQgLnVrLWNhcmQgLmNhdC10eHQge1xyXG4gIGNvbG9yOiAjODYzMGYwO1xyXG59XHJcbi5kZXNpZ24tY2FyZCAudWstY2FyZCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U4NGRmMDtcclxufVxyXG4uZGVzaWduLWNhcmQgLnVrLWNhcmQgLmNhdC10eHQge1xyXG4gIGNvbG9yOiAjZTg0ZGYwO1xyXG59XHJcbi50diAudWstY2FyZCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2YwM2E3ZjtcclxufVxyXG4udHYgLnVrLWNhcmQgLmNhdC10eHQge1xyXG4gIGNvbG9yOiAjZjAzYTdmO1xyXG59XHJcbi51ay1jYXJkIC51ay1vdmVybGF5LXByaW1hcnkge1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgLyogb3BhY2l0eTogMTsgKi9cclxufVxyXG5pbWdbZGF0YS1zcmNdW3NyYyo9XCJkYXRhOmltYWdlXCJdIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLnNlYXJjaC1mbGQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcbi51ay1kcm9wZG93bi5kcm9wLW5hdiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4udWstZHJvcGRvd24uZHJvcC1jb21tZW50cyB7XHJcbiAgd2lkdGg6IDM3MHB4O1xyXG59XHJcbi5kcm9wLW5hdjo6YWZ0ZXIge1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICByaWdodDogNCU7XHJcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbn1cclxuLnVrLWRyb3Bkb3duLnVrLWRyb3Bkb3duLXJpZ2h0LWNlbnRlcjo6YWZ0ZXIge1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci13aWR0aDogNnB4O1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbn1cclxuLnVrLWRyb3Bkb3duLnVrLWRyb3Bkb3duLWxlZnQtY2VudGVyOjphZnRlciB7XHJcbiAgbGVmdDogMTAwJTtcclxuICB0b3A6IDUwJTtcclxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci13aWR0aDogNnB4O1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbn1cclxuLm1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsaW5lLWhlaWdodDogMS4zcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG59XHJcbi51ay1ub3RpZmljYXRpb24tbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODdmMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNlYXJjaFRlcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNhNWE1YTU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogIzVhNWE1YTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hUZXJtOmZvY3VzIHtcclxuICBjb2xvcjogIzMxMzEzMTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMzEzMTMxO1xyXG59XHJcblxyXG4uc2VhcmNoQnV0dG9uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDQxcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzMxMzEzMTtcclxuICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc3R5bGVTdGFycyB7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMCU7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAzcHggMnB4IDAgMHB4ICM5OTk7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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





function MovieListComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieListComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goToPrevMovie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a2) { return ["/detail", "movie", a2]; };
function MovieListComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Saiba mais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, movie_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", movie_r7.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", movie_r7.vote_average, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r7.overview || movie_r7.title, "");
} }
function MovieListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieListComponent_div_15_div_1_Template, 21, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.movies.results);
} }
function MovieListComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieListComponent_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goToPrevMovie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 12);
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
MovieListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieListComponent, selectors: [["app-movie-list"]], decls: 23, vars: 4, consts: [[1, "uk-section", "uk-section-default", 2, "padding-top", "0px !important"], ["id", "topId", 1, "uk-container"], [1, "uk-pagination"], ["style", "color:white;", "class", "uk-button uk-button-primary", 3, "click", 4, "ngIf"], [1, "uk-margin-auto-left"], [1, "uk-button", "uk-button-primary", 2, "color", "white", 3, "click"], ["uk-pagination-next", "", 1, "uk-margin-small-left"], [1, "uk-heading-line"], ["class", "uk-flex uk-flex-center", 4, "ngIf"], ["class", "uk-grid-small uk-child-width-1-3@s", "uk-grid", "", 4, "ngIf"], ["href", "#topId", "uk-scroll", "", 3, "click", 4, "ngIf"], ["href", "#topId", "uk-scroll", "", 3, "click"], ["uk-pagination-previous", "", 1, "uk-margin-small-right"], [1, "uk-flex", "uk-flex-center"], ["uk-spinner", "ratio: 3", 1, "uk-margin-small-right", "uk-position-center"], ["uk-grid", "", 1, "uk-grid-small", "uk-child-width-1-3@s"], [4, "ngFor", "ngForOf"], ["uk-grid", "", 1, "uk-card", "uk-card-default", "uk-link-toggle", "uk-card-small", "uk-card-hover", "uk-grid-collapse", "uk-margin", "uk-animation-slide-top-small", 3, "routerLink"], [1, "uk-card-header", 2, "width", "100%"], ["uk-grid", "", 1, "uk-grid-small", "uk-flex-middle"], [1, "uk-width-auto"], ["width", "100", "height", "180", 3, "src"], [1, "uk-width-expand"], [1, "uk-card-title", "uk-margin-remove-bottom"], ["href", "#", 1, "uk-link-heading"], [1, "uk-text-meta", "uk-margin-remove-top"], [1, "uk-badge"], [2, "width", "100% !important"], [1, "uk-card-body", "uk-card-small"], [1, "uk-panel", "uk-panel-box", "uk-text-truncate", "uk-dropcap"], [1, "uk-card-footer"], ["href", "#", 1, "uk-button", "uk-button-text"]], template: function MovieListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MovieListComponent_button_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieListComponent_Template_button_click_7_listener() { return ctx.goToNextMovie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pr\u00F3ximo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Filmes populares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MovieListComponent_div_14_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MovieListComponent_div_15_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MovieListComponent_a_18_Template, 3, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieListComponent_Template_a_click_20_listener() { return ctx.goToNextMovie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pr\u00F3ximo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numbpage !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movies !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numbpage !== 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".example-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  #site-head[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n    background-color: white;\r\n    border-bottom: 1px solid rgba(0,0,0,0.06);\r\n  }\r\n  \r\n  #site-foot[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 3;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    font-size: 0.8rem;\r\n  }\r\n  \r\n  .uk-section-xsmall[_ngcontent-%COMP%] {\r\n      padding-top: 0.6rem;\r\n      padding-bottom: 0.6rem;\r\n  }\r\n  \r\n  .uk-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n  \r\n  .spacer[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%] {\r\n    border-top: 2px solid;\r\n    position: relative;\r\n    transition: box-shadow 0.15s ease-out;\r\n    border-radius: 3px;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 0 7px rgba(0,0,0,0.045);\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-inline[_ngcontent-%COMP%] {\r\n    z-index: 99;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-card-footer[_ngcontent-%COMP%] {\r\n    padding: 0.55rem 1rem;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-card-header[_ngcontent-%COMP%] {\r\n    padding: 0.55rem 1rem;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    font-size: 0.75rem;\r\n    letter-spacing: 0.01em;\r\n  }\r\n  \r\n  .nature-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #1E87F0;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border-radius: 3px; \r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\r\n    background-color:#8630F0;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\r\n    background-color:#F03A7F;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\r\n    background-color:#E84DF0;\r\n  }\r\n  \r\n  .nature-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #1E87F0;\r\n  }\r\n  \r\n  .music-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #8630F0;\r\n  }\r\n  \r\n  .music-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #8630F0;\r\n  }\r\n  \r\n  .design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #E84DF0;\r\n  }\r\n  \r\n  .design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #E84DF0;\r\n  }\r\n  \r\n  .photo-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #F03A7F;\r\n  }\r\n  \r\n  .photo-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #F03A7F;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-overlay-primary[_ngcontent-%COMP%] {\r\n    padding:  0.5rem;\r\n    text-align: center;\r\n    font-size: 0.7rem;\r\n    text-transform: uppercase;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  img[data-src][src*='data:image'][_ngcontent-%COMP%] { background: rgba(0,0,0,0.1); }\r\n  \r\n  .search-fld[_ngcontent-%COMP%] {\r\n    border-radius: 50px;\r\n    padding: 0 1rem;\r\n  }\r\n  \r\n  .uk-dropdown.drop-nav[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 24px rgba(0,0,0,.1);\r\n    width: 300px;\r\n  }\r\n  \r\n  .uk-dropdown.drop-comments[_ngcontent-%COMP%] {\r\n    width: 370px;\r\n  }\r\n  \r\n  .drop-nav[_ngcontent-%COMP%]::after {\r\n    bottom: 100%;\r\n    right: 4%;\r\n    border: solid transparent;\r\n    content: '';\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-bottom-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-left: -6px;\r\n  }\r\n  \r\n  .uk-dropdown.uk-dropdown-right-center[_ngcontent-%COMP%]::after {\r\n    right: 100%;\r\n    top: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-right-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-top: -6px;\r\n  }\r\n  \r\n  .uk-dropdown.uk-dropdown-left-center[_ngcontent-%COMP%]::after {\r\n    left: 100%;\r\n    top: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-left-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-top: -6px;\r\n  }\r\n  \r\n  .message[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    display: block;\r\n    line-height: 1.3rem;\r\n    padding: 0.5rem 0;\r\n  }\r\n  \r\n  .uk-notification-message[_ngcontent-%COMP%] {\r\n    background-color: #1e87f0;\r\n    color:  white;\r\n    font-size: 0.9rem;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 14px rgba(0,0,0,0.1);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5Q0FBeUM7RUFDM0M7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtFQUNuQjs7RUFDQTtNQUNJLG1CQUFtQjtNQUNuQixzQkFBc0I7RUFDMUI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFDQSxtQ0FBbUMsMkJBQTJCLEVBQUU7O0VBQ2hFO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQ0FBc0M7RUFDeEMiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNzaXRlLWhlYWQge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpO1xyXG4gIH1cclxuICAjc2l0ZS1mb290IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgLnVrLXNlY3Rpb24teHNtYWxsIHtcclxuICAgICAgcGFkZGluZy10b3A6IDAuNnJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDAuNnJlbTtcclxuICB9XHJcbiAgLnVrLWxvZ28gaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuICAuc3BhY2VyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgLnVrLWNhcmQge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyBlYXNlLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgLnVrLWNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgN3B4IHJnYmEoMCwwLDAsMC4wNDUpO1xyXG4gIH1cclxuICAudWstY2FyZCAudWstaW5saW5lIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICAudWstY2FyZCAudWstY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMC41NXJlbSAxcmVtO1xyXG4gIH1cclxuICAudWstY2FyZCAudWstY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMC41NXJlbSAxcmVtO1xyXG4gIH1cclxuICAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG4gIC5uYXR1cmUtY2FyZCAudWstY2FyZCB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMUU4N0YwO1xyXG4gIH1cclxuICAudWstc3VibmF2IGxpIGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyBcclxuICB9XHJcbiAgLnVrLXN1Ym5hdiBsaS51ay1hY3RpdmU6bnRoLWNoaWxkKDMpIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojODYzMEYwO1xyXG4gIH1cclxuICAudWstc3VibmF2IGxpLnVrLWFjdGl2ZTpudGgtY2hpbGQoNCkgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGMDNBN0Y7XHJcbiAgfVxyXG4gIC51ay1zdWJuYXYgbGkudWstYWN0aXZlOm50aC1jaGlsZCg1KSBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0U4NERGMDtcclxuICB9XHJcbiAgLm5hdHVyZS1jYXJkIC51ay1jYXJkIC5jYXQtdHh0IHtcclxuICAgIGNvbG9yOiAjMUU4N0YwO1xyXG4gIH1cclxuICAubXVzaWMtY2FyZCAudWstY2FyZCB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjODYzMEYwO1xyXG4gIH1cclxuICAubXVzaWMtY2FyZCAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBjb2xvcjogIzg2MzBGMDtcclxuICB9XHJcbiAgLmRlc2lnbi1jYXJkIC51ay1jYXJkIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNFODRERjA7XHJcbiAgfVxyXG4gIC5kZXNpZ24tY2FyZCAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBjb2xvcjogI0U4NERGMDtcclxuICB9XHJcbiAgLnBob3RvLWNhcmQgLnVrLWNhcmQge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI0YwM0E3RjtcclxuICB9XHJcbiAgLnBob3RvLWNhcmQgLnVrLWNhcmQgLmNhdC10eHQge1xyXG4gICAgY29sb3I6ICNGMDNBN0Y7XHJcbiAgfVxyXG4gIC51ay1jYXJkIC51ay1vdmVybGF5LXByaW1hcnkge1xyXG4gICAgcGFkZGluZzogIDAuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbiAgaW1nW2RhdGEtc3JjXVtzcmMqPSdkYXRhOmltYWdlJ10geyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7IH1cclxuICAuc2VhcmNoLWZsZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gIH1cclxuICAudWstZHJvcGRvd24uZHJvcC1uYXYge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMjRweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgLnVrLWRyb3Bkb3duLmRyb3AtY29tbWVudHMge1xyXG4gICAgd2lkdGg6IDM3MHB4O1xyXG4gIH1cclxuICAuZHJvcC1uYXY6OmFmdGVyIHtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIHJpZ2h0OiA0JTtcclxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcclxuICB9XHJcbiAgLnVrLWRyb3Bkb3duLnVrLWRyb3Bkb3duLXJpZ2h0LWNlbnRlcjo6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgfVxyXG4gIC51ay1kcm9wZG93bi51ay1kcm9wZG93bi1sZWZ0LWNlbnRlcjo6YWZ0ZXIge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gIH1cclxuICAubWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICB9XHJcbiAgLnVrLW5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTg3ZjA7XHJcbiAgICBjb2xvcjogIHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-list',
                templateUrl: './movie-list.component.html',
                styleUrls: ['./movie-list.component.css']
            }]
    }], function () { return [{ type: _apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/result-search/result-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/result-search/result-search.component.ts ***!
  \**********************************************************/
/*! exports provided: ResultSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultSearchComponent", function() { return ResultSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _apimovie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apimovie.service */ "./src/app/apimovie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a1, a2) { return ["/detail", a1, a2]; };
function ResultSearchComponent_div_16_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", item_r1.backdrop_path || item_r1.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, item_r1.media_type, item_r1.id));
} }
function ResultSearchComponent_div_16_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r1.media_type, item_r1.id));
} }
function ResultSearchComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResultSearchComponent_div_16_div_6_Template, 2, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ResultSearchComponent_div_16_div_7_Template, 2, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, item_r1.media_type, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title || item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.backdrop_path || item_r1.poster_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.backdrop_path && !item_r1.poster_path);
} }
const _c1 = function () { return ["/home"]; };
class ResultSearchComponent {
    constructor(apimovieService, _Activatedroute, router) {
        this.apimovieService = apimovieService;
        this._Activatedroute = _Activatedroute;
        this.router = router;
        this.detailNamePage = "Pesquisa: ";
        this.numbpage = 1;
    }
    ngOnInit() {
        this.sub = this._Activatedroute.paramMap.subscribe(params => {
            console.log(params);
            this.search = params.get('pesquisa');
            this.detailNamePage = this.search;
            this.callMovieSearch(this.search, this.numbpage);
            //this.detail=details.find(p => p.id==this.id);   
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    callMovieSearch(search, numbpage) {
        this.apimovieService.getMultiSearch(search, numbpage).subscribe((data) => {
            console.log(data);
            this.resultSearch = data;
        });
    }
    goMovieSearch() {
        //this.router.navigate(['/movie']);
        //console.log(this.searchMovieTrend);
        this.callMovieSearch(this.search, this.numbpage);
    }
}
ResultSearchComponent.ɵfac = function ResultSearchComponent_Factory(t) { return new (t || ResultSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ResultSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultSearchComponent, selectors: [["app-result-search"]], decls: 17, vars: 4, consts: [["id", "modal-full", "uk-modal", "", 1, "uk-modal-full", "uk-modal"], ["uk-height-viewport", "", 1, "uk-modal-dialog", "uk-flex", "uk-flex-center", "uk-flex-middle"], ["type", "button", "uk-close", "", 1, "uk-modal-close-full"], [1, "uk-search", "uk-search-large"], ["type", "search", "placeholder", "O que deseja pesquisar ?", "autofocus", "", 1, "uk-search-input", "uk-text-center", 3, "input"], ["type", "submit", 1, "uk-button", "uk-button-secondary", "uk-modal-close", 3, "click"], [1, "uk-section", "uk-section-small", "uk-section-default", "uk-padding-remove-bottom"], ["uk-filter", "target: .js-filter", 1, "uk-container", "uk-container-large", "uk-margin-large-bottom"], [1, "uk-breadcrumb"], [3, "routerLink"], ["class", "uk-flex-middle", "uk-grid", "", 4, "ngFor", "ngForOf"], ["uk-grid", "", 1, "uk-flex-middle"], [1, "uk-width-2-3@m", 3, "routerLink"], ["class", "uk-width-1-3@m uk-flex-first", 4, "ngIf"], [1, "uk-width-1-3@m", "uk-flex-first"], ["alt", "Image", 2, "min-height", "150px", "max-height", "220px", 3, "routerLink", "src"], ["src", "../../assets/notImg.png", "alt", "Image", 2, "min-height", "150px", "max-height", "220px", 3, "routerLink"]], template: function ResultSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ResultSearchComponent_Template_input_input_4_listener($event) { return ctx.resultSearch = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultSearchComponent_Template_button_click_5_listener() { return ctx.goMovieSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Pesquisar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResultSearchComponent_div_16_Template, 8, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailNamePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resultSearch.results);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC1zZWFyY2gvcmVzdWx0LXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result-search',
                templateUrl: './result-search.component.html',
                styleUrls: ['./result-search.component.css']
            }]
    }], function () { return [{ type: _apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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





function TrendingListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendingListComponent_div_19_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendingListComponent_div_19_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "S\u00E9rie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a2) { return ["/detail", a1, a2]; };
function TrendingListComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrendingListComponent_div_19_div_1_span_6_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TrendingListComponent_div_19_div_1_span_7_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const td_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](td_r3.media_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, td_r3.media_type, td_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", td_r3.media_type == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", td_r3.media_type == "tv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 12, td_r3.release_date, "dd/MM/yyyy"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 15, td_r3.first_air_date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", td_r3.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r3.popularity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r3.vote_average, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r3.title || td_r3.name, " ");
} }
function TrendingListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendingListComponent_div_19_div_1_Template, 23, 21, "div", 18);
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
        this.imgDefault = "../../assets/notImg.png";
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
    callMovieSearch(search, numbpage) {
        this.apimovieService.getMultiSearch(search, numbpage).subscribe((data) => {
            console.log(data);
            this.trends = data;
        });
    }
    goMovieSearch() {
        this.router.navigate(['/search', this.searchMovieTrend]);
        //console.log(this.searchMovieTrend);
        //this.callMovieSearch(this.searchMovieTrend, this.numbpage);
    }
}
TrendingListComponent.ɵfac = function TrendingListComponent_Factory(t) { return new (t || TrendingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apimovie_service__WEBPACK_IMPORTED_MODULE_1__["ApimovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TrendingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendingListComponent, selectors: [["app-trending-list"]], decls: 20, vars: 2, consts: [["id", "modal-full", "uk-modal", "", 1, "uk-modal-full", "uk-modal"], ["uk-height-viewport", "", 1, "uk-modal-dialog", "uk-flex", "uk-flex-center", "uk-flex-middle"], ["type", "button", "uk-close", "", 1, "uk-modal-close-full"], [1, "uk-search", "uk-search-large"], ["type", "search", "placeholder", "O que deseja pesquisar ?", "autofocus", "", 1, "uk-search-input", "uk-text-center", 3, "input"], [1, "uk-flex", "uk-flex-center"], [1, "uk-button", "uk-button-secondary", "uk-margin-top", 3, "click"], [1, "uk-section", "uk-section-small", "uk-section-default", "uk-padding-remove-bottom"], ["uk-filter", "target: .js-filter", 1, "uk-container", "uk-container-large", "uk-margin-large-bottom"], [1, "search"], ["type", "text", "placeholder", "O que deseja pesquisar ?", 1, "searchTerm", 3, "input"], ["type", "submit", 1, "searchButton", 3, "click"], ["uk-icon", "icon: search; ratio: 1"], [1, "uk-heading-line"], ["class", "uk-flex uk-flex-center", 4, "ngIf"], ["class", "uk-grid uk-text-justify uk-grid-medium uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl uk-grid-match ", "data-uk-grid", "masonry: true", "data-uk-sortable", "handle: .drag-icon", "uk-height-match", "target: > div > div > .uk-card", 4, "ngIf"], ["uk-spinner", "ratio: 3", 1, "uk-margin-small-right", "uk-position-center"], ["data-uk-grid", "masonry: true", "data-uk-sortable", "handle: .drag-icon", "uk-height-match", "target: > div > div > .uk-card", 1, "uk-grid", "uk-text-justify", "uk-grid-medium", "uk-child-width-1-3@s", "uk-child-width-1-4@m", "uk-child-width-1-5@l", "uk-child-width-1-6@xl", "uk-grid-match"], ["class", "js-filter", "uk-scrollspy", "cls: uk-animation-fade; target: .uk-card; delay: 300; repeat: false", 4, "ngFor", "ngForOf"], ["uk-scrollspy", "cls: uk-animation-fade; target: .uk-card; delay: 300; repeat: false", 1, "js-filter"], ["data-tags", "a beautiful landscape - nature outdoor"], [1, "uk-card", "uk-card-small", "uk-link-toggle", "uk-card-default", 3, "routerLink"], [1, "uk-card-header"], ["data-uk-grid", "", 1, "uk-grid", "uk-grid-small", "uk-text-small"], [1, "uk-width-expand"], ["class", "cat-txt", 4, "ngIf"], [1, "uk-width-auto", "uk-text-right", "uk-text-muted"], ["data-uk-icon", "icon:clock; ratio: 0.8"], [1, "uk-card-media"], ["tabindex", "0", 1, "uk-inline-clip", "uk-transition-toggle", "uk-flex", "uk-flex-center"], ["data-width", "100", "data-height", "100", "alt", "", 1, "lazy", 3, "src"], [1, "uk-transition-slide-bottom", "uk-position-bottom", "uk-overlay", "uk-overlay-primary"], ["data-uk-icon", "icon:heart; ratio: 0.8"], ["data-uk-icon", "icon:star; ratio: 0.8"], [1, "uk-margin-small-bottom", "uk-margin-remove-adjacent", "uk-text-bold", "uk-link-heading"], [1, "cat-txt"]], template: function TrendingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TrendingListComponent_Template_input_input_4_listener($event) { return ctx.searchMovieTrend = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendingListComponent_Template_button_click_6_listener() { return ctx.goMovieSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pesquisar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TrendingListComponent_Template_input_input_11_listener($event) { return ctx.searchMovieTrend = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendingListComponent_Template_button_click_12_listener() { return ctx.goMovieSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Populares hoje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TrendingListComponent_div_18_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TrendingListComponent_div_19_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.trends);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trends !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".example-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  #site-head[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n    background-color: white;\r\n    border-bottom: 1px solid rgba(0,0,0,0.06);\r\n  }\r\n  \r\n  #site-foot[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 3;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    font-size: 0.8rem;\r\n  }\r\n  \r\n  .uk-section-xsmall[_ngcontent-%COMP%] {\r\n      padding-top: 0.6rem;\r\n      padding-bottom: 0.6rem;\r\n  }\r\n  \r\n  .uk-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n  \r\n  .spacer[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%] {\r\n    border-top: 2px solid;\r\n    position: relative;\r\n    transition: box-shadow 0.15s ease-out;\r\n    border-radius: 3px;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 0 7px rgba(0, 0, 0, 0.13);\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-inline[_ngcontent-%COMP%] {\r\n    z-index: 99;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-card-footer[_ngcontent-%COMP%] {\r\n    padding: 0.55rem 1rem;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-card-header[_ngcontent-%COMP%] {\r\n    padding: 0.55rem 1rem;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    font-size: 0.75rem;\r\n    letter-spacing: 0.01em;\r\n  }\r\n  \r\n  .movie[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #1E87F0;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border-radius: 3px; \r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\r\n    background-color:#8630F0;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\r\n    background-color:#F03A7F;\r\n  }\r\n  \r\n  .uk-subnav[_ngcontent-%COMP%]   li.uk-active[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\r\n    background-color:#E84DF0;\r\n  }\r\n  \r\n  .movie[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #1E87F0;\r\n  }\r\n  \r\n  .movie2[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #8630F0;\r\n  }\r\n  \r\n  .music-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #8630F0;\r\n  }\r\n  \r\n  .design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #E84DF0;\r\n  }\r\n  \r\n  .design-card[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #E84DF0;\r\n  }\r\n  \r\n  .tv[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%] {\r\n    border-top-color: #F03A7F;\r\n  }\r\n  \r\n  .tv[_ngcontent-%COMP%]   .uk-card[_ngcontent-%COMP%]   .cat-txt[_ngcontent-%COMP%] {\r\n    color: #F03A7F;\r\n  }\r\n  \r\n  .uk-card[_ngcontent-%COMP%]   .uk-overlay-primary[_ngcontent-%COMP%] {\r\n    padding:  0.5rem;\r\n    text-align: center;\r\n    font-size: 0.7rem;\r\n    text-transform: uppercase;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  img[data-src][src*='data:image'][_ngcontent-%COMP%] { background: rgba(0,0,0,0.1); }\r\n  \r\n  .search-fld[_ngcontent-%COMP%] {\r\n    border-radius: 50px;\r\n    padding: 0 1rem;\r\n  }\r\n  \r\n  .uk-dropdown.drop-nav[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 24px rgba(0,0,0,.1);\r\n    width: 300px;\r\n  }\r\n  \r\n  .uk-dropdown.drop-comments[_ngcontent-%COMP%] {\r\n    width: 370px;\r\n  }\r\n  \r\n  .drop-nav[_ngcontent-%COMP%]::after {\r\n    bottom: 100%;\r\n    right: 4%;\r\n    border: solid transparent;\r\n    content: '';\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-bottom-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-left: -6px;\r\n  }\r\n  \r\n  .uk-dropdown.uk-dropdown-right-center[_ngcontent-%COMP%]::after {\r\n    right: 100%;\r\n    top: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-right-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-top: -6px;\r\n  }\r\n  \r\n  .uk-dropdown.uk-dropdown-left-center[_ngcontent-%COMP%]::after {\r\n    left: 100%;\r\n    top: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-left-color: #ffffff;\r\n    border-width: 6px;\r\n    margin-top: -6px;\r\n  }\r\n  \r\n  .message[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    display: block;\r\n    line-height: 1.3rem;\r\n    padding: 0.5rem 0;\r\n  }\r\n  \r\n  .uk-notification-message[_ngcontent-%COMP%] {\r\n    background-color: #1e87f0;\r\n    color:  white;\r\n    font-size: 0.9rem;\r\n    border-radius: 3px;\r\n    box-shadow: 0 4px 14px rgba(0,0,0,0.1);\r\n  }\r\n  \r\n  .search[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n  }\r\n  \r\n  .searchTerm[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 3px solid #a5a5a5;\r\n    border-right: none;\r\n    padding: 5px;\r\n    height: 25px;\r\n    border-radius: 5px 0 0 5px;\r\n    outline: none;\r\n    color: #5a5a5a;\r\n    padding-left: 10px;\r\n  }\r\n  \r\n  .searchTerm[_ngcontent-%COMP%]:focus{\r\n    color: #313131;\r\n    border: 3px solid #313131;\r\n  }\r\n  \r\n  .searchButton[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 41px;\r\n    border: 1px solid #313131;\r\n    background: #313131;\r\n    text-align: center;\r\n    color: #fff;\r\n    border-radius: 0 5px 5px 0;\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlbmRpbmctbGlzdC90cmVuZGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5Q0FBeUM7RUFDM0M7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtFQUNuQjs7RUFDQTtNQUNJLG1CQUFtQjtNQUNuQixzQkFBc0I7RUFDMUI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFDQSxtQ0FBbUMsMkJBQTJCLEVBQUU7O0VBQ2hFO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RyZW5kaW5nLWxpc3QvdHJlbmRpbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI3NpdGUtaGVhZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7XHJcbiAgfVxyXG4gICNzaXRlLWZvb3Qge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuICAudWstc2VjdGlvbi14c21hbGwge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMC42cmVtO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xyXG4gIH1cclxuICAudWstbG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIC5zcGFjZXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxuICAudWstY2FyZCB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGVhc2Utb3V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAudWstY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICB9XHJcbiAgLnVrLWNhcmQgLnVrLWlubGluZSB7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgLnVrLWNhcmQgLnVrLWNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDAuNTVyZW0gMXJlbTtcclxuICB9XHJcbiAgLnVrLWNhcmQgLnVrLWNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDAuNTVyZW0gMXJlbTtcclxuICB9XHJcbiAgLnVrLWNhcmQgLmNhdC10eHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxuICAubW92aWUgLnVrLWNhcmQge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzFFODdGMDtcclxuICB9XHJcbiAgLnVrLXN1Ym5hdiBsaSBhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgXHJcbiAgfVxyXG4gIC51ay1zdWJuYXYgbGkudWstYWN0aXZlOm50aC1jaGlsZCgzKSBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Izg2MzBGMDtcclxuICB9XHJcbiAgLnVrLXN1Ym5hdiBsaS51ay1hY3RpdmU6bnRoLWNoaWxkKDQpIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjAzQTdGO1xyXG4gIH1cclxuICAudWstc3VibmF2IGxpLnVrLWFjdGl2ZTpudGgtY2hpbGQoNSkgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFODRERjA7XHJcbiAgfVxyXG4gIC5tb3ZpZSAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBjb2xvcjogIzFFODdGMDtcclxuICB9XHJcbiAgLm1vdmllMiAudWstY2FyZCB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjODYzMEYwO1xyXG4gIH1cclxuICAubXVzaWMtY2FyZCAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBjb2xvcjogIzg2MzBGMDtcclxuICB9XHJcbiAgLmRlc2lnbi1jYXJkIC51ay1jYXJkIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNFODRERjA7XHJcbiAgfVxyXG4gIC5kZXNpZ24tY2FyZCAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBjb2xvcjogI0U4NERGMDtcclxuICB9XHJcbiAgLnR2IC51ay1jYXJkIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNGMDNBN0Y7XHJcbiAgfVxyXG4gIC50diAudWstY2FyZCAuY2F0LXR4dCB7XHJcbiAgICBjb2xvcjogI0YwM0E3RjtcclxuICB9XHJcbiAgLnVrLWNhcmQgLnVrLW92ZXJsYXktcHJpbWFyeSB7XHJcbiAgICBwYWRkaW5nOiAgMC41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICBpbWdbZGF0YS1zcmNdW3NyYyo9J2RhdGE6aW1hZ2UnXSB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTsgfVxyXG4gIC5zZWFyY2gtZmxkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgfVxyXG4gIC51ay1kcm9wZG93bi5kcm9wLW5hdiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAyNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICAudWstZHJvcGRvd24uZHJvcC1jb21tZW50cyB7XHJcbiAgICB3aWR0aDogMzcwcHg7XHJcbiAgfVxyXG4gIC5kcm9wLW5hdjo6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgcmlnaHQ6IDQlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gIH1cclxuICAudWstZHJvcGRvd24udWstZHJvcGRvd24tcmlnaHQtY2VudGVyOjphZnRlciB7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci13aWR0aDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxuICB9XHJcbiAgLnVrLWRyb3Bkb3duLnVrLWRyb3Bkb3duLWxlZnQtY2VudGVyOjphZnRlciB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgfVxyXG4gIC5tZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gIH1cclxuICAudWstbm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlODdmMDtcclxuICAgIGNvbG9yOiAgd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2hUZXJtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2E1YTVhNTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjNWE1YTVhO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoVGVybTpmb2N1c3tcclxuICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzMxMzEzMTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaEJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMTMxMzE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAiXX0= */"] });
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