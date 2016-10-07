var common = {
  renderBody: function ($el,str) {
      $el.prepend(str);
  },
  inner:function($el,str){
    $el.html(str);
  },
  append:function($el,str){
    $el.append(str);
  },
  renderHtml:function(str){
    $('body').prepend(str);
  },
  switchPage:function(){
    $('#footer').on('tap','li',function () {
      location.href = $(this).attr('data-url');
    })
  }
};

module.exports = common;
