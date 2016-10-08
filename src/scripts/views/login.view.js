  var strHeader=require('../tpls/logreg-header.string');

  var str=require('../tpls/login.string');

  var common=require('../utils/common.utils.js');



  common.renderBody($('body'),strHeader+str);
