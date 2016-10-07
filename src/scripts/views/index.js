var str = require('../tpls/index.string');
var footer = require('../tpls/footer.string');

var common = require('../utils/common.util.js');
//var iscrollUtil = require('../utils/iscroll.util.js');

common.renderBody($('body'), str);
common.append($('.container'), footer);
common.switchPage(2);

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
