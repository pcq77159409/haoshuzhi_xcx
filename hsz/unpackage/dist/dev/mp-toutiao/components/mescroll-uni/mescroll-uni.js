(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mescroll-uni/mescroll-uni"],{

/***/ 390:
/*!***************************************************************************!*\
  !*** E:/haoshuzhi_xcx/haoshuzhi/components/mescroll-uni/mescroll-uni.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-uni.vue?vue&type=template&id=8f18eaf8& */ 391);
/* harmony import */ var _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-uni.vue?vue&type=script&lang=js& */ 393);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mescroll-uni.vue?vue&type=style&index=0&lang=css& */ 395);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/mescroll-uni/mescroll-uni.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 391:
/*!**********************************************************************************************************!*\
  !*** E:/haoshuzhi_xcx/haoshuzhi/components/mescroll-uni/mescroll-uni.vue?vue&type=template&id=8f18eaf8& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mescroll-uni.vue?vue&type=template&id=8f18eaf8& */ 392);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_template_id_8f18eaf8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 392:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/haoshuzhi_xcx/haoshuzhi/components/mescroll-uni/mescroll-uni.vue?vue&type=template&id=8f18eaf8& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = _vm.wxsBiz.touchstartEvent
    _vm.e1 = _vm.wxsBiz.touchmoveEvent
    _vm.e2 = _vm.wxsBiz.touchendEvent
    _vm.e3 = _vm.wxsBiz.touchendEvent
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 393:
/*!****************************************************************************************************!*\
  !*** E:/haoshuzhi_xcx/haoshuzhi/components/mescroll-uni/mescroll-uni.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mescroll-uni.vue?vue&type=script&lang=js& */ 394);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 394:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/haoshuzhi_xcx/haoshuzhi/components/mescroll-uni/mescroll-uni.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









































































var _mescrollUni = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni.js */ 385));

var _mescrollUniOption = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni-option.js */ 386));





