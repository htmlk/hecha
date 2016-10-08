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

	module.exports = __webpack_require__(18);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">    <ul>        <li  data-url=\"/build/my.html\">            <i class=\"iconfont\">&#xe61a;</i>            <b>我的</b>        </li>        <li data-url=\"/build/sortMenu.html\">            <i class=\"iconfont dd\" >&#xe602;</i>            <b>分类</b>        </li>        <li class=\"active\" data-url=\"/build/index.html\">            <i class=\"iconfont\">&#xe613;</i>            <b>主页</b>        </li>        <li data-url=\"/build/activity.html\">            <i class=\"iconfont\">&#xe61b;</i>            <b>活动</b>        </li>      <li data-url=\"/build/machine.html\">            <i class=\"iconfont\">&#x353e;</i>            <b>茶饮机</b>        </li>    </ul></footer>"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var changeLostarage = __webpack_require__(6);

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
	  },
	  cartNumber:function(){
	    var arr2=changeLostarage(1, 'shoppingCart', 'json');
	    var len=arr2.length;
	    console.log(1);
	    console.log($);
	    console.log(document.querySelector('.headerRight h2'));
	    $('.headerRight h2').html(len);
	  }
	};

	module.exports = common;



/***/ },
/* 6 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/**
	 * Created by Administrator on 2016/9/22.
	 */
	module.exports = changeLostarage;

	function changeLostarage(num, name, value) {
	    var argLength = arguments.length;
	    if (num == 1) {
	        if (argLength == 1) {
	            return localStorage;
	        }
	        if (argLength == 2) {
	            return localStorage.getItem(name);
	        }
	        if (argLength == 3) {
	            if (value == "json") {
	                var localStr = localStorage.getItem(name);
	                return JSON.parse(localStr);
	            } else if (value == "number") {
	                var localStr = localStorage.getItem(name);
	                return parseInt(localStr);
	            } else if (value == "string") {
	                return localStorage.getItem(name);
	            } else if (value == "date") {
	                var localStr = localStorage.getItem(name);
	                return new Date(localStr);
	            } else if (typeof value == "object") {
	                if (value instanceof Date) {
	                    str = value + "";
	                } else {
	                    var str = localStorage.getItem(name);
	                    var arr = [];
	                    if (str == null) {
	                        str = "";
	                    } else {
	                        var obj = JSON.parse(str);
	                        arr = obj;
	                    }
	                    arr.push(value);
	                    str = JSON.stringify(arr);
	                }
	                localStorage.setItem(name, str);
	            } else {
	                localStorage.setItem(name, value);
	            }
	        }
	    }
	    if (num == 0) {
	        if (argLength == 1) {
	            localStorage.clear()
	        } else {
	            for (var i = 1; i < argLength; i++) {
	                localStorage.removeItem(arguments[i]);
	            }
	        }
	    }
	}

	function changeLocalhost(num, name, value) {
	    var argLength = arguments.length;
	    if (num == 1) {
	        var type = typeof value;
	        if (type == "object") {
	            var str;
	            if (value instanceof Date) {
	                str = value + "&&" + "type:" + type;
	            }
	        }
	    }
	    if (num == 0) {
	        if (argLength == 1) {
	            localStorage.clear()
	        } else {
	            for (var i = 1; i < argLength; i++) {
	                localStorage.removeItem(arguments[i]);
	            }
	        }
	    }
	}



/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(19);



