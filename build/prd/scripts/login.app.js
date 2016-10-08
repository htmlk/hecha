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

	module.exports = __webpack_require__(27);


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

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(28);



/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;



	  var str=__webpack_require__(29);

	  var common=__webpack_require__(5);



	  common.renderBody($('body'),strHeader+str);



/***/ },

/***/ 29:
/***/ function(module, exports) {

	module.exports = "<div class=\"login-con\"><header>  <ul>    <li><img src=\"/images/my-images/x-w.png\" alt=\"\"></li>    <li>登录</li>    <li></li>  </ul></header><section>  <div class=\"top\">    <ul>      <li></li>      <li></li>      <li></li>    </ul>  </div>  <div class=\"input-box\">    <div class=\"input-12\">      <span></span><input type=\"text\" placeholder=\"请输入用户名或邮箱\">      <span></span><input type=\"password\" placeholder=\"请输入密码\">    </div>    <div class=\"input-btn\">        <input type=\"button\" name=\"name\" value=\"登录\">    </div>    <div class=\"input-a\">      <div class=\"input-al\">        <a>免费注册</a>        <a>忘记密码</a>      </div>    </div>    <div class=\"input-link\">      <ul>        <li><hr/></li>        <li>第三方登录</li>        <li><hr/></li>      </ul>    </div>    <div class=\"input-fenx\">      <ul>        <li><img src=\"/images/my-images/alipaylogin.png\" alt=\"\" /></li>        <li><img src=\"/images/my-images/wechatlogo.png\" alt=\"\" /></li>        <li><img src=\"/images/my-images/alipaylogin.png\" alt=\"\" /></li>        <li><img src=\"/images/my-images/weibologin.png\" alt=\"\" /></li>      </ul>    </div>  </div></section><footer>123</footer></div>"

/***/ }

/******/ });