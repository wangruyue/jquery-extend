(function($){
  // $.方法名 直接可以$.方法名 调用  
  // $.fn.方法名 要绑定元素 即 $('#btn').方法名
  var colorChange = {
    defalut :{
      color :'green'
    },
    endOption :{},
    init : function(option){
      this.endOption = $.extend(this.defalut,option);
    },
    change:function(){
      $('body').css({'background':this.endOption.color})
    }
  };
  $.colorChange = colorChange;

})(jQuery);
$('#btn').on('click',function(){
  $.colorChange.init({
    color:'red'
  });
  $.colorChange.change();
})