/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(20);
	var footer = __webpack_require__(4);

	var changeLostarage = __webpack_require__(6);

	var common = __webpack_require__(5);
	//var iscrollUtil = require('../utils/iscroll.util.js');

	common.renderBody($('body'), str);
	common.append($('.container'), footer);
	common.switchPage(2);

	//购物车商品数目
	common.cartNumber();

	//轮播
	var navSwiper = new Swiper('.swiper-container', {
	  loop : true,
	  loopedSlides :3,
		autoplay: 1000,//可选选项，自动滑动
	  pagination : '.swiper-pagination'
	})

	  // $('#footer li').on('tap', function () {
	  //   mySwiper.slideTo($(this).index());
	  //   $(this).addClass('active').siblings().removeClass('active');
	  // });
	p3();
	  function p3() {
	    $.ajax({
	      url:'/api/show1.php',
	      success:function (data) {
	      //  console.log(data.data.length);
	        for(var i=0;i<data.data.length;i++){
	          $(".p3>.p3_1").eq(i).html(template('test'+i,data.data[i]));
	        }
	      },
	      error:function (data) {
	        console.log("ajax错误");
	      },
	      dataType:'json'
	    })
	  }
	 $('.searchBox').css({"display":"none"});
	 $('.searchBack').on('tap',function () {
	   $('.searchBox').css({"display":"none"});
	   $('.boxcontent').css({"display":"block"});
	 } )
	    $(document).keydown(function(event){

	    if(event.keyCode == 13){
	      var inValue=$(".header-input input").val();
	      //console.log(inValue);
	      search(inValue);
	      $('.searchBox').css({"display":"block"});
	      $('.boxcontent').css({"display":"none"});
	    }

	    });
	  function search(x) {
	    var searchcont="";
	      var arrlist=[];
	     $.ajax({
	       url:'/api/show1.php',
	      success:function (data) {
	        for (var i = 0; i < data.data.length; i++) {
	          var str=data.data[i].ProductName;
	          console.log(data.data[i].ProductName);
	          console.log(x);
	          if(str.indexOf(x)>0){
	          arrlist.push(data.data[i].ProductId);
	             searchcont+=$('.searchCont').append(
	            "<div class=\"cont1\">"+
	              "<a href=\"detail.html?"+data.data[i].ProductId+"\"><ul>"+
	            "<li class=\"cont1_1\"><img src="+data.data[i].ProductImage+"></li>"+
	                "<li class=\"cont1_2\"><p>"+data.data[i].ProductName+"</P>"+
	                "<h2><i class=\"h2_1\">￥"+data.data[i].ProductSalePrice+"</i>"+
	                "<span> 原价 "+data.data[i].ProductMarketPrice+"</span></h2>"+
	                   "<h3>"+data.data[i].ProductComment+"人评价</h3>"+
	                "</li>"+
	             "</ul></a>"+
	            "</div>"
	          );
	          }
	        }
	      },
	       error:function (data) {
	         console.log("ajax错误");
	      },
	      dataType:'json'
	    })
	    console.log(arrlist)
	  }





	window.onload = function () {


	};



