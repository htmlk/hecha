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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(2);



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;


	var str=__webpack_require__(3);
	var footer=__webpack_require__(4);

	var common=__webpack_require__(5);

	common.body($('body'),str);
	common.append($('.container'),footer);
	common.switchPage(4);

	window.onload=function () {
	    var myScroll = new IScroll("#index-scroll",{
	        mouseWheel:true,
	        scrollbars:true,
	        interactiveScrollbars:true,
	});
	};

	var myScroll=new IScroll('#index-scroll');
	myScroll.on('scrollEnd',function () {
	    hidescrollbar=true;
	});


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">    <header>        <ul>            <li class=\"head-logo\"><img src=\"/build/images/logo.png\"></li>            <li class=\"header-input\">                <img src=\"/build/images/search.png\">                <input type=\"text\" value  placeholder=\"搜索\">            </li>            <li><a href=\"shoppingCart\" class=\"iconfont\">&#xe66c;</a></li>        </ul>    </header>    <section id=\"index-scroll\">        <div>            <img class=\"i2\" src=\"/images/2.jpg\" alt=\"\">            <img class=\"i3\" src=\"/images/3.png\" alt=\"\">            <video src=\"\"></video>            <img class=\"i4\" src=\"/images/4.png\" alt=\"\">            <img class=\"i7\" src=\"/images/7.jpg\" alt=\"\">            <img class=\"i8\" src=\"/images/8.jpg\" alt=\"\">            <img class=\"i9\" src=\"/images/9.jpg\" alt=\"\">            <img class=\"i10\" src=\"/images/10.jpg\" alt=\"\">            <img class=\"i11\" src=\"/images/11.jpg\" alt=\"\">            <img  class=\"i13\" src=\"/images/13.jpg\" alt=\"\">            <img class=\"i14\" src=\"/images/14.jpg\" alt=\"\">            <img class=\"i15\" src=\"/images/15.jpg\" alt=\"\">            <img class=\"i16\" src=\"/images/16.jpg\" alt=\"\">            <img class=\"i17\" src=\"/images/17.jpg\" alt=\"\">            <img class=\"i17\" src=\"/images/18.jpg\" alt=\"\">            <img class=\"i17\" src=\"/images/19.jpg\" alt=\"\">        </div>    </section></div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">    <ul>        <li  data-url=\"/build/my.html\">            <i class=\"iconfont\">&#xe61a;</i>            <b>我的</b>        </li>        <li data-url=\"/build/sortMenu.html\">            <i class=\"iconfont dd\" >&#xe602;</i>            <b>分类</b>        </li>        <li class=\"active\" data-url=\"/build/index.html\">            <i class=\"iconfont\">&#xe613;</i>            <b>主页</b>        </li>        <li data-url=\"/build/activity.html\">            <i class=\"iconfont\">&#xe61b;</i>            <b>活动</b>        </li>      <li data-url=\"/build/machine.html\">            <i class=\"iconfont\">&#x353e;</i>            <b>茶饮机</b>        </li>    </ul></footer>"

/***/ },
/* 5 */
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



/***/ }
/******/ ]);