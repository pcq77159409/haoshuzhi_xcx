(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/jyf-parser/jyf-parser"],{

/***/ 494:
/*!***********************************************************************!*\
  !*** E:/haoshuzhi_xcx/haoshuzhi/components/jyf-parser/jyf-parser.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jyf_parser_vue_vue_type_template_id_eab15eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jyf-parser.vue?vue&type=template&id=eab15eb8& */ 495);
/* harmony import */ var _jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jyf-parser.vue?vue&type=script&lang=js& */ 497);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jyf-parser.vue?vue&type=style&index=0&lang=css& */ 502);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _jyf_parser_vue_vue_type_template_id_eab15eb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _jyf_parser_vue_vue_type_template_id_eab15eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _jyf_parser_vue_vue_type_template_id_eab15eb8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/jyf-parser/jyf-parser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 495:
/*!******************************************************************************************************!*\
  !*** E:/haoshuzhi_xcx/haoshuzhi/components/jyf-parser/jyf-parser.vue?vue&type=template&id=eab15eb8& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_template_id_eab15eb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./jyf-parser.vue?vue&type=template&id=eab15eb8& */ 496);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_template_id_eab15eb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_template_id_eab15eb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_template_id_eab15eb8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_template_id_eab15eb8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 496:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/haoshuzhi_xcx/haoshuzhi/components/jyf-parser/jyf-parser.vue?vue&type=template&id=eab15eb8& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 497:
