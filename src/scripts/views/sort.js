var str = require('../tpls/sort.string');
var footer=require('../tpls/footer.string');

var common = require('../utils/common.util.js');

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
