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

	module.exports = __webpack_require__(10);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
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



/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(11);



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str=__webpack_require__(12);
	var footer=__webpack_require__(4);
	var common=__webpack_require__(5);

	common.body($('body'),str);
	common.append($('.container2'),footer);
	common.switchPage(3);

	//swiper定义
	var mySwiper=new Swiper('#index-swiper',{
	    onSlideChangeEnd:function (swiper) {
	        $('#huodong-hang div').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
	    }
	});

	$('#huodong-hang div').on('tap',function () {
	    mySwiper.slideTo($(this).index());
	    $(this).addClass('active').siblings().removeClass('active');
	});

	$.ajax({
	  url:'/api/list.php',
	    success:function (res) {
	        var html=template('list',res);
	        common.inner($('#index-scroll'),html)
	    }
	});
	$.ajax({
	    url:'/api/list.php',
	    success:function (res) {
	        var arr=[];
	        arr.push(res.data[1]);
	        var obj={
	            'data':arr
	        }
	        var html=template('list2',obj);
	        console.log(arr);
	        common.inner($('#index-scroll2'),html)
	    }
	});

	$.ajax({
	    url:'/api/list.php',
	    success:function (res) {
	        var arr=[];
	        arr.push(res.data[0]);
	        var obj={
	            'data':arr
	        }
	        var html=template('list3',obj);
	        console.log(arr);
	        common.inner($('#index-scroll3'),html)
	    }
	});


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container2\">    <header>		<ul>		  <li>			<a href=\"sortMenu.html\"><img src=\"/build/images/sort.images/back.png\" alt=\"返回\"></a>		  </li>		  <li id=\"menu\">活动</script>		  </li>		  <li></li>		</ul>	</header>    <div id=\"huodong-hang\">        <div class=\"active\">全部</div>        <div class=\"tuan\">团购</div>        <div class=\"jiang\">降价拍</div>    </div>    <section>        <div class=\"swiper-container\" id=\"index-swiper\">            <div class=\"swiper-wrapper\">                <div class=\"swiper-slide\">                    <section id=\"index-scroll\">                        <script id=\"list\" type=\"text/html\">                        <div class=\"hd-box\">                            {{each data as value i}}                            <dl>                                <img class=\"a\" src={{value.img1}} alt=\"\">                                <dt>                                    <img src={{value.img2}} alt=\"\"></dt>                                <dd><p class=\"name\">{{value.name}}</p>                                <p class=\"jieshao\">{{value.jieshao}}                                <span class=\"jia\">{{value.jia}}</span>                                <span class=\"shijia\">{{value.shijia}}</span></p>                                <p class=\"yishou\">{{value.yishou}}</p></dd>                            </dl>                            {{/each}}                        </div>                        </script>                    </section>                </div>                <div class=\"swiper-slide\">                    <section id=\"index-scroll2\">                    <script id=\"list2\" type=\"text/html\">                        <div class=\"hd-box\">                            {{each data as value i}}                            <dl>                                <img class=\"a\" src={{value.img1}} alt=\"\">                                <dt>                                    <img src={{value.img2}} alt=\"\"></dt>                                <dd><p class=\"name\">{{value.name}}</p>                                    <p class=\"jieshao\">{{value.jieshao}}                                        <span class=\"jia\">{{value.jia}}</span>                                        <span class=\"shijia\">{{value.shijia}}</span></p>                                    <p class=\"yishou\">{{value.yishou}}</p></dd>                            </dl>                            {{/each}}                        </div>                    </script>                </section></div>                <div class=\"swiper-slide\">                    <section id=\"index-scroll3\">                    <script id=\"list3\" type=\"text/html\">                        <div class=\"hd-box\">                            {{each data as value i}}                            <dl>                                <img class=\"a\" src={{value.img1}} alt=\"\">                                <dt>                                    <img src={{value.img2}} alt=\"\"></dt>                                <dd><p class=\"name\">{{value.name}}</p>                                    <p class=\"jieshao\">{{value.jieshao}}                                        <span class=\"jia\">{{value.jia}}</span>                                        <span class=\"shijia\">{{value.shijia}}</span></p>                                    <p class=\"yishou\">{{value.yishou}}</p></dd>                            </dl>                            {{/each}}                        </div>                    </script>                </section></div>            </div>        </div>    </section></div>"

/***/ }
/******/ ]);