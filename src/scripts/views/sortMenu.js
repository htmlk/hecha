var str = require('../tpls/sortMenu.string');
var footer=require('../tpls/footer.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'),str);
common.append($('.container'),footer);
common.switchPage(1);
window.onload=function(){
  var myScroll=new IScroll("#index-scroll",{
    click:true
  });
};