var _mixins = _interopRequireDefault(__webpack_require__(/*! ./wxs/mixins.js */ 387));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 引入mescroll-uni.js,处理核心逻辑
// 引入全局配置
var MescrollEmpty = function MescrollEmpty() {__webpack_require__.e(/*! require.ensure | components/mescroll-uni/components/mescroll-empty */ "components/mescroll-uni/components/mescroll-empty").then((function () {return resolve(__webpack_require__(/*! ./components/mescroll-empty.vue */ 616));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var MescrollTop = function MescrollTop() {__webpack_require__.e(/*! require.ensure | components/mescroll-uni/components/mescroll-top */ "components/mescroll-uni/components/mescroll-top").then((function () {return resolve(__webpack_require__(/*! ./components/mescroll-top.vue */ 621));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { mixins: [_mixins.default], components: { MescrollEmpty: MescrollEmpty, MescrollTop: MescrollTop }, data: function data() {return { mescroll: { optDown: {}, optUp: {} }, // mescroll实例
      viewId: 'id_' + Math.random().toString(36).substr(2, 16), // 随机生成mescroll的id(不能数字开头,否则找不到元素)
      downHight: 0, //下拉刷新: 容器高度
      downRate: 0, // 下拉比率(inOffset: rate<1; outOffset: rate>=1)
      downLoadType: 0, // 下拉刷新状态: 0(loading前), 1(inOffset), 2(outOffset), 3(showLoading), 4(endDownScroll)
      upLoadType: 0, // 上拉加载状态: 0(loading前), 1loading中, 2没有更多了,显示END文本提示, 3(没有更多了,不显示END文本提示)
      isShowEmpty: false, // 是否显示空布局
      isShowToTop: false, // 是否显示回到顶部按钮
      scrollTop: 0, // 滚动条的位置
      scrollAnim: false, // 是否开启滚动动画
      windowTop: 0, // 可使用窗口的顶部位置
      windowBottom: 0, // 可使用窗口的底部位置
      windowHeight: 0, // 可使用窗口的高度
      statusBarHeight: 0, // 状态栏高度
      scrollToViewId: '' // 滚动到指定view的id
    };}, props: { down: Object, // 下拉刷新的参数配置
    up: Object, // 上拉加载的参数配置
    top: [String, Number], // 下拉布局往下的偏移量 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)
    topbar: [Boolean, String], // top的偏移量是否加上状态栏高度, 默认false (使用场景:取消原生导航栏时,配置此项可留出状态栏的占位, 支持传入字符串背景,如色值,背景图,渐变)
    bottom: [String, Number], // 上拉布局往上的偏移量 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)
    safearea: Boolean, // bottom的偏移量是否加上底部安全区的距离, 默认false (需要适配iPhoneX时使用)
    fixed: { // 是否通过fixed固定mescroll的高度, 默认true
      type: Boolean, default: true }, height: [String, Number], // 指定mescroll的高度, 此项有值,则不使用fixed. (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)
    bottombar: { // 底部是否偏移TabBar的高度(默认仅在H5端的tab页生效)
      type: Boolean, default: true } }, computed: { // 是否使用fixed定位 (当height有值,则不使用)
    isFixed: function isFixed() {return !this.height && this.fixed;}, // mescroll的高度
    scrollHeight: function scrollHeight() {if (this.isFixed) {return "auto";} else if (this.height) {return this.toPx(this.height) + 'px';} else {return "100%";}}, // 下拉布局往下偏移的距离 (px)
    numTop: function numTop() {return this.toPx(this.top);}, fixedTop: function fixedTop() {return this.isFixed ? this.numTop + this.windowTop + 'px' : 0;}, padTop: function padTop() {return !this.isFixed ? this.numTop + 'px' : 0;}, // 上拉布局往上偏移 (px)
    numBottom: function numBottom() {return this.toPx(this.bottom);}, fixedBottom: function fixedBottom() {return this.isFixed ? this.numBottom + this.windowBottom + 'px' : 0;}, padBottom: function padBottom() {return !this.isFixed ? this.numBottom + 'px' : 0;}, // 是否为重置下拉的状态
    isDownReset: function isDownReset() {return this.downLoadType === 3 || this.downLoadType === 4;}, // 过渡
    transition: function transition() {return this.isDownReset ? 'transform 300ms' : '';}, translateY: function translateY() {return this.downHight > 0 ? 'translateY(' + this.downHight + 'px)' : ''; // transform会使fixed失效,需注意把fixed元素写在mescroll之外
    }, // 列表是否可滑动
    scrollable: function scrollable() {return this.downLoadType === 0 || this.isDownReset;}, // 是否在加载中
    isDownLoading: function isDownLoading() {return this.downLoadType === 3;}, // 旋转的角度
    downRotate: function downRotate() {return 'rotate(' + 360 * this.downRate + 'deg)';}, // 文本提示
    downText: function downText() {if (!this.mescroll) return ""; // 避免头条小程序初始化时报错
      switch (this.downLoadType) {case 1:return this.mescroll.optDown.textInOffset;case 2:return this.mescroll.optDown.textOutOffset;case 3:return this.mescroll.optDown.textLoading;case 4:return this.mescroll.optDown.textLoading;default:return this.mescroll.optDown.textInOffset;}

    } },

  methods: {
    //number,rpx,upx,px,% --> px的数值
    toPx: function toPx(num) {
      if (typeof num === "string") {
        if (num.indexOf('px') !== -1) {
          if (num.indexOf('rpx') !== -1) {// "10rpx"
            num = num.replace('rpx', '');
          } else if (num.indexOf('upx') !== -1) {// "10upx"
            num = num.replace('upx', '');
          } else {// "10px"
            return Number(num.replace('px', ''));
          }
        } else if (num.indexOf('%') !== -1) {
          // 传百分比,则相对于windowHeight,传"10%"则等于windowHeight的10%
          var rate = Number(num.replace("%", "")) / 100;
          return this.windowHeight * rate;
        }
      }
      return num ? uni.upx2px(Number(num)) : 0;
    },
    //注册列表滚动事件,用于下拉刷新和上拉加载
    scroll: function scroll(e) {var _this = this;
      this.mescroll.scroll(e.detail, function () {
        _this.$emit('scroll', _this.mescroll); // 此时可直接通过 this.mescroll.scrollTop获取滚动条位置; this.mescroll.isScrollUp获取是否向上滑动
      });
    },
    // 点击空布局的按钮回调
    emptyClick: function emptyClick() {
      this.$emit('emptyclick', this.mescroll);
    },
    // 点击回到顶部的按钮回调
    toTopClick: function toTopClick() {
      this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration); // 执行回到顶部
      this.$emit('topclick', this.mescroll); // 派发点击回到顶部按钮的回调
    },
    // 更新滚动区域的高度 (使内容不满屏和到底,都可继续翻页)
    setClientHeight: function setClientHeight() {var _this2 = this;
      if (this.mescroll.getClientHeight(true) === 0 && !this.isExec) {
        this.isExec = true; // 避免多次获取
        this.$nextTick(function () {// 确保dom已渲染
          var query = uni.createSelectorQuery();

          query = query.in(_this2); // 支付宝小程序不支持in(this),而字节跳动小程序必须写in(this), 否则都取不到值

          var view = query.select('#' + _this2.viewId);
          view.boundingClientRect(function (data) {
            _this2.isExec = false;
            if (data) {
              _this2.mescroll.setClientHeight(data.height);
            } else if (_this2.clientNum != 3) {// 极少部分情况,可能dom还未渲染完毕,递归获取,最多重试3次
              _this2.clientNum = _this2.clientNum == null ? 1 : _this2.clientNum + 1;
              setTimeout(function () {
                _this2.setClientHeight();
              }, _this2.clientNum * 100);
            }
          }).exec();
        });
      }
    } },

  // 使用created初始化mescroll对象; 如果用mounted部分css样式编译到H5会失效
  created: function created() {
    var vm = this;

    var diyOption = {
      // 下拉刷新的配置
      down: {
        inOffset: function inOffset() {
          vm.downLoadType = 1; // 下拉的距离进入offset范围内那一刻的回调 (自定义mescroll组件时,此行不可删)
        },
        outOffset: function outOffset() {
          vm.downLoadType = 2; // 下拉的距离大于offset那一刻的回调 (自定义mescroll组件时,此行不可删)
        },
        onMoving: function onMoving(mescroll, rate, downHight) {
          // 下拉过程中的回调,滑动过程一直在执行;
          vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)
          vm.downRate = rate; //下拉比率 (inOffset: rate<1; outOffset: rate>=1)
        },
        showLoading: function showLoading(mescroll, downHight) {
          vm.downLoadType = 3; // 显示下拉刷新进度的回调 (自定义mescroll组件时,此行不可删)
          vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)
        },
        endDownScroll: function endDownScroll() {
          vm.downLoadType = 4; // 结束下拉 (自定义mescroll组件时,此行不可删)
          vm.downHight = 0; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)
          vm.downResetTimer && clearTimeout(vm.downResetTimer);
          vm.downResetTimer = setTimeout(function () {// 过渡动画执行完毕后,需重置为0的状态,以便置空this.transition,避免iOS小程序列表渲染不完整
            if (vm.downLoadType === 4) vm.downLoadType = 0;
          }, 300);
        },
        // 派发下拉刷新的回调
        callback: function callback(mescroll) {
          vm.$emit('down', mescroll);
        } },

      // 上拉加载的配置
      up: {
        // 显示加载中的回调
        showLoading: function showLoading() {
          vm.upLoadType = 1;
        },
        // 显示无更多数据的回调
        showNoMore: function showNoMore() {
          vm.upLoadType = 2;
        },
        // 隐藏上拉加载的回调
        hideUpScroll: function hideUpScroll(mescroll) {
          vm.upLoadType = mescroll.optUp.hasNext ? 0 : 3;
        },
        // 空布局
        empty: {
          onShow: function onShow(isShow) {// 显示隐藏的回调
            vm.isShowEmpty = isShow;
          } },

        // 回到顶部
        toTop: {
          onShow: function onShow(isShow) {// 显示隐藏的回调
            vm.isShowToTop = isShow;
          } },

        // 派发上拉加载的回调
        callback: function callback(mescroll) {
          vm.$emit('up', mescroll);
          // 更新容器的高度 (多mescroll的情况)
          vm.setClientHeight();
        } } };



    _mescrollUni.default.extend(diyOption, _mescrollUniOption.default); // 混入全局的配置
    var myOption = JSON.parse(JSON.stringify({ 'down': vm.down, 'up': vm.up })); // 深拷贝,避免对props的影响
    _mescrollUni.default.extend(myOption, diyOption); // 混入具体界面的配置

    // 初始化MeScroll对象
    vm.mescroll = new _mescrollUni.default(myOption);
    vm.mescroll.viewId = vm.viewId; // 附带id
    // init回调mescroll对象
    vm.$emit('init', vm.mescroll);

    // 设置高度
    var sys = uni.getSystemInfoSync();
    if (sys.windowTop) vm.windowTop = sys.windowTop;
    if (sys.windowBottom) vm.windowBottom = sys.windowBottom;
    if (sys.windowHeight) vm.windowHeight = sys.windowHeight;
    if (sys.statusBarHeight) vm.statusBarHeight = sys.statusBarHeight;
    // 使down的bottomOffset生效
    vm.mescroll.setBodyHeight(sys.windowHeight);

    // 因为使用的是scrollview,这里需自定义scrollTo
    vm.mescroll.resetScrollTo(function (y, t) {
      vm.scrollAnim = t !== 0; // t为0,则不使用动画过渡
      if (typeof y === 'string') {// 第一个参数如果为字符串,则使用scroll-into-view


















        if (vm.scrollToViewId != y) {
          vm.scrollToViewId = y;
        } else {
          vm.scrollToViewId = ''; // scrollToViewId必须变化才会生效,所以此处先置空再赋值
          vm.$nextTick(function () {
            vm.scrollToViewId = y;
          });
        }

        return;
      }
      var curY = vm.mescroll.getScrollTop();
      if (t === 0 || t === 300) {// 当t使用默认配置的300时,则使用系统自带的动画过渡
        vm.scrollTop = curY;
        vm.$nextTick(function () {
          vm.scrollTop = y;
        });
      } else {
        vm.mescroll.getStep(curY, y, function (step) {// 此写法可支持配置t
          vm.scrollTop = step;
        }, t);
      }
    });

    // 具体的界面如果不配置up.toTop.safearea,则取本vue的safearea值
    if (vm.up && vm.up.toTop && vm.up.toTop.safearea != null) {} else {
      vm.mescroll.optUp.toTop.safearea = vm.safearea;
    }
  },
  mounted: function mounted() {
    // 设置容器的高度
    this.setClientHeight();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 395:
/*!************************************************************************************************************!*\
  !*** E:/haoshuzhi_xcx/haoshuzhi/components/mescroll-uni/mescroll-uni.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mescroll-uni.vue?vue&type=style&index=0&lang=css& */ 396);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mescroll_uni_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 396:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/haoshuzhi_xcx/haoshuzhi/components/mescroll-uni/mescroll-uni.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRTovaGFvc2h1emhpX3hjeC9oYW9zaHV6aGkvY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtdW5pLnZ1ZT9kYzBlIiwid2VicGFjazovLy9FOi9oYW9zaHV6aGlfeGN4L2hhb3NodXpoaS9jb21wb25lbnRzL21lc2Nyb2xsLXVuaS9tZXNjcm9sbC11bmkudnVlPzMwYjgiLCJ3ZWJwYWNrOi8vL0U6L2hhb3NodXpoaV94Y3gvaGFvc2h1emhpL2NvbXBvbmVudHMvbWVzY3JvbGwtdW5pL21lc2Nyb2xsLXVuaS52dWU/ZDc0NiIsIndlYnBhY2s6Ly8vRTovaGFvc2h1emhpX3hjeC9oYW9zaHV6aGkvY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtdW5pLnZ1ZT85NzQxIiwidW5pLWFwcDovLy9jb21wb25lbnRzL21lc2Nyb2xsLXVuaS9tZXNjcm9sbC11bmkudnVlIiwid2VicGFjazovLy9FOi9oYW9zaHV6aGlfeGN4L2hhb3NodXpoaS9jb21wb25lbnRzL21lc2Nyb2xsLXVuaS9tZXNjcm9sbC11bmkudnVlP2VmNmQiLCJ3ZWJwYWNrOi8vL0U6L2hhb3NodXpoaV94Y3gvaGFvc2h1emhpL2NvbXBvbmVudHMvbWVzY3JvbGwtdW5pL21lc2Nyb2xsLXVuaS52dWU/ZmEyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlIO0FBQ3pIO0FBQ2dFO0FBQ0w7QUFDYTs7O0FBR3hFO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7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WkE7QUFhQTtBQUNBO0FBQ0EsZ0JBREEsa0JBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQSxXQUhBLEVBZEE7O0FBbUJBO0FBQ0E7QUFDQSxnQkFEQSxrQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBLFdBSEEsRUFwQkE7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQTlCQSxFQWhDQTs7OztBQWtFQSx1RUFyRUEsQ0FxRUE7QUFDQSxnRkF0RUEsQ0FzRUE7QUFDQSxxREF2RUEsQ0F1RUE7O0FBRUE7QUFDQTtBQUNBLG1DQTNFQSxDQTJFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBREEsQ0FDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQSxpQ0FEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQSxPQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLENBRkE7QUFHQTtBQUNBLEtBM0NBOztBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBdlRBO0FBd1RBLFNBeFRBLHFCQXdUQTtBQUNBO0FBQ0E7QUFDQSxHQTNUQSxFOzs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQXczQixDQUFnQix5M0JBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0E1NEI7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJjb21wb25lbnRzL21lc2Nyb2xsLXVuaS9tZXNjcm9sbC11bmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21lc2Nyb2xsLXVuaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGYxOGVhZjgmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZXNjcm9sbC11bmkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tZXNjcm9sbC11bmkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL21lc2Nyb2xsLXVuaS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL21lc2Nyb2xsLXVuaS9tZXNjcm9sbC11bmkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE2LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHBhZ2UtbWV0YS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9tZXNjcm9sbC11bmkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThmMThlYWY4JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICBpZiAoIV92bS5faXNNb3VudGVkKSB7XG4gICAgX3ZtLmUwID0gX3ZtLnd4c0Jpei50b3VjaHN0YXJ0RXZlbnRcbiAgICBfdm0uZTEgPSBfdm0ud3hzQml6LnRvdWNobW92ZUV2ZW50XG4gICAgX3ZtLmUyID0gX3ZtLnd4c0Jpei50b3VjaGVuZEV2ZW50XG4gICAgX3ZtLmUzID0gX3ZtLnd4c0Jpei50b3VjaGVuZEV2ZW50XG4gIH1cbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL21lc2Nyb2xsLXVuaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vbWVzY3JvbGwtdW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIm1lc2Nyb2xsLXVuaS13YXJwXCI+XHJcblx0XHQ8c2Nyb2xsLXZpZXcgOmlkPVwidmlld0lkXCIgY2xhc3M9XCJtZXNjcm9sbC11bmlcIiA6Y2xhc3M9XCJ7J21lc2Nyb2xsLXVuaS1maXhlZCc6aXNGaXhlZH1cIiA6c3R5bGU9XCJ7J2hlaWdodCc6c2Nyb2xsSGVpZ2h0LCdwYWRkaW5nLXRvcCc6cGFkVG9wLCdwYWRkaW5nLWJvdHRvbSc6cGFkQm90dG9tLCd0b3AnOmZpeGVkVG9wLCdib3R0b20nOmZpeGVkQm90dG9tfVwiIDpzY3JvbGwtdG9wPVwic2Nyb2xsVG9wXCIgOnNjcm9sbC1pbnRvLXZpZXc9XCJzY3JvbGxUb1ZpZXdJZFwiIDpzY3JvbGwtd2l0aC1hbmltYXRpb249XCJzY3JvbGxBbmltXCIgQHNjcm9sbD1cInNjcm9sbFwiIDpzY3JvbGwteT0nc2Nyb2xsYWJsZScgOmVuYWJsZS1iYWNrLXRvLXRvcD1cInRydWVcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNjcm9sbC11bmktY29udGVudCBtZXNjcm9sbC1yZW5kZXItdG91Y2hcIlxyXG5cdFx0XHRAdG91Y2hzdGFydD1cInd4c0Jpei50b3VjaHN0YXJ0RXZlbnRcIiBcclxuXHRcdFx0QHRvdWNobW92ZT1cInd4c0Jpei50b3VjaG1vdmVFdmVudFwiIFxyXG5cdFx0XHRAdG91Y2hlbmQ9XCJ3eHNCaXoudG91Y2hlbmRFdmVudFwiIFxyXG5cdFx0XHRAdG91Y2hjYW5jZWw9XCJ3eHNCaXoudG91Y2hlbmRFdmVudFwiXHJcblx0XHRcdDpjaGFuZ2U6cHJvcD1cInd4c0Jpei5wcm9wT2JzZXJ2ZXJcIlxyXG5cdFx0XHQ6cHJvcD1cInd4c1Byb3BcIj5cclxuXHRcdFx0XHQ8IS0tIOeKtuaAgeagjyAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwidG9wYmFyJiZzdGF0dXNCYXJIZWlnaHRcIiBjbGFzcz1cIm1lc2Nyb2xsLXRvcGJhclwiIDpzdHlsZT1cIntoZWlnaHQ6IHN0YXR1c0JhckhlaWdodCsncHgnLCBiYWNrZ3JvdW5kOiB0b3BiYXJ9XCI+PC92aWV3PlxyXG5cdFx0XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNjcm9sbC13eHMtY29udGVudFwiIDpzdHlsZT1cInsndHJhbnNmb3JtJzogdHJhbnNsYXRlWSwgJ3RyYW5zaXRpb24nOiB0cmFuc2l0aW9ufVwiIDpjaGFuZ2U6cHJvcD1cInd4c0Jpei5jYWxsT2JzZXJ2ZXJcIiA6cHJvcD1cImNhbGxQcm9wXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOS4i+aLieWKoOi9veWMuuWfnyAo5pSv5LuY5a6d5bCP56iL5bqP5a2Q57uE5Lu25Lyg5Y+C57uZ5a2Q5a2Q57uE5Lu25LuN5oql5Y2V6aG55pWw5o2u5rWB55qE5byC5bi4LOaaguaXtuS4jemAmui/h21lc2Nyb2xsLWRvd27nu4Tku7blrp7njrApLS0+XHJcblx0XHRcdFx0XHQ8IS0tIDxtZXNjcm9sbC1kb3duIDpvcHRpb249XCJtZXNjcm9sbC5vcHREb3duXCIgOnR5cGU9XCJkb3duTG9hZFR5cGVcIiA6cmF0ZT1cImRvd25SYXRlXCI+PC9tZXNjcm9sbC1kb3duPiAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJtZXNjcm9sbC5vcHREb3duLnVzZVwiIGNsYXNzPVwibWVzY3JvbGwtZG93bndhcnBcIiA6c3R5bGU9XCJ7J2JhY2tncm91bmQnOm1lc2Nyb2xsLm9wdERvd24uYmdDb2xvciwnY29sb3InOm1lc2Nyb2xsLm9wdERvd24udGV4dENvbG9yfVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd253YXJwLWNvbnRlbnRcIiA6Y2hhbmdlOnByb3A9XCJyZW5kZXJCaXoucHJvcE9ic2VydmVyXCIgOnByb3A9XCJ3eHNQcm9wXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dud2FycC1wcm9ncmVzcyBtZXNjcm9sbC13eHMtcHJvZ3Jlc3NcIiA6Y2xhc3M9XCJ7J21lc2Nyb2xsLXJvdGF0ZSc6IGlzRG93bkxvYWRpbmd9XCIgOnN0eWxlPVwieydib3JkZXItY29sb3InOm1lc2Nyb2xsLm9wdERvd24udGV4dENvbG9yLCAndHJhbnNmb3JtJzogZG93blJvdGF0ZX1cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dud2FycC10aXBcIj57e2Rvd25UZXh0fX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHQ8IS0tIOWIl+ihqOWGheWuuSAtLT5cclxuXHRcdFx0XHRcdDxzbG90Pjwvc2xvdD5cclxuXHJcblx0XHRcdFx0XHQ8IS0tIOepuuW4g+WxgCAtLT5cclxuXHRcdFx0XHRcdDxtZXNjcm9sbC1lbXB0eSB2LWlmPVwiaXNTaG93RW1wdHlcIiA6b3B0aW9uPVwibWVzY3JvbGwub3B0VXAuZW1wdHlcIiBAZW1wdHljbGljaz1cImVtcHR5Q2xpY2tcIj48L21lc2Nyb2xsLWVtcHR5PlxyXG5cclxuXHRcdFx0XHRcdDwhLS0g5LiK5ouJ5Yqg6L295Yy65Z+fICjkuIvmi4nliLfmlrDml7bkuI3mmL7npLosIOaUr+S7mOWuneWwj+eoi+W6j+WtkOe7hOS7tuS8oOWPgue7meWtkOWtkOe7hOS7tuS7jeaKpeWNlemhueaVsOaNrua1geeahOW8guW4uCzmmoLml7bkuI3pgJrov4dtZXNjcm9sbC11cOe7hOS7tuWunueOsCktLT5cclxuXHRcdFx0XHRcdDwhLS0gPG1lc2Nyb2xsLXVwIHYtaWY9XCJtZXNjcm9sbC5vcHRVcC51c2UgJiYgIWlzRG93bkxvYWRpbmcgJiYgdXBMb2FkVHlwZSE9PTNcIiA6b3B0aW9uPVwibWVzY3JvbGwub3B0VXBcIiA6dHlwZT1cInVwTG9hZFR5cGVcIj48L21lc2Nyb2xsLXVwPiAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJtZXNjcm9sbC5vcHRVcC51c2UgJiYgIWlzRG93bkxvYWRpbmcgJiYgdXBMb2FkVHlwZSE9PTNcIiBjbGFzcz1cIm1lc2Nyb2xsLXVwd2FycFwiIDpzdHlsZT1cInsnYmFja2dyb3VuZCc6bWVzY3JvbGwub3B0VXAuYmdDb2xvciwnY29sb3InOm1lc2Nyb2xsLm9wdFVwLnRleHRDb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDliqDovb3kuK0gKOatpOWkhOS4jeiDveeUqHYtaWYs5ZCm5YiZYW5kcm9pZOWwj+eoi+W6j+W/q+mAn+S4iuaLieWPr+iDveS8muS4jeaWreinpuWPkeS4iuaLieWbnuiwgykgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtc2hvdz1cInVwTG9hZFR5cGU9PT0xXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1cHdhcnAtcHJvZ3Jlc3MgbWVzY3JvbGwtcm90YXRlXCIgOnN0eWxlPVwieydib3JkZXItY29sb3InOm1lc2Nyb2xsLm9wdFVwLnRleHRDb2xvcn1cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1cHdhcnAtdGlwXCI+e3sgbWVzY3JvbGwub3B0VXAudGV4dExvYWRpbmcgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDml6DmlbDmja4gLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJ1cExvYWRUeXBlPT09MlwiIGNsYXNzPVwidXB3YXJwLW5vZGF0YVwiPnt7IG1lc2Nyb2xsLm9wdFVwLnRleHROb01vcmUgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8IS0tIOW6lemDqOaYr+WQpuWBj+enu1RhYkJhcueahOmrmOW6pijpu5jorqTku4XlnKhINeerr+eahHRhYumhteeUn+aViCkgLS0+XHJcblx0XHRcdFx0PCEtLSAjaWZkZWYgSDUgLS0+XHJcblx0XHRcdFx0PCEtLSA8dmlldyB2LWlmPVwiYm90dG9tYmFyICYmIHdpbmRvd0JvdHRvbT4wXCIgY2xhc3M9XCJtZXNjcm9sbC1ib3R0b21iYXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OiB3aW5kb3dCb3R0b20rJ3B4J31cIj48L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDwhLS0g6YCC6YWNaVBob25lWCAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwic2FmZWFyZWFcIiBjbGFzcz1cIm1lc2Nyb2xsLXNhZmVhcmVhXCI+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cclxuXHRcdDwhLS0g5Zue5Yiw6aG26YOo5oyJ6ZKuIChmaXhlZOWFg+e0oCzpnIDlhpnlnKhzY3JvbGwtdmlld+WklumdoizpmLLmraLmu5rliqjnmoTml7blgJnmipbliqgpLS0+XHJcblx0XHQ8bWVzY3JvbGwtdG9wIHYtbW9kZWw9XCJpc1Nob3dUb1RvcFwiIDpvcHRpb249XCJtZXNjcm9sbC5vcHRVcC50b1RvcFwiIEBjbGljaz1cInRvVG9wQ2xpY2tcIj48L21lc2Nyb2xsLXRvcD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48IS0tIOW+ruS/oeWwj+eoi+W6jywgYXBwLCBoNeS9v+eUqHd4cyAtLT5cclxuPCEtLSAjaWZkZWYgTVAtV0VJWElOIHx8IEFQUC1QTFVTIHx8IEg1LS0+XHJcbjxzY3JpcHQgc3JjPVwiLi93eHMvd3hzLnd4c1wiIG1vZHVsZT1cInd4c0JpelwiIGxhbmc9XCJ3eHNcIj48L3NjcmlwdD5cclxuPCEtLSAjZW5kaWYgLS0+XHJcblxyXG48IS0tIGFwcCwgaDXkvb/nlKhyZW5kZXJqcyAtLT5cclxuPCEtLSAjaWZkZWYgQVBQLVBMVVMgfHwgSDUgLS0+XHJcbjxzY3JpcHQgbW9kdWxlPVwicmVuZGVyQml6XCIgbGFuZz1cInJlbmRlcmpzXCI+XHJcblx0aW1wb3J0IHJlbmRlckJpeiBmcm9tICcuL3d4cy9yZW5kZXJqcy5qcyc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bWl4aW5zOltyZW5kZXJCaXpdXHJcblx0fVxyXG48L3NjcmlwdD5cclxuPCEtLSAjZW5kaWYgLS0+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8vIOW8leWFpW1lc2Nyb2xsLXVuaS5qcyzlpITnkIbmoLjlv4PpgLvovpFcclxuXHRpbXBvcnQgTWVTY3JvbGwgZnJvbSAnLi9tZXNjcm9sbC11bmkuanMnO1xyXG5cdC8vIOW8leWFpeWFqOWxgOmFjee9rlxyXG5cdGltcG9ydCBHbG9iYWxPcHRpb24gZnJvbSAnLi9tZXNjcm9sbC11bmktb3B0aW9uLmpzJztcclxuXHQvLyDlvJXlhaXnqbrluIPlsYDnu4Tku7ZcclxuXHRpbXBvcnQgTWVzY3JvbGxFbXB0eSBmcm9tICcuL2NvbXBvbmVudHMvbWVzY3JvbGwtZW1wdHkudnVlJztcclxuXHQvLyDlvJXlhaXlm57liLDpobbpg6jnu4Tku7ZcclxuXHRpbXBvcnQgTWVzY3JvbGxUb3AgZnJvbSAnLi9jb21wb25lbnRzL21lc2Nyb2xsLXRvcC52dWUnO1xyXG5cdC8vIOW8leWFpeWFvOWuuXd4cyjlkKtyZW5kZXJqcynlhpnms5XnmoRtaXhpbnNcclxuXHRpbXBvcnQgV3hzTWl4aW4gZnJvbSAnLi93eHMvbWl4aW5zLmpzJztcclxuXHRcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRtaXhpbnM6IFtXeHNNaXhpbl0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdE1lc2Nyb2xsRW1wdHksXHJcblx0XHRcdE1lc2Nyb2xsVG9wXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZXNjcm9sbDoge29wdERvd246e30sb3B0VXA6e319LCAvLyBtZXNjcm9sbOWunuS+i1xyXG5cdFx0XHRcdHZpZXdJZDogJ2lkXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwxNiksIC8vIOmaj+acuueUn+aIkG1lc2Nyb2xs55qEaWQo5LiN6IO95pWw5a2X5byA5aS0LOWQpuWImeaJvuS4jeWIsOWFg+e0oClcclxuXHRcdFx0XHRkb3duSGlnaHQ6IDAsIC8v5LiL5ouJ5Yi35pawOiDlrrnlmajpq5jluqZcclxuXHRcdFx0XHRkb3duUmF0ZTogMCwgLy8g5LiL5ouJ5q+U546HKGluT2Zmc2V0OiByYXRlPDE7IG91dE9mZnNldDogcmF0ZT49MSlcclxuXHRcdFx0XHRkb3duTG9hZFR5cGU6IDAsIC8vIOS4i+aLieWIt+aWsOeKtuaAgTogMChsb2FkaW5n5YmNKSwgMShpbk9mZnNldCksIDIob3V0T2Zmc2V0KSwgMyhzaG93TG9hZGluZyksIDQoZW5kRG93blNjcm9sbClcclxuXHRcdFx0XHR1cExvYWRUeXBlOiAwLCAvLyDkuIrmi4nliqDovb3nirbmgIE6IDAobG9hZGluZ+WJjSksIDFsb2FkaW5n5LitLCAy5rKh5pyJ5pu05aSa5LqGLOaYvuekukVOROaWh+acrOaPkOekuiwgMyjmsqHmnInmm7TlpJrkuoYs5LiN5pi+56S6RU5E5paH5pys5o+Q56S6KVxyXG5cdFx0XHRcdGlzU2hvd0VtcHR5OiBmYWxzZSwgLy8g5piv5ZCm5pi+56S656m65biD5bGAXHJcblx0XHRcdFx0aXNTaG93VG9Ub3A6IGZhbHNlLCAvLyDmmK/lkKbmmL7npLrlm57liLDpobbpg6jmjInpkq5cclxuXHRcdFx0XHRzY3JvbGxUb3A6IDAsIC8vIOa7muWKqOadoeeahOS9jee9rlxyXG5cdFx0XHRcdHNjcm9sbEFuaW06IGZhbHNlLCAvLyDmmK/lkKblvIDlkK/mu5rliqjliqjnlLtcclxuXHRcdFx0XHR3aW5kb3dUb3A6IDAsIC8vIOWPr+S9v+eUqOeql+WPo+eahOmhtumDqOS9jee9rlxyXG5cdFx0XHRcdHdpbmRvd0JvdHRvbTogMCwgLy8g5Y+v5L2/55So56qX5Y+j55qE5bqV6YOo5L2N572uXHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAwLCAvLyDlj6/kvb/nlKjnqpflj6PnmoTpq5jluqZcclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAsIC8vIOeKtuaAgeagj+mrmOW6plxyXG5cdFx0XHRcdHNjcm9sbFRvVmlld0lkOiAnJyAvLyDmu5rliqjliLDmjIflrpp2aWV355qEaWRcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGRvd246IE9iamVjdCwgLy8g5LiL5ouJ5Yi35paw55qE5Y+C5pWw6YWN572uXHJcblx0XHRcdHVwOiBPYmplY3QsIC8vIOS4iuaLieWKoOi9veeahOWPguaVsOmFjee9rlxyXG5cdFx0XHR0b3A6IFtTdHJpbmcsIE51bWJlcl0sIC8vIOS4i+aLieW4g+WxgOW+gOS4i+eahOWBj+enu+mHjyAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweCwg55m+5YiG5q+U5YiZ55u45a+55LqOd2luZG93SGVpZ2h0KVxyXG5cdFx0XHR0b3BiYXI6IFtCb29sZWFuLCBTdHJpbmddLCAvLyB0b3DnmoTlgY/np7vph4/mmK/lkKbliqDkuIrnirbmgIHmoI/pq5jluqYsIOm7mOiupGZhbHNlICjkvb/nlKjlnLrmma865Y+W5raI5Y6f55Sf5a+86Iiq5qCP5pe2LOmFjee9ruatpOmhueWPr+eVmeWHuueKtuaAgeagj+eahOWNoOS9jSwg5pSv5oyB5Lyg5YWl5a2X56ym5Liy6IOM5pmvLOWmguiJsuWAvCzog4zmma/lm74s5riQ5Y+YKVxyXG5cdFx0XHRib3R0b206IFtTdHJpbmcsIE51bWJlcl0sIC8vIOS4iuaLieW4g+WxgOW+gOS4iueahOWBj+enu+mHjyAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweCwg55m+5YiG5q+U5YiZ55u45a+55LqOd2luZG93SGVpZ2h0KVxyXG5cdFx0XHRzYWZlYXJlYTogQm9vbGVhbiwgLy8gYm90dG9t55qE5YGP56e76YeP5piv5ZCm5Yqg5LiK5bqV6YOo5a6J5YWo5Yy655qE6Led56a7LCDpu5jorqRmYWxzZSAo6ZyA6KaB6YCC6YWNaVBob25lWOaXtuS9v+eUqClcclxuXHRcdFx0Zml4ZWQ6IHsgLy8g5piv5ZCm6YCa6L+HZml4ZWTlm7rlrpptZXNjcm9sbOeahOmrmOW6piwg6buY6K6kdHJ1ZVxyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0sIC8vIOaMh+Wumm1lc2Nyb2xs55qE6auY5bqmLCDmraTpobnmnInlgLws5YiZ5LiN5L2/55SoZml4ZWQuICjmlK/mjIEyMCwgXCIyMHJweFwiLCBcIjIwcHhcIiwgXCIyMCVcIuagvOW8j+eahOWAvCwg5YW25Lit57qv5pWw5a2X5YiZ6buY6K6k5Y2V5L2NcnB4LCDnmb7liIbmr5TliJnnm7jlr7nkuo53aW5kb3dIZWlnaHQpXHJcblx0XHRcdGJvdHRvbWJhcjp7IC8vIOW6lemDqOaYr+WQpuWBj+enu1RhYkJhcueahOmrmOW6pijpu5jorqTku4XlnKhINeerr+eahHRhYumhteeUn+aViClcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC8vIOaYr+WQpuS9v+eUqGZpeGVk5a6a5L2NICjlvZNoZWlnaHTmnInlgLws5YiZ5LiN5L2/55SoKVxyXG5cdFx0XHRpc0ZpeGVkKCl7XHJcblx0XHRcdFx0cmV0dXJuICF0aGlzLmhlaWdodCAmJiB0aGlzLmZpeGVkXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIG1lc2Nyb2xs55qE6auY5bqmXHJcblx0XHRcdHNjcm9sbEhlaWdodCgpe1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzRml4ZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBcImF1dG9cIlxyXG5cdFx0XHRcdH0gZWxzZSBpZih0aGlzLmhlaWdodCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy50b1B4KHRoaXMuaGVpZ2h0KSArICdweCdcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHJldHVybiBcIjEwMCVcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5LiL5ouJ5biD5bGA5b6A5LiL5YGP56e755qE6Led56a7IChweClcclxuXHRcdFx0bnVtVG9wKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRvUHgodGhpcy50b3ApXHJcblx0XHRcdH0sXHJcblx0XHRcdGZpeGVkVG9wKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlzRml4ZWQgPyAodGhpcy5udW1Ub3AgKyB0aGlzLndpbmRvd1RvcCkgKyAncHgnIDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWRUb3AoKSB7XHJcblx0XHRcdFx0cmV0dXJuICF0aGlzLmlzRml4ZWQgPyB0aGlzLm51bVRvcCArICdweCcgOiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS4iuaLieW4g+WxgOW+gOS4iuWBj+enuyAocHgpXHJcblx0XHRcdG51bUJvdHRvbSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1B4KHRoaXMuYm90dG9tKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmaXhlZEJvdHRvbSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pc0ZpeGVkID8gKHRoaXMubnVtQm90dG9tICsgdGhpcy53aW5kb3dCb3R0b20pICsgJ3B4JyA6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFkQm90dG9tKCkge1xyXG5cdFx0XHRcdHJldHVybiAhdGhpcy5pc0ZpeGVkID8gdGhpcy5udW1Cb3R0b20gKyAncHgnIDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbkuLrph43nva7kuIvmi4nnmoTnirbmgIFcclxuXHRcdFx0aXNEb3duUmVzZXQoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kb3duTG9hZFR5cGU9PT0zIHx8IHRoaXMuZG93bkxvYWRUeXBlPT09NFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDov4fmuKFcclxuXHRcdFx0dHJhbnNpdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pc0Rvd25SZXNldCA/ICd0cmFuc2Zvcm0gMzAwbXMnIDogJyc7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRyYW5zbGF0ZVkoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZG93bkhpZ2h0ID4gMCA/ICd0cmFuc2xhdGVZKCcgKyB0aGlzLmRvd25IaWdodCArICdweCknIDogJyc7IC8vIHRyYW5zZm9ybeS8muS9v2ZpeGVk5aSx5pWILOmcgOazqOaEj+aKimZpeGVk5YWD57Sg5YaZ5ZyobWVzY3JvbGzkuYvlpJZcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YiX6KGo5piv5ZCm5Y+v5ruR5YqoXHJcblx0XHRcdHNjcm9sbGFibGUoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kb3duTG9hZFR5cGU9PT0wIHx8IHRoaXMuaXNEb3duUmVzZXRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5piv5ZCm5Zyo5Yqg6L295LitXHJcblx0XHRcdGlzRG93bkxvYWRpbmcoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kb3duTG9hZFR5cGUgPT09IDNcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5peL6L2s55qE6KeS5bqmXHJcblx0XHRcdGRvd25Sb3RhdGUoKXtcclxuXHRcdFx0XHRyZXR1cm4gJ3JvdGF0ZSgnICsgMzYwICogdGhpcy5kb3duUmF0ZSArICdkZWcpJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmlofmnKzmj5DnpLpcclxuXHRcdFx0ZG93blRleHQoKXtcclxuXHRcdFx0XHRpZighdGhpcy5tZXNjcm9sbCkgcmV0dXJuIFwiXCI7IC8vIOmBv+WFjeWktOadoeWwj+eoi+W6j+WIneWni+WMluaXtuaKpemUmVxyXG5cdFx0XHRcdHN3aXRjaCAodGhpcy5kb3duTG9hZFR5cGUpe1xyXG5cdFx0XHRcdFx0Y2FzZSAxOiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRJbk9mZnNldDtcclxuXHRcdFx0XHRcdGNhc2UgMjogcmV0dXJuIHRoaXMubWVzY3JvbGwub3B0RG93bi50ZXh0T3V0T2Zmc2V0O1xyXG5cdFx0XHRcdFx0Y2FzZSAzOiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRMb2FkaW5nO1xyXG5cdFx0XHRcdFx0Y2FzZSA0OiByZXR1cm4gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRMb2FkaW5nO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDogcmV0dXJuIHRoaXMubWVzY3JvbGwub3B0RG93bi50ZXh0SW5PZmZzZXQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvL251bWJlcixycHgsdXB4LHB4LCUgLS0+IHB455qE5pWw5YC8XHJcblx0XHRcdHRvUHgobnVtKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgbnVtID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0XHRcdGlmIChudW0uaW5kZXhPZigncHgnKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0aWYobnVtLmluZGV4T2YoJ3JweCcpICE9PSAtMSkgeyAvLyBcIjEwcnB4XCJcclxuXHRcdFx0XHRcdFx0XHRudW0gPSBudW0ucmVwbGFjZSgncnB4JywgJycpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYobnVtLmluZGV4T2YoJ3VweCcpICE9PSAtMSkgeyAvLyBcIjEwdXB4XCJcclxuXHRcdFx0XHRcdFx0XHRudW0gPSBudW0ucmVwbGFjZSgndXB4JywgJycpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgeyAvLyBcIjEwcHhcIlxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBOdW1iZXIobnVtLnJlcGxhY2UoJ3B4JywgJycpKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9ZWxzZSBpZiAobnVtLmluZGV4T2YoJyUnKSAhPT0gLTEpe1xyXG5cdFx0XHRcdFx0XHQvLyDkvKDnmb7liIbmr5Qs5YiZ55u45a+55LqOd2luZG93SGVpZ2h0LOS8oFwiMTAlXCLliJnnrYnkuo53aW5kb3dIZWlnaHTnmoQxMCVcclxuXHRcdFx0XHRcdFx0bGV0IHJhdGUgPSBOdW1iZXIobnVtLnJlcGxhY2UoXCIlXCIsXCJcIikpIC8gMTAwXHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLndpbmRvd0hlaWdodCAqIHJhdGVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG51bSA/IHVuaS51cHgycHgoTnVtYmVyKG51bSkpIDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+azqOWGjOWIl+ihqOa7muWKqOS6i+S7tiznlKjkuo7kuIvmi4nliLfmlrDlkozkuIrmi4nliqDovb1cclxuXHRcdFx0c2Nyb2xsKGUpIHtcclxuXHRcdFx0XHR0aGlzLm1lc2Nyb2xsLnNjcm9sbChlLmRldGFpbCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnc2Nyb2xsJywgdGhpcy5tZXNjcm9sbCkgLy8g5q2k5pe25Y+v55u05o6l6YCa6L+HIHRoaXMubWVzY3JvbGwuc2Nyb2xsVG9w6I635Y+W5rua5Yqo5p2h5L2N572uOyB0aGlzLm1lc2Nyb2xsLmlzU2Nyb2xsVXDojrflj5bmmK/lkKblkJHkuIrmu5HliqhcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vnqbrluIPlsYDnmoTmjInpkq7lm57osINcclxuXHRcdFx0ZW1wdHlDbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdlbXB0eWNsaWNrJywgdGhpcy5tZXNjcm9sbClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75Zue5Yiw6aG26YOo55qE5oyJ6ZKu5Zue6LCDXHJcblx0XHRcdHRvVG9wQ2xpY2soKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC5zY3JvbGxUbygwLCB0aGlzLm1lc2Nyb2xsLm9wdFVwLnRvVG9wLmR1cmF0aW9uKTsgLy8g5omn6KGM5Zue5Yiw6aG26YOoXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndG9wY2xpY2snLCB0aGlzLm1lc2Nyb2xsKTsgLy8g5rS+5Y+R54K55Ye75Zue5Yiw6aG26YOo5oyJ6ZKu55qE5Zue6LCDXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOabtOaWsOa7muWKqOWMuuWfn+eahOmrmOW6piAo5L2/5YaF5a655LiN5ruh5bGP5ZKM5Yiw5bqVLOmDveWPr+e7p+e7ree/u+mhtSlcclxuXHRcdFx0c2V0Q2xpZW50SGVpZ2h0KCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLm1lc2Nyb2xsLmdldENsaWVudEhlaWdodCh0cnVlKSA9PT0gMCAmJiAhdGhpcy5pc0V4ZWMpIHtcclxuXHRcdFx0XHRcdHRoaXMuaXNFeGVjID0gdHJ1ZTsgLy8g6YG/5YWN5aSa5qyh6I635Y+WXHJcblx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7IC8vIOehruS/nWRvbeW3sua4suafk1xyXG5cdFx0XHRcdFx0XHRsZXQgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpO1xyXG5cdFx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QLUFMSVBBWVxyXG5cdFx0XHRcdFx0XHRxdWVyeSA9IHF1ZXJ5LmluKHRoaXMpIC8vIOaUr+S7mOWuneWwj+eoi+W6j+S4jeaUr+aMgWluKHRoaXMpLOiAjOWtl+iKgui3s+WKqOWwj+eoi+W6j+W/hemhu+WGmWluKHRoaXMpLCDlkKbliJnpg73lj5bkuI3liLDlgLxcclxuXHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdGxldCB2aWV3ID0gcXVlcnkuc2VsZWN0KCcjJyArIHRoaXMudmlld0lkKTtcclxuXHRcdFx0XHRcdFx0dmlldy5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pc0V4ZWMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tZXNjcm9sbC5zZXRDbGllbnRIZWlnaHQoZGF0YS5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5jbGllbnROdW0gIT0gMykgeyAvLyDmnoHlsJHpg6jliIbmg4XlhrUs5Y+v6IO9ZG9t6L+Y5pyq5riy5p+T5a6M5q+VLOmAkuW9kuiOt+WPlizmnIDlpJrph43or5Uz5qyhXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNsaWVudE51bSA9IHRoaXMuY2xpZW50TnVtID09IG51bGwgPyAxIDogdGhpcy5jbGllbnROdW0gKyAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0Q2xpZW50SGVpZ2h0KClcclxuXHRcdFx0XHRcdFx0XHRcdH0sIHRoaXMuY2xpZW50TnVtICogMTAwKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyDkvb/nlKhjcmVhdGVk5Yid5aeL5YyWbWVzY3JvbGzlr7nosaE7IOWmguaenOeUqG1vdW50ZWTpg6jliIZjc3PmoLflvI/nvJbor5HliLBINeS8muWkseaViFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0bGV0IHZtID0gdGhpcztcclxuXHJcblx0XHRcdGxldCBkaXlPcHRpb24gPSB7XHJcblx0XHRcdFx0Ly8g5LiL5ouJ5Yi35paw55qE6YWN572uXHJcblx0XHRcdFx0ZG93bjoge1xyXG5cdFx0XHRcdFx0aW5PZmZzZXQoKSB7XHJcblx0XHRcdFx0XHRcdHZtLmRvd25Mb2FkVHlwZSA9IDE7IC8vIOS4i+aLieeahOi3neemu+i/m+WFpW9mZnNldOiMg+WbtOWGhemCo+S4gOWIu+eahOWbnuiwgyAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG91dE9mZnNldCgpIHtcclxuXHRcdFx0XHRcdFx0dm0uZG93bkxvYWRUeXBlID0gMjsgLy8g5LiL5ouJ55qE6Led56a75aSn5LqOb2Zmc2V06YKj5LiA5Yi755qE5Zue6LCDICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b25Nb3ZpbmcobWVzY3JvbGwsIHJhdGUsIGRvd25IaWdodCkge1xyXG5cdFx0XHRcdFx0XHQvLyDkuIvmi4nov4fnqIvkuK3nmoTlm57osIMs5ruR5Yqo6L+H56iL5LiA55u05Zyo5omn6KGMO1xyXG5cdFx0XHRcdFx0XHR2bS5kb3duSGlnaHQgPSBkb3duSGlnaHQ7IC8vIOiuvue9ruS4i+aLieWMuuWfn+eahOmrmOW6piAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0XHR2bS5kb3duUmF0ZSA9IHJhdGU7IC8v5LiL5ouJ5q+U546HIChpbk9mZnNldDogcmF0ZTwxOyBvdXRPZmZzZXQ6IHJhdGU+PTEpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c2hvd0xvYWRpbmcobWVzY3JvbGwsIGRvd25IaWdodCkge1xyXG5cdFx0XHRcdFx0XHR2bS5kb3duTG9hZFR5cGUgPSAzOyAvLyDmmL7npLrkuIvmi4nliLfmlrDov5vluqbnmoTlm57osIMgKOiHquWumuS5iW1lc2Nyb2xs57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcclxuXHRcdFx0XHRcdFx0dm0uZG93bkhpZ2h0ID0gZG93bkhpZ2h0OyAvLyDorr7nva7kuIvmi4nljLrln5/nmoTpq5jluqYgKOiHquWumuS5iW1lc2Nyb2xs57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlbmREb3duU2Nyb2xsKCkge1xyXG5cdFx0XHRcdFx0XHR2bS5kb3duTG9hZFR5cGUgPSA0OyAvLyDnu5PmnZ/kuIvmi4kgKOiHquWumuS5iW1lc2Nyb2xs57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcclxuXHRcdFx0XHRcdFx0dm0uZG93bkhpZ2h0ID0gMDsgLy8g6K6+572u5LiL5ouJ5Yy65Z+f55qE6auY5bqmICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHRcdHZtLmRvd25SZXNldFRpbWVyICYmIGNsZWFyVGltZW91dCh2bS5kb3duUmVzZXRUaW1lcilcclxuXHRcdFx0XHRcdFx0dm0uZG93blJlc2V0VGltZXIgPSBzZXRUaW1lb3V0KCgpPT57IC8vIOi/h+a4oeWKqOeUu+aJp+ihjOWujOavleWQjizpnIDph43nva7kuLow55qE54q25oCBLOS7peS+v+e9ruepunRoaXMudHJhbnNpdGlvbizpgb/lhY1pT1PlsI/nqIvluo/liJfooajmuLLmn5PkuI3lrozmlbRcclxuXHRcdFx0XHRcdFx0XHRpZih2bS5kb3duTG9hZFR5cGU9PT00KSB2bS5kb3duTG9hZFR5cGUgPSAwXHJcblx0XHRcdFx0XHRcdH0sMzAwKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOa0vuWPkeS4i+aLieWIt+aWsOeahOWbnuiwg1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uKG1lc2Nyb2xsKSB7XHJcblx0XHRcdFx0XHRcdHZtLiRlbWl0KCdkb3duJywgbWVzY3JvbGwpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyDkuIrmi4nliqDovb3nmoTphY3nva5cclxuXHRcdFx0XHR1cDoge1xyXG5cdFx0XHRcdFx0Ly8g5pi+56S65Yqg6L295Lit55qE5Zue6LCDXHJcblx0XHRcdFx0XHRzaG93TG9hZGluZygpIHtcclxuXHRcdFx0XHRcdFx0dm0udXBMb2FkVHlwZSA9IDE7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly8g5pi+56S65peg5pu05aSa5pWw5o2u55qE5Zue6LCDXHJcblx0XHRcdFx0XHRzaG93Tm9Nb3JlKCkge1xyXG5cdFx0XHRcdFx0XHR2bS51cExvYWRUeXBlID0gMjtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvLyDpmpDol4/kuIrmi4nliqDovb3nmoTlm57osINcclxuXHRcdFx0XHRcdGhpZGVVcFNjcm9sbChtZXNjcm9sbCkge1xyXG5cdFx0XHRcdFx0XHR2bS51cExvYWRUeXBlID0gbWVzY3JvbGwub3B0VXAuaGFzTmV4dCA/IDAgOiAzO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOepuuW4g+WxgFxyXG5cdFx0XHRcdFx0ZW1wdHk6IHtcclxuXHRcdFx0XHRcdFx0b25TaG93KGlzU2hvdykgeyAvLyDmmL7npLrpmpDol4/nmoTlm57osINcclxuXHRcdFx0XHRcdFx0XHR2bS5pc1Nob3dFbXB0eSA9IGlzU2hvdztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOWbnuWIsOmhtumDqFxyXG5cdFx0XHRcdFx0dG9Ub3A6IHtcclxuXHRcdFx0XHRcdFx0b25TaG93KGlzU2hvdykgeyAvLyDmmL7npLrpmpDol4/nmoTlm57osINcclxuXHRcdFx0XHRcdFx0XHR2bS5pc1Nob3dUb1RvcCA9IGlzU2hvdztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIOa0vuWPkeS4iuaLieWKoOi9veeahOWbnuiwg1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uKG1lc2Nyb2xsKSB7XHJcblx0XHRcdFx0XHRcdHZtLiRlbWl0KCd1cCcsIG1lc2Nyb2xsKTtcclxuXHRcdFx0XHRcdFx0Ly8g5pu05paw5a655Zmo55qE6auY5bqmICjlpJptZXNjcm9sbOeahOaDheWGtSlcclxuXHRcdFx0XHRcdFx0dm0uc2V0Q2xpZW50SGVpZ2h0KClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdE1lU2Nyb2xsLmV4dGVuZChkaXlPcHRpb24sIEdsb2JhbE9wdGlvbik7IC8vIOa3t+WFpeWFqOWxgOeahOmFjee9rlxyXG5cdFx0XHRsZXQgbXlPcHRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHsnZG93bic6IHZtLmRvd24sJ3VwJzogdm0udXB9KSkgLy8g5rex5ou36LSdLOmBv+WFjeWvuXByb3Bz55qE5b2x5ZONXHJcblx0XHRcdE1lU2Nyb2xsLmV4dGVuZChteU9wdGlvbiwgZGl5T3B0aW9uKTsgLy8g5re35YWl5YW35L2T55WM6Z2i55qE6YWN572uXHJcblxyXG5cdFx0XHQvLyDliJ3lp4vljJZNZVNjcm9sbOWvueixoVxyXG5cdFx0XHR2bS5tZXNjcm9sbCA9IG5ldyBNZVNjcm9sbChteU9wdGlvbik7XHJcblx0XHRcdHZtLm1lc2Nyb2xsLnZpZXdJZCA9IHZtLnZpZXdJZDsgLy8g6ZmE5bimaWRcclxuXHRcdFx0Ly8gaW5pdOWbnuiwg21lc2Nyb2xs5a+56LGhXHJcblx0XHRcdHZtLiRlbWl0KCdpbml0Jywgdm0ubWVzY3JvbGwpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8g6K6+572u6auY5bqmXHJcblx0XHRcdGNvbnN0IHN5cyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHRpZihzeXMud2luZG93VG9wKSB2bS53aW5kb3dUb3AgPSBzeXMud2luZG93VG9wO1xyXG5cdFx0XHRpZihzeXMud2luZG93Qm90dG9tKSB2bS53aW5kb3dCb3R0b20gPSBzeXMud2luZG93Qm90dG9tO1xyXG5cdFx0XHRpZihzeXMud2luZG93SGVpZ2h0KSB2bS53aW5kb3dIZWlnaHQgPSBzeXMud2luZG93SGVpZ2h0O1xyXG5cdFx0XHRpZihzeXMuc3RhdHVzQmFySGVpZ2h0KSB2bS5zdGF0dXNCYXJIZWlnaHQgPSBzeXMuc3RhdHVzQmFySGVpZ2h0O1xyXG5cdFx0XHQvLyDkvb9kb3du55qEYm90dG9tT2Zmc2V055Sf5pWIXHJcblx0XHRcdHZtLm1lc2Nyb2xsLnNldEJvZHlIZWlnaHQoc3lzLndpbmRvd0hlaWdodCk7XHJcblxyXG5cdFx0XHQvLyDlm6DkuLrkvb/nlKjnmoTmmK9zY3JvbGx2aWV3LOi/memHjOmcgOiHquWumuS5iXNjcm9sbFRvXHJcblx0XHRcdHZtLm1lc2Nyb2xsLnJlc2V0U2Nyb2xsVG8oKHksIHQpID0+IHtcclxuXHRcdFx0XHR2bS5zY3JvbGxBbmltID0gKHQgIT09IDApOyAvLyB05Li6MCzliJnkuI3kvb/nlKjliqjnlLvov4fmuKFcclxuXHRcdFx0XHRpZih0eXBlb2YgeSA9PT0gJ3N0cmluZycpeyAvLyDnrKzkuIDkuKrlj4LmlbDlpoLmnpzkuLrlrZfnrKbkuLIs5YiZ5L2/55Soc2Nyb2xsLWludG8tdmlld1xyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdFx0Ly8g5b6u5L+h5bCP56iL5bqP5pqC5LiN5pSv5oyBc2xvdOmHjOmdoueahHNjcm9sbC1pbnRvLXZpZXcs5Y+q6IO96K6h566X5L2N572u5a6e546wXHJcblx0XHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdCgnIycrdm0udmlld0lkKS5ib3VuZGluZ0NsaWVudFJlY3QoZnVuY3Rpb24ocmVjdCl7XHJcblx0XHRcdFx0XHRcdGxldCBtZXNjcm9sbFRvcCA9IHJlY3QudG9wIC8vIG1lc2Nyb2xs5Yiw6aG26YOo55qE6Led56a7XHJcblx0XHRcdFx0XHRcdHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KCcjJyt5KS5ib3VuZGluZ0NsaWVudFJlY3QoZnVuY3Rpb24ocmVjdCl7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGN1clkgPSB2bS5tZXNjcm9sbC5nZXRTY3JvbGxUb3AoKVxyXG5cdFx0XHRcdFx0XHRcdGxldCB0b3AgPSByZWN0LnRvcCAtIG1lc2Nyb2xsVG9wXHJcblx0XHRcdFx0XHRcdFx0dG9wICs9IGN1cllcclxuXHRcdFx0XHRcdFx0XHRpZighdm0uaXNGaXhlZCkgdG9wIC09IHZtLm51bVRvcFxyXG5cdFx0XHRcdFx0XHRcdHZtLnNjcm9sbFRvcCA9IGN1clk7XHJcblx0XHRcdFx0XHRcdFx0dm0uJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dm0uc2Nyb2xsVG9wID0gdG9wXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSkuZXhlYygpXHJcblx0XHRcdFx0XHR9KS5leGVjKClcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdFx0aWYgKHZtLnNjcm9sbFRvVmlld0lkICE9IHkpIHtcclxuXHRcdFx0XHRcdFx0dm0uc2Nyb2xsVG9WaWV3SWQgPSB5O1xyXG5cdFx0XHRcdFx0fSBlbHNle1xyXG5cdFx0XHRcdFx0XHR2bS5zY3JvbGxUb1ZpZXdJZCA9ICcnOyAvLyBzY3JvbGxUb1ZpZXdJZOW/hemhu+WPmOWMluaJjeS8mueUn+aViCzmiYDku6XmraTlpITlhYjnva7nqbrlho3otYvlgLxcclxuXHRcdFx0XHRcdFx0dm0uJG5leHRUaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0dm0uc2Nyb2xsVG9WaWV3SWQgPSB5O1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBjdXJZID0gdm0ubWVzY3JvbGwuZ2V0U2Nyb2xsVG9wKClcclxuXHRcdFx0XHRpZiAodCA9PT0gMCB8fCB0ID09PSAzMDApIHsgLy8g5b2TdOS9v+eUqOm7mOiupOmFjee9rueahDMwMOaXtizliJnkvb/nlKjns7vnu5/oh6rluKbnmoTliqjnlLvov4fmuKFcclxuXHRcdFx0XHRcdHZtLnNjcm9sbFRvcCA9IGN1clk7XHJcblx0XHRcdFx0XHR2bS4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHZtLnNjcm9sbFRvcCA9IHlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHZtLm1lc2Nyb2xsLmdldFN0ZXAoY3VyWSwgeSwgc3RlcCA9PiB7IC8vIOatpOWGmeazleWPr+aUr+aMgemFjee9rnRcclxuXHRcdFx0XHRcdFx0dm0uc2Nyb2xsVG9wID0gc3RlcFxyXG5cdFx0XHRcdFx0fSwgdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDlhbfkvZPnmoTnlYzpnaLlpoLmnpzkuI3phY3nva51cC50b1RvcC5zYWZlYXJlYSzliJnlj5bmnKx2dWXnmoRzYWZlYXJlYeWAvFxyXG5cdFx0XHRpZiAodm0udXAgJiYgdm0udXAudG9Ub3AgJiYgdm0udXAudG9Ub3Auc2FmZWFyZWEgIT0gbnVsbCkge30gZWxzZSB7XHJcblx0XHRcdFx0dm0ubWVzY3JvbGwub3B0VXAudG9Ub3Auc2FmZWFyZWEgPSB2bS5zYWZlYXJlYTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdC8vIOiuvue9ruWuueWZqOeahOmrmOW6plxyXG5cdFx0XHR0aGlzLnNldENsaWVudEhlaWdodCgpXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHRAaW1wb3J0IFwiLi9tZXNjcm9sbC11bmkuY3NzXCI7XHJcblx0QGltcG9ydCBcIi4vY29tcG9uZW50cy9tZXNjcm9sbC1kb3duLmNzc1wiO1xyXG5cdEBpbXBvcnQgJy4vY29tcG9uZW50cy9tZXNjcm9sbC11cC5jc3MnO1xyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tNi1vbmVPZi0xLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL21lc2Nyb2xsLXVuaS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9tZXNjcm9sbC11bmkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjI1NzI0NTA1NTk3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mescroll-uni/mescroll-uni-create-component',
    {
        'components/mescroll-uni/mescroll-uni-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(390))
        })
    },
    [['components/mescroll-uni/mescroll-uni-create-component']]
]);
