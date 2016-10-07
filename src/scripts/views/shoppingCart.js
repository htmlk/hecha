var changeLostarage = require('../libs/lostaryFrame.js');

var render = require('../untils/common.js');

var scroll = require('../libs/iscroll-probe.js');

var strShoppingCart = require('../tpls/shoppingCart.string');

var template = require('../libs/template.js');

render.renderHtml(strShoppingCart);

// $.ajax({
//   url:'/api/orders.php',
//   dataType:'json',
//   success:function(obj){
//     var arr=obj.data;
//     for (var i = 0; i < arr.length; i++) {
//       changeLostarage(1,'shoppingCart',arr[i]);
//     }
//   }
// });

//获取localStorary数据渲染到页面
 var str = changeLostarage(1, 'shoppingCart');

 var arr = JSON.parse(str);

 var obj = {
     "data": arr
 }

var html = template('list', obj);

$('#index-scroll').html(html);

//商品溢出时滚动
window.onload = function() {
    var is = new scroll("#index-scroll", {
        probeType: 3,
        mousewheel: true
    });
};

//单个商品是否选中
$('section').on('tap', '.liLeft img:first-child', function() {
    changeWxz($(this));
    allPrice();
})

//选择所有商品
$('.footerLeft img:first-child').on('tap', function() {
    changeWxz($(this));
    if ($(this).attr('src') == '/build/images/wxzno.png') {
        $('.liLeft img:first-child').attr('src', '/build/images/wxzno.png');
    } else {
        $('.liLeft img:first-child').attr('src', '/build/images/wxz.png');
    }
    allPrice();
})

function changeWxz($ele) {
    if ($ele.attr('src') == '/build/images/wxzno.png') {
        $ele.attr('src', '/build/images/wxz.png');
    } else {
        $ele.attr('src', '/build/images/wxzno.png');
    }
}

//增加商品数目
$('section').on('tap', '.add', function() {
    var addNum = parseInt($(this).parent().find('input').val()) + 1;
    $(this).parent().find('input').val(addNum);
    var id = $(this).parent().parent().parent().children('span').html();
    changeLocal(id, 'ProductSaleCount', addNum);
    allPrice();
});

//减少商品数目
$('section').on('tap', '.sub', function() {
    if ($(this).parent().find('input').val() == '1') {} else {
        var subNum = parseInt($(this).parent().find('input').val()) - 1;
        $(this).parent().find('input').val(subNum);
        var id = $(this).parent().parent().parent().children('span').html();
        changeLocal(id, 'ProductSaleCount', subNum);
        allPrice();
    }
});

//删除商品
$('section').on('tap', '.liRight h2', function() {
    $(this).parent().parent().remove();
    var id = $(this).parent().parent().children('span').html();
    changeLocal(id);
    allPrice();
});

//购物车发生变化时存储到localStorary
function changeLocal(id, strChange, afterChange) {
    var len = arguments.length;
    var strlocalStorary = changeLostarage(1, 'shoppingCart');
    var arrLocalStorary = JSON.parse(strlocalStorary);
    if (len == 3) {
        for (var i = 0; i < arrLocalStorary.length; i++) {
            if (arrLocalStorary[i].ProductId == id) {
                arrLocalStorary[i][strChange] = afterChange;
                break;
            }
        }
    }
    if (len == 1) {
        for (var i = 0; i < arrLocalStorary.length; i++) {
            if (arrLocalStorary[i].ProductId == id) {
                arrLocalStorary.splice(i, 1);
                break;
            }
        }
    }
    strlocalStorary = JSON.stringify(arrLocalStorary);
    changeLostarage(1, 'shoppingCart', strlocalStorary)
}

//选择所有商品后的总价格
function allPrice() {
    var allCount = 0;
    $('#index-scroll li').each(function() {
        if ($(this).children('.liLeft').children('img').first().attr('src') == '/build/images/wxzno.png') {
            var num = parseInt($(this).children('.liMiddle').find('input').val());
            var price = parseInt($(this).children('.liRight').find('i').html());
            allCount += num * price;
        }
    });
    $('.footerRight').find('b').html(allCount + ".00");
}
