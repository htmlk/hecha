
var str=require('../tpls/cha.string');
var footer=require('../tpls/footer.string');

var common=require('../utils/common.util.js');

common.body($('body'),str);
common.append($('.container'),footer);
common.switchPage(4);

window.onload=function () {
    var myScroll = new IScroll("#index-scroll",{
        mouseWheel:true,
        scrollbars:true,
        interactiveScrollbars:true,
});
};

var myScroll=new IScroll('#index-scroll');
myScroll.on('scrollEnd',function () {
    hidescrollbar=true;
});