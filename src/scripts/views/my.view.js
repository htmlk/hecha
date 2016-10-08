
  var str=require('../tpls/my.string');
  var footer=require('../tpls/footer.string');

  var common=require('../utils/common.util.js');
  
  common.renderBody($('body'), str);
  common.append($('.my-container'),footer);
  common.switchPage(0);