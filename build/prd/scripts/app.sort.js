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

	module.exports = __webpack_require__(21);


/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">    <ul>        <li  data-url=\"/build/my.html\">            <i class=\"iconfont\">&#xe61a;</i>            <b>我的</b>        </li>        <li data-url=\"/build/sortMenu.html\">            <i class=\"iconfont dd\" >&#xe602;</i>            <b>分类</b>        </li>        <li class=\"active\" data-url=\"/build/index.html\">            <i class=\"iconfont\">&#xe613;</i>            <b>主页</b>        </li>        <li data-url=\"/build/activity.html\">            <i class=\"iconfont\">&#xe61b;</i>            <b>活动</b>        </li>      <li data-url=\"/build/machine.html\">            <i class=\"iconfont\">&#x353e;</i>            <b>茶饮机</b>        </li>    </ul></footer>"

/***/ },

/***/ 5:
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

/***/ 6:
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

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(22);



/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(23);
	var footer=__webpack_require__(4);

	var common = __webpack_require__(5);

	var changeLostarage = __webpack_require__(6);

	//购物车商品数目
	//common.cartNumber();
	var arr2=changeLostarage(1, 'shoppingCart', 'json');
	var len=arr2.length;
	console.log(len);
	$('#h2_1').html(len);

	common.renderBody($('body'),str);
	common.append($('.container'),footer);
	common.switchPage(1);
	var sortNum=window.location.href.split('?')[1];
	var dataJson;
	var temp=-1;
	var newDataJson;
	$.ajax({
	  url: '/api/sortMenu.php',
	  success: function (res) {
	    var html = template('listMenu', res.data[sortNum].name);
	    common.inner($('#menu'),html);
	    var fenleiHtml = template('listFenlei', res.data[sortNum].sonMenu);
	    common.inner($('#fenlei'),fenleiHtml);
	  }
	});
	$.ajax({
	  url: '/api/sort'+sortNum+'.php',
	  success: function (res) {
	    dataJson=res;
	    newDataJson=dataJson;
	    var html = template('list', res);
	    common.inner($('#index-scroll'),html);
	  }
	});
	window.onload=function(){
	  var myScroll=new IScroll("#index-scroll");
	  $("#choose").on("tap","li",function(){
	    $("#choose li").each(function(){
	      $(this).attr("class","");
	    });
	    $(this).attr("class","active");
	    if(temp==$(this).index()){
	      temp=-1;
	      $("#fenlei").css({"display":"none"});
	      $("#paixu").css({"display":"none"});
	    }else{
	      $("#fenlei").css({"display":"none"});
	      $("#paixu").css({"display":"none"});
	      temp=$(this).index();
	      switch (temp) {
	        case 0:
	          $("#fenlei").css({"display":"block"});
	          break;
	        case 1:
	          $("#paixu").css({"display":"block"});
	          break;
	      }
	    }
	  });
	  $("#fenlei").on("tap","li",function(){
	    newDataJson={"data":[]};
	    $("#fenlei").css({"display":"none"});
	    $("#paixu").css({"display":"none"});
	    temp=-1;
	    common.inner($('#index-scroll'),"");
	    for(var i=0;i<dataJson.data.length;i++){
	      if(dataJson.data[i].ProductId.substring(3,4)==$(this).index()+1){
	        newDataJson.data.push(dataJson.data[i]);
	      }
	    }
	    var html = template('list', newDataJson);
	    common.inner($('#index-scroll'),html);
	    var myScroll=new IScroll("#index-scroll");
	  });
	  $("#paixu li").on("tap",function(){
	    $("#fenlei").css({"display":"none"});
	    $("#paixu").css({"display":"none"});
	    temp=-1;
	    common.inner($('#index-scroll'),"");
	    switch($(this).index()){
	      case 0:
	        paixu(newDataJson.data,1,0);
	        break;
	      case 1:
	        paixu(newDataJson.data,0,0);
	        break;
	      case 2:
	        paixu(newDataJson.data,1,1);
	        break;
	      case 3:
	        paixu(newDataJson.data,0,1);
	        break;
	    }
	    var html = template('list', newDataJson);
	    common.inner($('#index-scroll'),html);
	    var myScroll=new IScroll("#index-scroll");
	  });
	  $("#index-scroll").on("tap","li",function(){
	    var getHref=$(this).attr("data-url");
	    window.location.href=getHref;
	  });

	   function paixu(arr,type,fangshi){
	     //type 0小到大  1大到小
	     //fangshi 0按销量 1按价格
	     for(var i=0;i<arr.length;i++){
		 		for(var j=0;j<arr.length-1-i;j++){
					if(type==0){
	          if(fangshi==0){
	            if(parseInt(arr[j].ProductSaleCount)<parseInt(arr[j+1].ProductSaleCount)){
	    					var temp;
	    					temp=arr[j];
	    					arr[j]=arr[j+1];
	    					arr[j+1]=temp;
	    				}
	          }else{
	            if(parseInt(arr[j].ProductSalePrice)>parseInt(arr[j+1].ProductSalePrice)){
	    					var temp;
	    					temp=arr[j];
	    					arr[j]=arr[j+1];
	    					arr[j+1]=temp;
	    				}
	          }
	        }else{
	          if(fangshi==0){
	            if(parseInt(arr[j].ProductSaleCount)>parseInt(arr[j+1].ProductSaleCount)){
	    					var temp;
	    					temp=arr[j];
	    					arr[j]=arr[j+1];
	    					arr[j+1]=temp;
	    				}
	          }else{
	            if(parseInt(arr[j].ProductSalePrice)<parseInt(arr[j+1].ProductSalePrice)){
	    					var temp;
	    					temp=arr[j];
	    					arr[j]=arr[j+1];
	    					arr[j+1]=temp;
	    				}
	          }
	        }
				}
	  	}
	   }
	};