/*!************************************************************************************************!*\
  !*** E:/haoshuzhi_xcx/haoshuzhi/components/jyf-parser/jyf-parser.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./jyf-parser.vue?vue&type=script&lang=js& */ 498);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 498:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/haoshuzhi_xcx/haoshuzhi/components/jyf-parser/jyf-parser.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var trees = function trees() {__webpack_require__.e(/*! require.ensure | components/jyf-parser/libs/trees */ "components/jyf-parser/libs/trees").then((function () {return resolve(__webpack_require__(/*! ./libs/trees */ 628));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};





















var cache = {},

fs = uni.getFileSystemManager ? uni.getFileSystemManager() : null,

Parser = __webpack_require__(/*! ./libs/MpHtmlParser.js */ 499);
var dom;
// 计算 cache 的 key
function hash(str) {
  for (var i = str.length, val = 5381; i--;) {
    val += (val << 5) + str.charCodeAt(i);}
  return val;
}








/**
   * Parser 富文本组件
   * @tutorial https://github.com/jin-yufeng/Parser
   * @property {String} html 富文本数据
   * @property {Boolean} autopause 是否在播放一个视频时自动暂停其他视频
   * @property {Boolean} autoscroll 是否自动给所有表格添加一个滚动层
   * @property {Boolean} autosetTitle 是否自动将 title 标签中的内容设置到页面标题
   * @property {Number} compress 压缩等级
   * @property {String} domain 图片、视频等链接的主域名
   * @property {Boolean} lazyLoad 是否开启图片懒加载
   * @property {String} loadingImg 图片加载完成前的占位图
   * @property {Boolean} selectable 是否开启长按复制
   * @property {Object} tagStyle 标签的默认样式
   * @property {Boolean} showWithAnimation 是否使用渐显动画
   * @property {Boolean} useAnchor 是否使用锚点
   * @property {Boolean} useCache 是否缓存解析结果
   * @event {Function} parse 解析完成事件
   * @event {Function} load dom 加载完成事件
   * @event {Function} ready 所有图片加载完毕事件
   * @event {Function} error 错误事件
   * @event {Function} imgtap 图片点击事件
   * @event {Function} linkpress 链接点击事件
   * @author JinYufeng
   * @version 20200719
   * @listens MIT
   */var _default =
{
  name: 'parser',
  data: function data() {
    return {







      showAm: '',

      nodes: [] };

  },

  components: {
    trees: trees },


  props: {
    html: String,
    autopause: {
      type: Boolean,
      default: true },

    autoscroll: Boolean,
    autosetTitle: {
      type: Boolean,
      default: true },


    compress: Number,
    loadingImg: String,
    useCache: Boolean,

    domain: String,
    lazyLoad: Boolean,
    selectable: Boolean,
    tagStyle: Object,
    showWithAnimation: Boolean,
    useAnchor: Boolean },

  watch: {
    html: function html(_html) {
      this.setContent(_html);
    } },

  created: function created() {
    // 图片数组
    this.imgList = [];
    this.imgList.each = function (f) {
      for (var i = 0, len = this.length; i < len; i++) {
        this.setItem(i, f(this[i], i, this));}
    };
    this.imgList.setItem = function (i, src) {var _this = this;
      if (i == void 0 || !src) return;

      // 去重
      if (src.indexOf('http') == 0 && this.includes(src)) {
        var newSrc = src.split('://')[0];
        for (var j = newSrc.length, c; c = src[j]; j++) {
          if (c == '/' && src[j - 1] != '/' && src[j + 1] != '/') break;
          newSrc += Math.random() > 0.5 ? c.toUpperCase() : c;
        }
        newSrc += src.substr(j);
        return this[i] = newSrc;
      }

      this[i] = src;
      // 暂存 data src
      if (src.includes('data:image')) {
        var filePath,info = src.match(/data:image\/(\S+?);(\S+?),(.+)/);
        if (!info) return;

        filePath = "".concat(wx.env.USER_DATA_PATH, "/").concat(Date.now(), ".").concat(info[1]);
        fs && fs.writeFile({
          filePath: filePath,
          data: info[3],
          encoding: info[2],
          success: function success() {return _this[i] = filePath;} });












      }
    };
  },
  mounted: function mounted() {




    if (dom) this.document = new dom(this);





    if (this.html) this.setContent(this.html);



  },
  beforeDestroy: function beforeDestroy() {



    this.imgList.each(function (src) {








      if (src && src.includes(uni.env.USER_DATA_PATH))
      fs && fs.unlink({
        filePath: src });


    });
    clearInterval(this._timer);
  },
  methods: {
    // 设置富文本内容
    setContent: function setContent(html, append) {var _this2 = this;




















































































































































































      var nodes;
      if (!html) return this.nodes = [];
      var parser = new Parser(html, this);
      // 缓存读取
      if (this.useCache) {
        var hashVal = hash(html);
        if (cache[hashVal])
        nodes = cache[hashVal];else
        {
          nodes = parser.parse();
          cache[hashVal] = nodes;
        }
      } else nodes = parser.parse();
      this.$emit('parse', nodes);
      if (append) this.nodes = this.nodes.concat(nodes);else
      this.nodes = nodes;
      if (nodes.length && nodes.title && this.autosetTitle)
      uni.setNavigationBarTitle({
        title: nodes.title });

      if (this.imgList) this.imgList.length = 0;
      this.videoContexts = [];
      this.$nextTick(function () {
        (function f(cs) {
          for (var i = cs.length; i--;) {
            if (cs[i].top) {
              cs[i].controls = [];
              cs[i].init();
              f(cs[i].$children);
            }
          }
        })(_this2.$children);
        _this2.$emit('load');
      });

      var height;
      clearInterval(this._timer);
      this._timer = setInterval(function () {




        uni.createSelectorQuery().in(_this2).
        select('#_top').boundingClientRect().exec(function (res) {
          if (!res) return;
          _this2.rect = res[0];

          if (_this2.rect.height == height) {
            _this2.$emit('ready', _this2.rect);
            clearInterval(_this2._timer);
          }
          height = _this2.rect.height;

        });

      }, 350);
      if (this.showWithAnimation && !append) this.showAm = 'animation:_show .5s';

    },
    // 获取文本内容
    getText: function getText() {var ns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.nodes;
      var txt = '';







      for (var i = 0, n; n = ns[i++];) {
        if (n.type == 'text') txt += n.text.replace(/&nbsp;/g, "\xA0").replace(/&lt;/g, '<').replace(/&gt;/g, '>').
        replace(/&amp;/g, '&');else
        if (n.type == 'br') txt += '\n';else
        {
          // 块级标签前后加换行
          var block = n.name == 'p' || n.name == 'div' || n.name == 'tr' || n.name == 'li' || n.name[0] == 'h' && n.name[1] >
          '0' && n.name[1] < '7';
          if (block && txt && txt[txt.length - 1] != '\n') txt += '\n';
          if (n.children) txt += this.getText(n.children);
          if (block && txt[txt.length - 1] != '\n') txt += '\n';else
          if (n.name == 'td' || n.name == 'th') txt += '\t';
        }
      }

      return txt;
    },
    // 锚点跳转
    in: function _in(obj) {
      if (obj.page && obj.selector && obj.scrollTop) this._in = obj;
    },
    navigateTo: function navigateTo(obj) {var _this3 = this;
      if (!this.useAnchor) return obj.fail && obj.fail('Anchor is disabled');









      var d = ' ';

      d = '>>>';

      var selector = uni.createSelectorQuery().in(this._in ? this._in.page : this).select((this._in ? this._in.selector :
      '#_top') + (obj.id ? "".concat(d, "#").concat(obj.id, ",").concat(this._in ? this._in.selector : '#_top').concat(d, ".").concat(obj.id) : '')).boundingClientRect();
      if (this._in) selector.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect();else
      selector.selectViewport().scrollOffset();
      selector.exec(function (res) {
        if (!res[0]) return obj.fail && obj.fail('Label not found');
        var scrollTop = res[1].scrollTop + res[0].top - (res[2] ? res[2].top : 0) + (obj.offset || 0);
        if (_this3._in) _this3._in.page[_this3._in.scrollTop] = scrollTop;else
        uni.pageScrollTo({
          scrollTop: scrollTop,
          duration: 300 });

        obj.success && obj.success();
      });

    },
    // 获取视频对象
    getVideoContext: function getVideoContext(id) {

      if (!id) return this.videoContexts;else

      for (var i = this.videoContexts.length; i--;) {
        if (this.videoContexts[i].id == id) return this.videoContexts[i];}

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 502:
/*!********************************************************************************************************!*\
  !*** E:/haoshuzhi_xcx/haoshuzhi/components/jyf-parser/jyf-parser.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./jyf-parser.vue?vue&type=style&index=0&lang=css& */ 503);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_jyf_parser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 503:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/haoshuzhi_xcx/haoshuzhi/components/jyf-parser/jyf-parser.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRTovaGFvc2h1emhpX3hjeC9oYW9zaHV6aGkvY29tcG9uZW50cy9qeWYtcGFyc2VyL2p5Zi1wYXJzZXIudnVlPzg3NjAiLCJ3ZWJwYWNrOi8vL0U6L2hhb3NodXpoaV94Y3gvaGFvc2h1emhpL2NvbXBvbmVudHMvanlmLXBhcnNlci9qeWYtcGFyc2VyLnZ1ZT83MzAzIiwid2VicGFjazovLy9FOi9oYW9zaHV6aGlfeGN4L2hhb3NodXpoaS9jb21wb25lbnRzL2p5Zi1wYXJzZXIvanlmLXBhcnNlci52dWU/ODMwOSIsIndlYnBhY2s6Ly8vRTovaGFvc2h1emhpX3hjeC9oYW9zaHV6aGkvY29tcG9uZW50cy9qeWYtcGFyc2VyL2p5Zi1wYXJzZXIudnVlPzA1MDciLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvanlmLXBhcnNlci9qeWYtcGFyc2VyLnZ1ZSIsIndlYnBhY2s6Ly8vRTovaGFvc2h1emhpX3hjeC9oYW9zaHV6aGkvY29tcG9uZW50cy9qeWYtcGFyc2VyL2p5Zi1wYXJzZXIudnVlP2Q2MzUiLCJ3ZWJwYWNrOi8vL0U6L2hhb3NodXpoaV94Y3gvaGFvc2h1emhpL2NvbXBvbmVudHMvanlmLXBhcnNlci9qeWYtcGFyc2VyLnZ1ZT81YWI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUg7QUFDdkg7QUFDOEQ7QUFDTDtBQUNhOzs7QUFHdEU7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHFGQUFNO0FBQ1IsRUFBRSw4RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFvbUIsQ0FBZ0IsOG5CQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3NCeG5COztBQUVBLGlFQUZBOztBQUlBLCtEQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FEQTtBQUVBO0FBQ0E7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBLGdCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBOzs7Ozs7OztBQVFBLGdCQVJBOztBQVVBLGVBVkE7O0FBWUEsR0FmQTs7QUFpQkE7QUFDQSxnQkFEQSxFQWpCQTs7O0FBcUJBO0FBQ0EsZ0JBREE7QUFFQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFGQTs7QUFNQSx1QkFOQTtBQU9BO0FBQ0EsbUJBREE7QUFFQSxtQkFGQSxFQVBBOzs7QUFZQSxvQkFaQTtBQWFBLHNCQWJBO0FBY0EscUJBZEE7O0FBZ0JBLGtCQWhCQTtBQWlCQSxxQkFqQkE7QUFrQkEsdUJBbEJBO0FBbUJBLG9CQW5CQTtBQW9CQSw4QkFwQkE7QUFxQkEsc0JBckJBLEVBckJBOztBQTRDQTtBQUNBLFFBREEsZ0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBLEVBNUNBOztBQWlEQSxTQWpEQSxxQkFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQURBO0FBRUEsS0FIQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSx1QkFGQTtBQUdBLDJCQUhBO0FBSUEsbUVBSkE7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQSxLQXZDQTtBQXdDQSxHQWhHQTtBQWlHQSxTQWpHQSxxQkFpR0E7Ozs7O0FBS0E7Ozs7OztBQU1BOzs7O0FBSUEsR0FoSEE7QUFpSEEsZUFqSEEsMkJBaUhBOzs7O0FBSUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQSxxQkFEQTs7O0FBSUEsS0FkQTtBQWVBO0FBQ0EsR0FySUE7QUFzSUE7QUFDQTtBQUNBLGNBRkEsc0JBRUEsSUFGQSxFQUVBLE1BRkEsRUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVJBLE1BUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBUkEsRUFRQSxnQkFSQTtBQVNBO0FBQ0EsT0FYQTs7QUFhQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQSxjQURBLENBQ0EsT0FEQSxFQUNBLGtCQURBLEdBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBWEE7O0FBYUEsT0FsQkEsRUFrQkEsR0FsQkE7QUFtQkE7O0FBRUEsS0FqUEE7QUFrUEE7QUFDQSxXQW5QQSxxQkFtUEE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0EsZUFEQSxDQUNBLFFBREEsRUFDQSxHQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQURBLElBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBNVFBO0FBNlFBO0FBQ0EsTUE5UUEsZUE4UUEsR0E5UUEsRUE4UUE7QUFDQTtBQUNBLEtBaFJBO0FBaVJBLGNBalJBLHNCQWlSQSxHQWpSQSxFQWlSQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7QUFDQSxhQURBLEtBQ0EsZ0lBREEsR0FDQSxrQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSx1QkFGQTs7QUFJQTtBQUNBLE9BVEE7O0FBV0EsS0EvU0E7QUFnVEE7QUFDQSxtQkFqVEEsMkJBaVRBLEVBalRBLEVBaVRBOztBQUVBOztBQUVBO0FBQ0EseUVBREE7O0FBR0EsS0F4VEEsRUF0SUEsRTs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFzM0IsQ0FBZ0IsdTNCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBMTRCO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiY29tcG9uZW50cy9qeWYtcGFyc2VyL2p5Zi1wYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2p5Zi1wYXJzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhYjE1ZWI4JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanlmLXBhcnNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2p5Zi1wYXJzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2p5Zi1wYXJzZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9qeWYtcGFyc2VyL2p5Zi1wYXJzZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE2LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHBhZ2UtbWV0YS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9qeWYtcGFyc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYWIxNWViOCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2p5Zi1wYXJzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2p5Zi1wYXJzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHNsb3Qgdi1pZj1cIiFub2Rlcy5sZW5ndGhcIiAvPlxyXG5cdFx0PCEtLSNpZmRlZiBBUFAtUExVUy1OVlVFLS0+XHJcblx0XHQ8d2ViLXZpZXcgaWQ9XCJfdG9wXCIgcmVmPVwid2ViXCIgOnN0eWxlPVwiJ21hcmdpbi10b3A6LTJweDtoZWlnaHQ6JytoZWlnaHQrJ3B4J1wiIEBvblBvc3RNZXNzYWdlPVwiX21lc3NhZ2VcIiAvPlxyXG5cdFx0PCEtLSNlbmRpZi0tPlxyXG5cdFx0PCEtLSNpZm5kZWYgQVBQLVBMVVMtTlZVRS0tPlxyXG5cdFx0PHZpZXcgaWQ9XCJfdG9wXCIgOnN0eWxlPVwic2hvd0FtKyhzZWxlY3RhYmxlPyc7dXNlci1zZWxlY3Q6dGV4dDstd2Via2l0LXVzZXItc2VsZWN0OnRleHQnOicnKVwiPlxyXG5cdFx0XHQ8IS0tI2lmZGVmIEg1IHx8IE1QLTM2MC0tPlxyXG5cdFx0XHQ8ZGl2IDppZD1cIidydGYnK3VpZFwiPjwvZGl2PlxyXG5cdFx0XHQ8IS0tI2VuZGlmLS0+XHJcblx0XHRcdDwhLS0jaWZuZGVmIEg1IHx8IE1QLTM2MC0tPlxyXG5cdFx0XHQ8dHJlZXMgOm5vZGVzPVwibm9kZXNcIiA6bGF6eUxvYWQ9XCJsYXp5TG9hZFwiIDpsb2FkaW5nPVwibG9hZGluZ0ltZ1wiIC8+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0jZW5kaWYtLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8vICNpZm5kZWYgSDUgfHwgQVBQLVBMVVMtTlZVRSB8fCBNUC0zNjBcclxuXHRpbXBvcnQgdHJlZXMgZnJvbSAnLi9saWJzL3RyZWVzJztcclxuXHR2YXIgY2FjaGUgPSB7fSxcclxuXHRcdC8vICNpZmRlZiBNUC1XRUlYSU4gfHwgTVAtVE9VVElBT1xyXG5cdFx0ZnMgPSB1bmkuZ2V0RmlsZVN5c3RlbU1hbmFnZXIgPyB1bmkuZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKSA6IG51bGwsXHJcblx0XHQvLyAjZW5kaWZcclxuXHRcdFBhcnNlciA9IHJlcXVpcmUoJy4vbGlicy9NcEh0bWxQYXJzZXIuanMnKTtcclxuXHR2YXIgZG9tO1xyXG5cdC8vIOiuoeeulyBjYWNoZSDnmoQga2V5XHJcblx0ZnVuY3Rpb24gaGFzaChzdHIpIHtcclxuXHRcdGZvciAodmFyIGkgPSBzdHIubGVuZ3RoLCB2YWwgPSA1MzgxOyBpLS07KVxyXG5cdFx0XHR2YWwgKz0gKHZhbCA8PCA1KSArIHN0ci5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0cmV0dXJuIHZhbDtcclxuXHR9XHJcblx0Ly8gI2VuZGlmXHJcblx0Ly8gI2lmZGVmIEg1IHx8IEFQUC1QTFVTLU5WVUUgfHwgTVAtMzYwXHJcblx0dmFyIHdpbmRvd1dpZHRoID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXHJcblx0XHRjZmcgPSByZXF1aXJlKCcuL2xpYnMvY29uZmlnLmpzJyk7XHJcblx0Ly8gI2VuZGlmXHJcblx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHR2YXIgd2VleERvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblx0Ly8gI2VuZGlmXHJcblx0LyoqXHJcblx0ICogUGFyc2VyIOWvjOaWh+acrOe7hOS7tlxyXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2dpdGh1Yi5jb20vamluLXl1ZmVuZy9QYXJzZXJcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gaHRtbCDlr4zmlofmnKzmlbDmja5cclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGF1dG9wYXVzZSDmmK/lkKblnKjmkq3mlL7kuIDkuKrop4bpopHml7boh6rliqjmmoLlgZzlhbbku5bop4bpopFcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGF1dG9zY3JvbGwg5piv5ZCm6Ieq5Yqo57uZ5omA5pyJ6KGo5qC85re75Yqg5LiA5Liq5rua5Yqo5bGCXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBhdXRvc2V0VGl0bGUg5piv5ZCm6Ieq5Yqo5bCGIHRpdGxlIOagh+etvuS4reeahOWGheWuueiuvue9ruWIsOmhtemdouagh+mimFxyXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBjb21wcmVzcyDljovnvKnnrYnnuqdcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gZG9tYWluIOWbvueJh+OAgeinhumikeetiemTvuaOpeeahOS4u+Wfn+WQjVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbGF6eUxvYWQg5piv5ZCm5byA5ZCv5Zu+54mH5oeS5Yqg6L29XHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGxvYWRpbmdJbWcg5Zu+54mH5Yqg6L295a6M5oiQ5YmN55qE5Y2g5L2N5Zu+XHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzZWxlY3RhYmxlIOaYr+WQpuW8gOWQr+mVv+aMieWkjeWItlxyXG5cdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB0YWdTdHlsZSDmoIfnrb7nmoTpu5jorqTmoLflvI9cclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IHNob3dXaXRoQW5pbWF0aW9uIOaYr+WQpuS9v+eUqOa4kOaYvuWKqOeUu1xyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdXNlQW5jaG9yIOaYr+WQpuS9v+eUqOmUmueCuVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdXNlQ2FjaGUg5piv5ZCm57yT5a2Y6Kej5p6Q57uT5p6cXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gcGFyc2Ug6Kej5p6Q5a6M5oiQ5LqL5Lu2XHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gbG9hZCBkb20g5Yqg6L295a6M5oiQ5LqL5Lu2XHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gcmVhZHkg5omA5pyJ5Zu+54mH5Yqg6L295a6M5q+V5LqL5Lu2XHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gZXJyb3Ig6ZSZ6K+v5LqL5Lu2XHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gaW1ndGFwIOWbvueJh+eCueWHu+S6i+S7tlxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGxpbmtwcmVzcyDpk77mjqXngrnlh7vkuovku7ZcclxuXHQgKiBAYXV0aG9yIEppbll1ZmVuZ1xyXG5cdCAqIEB2ZXJzaW9uIDIwMjAwNzE5XHJcblx0ICogQGxpc3RlbnMgTUlUXHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ3BhcnNlcicsXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBINSB8fCBNUC0zNjBcclxuXHRcdFx0XHR1aWQ6IHRoaXMuX3VpZCxcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHRcdGhlaWdodDogMSxcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0XHRzaG93QW06ICcnLFxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdG5vZGVzOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly8gI2lmbmRlZiBINSB8fCBBUFAtUExVUy1OVlVFIHx8IE1QLTM2MFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR0cmVlc1xyXG5cdFx0fSxcclxuXHRcdC8vICNlbmRpZlxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aHRtbDogU3RyaW5nLFxyXG5cdFx0XHRhdXRvcGF1c2U6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0YXV0b3Njcm9sbDogQm9vbGVhbixcclxuXHRcdFx0YXV0b3NldFRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vICNpZm5kZWYgSDUgfHwgQVBQLVBMVVMtTlZVRSB8fCBNUC0zNjBcclxuXHRcdFx0Y29tcHJlc3M6IE51bWJlcixcclxuXHRcdFx0bG9hZGluZ0ltZzogU3RyaW5nLFxyXG5cdFx0XHR1c2VDYWNoZTogQm9vbGVhbixcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdGRvbWFpbjogU3RyaW5nLFxyXG5cdFx0XHRsYXp5TG9hZDogQm9vbGVhbixcclxuXHRcdFx0c2VsZWN0YWJsZTogQm9vbGVhbixcclxuXHRcdFx0dGFnU3R5bGU6IE9iamVjdCxcclxuXHRcdFx0c2hvd1dpdGhBbmltYXRpb246IEJvb2xlYW4sXHJcblx0XHRcdHVzZUFuY2hvcjogQm9vbGVhblxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdGh0bWwoaHRtbCkge1xyXG5cdFx0XHRcdHRoaXMuc2V0Q29udGVudChodG1sKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdC8vIOWbvueJh+aVsOe7hFxyXG5cdFx0XHR0aGlzLmltZ0xpc3QgPSBbXTtcclxuXHRcdFx0dGhpcy5pbWdMaXN0LmVhY2ggPSBmdW5jdGlvbihmKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspXHJcblx0XHRcdFx0XHR0aGlzLnNldEl0ZW0oaSwgZih0aGlzW2ldLCBpLCB0aGlzKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5pbWdMaXN0LnNldEl0ZW0gPSBmdW5jdGlvbihpLCBzcmMpIHtcclxuXHRcdFx0XHRpZiAoaSA9PSB2b2lkIDAgfHwgIXNyYykgcmV0dXJuO1xyXG5cdFx0XHRcdC8vICNpZm5kZWYgTVAtQUxJUEFZIHx8IEFQUC1QTFVTXHJcblx0XHRcdFx0Ly8g5Y676YeNXHJcblx0XHRcdFx0aWYgKHNyYy5pbmRleE9mKCdodHRwJykgPT0gMCAmJiB0aGlzLmluY2x1ZGVzKHNyYykpIHtcclxuXHRcdFx0XHRcdHZhciBuZXdTcmMgPSBzcmMuc3BsaXQoJzovLycpWzBdO1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaiA9IG5ld1NyYy5sZW5ndGgsIGM7IGMgPSBzcmNbal07IGorKykge1xyXG5cdFx0XHRcdFx0XHRpZiAoYyA9PSAnLycgJiYgc3JjW2ogLSAxXSAhPSAnLycgJiYgc3JjW2ogKyAxXSAhPSAnLycpIGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRuZXdTcmMgKz0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IGMudG9VcHBlckNhc2UoKSA6IGM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRuZXdTcmMgKz0gc3JjLnN1YnN0cihqKTtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzW2ldID0gbmV3U3JjO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR0aGlzW2ldID0gc3JjO1xyXG5cdFx0XHRcdC8vIOaaguWtmCBkYXRhIHNyY1xyXG5cdFx0XHRcdGlmIChzcmMuaW5jbHVkZXMoJ2RhdGE6aW1hZ2UnKSkge1xyXG5cdFx0XHRcdFx0dmFyIGZpbGVQYXRoLCBpbmZvID0gc3JjLm1hdGNoKC9kYXRhOmltYWdlXFwvKFxcUys/KTsoXFxTKz8pLCguKykvKTtcclxuXHRcdFx0XHRcdGlmICghaW5mbykgcmV0dXJuO1xyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTiB8fCBNUC1UT1VUSUFPXHJcblx0XHRcdFx0XHRmaWxlUGF0aCA9IGAke3d4LmVudi5VU0VSX0RBVEFfUEFUSH0vJHtEYXRlLm5vdygpfS4ke2luZm9bMV19YDtcclxuXHRcdFx0XHRcdGZzICYmIGZzLndyaXRlRmlsZSh7XHJcblx0XHRcdFx0XHRcdGZpbGVQYXRoLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiBpbmZvWzNdLFxyXG5cdFx0XHRcdFx0XHRlbmNvZGluZzogaW5mb1syXSxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogKCkgPT4gdGhpc1tpXSA9IGZpbGVQYXRoXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHRcdGZpbGVQYXRoID0gYF9kb2MvcGFyc2VyX3RtcC8ke0RhdGUubm93KCl9LiR7aW5mb1sxXX1gO1xyXG5cdFx0XHRcdFx0dmFyIGJpdG1hcCA9IG5ldyBwbHVzLm5hdGl2ZU9iai5CaXRtYXAoKTtcclxuXHRcdFx0XHRcdGJpdG1hcC5sb2FkQmFzZTY0RGF0YShzcmMsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0Yml0bWFwLnNhdmUoZmlsZVBhdGgsIHt9LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Yml0bWFwLmNsZWFyKClcclxuXHRcdFx0XHRcdFx0XHR0aGlzW2ldID0gZmlsZVBhdGg7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0Ly8gI2lmZGVmIEg1IHx8IE1QLTM2MFxyXG5cdFx0XHR0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3J0ZicgKyB0aGlzLl91aWQpO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0Ly8gI2lmbmRlZiBINSB8fCBBUFAtUExVUy1OVlVFIHx8IE1QLTM2MFxyXG5cdFx0XHRpZiAoZG9tKSB0aGlzLmRvY3VtZW50ID0gbmV3IGRvbSh0aGlzKTtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdHRoaXMuZG9jdW1lbnQgPSB0aGlzLiRyZWZzLndlYjtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0aWYgKHRoaXMuaHRtbCkgdGhpcy5zZXRDb250ZW50KHRoaXMuaHRtbCk7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0fSwgMzApXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHRcdGJlZm9yZURlc3Ryb3koKSB7XHJcblx0XHRcdC8vICNpZmRlZiBINSB8fCBNUC0zNjBcclxuXHRcdFx0aWYgKHRoaXMuX29ic2VydmVyKSB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR0aGlzLmltZ0xpc3QuZWFjaChzcmMgPT4ge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdGlmIChzcmMgJiYgc3JjLmluY2x1ZGVzKCdfZG9jJykpIHtcclxuXHRcdFx0XHRcdHBsdXMuaW8ucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTChzcmMsIGVudHJ5ID0+IHtcclxuXHRcdFx0XHRcdFx0ZW50cnkucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTiB8fCBNUC1UT1VUSUFPXHJcblx0XHRcdFx0aWYgKHNyYyAmJiBzcmMuaW5jbHVkZXModW5pLmVudi5VU0VSX0RBVEFfUEFUSCkpXHJcblx0XHRcdFx0XHRmcyAmJiBmcy51bmxpbmsoe1xyXG5cdFx0XHRcdFx0XHRmaWxlUGF0aDogc3JjXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9KVxyXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOiuvue9ruWvjOaWh+acrOWGheWuuVxyXG5cdFx0XHRzZXRDb250ZW50KGh0bWwsIGFwcGVuZCkge1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0aWYgKCFodG1sKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuaGVpZ2h0ID0gMTtcclxuXHRcdFx0XHRpZiAoYXBwZW5kKVxyXG5cdFx0XHRcdFx0dGhpcy4kcmVmcy53ZWIuZXZhbEpzKFwidmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7Yi5pbm5lckhUTUw9J1wiICsgaHRtbC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIikgK1xyXG5cdFx0XHRcdFx0XHRcIic7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcnNlcicpLmFwcGVuZENoaWxkKGIpXCIpO1xyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0aHRtbCA9XHJcblx0XHRcdFx0XHRcdCc8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPjxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1pbmltdW0tc2NhbGU9MSxtYXhpbXVtLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiPjxzdHlsZT5odG1sLGJvZHl7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW59Ym9keXttYXJnaW46MH08L3N0eWxlPjxiYXNlIGhyZWY9XCInICtcclxuXHRcdFx0XHRcdFx0dGhpcy5kb21haW4gKyAnXCI+PGRpdiBpZD1cInBhcnNlclwiJyArICh0aGlzLnNlbGVjdGFibGUgPyAnPicgOiAnIHN0eWxlPVwidXNlci1zZWxlY3Q6bm9uZVwiPicpICsgdGhpcy5faGFuZGxlSHRtbChodG1sKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgK1xyXG5cdFx0XHRcdFx0XHQnPC9kaXY+PHNjcmlwdD5cInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe2lmKHdpbmRvdy5fX2RjbG91ZF93ZWV4X3Bvc3RNZXNzYWdlfHx3aW5kb3cuX19kY2xvdWRfd2VleF8pe3ZhciB0PXtkYXRhOltlXX07d2luZG93Ll9fZGNsb3VkX3dlZXhfcG9zdE1lc3NhZ2U/d2luZG93Ll9fZGNsb3VkX3dlZXhfcG9zdE1lc3NhZ2UodCk6d2luZG93Ll9fZGNsb3VkX3dlZXhfLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHQpKX19ZG9jdW1lbnQuYm9keS5vbmNsaWNrPWZ1bmN0aW9uKCl7ZSh7YWN0aW9uOlwiY2xpY2tcIn0pfSwnICtcclxuXHRcdFx0XHRcdFx0KHRoaXMuc2hvd1dpdGhBbmltYXRpb24gPyAnZG9jdW1lbnQuYm9keS5zdHlsZS5hbmltYXRpb249XCJfc2hvdyAuNXNcIiwnIDogJycpICtcclxuXHRcdFx0XHRcdFx0J3NldFRpbWVvdXQoZnVuY3Rpb24oKXtlKHthY3Rpb246XCJsb2FkXCIsdGV4dDpkb2N1bWVudC5ib2R5LmlubmVyVGV4dCxoZWlnaHQ6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJzZXJcIikuc2Nyb2xsSGVpZ2h0fSl9LDUwKTtcXHgzYy9zY3JpcHQ+JztcclxuXHRcdFx0XHRcdHRoaXMuJHJlZnMud2ViLmV2YWxKcyhcImRvY3VtZW50LndyaXRlKCdcIiArIGh0bWwucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpICsgXCInKTtkb2N1bWVudC5jbG9zZSgpXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRyZWZzLndlYi5ldmFsSnMoXHJcblx0XHRcdFx0XHQndmFyIHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKTt0Lmxlbmd0aCYmZSh7YWN0aW9uOlwiZ2V0VGl0bGVcIix0aXRsZTp0WzBdLmlubmVyVGV4dH0pO2Zvcih2YXIgbyxuPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIikscj0xO289bltyKytdOylvLmlubmVySFRNTD1vLmlubmVySFRNTC5yZXBsYWNlKC9ib2R5L2csXCIjcGFyc2VyXCIpO2Zvcih2YXIgYSxjPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpLHM9W10saT0wPT1jLmxlbmd0aCxkPTAsbD0wLGc9MDthPWNbbF07bCsrKXBhcnNlSW50KGEuc3R5bGUud2lkdGh8fGEuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikpPicgK1xyXG5cdFx0XHRcdFx0d2luZG93V2lkdGggKyAnJiYoYS5zdHlsZS5oZWlnaHQ9XCJhdXRvXCIpLGEub25sb2FkPWZ1bmN0aW9uKCl7KytkPT1jLmxlbmd0aCYmKGk9ITApfSxhLm9uZXJyb3I9ZnVuY3Rpb24oKXsrK2Q9PWMubGVuZ3RoJiYoaT0hMCksJyArIChjZmcuZXJyb3JJbWcgPyAndGhpcy5zcmM9XCInICsgY2ZnLmVycm9ySW1nICsgJ1wiLCcgOiAnJykgK1xyXG5cdFx0XHRcdFx0J2Uoe2FjdGlvbjpcImVycm9yXCIsc291cmNlOlwiaW1nXCIsdGFyZ2V0OnRoaXN9KX0sYS5oYXNBdHRyaWJ1dGUoXCJpZ25vcmVcIil8fFwiQVwiPT1hLnBhcmVudEVsZW1lbnQubm9kZU5hbWV8fChhLmk9ZysrLHMucHVzaChhLnNyYyksYS5vbmNsaWNrPWZ1bmN0aW9uKCl7ZSh7YWN0aW9uOlwicHJldmlld1wiLGltZzp7aTp0aGlzLmksc3JjOnRoaXMuc3JjfX0pfSk7ZSh7YWN0aW9uOlwiZ2V0SW1nTGlzdFwiLGltZ0xpc3Q6c30pO2Zvcih2YXIgdSxtPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSxmPTA7dT1tW2ZdO2YrKyl1Lm9uY2xpY2s9ZnVuY3Rpb24oKXt2YXIgdCxvPXRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtpZihcIiNcIj09b1swXSl7dmFyIG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoby5zdWJzdHIoMSkpO24mJih0PW4ub2Zmc2V0VG9wKX1yZXR1cm4gZSh7YWN0aW9uOlwibGlua3ByZXNzXCIsaHJlZjpvLG9mZnNldDp0fSksITF9O2Zvcih2YXIgaCx5PWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidmlkZW9cIiksdj0wO2g9eVt2XTt2KyspaC5zdHlsZS5tYXhXaWR0aD1cIjEwMCVcIixoLm9uZXJyb3I9ZnVuY3Rpb24oKXtlKHthY3Rpb246XCJlcnJvclwiLHNvdXJjZTpcInZpZGVvXCIsdGFyZ2V0OnRoaXN9KX0nICtcclxuXHRcdFx0XHRcdCh0aGlzLmF1dG9wYXVzZSA/ICcsaC5vbnBsYXk9ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO2U9eVt0XTt0KyspZSE9dGhpcyYmZS5wYXVzZSgpfScgOiAnJykgK1xyXG5cdFx0XHRcdFx0Jztmb3IodmFyIF8scD1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImF1ZGlvXCIpLHc9MDtfPXBbd107dysrKV8ub25lcnJvcj1mdW5jdGlvbigpe2Uoe2FjdGlvbjpcImVycm9yXCIsc291cmNlOlwiYXVkaW9cIix0YXJnZXQ6dGhpc30pfTsnICtcclxuXHRcdFx0XHRcdCh0aGlzLmF1dG9zY3JvbGwgPyAnZm9yKHZhciBULEU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0YWJsZVwiKSxCPTA7VD1FW0JdO0IrKyl7dmFyIE49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtOLnN0eWxlLm92ZXJmbG93PVwic2Nyb2xsXCIsVC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChOLFQpLE4uYXBwZW5kQ2hpbGQoVCl9JyA6ICcnKSArXHJcblx0XHRcdFx0XHQndmFyIHg9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJzZXJcIik7Y2xlYXJJbnRlcnZhbCh3aW5kb3cudGltZXIpLHdpbmRvdy50aW1lcj1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2kmJmNsZWFySW50ZXJ2YWwod2luZG93LnRpbWVyKSxlKHthY3Rpb246XCJyZWFkeVwiLHJlYWR5OmksaGVpZ2h0Onguc2Nyb2xsSGVpZ2h0fSl9LDM1MCknXHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdHRoaXMubm9kZXMgPSBbMV07XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1IHx8IE1QLTM2MFxyXG5cdFx0XHRcdGlmICghaHRtbCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMucnRmICYmICFhcHBlbmQpIHRoaXMucnRmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ydGYpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0aWYgKCFhcHBlbmQpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnJ0ZikgdGhpcy5ydGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnJ0Zik7XHJcblx0XHRcdFx0XHR0aGlzLnJ0ZiA9IGRpdjtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnJ0ZikgdGhpcy5ydGYgPSBkaXY7XHJcblx0XHRcdFx0XHRlbHNlIHRoaXMucnRmLmFwcGVuZENoaWxkKGRpdik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGRpdi5pbm5lckhUTUwgPSB0aGlzLl9oYW5kbGVIdG1sKGh0bWwsIGFwcGVuZCk7XHJcblx0XHRcdFx0Zm9yICh2YXIgc3R5bGVzID0gdGhpcy5ydGYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N0eWxlJyksIGkgPSAwLCBzdHlsZTsgc3R5bGUgPSBzdHlsZXNbaSsrXTspIHtcclxuXHRcdFx0XHRcdHN0eWxlLmlubmVySFRNTCA9IHN0eWxlLmlubmVySFRNTC5yZXBsYWNlKC9ib2R5L2csICcjcnRmJyArIHRoaXMuX3VpZCk7XHJcblx0XHRcdFx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoJ3Njb3BlZCcsICd0cnVlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOaHkuWKoOi9vVxyXG5cdFx0XHRcdGlmICghdGhpcy5fb2JzZXJ2ZXIgJiYgdGhpcy5sYXp5TG9hZCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xyXG5cdFx0XHRcdFx0dGhpcy5fb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2hhbmdlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGl0ZW0sIGkgPSAwOyBpdGVtID0gY2hhbmdlc1tpKytdOykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChpdGVtLmlzSW50ZXJzZWN0aW5nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtLnRhcmdldC5zcmMgPSBpdGVtLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtLnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9vYnNlcnZlci51bm9ic2VydmUoaXRlbS50YXJnZXQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHRyb290TWFyZ2luOiAnNTAwcHggMHB4IDUwMHB4IDBweCdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBfdHMgPSB0aGlzO1xyXG5cdFx0XHRcdC8vIOiOt+WPluagh+mimFxyXG5cdFx0XHRcdHZhciB0aXRsZSA9IHRoaXMucnRmLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0aXRsZScpO1xyXG5cdFx0XHRcdGlmICh0aXRsZS5sZW5ndGggJiYgdGhpcy5hdXRvc2V0VGl0bGUpXHJcblx0XHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IHRpdGxlWzBdLmlubmVyVGV4dFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyDlm77niYflpITnkIZcclxuXHRcdFx0XHR0aGlzLmltZ0xpc3QubGVuZ3RoID0gMDtcclxuXHRcdFx0XHR2YXIgaW1ncyA9IHRoaXMucnRmLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMCwgaiA9IDAsIGltZzsgaW1nID0gaW1nc1tpXTsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAocGFyc2VJbnQoaW1nLnN0eWxlLndpZHRoIHx8IGltZy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykpID4gd2luZG93V2lkdGgpXHJcblx0XHRcdFx0XHRcdGltZy5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblx0XHRcdFx0XHR2YXIgc3JjID0gaW1nLmdldEF0dHJpYnV0ZSgnc3JjJyk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kb21haW4gJiYgc3JjKSB7XHJcblx0XHRcdFx0XHRcdGlmIChzcmNbMF0gPT0gJy8nKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHNyY1sxXSA9PSAnLycpXHJcblx0XHRcdFx0XHRcdFx0XHRpbWcuc3JjID0gKHRoaXMuZG9tYWluLmluY2x1ZGVzKCc6Ly8nKSA/IHRoaXMuZG9tYWluLnNwbGl0KCc6Ly8nKVswXSA6ICcnKSArICc6JyArIHNyYztcclxuXHRcdFx0XHRcdFx0XHRlbHNlIGltZy5zcmMgPSB0aGlzLmRvbWFpbiArIHNyYztcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICghc3JjLmluY2x1ZGVzKCc6Ly8nKSkgaW1nLnNyYyA9IHRoaXMuZG9tYWluICsgJy8nICsgc3JjO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKCFpbWcuaGFzQXR0cmlidXRlKCdpZ25vcmUnKSAmJiBpbWcucGFyZW50RWxlbWVudC5ub2RlTmFtZSAhPSAnQScpIHtcclxuXHRcdFx0XHRcdFx0aW1nLmkgPSBqKys7XHJcblx0XHRcdFx0XHRcdF90cy5pbWdMaXN0LnB1c2goaW1nLnNyYyB8fCBpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKTtcclxuXHRcdFx0XHRcdFx0aW1nLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgcHJldmlldyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pZ25vcmUgPSAoKSA9PiBwcmV2aWV3ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0X3RzLiRlbWl0KCdpbWd0YXAnLCB0aGlzKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAocHJldmlldykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnQ6IHRoaXMuaSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsczogX3RzLmltZ0xpc3RcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGNmZy5lcnJvckltZylcclxuXHRcdFx0XHRcdFx0XHRfdHMuaW1nTGlzdFt0aGlzLmldID0gdGhpcy5zcmMgPSBjZmcuZXJyb3JJbWc7XHJcblx0XHRcdFx0XHRcdF90cy4kZW1pdCgnZXJyb3InLCB7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlOiAnaW1nJyxcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ6IHRoaXNcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoX3RzLmxhenlMb2FkICYmIHRoaXMuX29ic2VydmVyICYmIGltZy5zcmMgJiYgaW1nLmkgIT0gMCkge1xyXG5cdFx0XHRcdFx0XHRpbWcuc2V0QXR0cmlidXRlKCdkYXRhLXNyYycsIGltZy5zcmMpO1xyXG5cdFx0XHRcdFx0XHRpbWcucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZShpbWcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDpk77mjqXlpITnkIZcclxuXHRcdFx0XHR2YXIgbGlua3MgPSB0aGlzLnJ0Zi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xyXG5cdFx0XHRcdGZvciAodmFyIGxpbmsgb2YgbGlua3MpIHtcclxuXHRcdFx0XHRcdGxpbmsub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR2YXIganVtcCA9IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0aHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblx0XHRcdFx0XHRcdF90cy4kZW1pdCgnbGlua3ByZXNzJywge1xyXG5cdFx0XHRcdFx0XHRcdGhyZWYsXHJcblx0XHRcdFx0XHRcdFx0aWdub3JlOiAoKSA9PiBqdW1wID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGlmIChqdW1wICYmIGhyZWYpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaHJlZlswXSA9PSAnIycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChfdHMudXNlQW5jaG9yKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdF90cy5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDogaHJlZi5zdWJzdHIoMSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGhyZWYuaW5kZXhPZignaHR0cCcpID09IDAgfHwgaHJlZi5pbmRleE9mKCcvLycpID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogaHJlZlxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOinhumikeWkhOeQhlxyXG5cdFx0XHRcdHZhciB2aWRlb3MgPSB0aGlzLnJ0Zi5nZXRFbGVtZW50c0J5VGFnTmFtZSgndmlkZW8nKTtcclxuXHRcdFx0XHRfdHMudmlkZW9Db250ZXh0cyA9IHZpZGVvcztcclxuXHRcdFx0XHRmb3IgKGxldCB2aWRlbywgaSA9IDA7IHZpZGVvID0gdmlkZW9zW2krK107KSB7XHJcblx0XHRcdFx0XHR2aWRlby5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJztcclxuXHRcdFx0XHRcdHZpZGVvLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0X3RzLiRlbWl0KCdlcnJvcicsIHtcclxuXHRcdFx0XHRcdFx0XHRzb3VyY2U6ICd2aWRlbycsXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0OiB0aGlzXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmlkZW8ub25wbGF5ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGlmIChfdHMuYXV0b3BhdXNlKVxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGl0ZW0sIGkgPSAwOyBpdGVtID0gX3RzLnZpZGVvQ29udGV4dHNbaSsrXTspXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoaXRlbSAhPSB0aGlzKSBpdGVtLnBhdXNlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOmfs+mikeWkhOeQhlxyXG5cdFx0XHRcdHZhciBhdWRpb3MgPSB0aGlzLnJ0Zi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYXVkaW8nKTtcclxuXHRcdFx0XHRmb3IgKHZhciBhdWRpbyBvZiBhdWRpb3MpXHJcblx0XHRcdFx0XHRhdWRpby5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdF90cy4kZW1pdCgnZXJyb3InLCB7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlOiAnYXVkaW8nLFxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldDogdGhpc1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDooajmoLzlpITnkIZcclxuXHRcdFx0XHRpZiAodGhpcy5hdXRvc2Nyb2xsKSB7XHJcblx0XHRcdFx0XHR2YXIgdGFibGVzID0gdGhpcy5ydGYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RhYmxlJyk7XHJcblx0XHRcdFx0XHRmb3IgKHZhciB0YWJsZSBvZiB0YWJsZXMpIHtcclxuXHRcdFx0XHRcdFx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdFx0XHRkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuXHRcdFx0XHRcdFx0dGFibGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZGl2LCB0YWJsZSk7XHJcblx0XHRcdFx0XHRcdGRpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghYXBwZW5kKSB0aGlzLmRvY3VtZW50LmFwcGVuZENoaWxkKHRoaXMucnRmKTtcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVzID0gWzFdO1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnbG9hZCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zaG93QW0gPSAnJywgNTAwKTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEg1IHx8IE1QLTM2MFxyXG5cdFx0XHRcdHZhciBub2RlcztcclxuXHRcdFx0XHRpZiAoIWh0bWwpIHJldHVybiB0aGlzLm5vZGVzID0gW107XHJcblx0XHRcdFx0dmFyIHBhcnNlciA9IG5ldyBQYXJzZXIoaHRtbCwgdGhpcyk7XHJcblx0XHRcdFx0Ly8g57yT5a2Y6K+75Y+WXHJcblx0XHRcdFx0aWYgKHRoaXMudXNlQ2FjaGUpIHtcclxuXHRcdFx0XHRcdHZhciBoYXNoVmFsID0gaGFzaChodG1sKTtcclxuXHRcdFx0XHRcdGlmIChjYWNoZVtoYXNoVmFsXSlcclxuXHRcdFx0XHRcdFx0bm9kZXMgPSBjYWNoZVtoYXNoVmFsXTtcclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRub2RlcyA9IHBhcnNlci5wYXJzZSgpO1xyXG5cdFx0XHRcdFx0XHRjYWNoZVtoYXNoVmFsXSA9IG5vZGVzO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBub2RlcyA9IHBhcnNlci5wYXJzZSgpO1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3BhcnNlJywgbm9kZXMpO1xyXG5cdFx0XHRcdGlmIChhcHBlbmQpIHRoaXMubm9kZXMgPSB0aGlzLm5vZGVzLmNvbmNhdChub2Rlcyk7XHJcblx0XHRcdFx0ZWxzZSB0aGlzLm5vZGVzID0gbm9kZXM7XHJcblx0XHRcdFx0aWYgKG5vZGVzLmxlbmd0aCAmJiBub2Rlcy50aXRsZSAmJiB0aGlzLmF1dG9zZXRUaXRsZSlcclxuXHRcdFx0XHRcdHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogbm9kZXMudGl0bGVcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKHRoaXMuaW1nTGlzdCkgdGhpcy5pbWdMaXN0Lmxlbmd0aCA9IDA7XHJcblx0XHRcdFx0dGhpcy52aWRlb0NvbnRleHRzID0gW107XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0KGZ1bmN0aW9uIGYoY3MpIHtcclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IGNzLmxlbmd0aDsgaS0tOykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjc1tpXS50b3ApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNzW2ldLmNvbnRyb2xzID0gW107XHJcblx0XHRcdFx0XHRcdFx0XHRjc1tpXS5pbml0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmKGNzW2ldLiRjaGlsZHJlbik7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KSh0aGlzLiRjaGlsZHJlbilcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2xvYWQnKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdHZhciBoZWlnaHQ7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XHJcblx0XHRcdFx0dGhpcy5fdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgSDUgfHwgTVAtMzYwXHJcblx0XHRcdFx0XHR0aGlzLnJlY3QgPSB0aGlzLnJ0Zi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly8gI2lmbmRlZiBINSB8fCBNUC0zNjBcclxuXHRcdFx0XHRcdHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcylcclxuXHRcdFx0XHRcdFx0LnNlbGVjdCgnI190b3AnKS5ib3VuZGluZ0NsaWVudFJlY3QoKS5leGVjKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXMpIHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnJlY3QgPSByZXNbMF07XHJcblx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucmVjdC5oZWlnaHQgPT0gaGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCdyZWFkeScsIHRoaXMucmVjdClcclxuXHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQgPSB0aGlzLnJlY3QuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdC8vICNpZm5kZWYgSDUgfHwgTVAtMzYwXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0fSwgMzUwKTtcclxuXHRcdFx0XHRpZiAodGhpcy5zaG93V2l0aEFuaW1hdGlvbiAmJiAhYXBwZW5kKSB0aGlzLnNob3dBbSA9ICdhbmltYXRpb246X3Nob3cgLjVzJztcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I635Y+W5paH5pys5YaF5a65XHJcblx0XHRcdGdldFRleHQobnMgPSB0aGlzLm5vZGVzKSB7XHJcblx0XHRcdFx0dmFyIHR4dCA9ICcnO1xyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0dHh0ID0gdGhpcy5fdGV4dDtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZkZWYgSDUgfHwgTVAtMzYwXHJcblx0XHRcdFx0dHh0ID0gdGhpcy5ydGYuaW5uZXJUZXh0O1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZm5kZWYgSDUgfHwgQVBQLVBMVVMtTlZVRSB8fCBNUC0zNjBcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbjsgbiA9IG5zW2krK107KSB7XHJcblx0XHRcdFx0XHRpZiAobi50eXBlID09ICd0ZXh0JykgdHh0ICs9IG4udGV4dC5yZXBsYWNlKC8mbmJzcDsvZywgJ1xcdTAwQTAnKS5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmd0Oy9nLCAnPicpXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAobi50eXBlID09ICdicicpIHR4dCArPSAnXFxuJztcclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDlnZfnuqfmoIfnrb7liY3lkI7liqDmjaLooYxcclxuXHRcdFx0XHRcdFx0dmFyIGJsb2NrID0gbi5uYW1lID09ICdwJyB8fCBuLm5hbWUgPT0gJ2RpdicgfHwgbi5uYW1lID09ICd0cicgfHwgbi5uYW1lID09ICdsaScgfHwgKG4ubmFtZVswXSA9PSAnaCcgJiYgbi5uYW1lWzFdID5cclxuXHRcdFx0XHRcdFx0XHQnMCcgJiYgbi5uYW1lWzFdIDwgJzcnKTtcclxuXHRcdFx0XHRcdFx0aWYgKGJsb2NrICYmIHR4dCAmJiB0eHRbdHh0Lmxlbmd0aCAtIDFdICE9ICdcXG4nKSB0eHQgKz0gJ1xcbic7XHJcblx0XHRcdFx0XHRcdGlmIChuLmNoaWxkcmVuKSB0eHQgKz0gdGhpcy5nZXRUZXh0KG4uY2hpbGRyZW4pO1xyXG5cdFx0XHRcdFx0XHRpZiAoYmxvY2sgJiYgdHh0W3R4dC5sZW5ndGggLSAxXSAhPSAnXFxuJykgdHh0ICs9ICdcXG4nO1xyXG5cdFx0XHRcdFx0XHRlbHNlIGlmIChuLm5hbWUgPT0gJ3RkJyB8fCBuLm5hbWUgPT0gJ3RoJykgdHh0ICs9ICdcXHQnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRyZXR1cm4gdHh0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDplJrngrnot7PovaxcclxuXHRcdFx0aW4gKG9iaikge1xyXG5cdFx0XHRcdGlmIChvYmoucGFnZSAmJiBvYmouc2VsZWN0b3IgJiYgb2JqLnNjcm9sbFRvcCkgdGhpcy5faW4gPSBvYmo7XHJcblx0XHRcdH0sXHJcblx0XHRcdG5hdmlnYXRlVG8ob2JqKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnVzZUFuY2hvcikgcmV0dXJuIG9iai5mYWlsICYmIG9iai5mYWlsKCdBbmNob3IgaXMgZGlzYWJsZWQnKTtcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHRcdGlmICghb2JqLmlkKVxyXG5cdFx0XHRcdFx0d2VleERvbS5zY3JvbGxUb0VsZW1lbnQodGhpcy4kcmVmcy53ZWIpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMuJHJlZnMud2ViLmV2YWxKcygndmFyIHBvcz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIicgKyBvYmouaWQgK1xyXG5cdFx0XHRcdFx0XHQnXCIpO2lmKHBvcylwb3N0KHthY3Rpb246XCJsaW5rcHJlc3NcIixocmVmOlwiI1wiLG9mZnNldDpwb3Mub2Zmc2V0VG9wKycgKyAob2JqLm9mZnNldCB8fCAwKSArICd9KScpO1xyXG5cdFx0XHRcdG9iai5zdWNjZXNzICYmIG9iai5zdWNjZXNzKCk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0dmFyIGQgPSAnICc7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTiB8fCBNUC1RUSB8fCBNUC1UT1VUSUFPXHJcblx0XHRcdFx0ZCA9ICc+Pj4nO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdHZhciBzZWxlY3RvciA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcy5faW4gPyB0aGlzLl9pbi5wYWdlIDogdGhpcykuc2VsZWN0KCh0aGlzLl9pbiA/IHRoaXMuX2luLnNlbGVjdG9yIDpcclxuXHRcdFx0XHRcdCcjX3RvcCcpICsgKG9iai5pZCA/IGAke2R9IyR7b2JqLmlkfSwke3RoaXMuX2luP3RoaXMuX2luLnNlbGVjdG9yOicjX3RvcCd9JHtkfS4ke29iai5pZH1gIDogJycpKS5ib3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRpZiAodGhpcy5faW4pIHNlbGVjdG9yLnNlbGVjdCh0aGlzLl9pbi5zZWxlY3Rvcikuc2Nyb2xsT2Zmc2V0KCkuc2VsZWN0KHRoaXMuX2luLnNlbGVjdG9yKS5ib3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHRlbHNlIHNlbGVjdG9yLnNlbGVjdFZpZXdwb3J0KCkuc2Nyb2xsT2Zmc2V0KCk7XHJcblx0XHRcdFx0c2VsZWN0b3IuZXhlYyhyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFyZXNbMF0pIHJldHVybiBvYmouZmFpbCAmJiBvYmouZmFpbCgnTGFiZWwgbm90IGZvdW5kJylcclxuXHRcdFx0XHRcdHZhciBzY3JvbGxUb3AgPSByZXNbMV0uc2Nyb2xsVG9wICsgcmVzWzBdLnRvcCAtIChyZXNbMl0gPyByZXNbMl0udG9wIDogMCkgKyAob2JqLm9mZnNldCB8fCAwKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLl9pbikgdGhpcy5faW4ucGFnZVt0aGlzLl9pbi5zY3JvbGxUb3BdID0gc2Nyb2xsVG9wO1xyXG5cdFx0XHRcdFx0ZWxzZSB1bmkucGFnZVNjcm9sbFRvKHtcclxuXHRcdFx0XHRcdFx0c2Nyb2xsVG9wLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0b2JqLnN1Y2Nlc3MgJiYgb2JqLnN1Y2Nlc3MoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5bop4bpopHlr7nosaFcclxuXHRcdFx0Z2V0VmlkZW9Db250ZXh0KGlkKSB7XHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0aWYgKCFpZCkgcmV0dXJuIHRoaXMudmlkZW9Db250ZXh0cztcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gdGhpcy52aWRlb0NvbnRleHRzLmxlbmd0aDsgaS0tOylcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMudmlkZW9Db250ZXh0c1tpXS5pZCA9PSBpZCkgcmV0dXJuIHRoaXMudmlkZW9Db250ZXh0c1tpXTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gI2lmZGVmIEg1IHx8IEFQUC1QTFVTLU5WVUUgfHwgTVAtMzYwXHJcblx0XHRcdF9oYW5kbGVIdG1sKGh0bWwsIGFwcGVuZCkge1xyXG5cdFx0XHRcdGlmICghYXBwZW5kKSB7XHJcblx0XHRcdFx0XHQvLyDlpITnkIYgdGFnLXN0eWxlIOWSjCB1c2VyQWdlbnRTdHlsZXNcclxuXHRcdFx0XHRcdHZhciBzdHlsZSA9ICc8c3R5bGU+QGtleWZyYW1lcyBfc2hvd3swJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fWltZ3ttYXgtd2lkdGg6MTAwJX0nO1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaXRlbSBpbiBjZmcudXNlckFnZW50U3R5bGVzKVxyXG5cdFx0XHRcdFx0XHRzdHlsZSArPSBgJHtpdGVtfXske2NmZy51c2VyQWdlbnRTdHlsZXNbaXRlbV19fWA7XHJcblx0XHRcdFx0XHRmb3IgKGl0ZW0gaW4gdGhpcy50YWdTdHlsZSlcclxuXHRcdFx0XHRcdFx0c3R5bGUgKz0gYCR7aXRlbX17JHt0aGlzLnRhZ1N0eWxlW2l0ZW1dfX1gO1xyXG5cdFx0XHRcdFx0c3R5bGUgKz0gJzwvc3R5bGU+JztcclxuXHRcdFx0XHRcdGh0bWwgPSBzdHlsZSArIGh0bWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOWkhOeQhiBycHhcclxuXHRcdFx0XHRpZiAoaHRtbC5pbmNsdWRlcygncnB4JykpXHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9bMC05Ll0rXFxzKnJweC9nLCAkID0+IChwYXJzZUZsb2F0KCQpICogd2luZG93V2lkdGggLyA3NTApICsgJ3B4Jyk7XHJcblx0XHRcdFx0cmV0dXJuIGh0bWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHRfbWVzc2FnZShlKSB7XHJcblx0XHRcdFx0Ly8g5o6l5pS2IHdlYi12aWV3IOa2iOaBr1xyXG5cdFx0XHRcdHZhciBkID0gZS5kZXRhaWwuZGF0YVswXTtcclxuXHRcdFx0XHRzd2l0Y2ggKGQuYWN0aW9uKSB7XHJcblx0XHRcdFx0XHRjYXNlICdsb2FkJzpcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnbG9hZCcpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmhlaWdodCA9IGQuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHR0aGlzLl90ZXh0ID0gZC50ZXh0O1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2dldFRpdGxlJzpcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuYXV0b3NldFRpdGxlKVxyXG5cdFx0XHRcdFx0XHRcdHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGQudGl0bGVcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2dldEltZ0xpc3QnOlxyXG5cdFx0XHRcdFx0XHR0aGlzLmltZ0xpc3QubGVuZ3RoID0gMDtcclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IGQuaW1nTGlzdC5sZW5ndGg7IGktLTspXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pbWdMaXN0LnNldEl0ZW0oaSwgZC5pbWdMaXN0W2ldKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdwcmV2aWV3JzpcclxuXHRcdFx0XHRcdFx0dmFyIHByZXZpZXcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRkLmltZy5pZ25vcmUgPSAoKSA9PiBwcmV2aWV3ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2ltZ3RhcCcsIGQuaW1nKTtcclxuXHRcdFx0XHRcdFx0aWYgKHByZXZpZXcpXHJcblx0XHRcdFx0XHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50OiBkLmltZy5pLFxyXG5cdFx0XHRcdFx0XHRcdFx0dXJsczogdGhpcy5pbWdMaXN0XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsaW5rcHJlc3MnOlxyXG5cdFx0XHRcdFx0XHR2YXIganVtcCA9IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0aHJlZiA9IGQuaHJlZjtcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnbGlua3ByZXNzJywge1xyXG5cdFx0XHRcdFx0XHRcdGhyZWYsXHJcblx0XHRcdFx0XHRcdFx0aWdub3JlOiAoKSA9PiBqdW1wID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0aWYgKGp1bXAgJiYgaHJlZikge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChocmVmWzBdID09ICcjJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMudXNlQW5jaG9yKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR3ZWV4RG9tLnNjcm9sbFRvRWxlbWVudCh0aGlzLiRyZWZzLndlYiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldDogZC5vZmZzZXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGhyZWYuaW5jbHVkZXMoJzovLycpKVxyXG5cdFx0XHRcdFx0XHRcdFx0cGx1cy5ydW50aW1lLm9wZW5XZWIoaHJlZik7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IGhyZWZcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdlcnJvcic6XHJcblx0XHRcdFx0XHRcdGlmIChkLnNvdXJjZSA9PSAnaW1nJyAmJiBjZmcuZXJyb3JJbWcpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pbWdMaXN0LnNldEl0ZW0oZC50YXJnZXQuaSwgY2ZnLmVycm9ySW1nKTtcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnZXJyb3InLCB7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlOiBkLnNvdXJjZSxcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ6IGQudGFyZ2V0XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncmVhZHknOlxyXG5cdFx0XHRcdFx0XHR0aGlzLmhlaWdodCA9IGQuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHRpZiAoZC5yZWFkeSkgdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKS5zZWxlY3QoJyNfdG9wJykuYm91bmRpbmdDbGllbnRSZWN0KCkuZXhlYyhyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVjdCA9IHJlc1swXTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCdyZWFkeScsIHJlc1swXSk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnY2xpY2snOlxyXG5cdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCd0YXAnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0QGtleWZyYW1lcyBfc2hvdyB7XHJcblx0XHQwJSB7XHJcblx0XHRcdG9wYWNpdHk6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0MTAwJSB7XHJcblx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiAjaWZkZWYgTVAtV0VJWElOICovXHJcblx0Omhvc3Qge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRvdmVyZmxvdzogc2Nyb2xsO1xyXG5cdFx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vanlmLXBhcnNlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9qeWYtcGFyc2VyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyNTcyNDUwMjM5MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jyf-parser/jyf-parser-create-component',
    {
        'components/jyf-parser/jyf-parser-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(494))
        })
    },
    [['components/jyf-parser/jyf-parser-create-component']]
]);
