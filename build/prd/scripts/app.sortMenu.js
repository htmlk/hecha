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

	module.exports = __webpack_require__(24);


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

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(25);



/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(26);
	var footer=__webpack_require__(4);

	var common = __webpack_require__(5);

	common.renderBody($('body'),str);
	common.append($('.container'),footer);
	common.switchPage(1);
	window.onload=function(){
	  var myScroll=new IScroll("#index-scroll",{
	    click:true
	  });
	};



/***/ },

/***/ 26:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">  <header>    <ul>      <li>        <a href=\"index.html\"><img src=\"/build/images/sort.images/back.png\" alt=\"返回\"></a>      </li>      <li>分类</li>      <li></li>    </ul>  </header>  <section id=\"index-scroll\">    <ul>      <li><a href=\"index.html\"><img src=\"/build/images/sort.images/sortMenu1.jpg\" alt=\"\"></a></li>      <li><a href=\"sort.html?1\"><img src=\"/build/images/sort.images/sortMenu2.jpg\" alt=\"\"></a></li>      <li><a href=\"sort.html?2\"><img src=\"/build/images/sort.images/sortMenu3.jpg\" alt=\"\"></a></li>      <li><a href=\"sort.html?3\"><img src=\"/build/images/sort.images/sortMenu4.jpg\" alt=\"\"></a></li>      <li><a href=\"sort.html?4\"><img src=\"/build/images/sort.images/sortMenu5.jpg\" alt=\"\"></a></li>      <li><a href=\"sort.html?5\"><img src=\"/build/images/sort.images/sortMenu6.jpg\" alt=\"\"></a></li>      <li><a href=\"sort.html?6\"><img src=\"/build/images/sort.images/sortMenu7.jpg\" alt=\"\"></a></li>      <li><a href=\"sort.html?7\"><img src=\"/build/images/sort.images/sortMenu8.jpg\" alt=\"\"></a></li>      <li><a href=\"sort.html?8\"><img src=\"/build/images/sort.images/sortMenu9.jpg\" alt=\"\"></a></li>    </ul>  </section></div>"

/***/ }

/******/ });