var render = require('../utils/common.util.js');

var scroll = require('../libs/iscroll-probe.js');

var strDetail = require('../tpls/detail.string');

var changeLostarage = require('../libs/lostaryFrame.js');

render.renderHtml(strDetail);

//商品溢出时滚动
window.onload = function() {
    var is = new scroll("#index-scroll", {
        probeType: 3,
        mousewheel: true
    });
};

//获取导航栏地址
var str = location.href;
var num = str.indexOf("?");
var strId = str.substr(num + 1);
//轮播
var mySwiper = new Swiper('.swiper-container', {
    autoplay: 3000,
    loop: true,
    pagination: '.swiper-pagination'
})

//百度分享
window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "24"
    },
    "share": {},
    "image": {
        "viewList": ["qzone", "tsina", "tqq", "renren", "weixin"],
        "viewText": "分享到：",
        "viewSize": "16"
    },
    "selectShare": {
        "bdContainerClass": null,
        "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
    }
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

//显示和隐藏百度分享
$('body').on('touchstart', '.swiper-wrapper', function() {
    $('.bdsharebuttonbox').css('display', 'block');
});
$('body').on('touchend', '.swiper-wrapper', function() {
    $('.bdsharebuttonbox').css('display', 'none');
});

//点击加入购物车
$('body').on('tap', '.footerRight p:first-child', function() {
    $('.addCart').animate({
        display: 'block',
        fontSize: '30px'
    }, 1000, function() {
        $('.addCart').css({
            'display': 'none',
            'font-size': 0
        });
    });
    addLocalStorary(strId);
});

//点击立即购买跳到购物车
$('body').on('tap', '.footerRight p:last-child', function() {
    window.location.href = '/build/shoppingCart.html';
});

//便利detail.json文件找到id=str的商品信息
$.ajax({
    url: '/api/users.php',
    dataType: 'json',
    success: function(obj) {
        var objJson=obj[1];
        for (var i = 0; i < obj.length; i++) {
            if (strId == obj[i].ProductId) {
                objJson = obj[i];
                break;
            }
        }
        $('.goodName').html(objJson.ProductName);
        var arr = objJson.ProductImageList;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].ImageType == 0) {
                var html = "<div class=\"swiper-slide\"><img src=" + arr[i].ImageUrl + "></div>";
                $('.swiper-wrapper').append(html);
            }
            if (arr[i].ImageType == 3) {
                var html = "<img src=" + arr[i].ImageUrl + "></img>";
                $('.allSection').append(html);
            }
        }
    }
});

//遍历sort.json获取价格
for (var i = 1; i <= 2; i++) {
    $.ajax({
        url: "/api/sort" + i + ".php",
        dataType: 'json',
        success: function(obj) {
          var arr = obj.data;
          for (var i = 0; i < arr.length; i++) {
              if (arr[i].ProductId == strId) {
                $('.price').html(arr[i].ProductSalePrice);
                $('.afterPrice').html(arr[i].ProductMarketPrice);
                break;
              }
            }
        }
      });
    }

var arr2=changeLostarage(1, 'shoppingCart', 'json');
var len=arr2.length;
$('.headerRight h2').html(len);

//便利json文件加入到localstorary里
function addLocalStorary(id) {
    for (var i = 1; i <= 2; i++) {
        $.ajax({
            url: "/api/sort" + i + ".php",
            dataType: 'json',
            success: function(obj) {
                var arr = obj.data;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].ProductId === id) {
                      console.log(id);
                      var flag=false;
                        var arr1 = changeLostarage(1, 'shoppingCart', 'json');
                        for (var i = 0; i < arr1.length; i++) {
                            if (arr1[i].ProductId == id) {
                                arr1[i].ProductSaleCount += 1;
                                var str = JSON.stringify(arr1);
                                flag=true;
                                changeLostarage(1, 'shoppingCart', str);
                                break;
                            }
                        }
                        if(flag==false){
                          arr[i].ProductSaleCount+=1;
                            changeLostarage(1, 'shoppingCart', arr[i]);
                        }
                        break;
                    }
                }
                var arr2=changeLostarage(1, 'shoppingCart', 'json');
                var len=arr2.length;
                $('.headerRight h2').html(len);
            }
        })
    }
}
