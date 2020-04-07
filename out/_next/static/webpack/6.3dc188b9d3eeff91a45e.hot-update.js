webpackHotUpdate(6,{

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(/*! next-routes */ "./node_modules/next-routes/dist/index.js")(); // SE O SITE TIVER MULTI LINGUA
// module.exports = routes().add({ name: 'index', pattern: '/:lang/:slug?', page: 'index' })
// SE O SITE NÃO TIVER MULTI LINGUA


routes.add({
  name: 'index',
  pattern: '/:slug?',
  page: 'index'
}).add({
  name: 'legal',
  pattern: '/legal?',
  page: 'legal'
}).add({
  name: 'newsDetail',
  pattern: '/news/:slug?',
  page: 'news'
}).add({
  name: 'worksDetaul',
  pattern: '/works/:slug?',
  page: 'works'
});

/***/ })

})
//# sourceMappingURL=6.3dc188b9d3eeff91a45e.hot-update.js.map