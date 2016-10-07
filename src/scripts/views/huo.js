var str=require('../tpls/huo.string');
var common=require('../utils/common.util.js');

common.body($('body'),str);


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