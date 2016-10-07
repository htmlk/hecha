


var str=require('../tpls/cha.string');

var common=require('../utils/common.util.js');

common.body($('body'),str);

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