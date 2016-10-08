/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);


/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">    <ul>        <li  data-url=\"/build/my.html\">            <i class=\"iconfont\">&#xe61a;</i>            <b>我的</b>        </li>        <li data-url=\"/build/sortMenu.html\">            <i class=\"iconfont dd\" >&#xe602;</i>            <b>分类</b>        </li>        <li class=\"active\" data-url=\"/build/index.html\">            <i class=\"iconfont\">&#xe613;</i>            <b>主页</b>        </li>        <li data-url=\"/build/activity.html\">            <i class=\"iconfont\">&#xe61b;</i>            <b>活动</b>        </li>      <li data-url=\"/build/machine.html\">            <i class=\"iconfont\">&#x353e;</i>            <b>茶饮机</b>        </li>    </ul></footer>"

/***/ },

/***/ 5:
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
	  renderBody: function ($el,str) {
	      $el.prepend(str);
	  },
	  body:function ($el, str) {
	      $el.prepend(str);
	  },
	  inner:function($el,str){
	    $el.html(str);
	  },
	  append:function($el,str){
	    $el.append(str);
	  },
	  renderHtml:function(str){
	    $('body').prepend(str);
	  },
	  switchPage: function (index) {
	    $('#footer ul li').eq(index).addClass('active').siblings().removeClass('active');
	    $('#footer').on('tap', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	  }
	};

	module.exports = common;



/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(31);



/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;


	  var str=__webpack_require__(32);
	  var footer=__webpack_require__(4);

	  var common=__webpack_require__(5);
	  
	  common.renderBody($('body'), str);
	  common.append($('.my-container'),footer);
	  common.switchPage(0);


/***/ },

/***/ 32:
/***/ function(module, exports) {

	module.exports = "<div class=\"my-container\">    <header>        <ul>            <li></li>            <li>                <div class=\"tou\"><img src=\"/images/my-images/hpoto.jpg\" alt=\"\"></div>                <div class=\"user\">                    <div class=\"tell\">18679654648</div>                    <div class=\"vip\">                      <span>普卡</span><span>vip</span></div>                </div>            </li>            <li><img src=\"/images/my-images/myinfo.png\" alt=\"\"></li>        </ul>        <ul>          <li></li>            <li></li>            <li><img src=\"/images/my-images/vip1.png\" alt=\"\"></li>            <li><img src=\"/images/my-images/vip2.png\" alt=\"\"></li>            <li><img src=\"/images/my-images/vip3.png\" alt=\"\"></li>            <li><img src=\"/images/my-images/vip4.png\" alt=\"\"></li>            <li></li>            <li></li>        </ul>    </header>    <!-- section -->    <section>      <div class=\"info\">          <ul>            <li><a href=\"\">300</a><span>积分</span></li>            <li><a href=\"\">0</a><span>优惠券</span></li>            <li><a href=\"\">关注微信</a><span></span></li>            <li><a href=\"\">+50</a><span>签到送积分</span></li>          </ul>      </div>      <div class=\"list\">        <ul>          <li><i></i><a href=\"\">我的订单</a><span></span></li>          <li><i></i><a href=\"\">我的收藏</a><span></span></li>          <li><i></i><a href=\"\">收货地址管理</a><span></span></li>        </ul>        <ul>            <li><i></i><a href=\"\">积分商城</a><span></span></li>          <li><i></i><a href=\"\">茶生活</a><span></span></li>          <li><i></i><a href=\"\">帮助中心</a><span></span></li>          <li><i></i><a href=\"\">联系客服</a><span></span></li>          <li><i></i><a href=\"\">关于我们</a><span></span></li>        </ul>      </div>    </section></div>"

/***/ }

/******/ });