/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">  <div class=\"searchBox\">      <header>        <ul>            <li class=\"head-logo searchBack\"><a href=\"index.html\"><img src=\"http://m.hecha.cn/img/my/back.png\"></a></li>            <li class=\"header-input\" >                <h2> 搜索结果</h2>            </li>            <li ><a class=\"iconfont\">&#xe66c;<h2></h2></a></li>        </ul>      </header>       <div class=\"searchCont\">         <!-- <div class=\"cont1\">           <ul>             <li class=\"cont1_1\"><img src=\'\'></li>             <li class=\"cont1_2\">               <p></P>                <h2><i></i><span></span></h2>                <h3>人评价</h3>             </li>          </ul>         </div> -->      </div>  </div>  <div class=\"boxcontent\">    <header>        <ul>            <li class=\"head-logo\"><img src=\"/build/images/logo.png\"></li>            <li class=\"header-input\">                <img src=\"/build/images/search.png\">                <input type=\"text\" value  placeholder=\"搜索\">            </li>            <li class=\"headerRight\"><a href=\"shoppingCart.html\" class=\"iconfont\"><h2 style=\"color:#00afc7\">0</h2>&#xe66c;</a></li>        </ul>    </header>    <nav>      <div class=\"swiper-container\">        <div class=\"swiper-wrapper\">          <div class=\"swiper-slide\"><img src=\"http://img1.hecha.cn/MobileImage/20160829/20160829183159678.jpg\"></div>          <div class=\"swiper-slide\"><img src=\"http://img1.hecha.cn/MobileImage/20160829/20160829185059303.jpg\"></div>          <div class=\"swiper-slide\"><img src=\"http://img1.hecha.cn/MobileImage/20160829/20160829191000772.jpg\"></div>        </div>        <div class=\"swiper-pagination\"></div>      </div>    </nav>    <section>              <div class=\"p1\">                  <img src=\"/build/images/p1-top.jpg\">                  <img src=\"http://img1.hecha.cn/MobileImage/20160810/20160810143600739.jpg\">                  <img src=\"http://img1.hecha.cn/MobileImage/20160810/20160810141401849.jpg\">                  <img src=\"http://img1.hecha.cn/MobileImage/20160810/20160810144301411.jpg\">                  <img src=\"http://img1.hecha.cn/MobileImage/20160810/20160810140402771.jpg\">                  <img src=\"http://img1.hecha.cn/MobileImage/20160810/20160810143502661.jpg\">                  <img src=\"http://img1.hecha.cn/MobileImage/20160810/20160810144602614.jpg\">                  <img src=\"/build/images/p1-footer.jpg\">              </div>              <div class=\"p2\">                  <img src=\"/build/images/p2-top.jpg\">                  <img src=\"http://img1.hecha.cn/MobileImage/20160810/20160810140303849.jpg\">                  <img src=\"http://img1.hecha.cn/MobileImage/20160810/20160810142103458.jpg\">                  <img src=\"http://img1.hecha.cn/MobileImage/20160810/20160810143303067.jpg\">                  <img src=\"/build/images/p2-footer.jpg\">              </div>            <div class=\"p3\">                  <img src=\"/build/images/p3-top.jpg\">                  <div  class=\"p3_1\">                    <script id=\"test0\" type=\"text/html\">                      <a href=\"detail.html?{{ProductId}}\"><img  class=\"p3-img\" src={{ProductImage}}>                      <p>{{ProductName}}</p>                      <h2>￥{{ProductSalePrice}}</h2></a>                    </script>                  </div>                <div  class=\"p3_1\">                    <script id=\"test1\" type=\"text/html\">                      <a href=\"detail.html?{{ProductId}}\"><img  class=\"p3-img\" src={{ProductImage}}>                      <p>{{ProductName}}</p>                      <h2>￥{{ProductSalePrice}}</h2></a>                    </script>                  </div>                   <div  class=\"p3_1\">                    <script id=\"test2\" type=\"text/html\">                      <a href=\"detail.html?{{ProductId}}\"><img  class=\"p3-img\" src={{ProductImage}}>                      <p>{{ProductName}}</p>                      <h2>￥{{ProductSalePrice}}</h2></a>                    </script>                  </div>                  <div  class=\"p3_1\">                    <script id=\"test3\" type=\"text/html\">                      <a href=\"detail.html?{{ProductId}}\"><img  class=\"p3-img\" src={{ProductImage}}>                      <p>{{ProductName}}</p>                      <h2>￥{{ProductSalePrice}}</h2></a>                    </script>                  </div>                  <div  class=\"p3_1\">                    <script id=\"test4\" type=\"text/html\">                      <a href=\"detail.html?{{ProductId}}\"><img  class=\"p3-img\" src={{ProductImage}}>                      <p>{{ProductName}}</p>                      <h2>￥{{ProductSalePrice}}</h2></a>                    </script>                  </div>                  <div  class=\"p3_1\">                    <script id=\"test5\" type=\"text/html\">                      <a href=\"detail.html?{{ProductId}}\"><img  class=\"p3-img\" src={{ProductImage}}>                      <p>{{ProductName}}</p>                      <h2>￥{{ProductSalePrice}}</h2></a>                    </script>                  </div>                  <img src=\"/build/images/p3-footer.jpg\">              </div>    </section></div></div><script id=\"list\" type=\"text/html\">  <ul>    {{each data as value i}}    <li><span><i><img src={{value.img}} alt=\"\"></i><b>{{value.title}}</b></span></li>    {{/each}}  </ul></script>"

/***/ }
/******/ ]);