/***/ },

/***/ 23:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">  <header>    <ul>      <li>        <a href=\"sortMenu.html\"><img src=\"/build/images/sort.images/back.png\" alt=\"返回\"></a>      </li>      <li id=\"menu\">        <script id=\"listMenu\" type=\"text/html\">          {{each data as value}}          {{/each}}        </script>      </li>      <li class=\"headerRight\"><a href=\"shoppingCart.html\" class=\"iconfont\">&#xe66c;<h2 id=\"h2_1\" style=\"color:blue;left:.06rem;width:.08rem;height:.08rem\"></h2></a></li>    </ul>  </header>  <nav>    <ul id=\"choose\">      <li class=\"active\">选择分类      </li>      <li>选择排序</li>    </ul>    <ul id=\"fenlei\">      <script id=\"listFenlei\" type=\"text/html\">        {{each data as value}}          <li>{{value}}</li>        {{/each}}      </script>    </ul>    <ul id=\"paixu\">      <li>销量（高到低）</li>      <li>销量（低到高）</li>      <li>价格（高到低）</li>      <li>价格（低到高）</li>    </ul>  </nav>  <section id=\"index-scroll\">    <script id=\"list\" type=\"text/html\">      <ul>        {{each data as value}}        <li data-url=\"detail.html?{{value.ProductId}}\">          <div class=\"goodLeft\">            <img src={{value.ProductImage}} alt=\"\">          </div>          <div class=\"goodRight\">            <p class=\"goodName\">{{value.ProductName}}</p>            <p class=\"goodPrice\">              ￥<span class=\"nowPrice\">{{value.ProductSalePrice}}</span>              <del>市场价:￥<span class=\"oldPrice\">{{value.ProductMarketPrice}}</span></del>            </p>            <p class=\"pingjia\">评价&nbsp;&nbsp;{{value.ProductComment}}</p>          </div>        </li>        {{/each}}      </ul>    </script>  </section></div>"

/***/ }

/******/ });