// http://www.github.com/oomushi/jquery.collapse.js
(function($) {
  $.fn.extend({
    collapse: function(customOptions) {
      if(typeof customOptions == 'string'){
        switch(customOptions){
          case 'destroy':
            return this.each(function(){
              $(this).find('legend').unbind('click.collapse');
              $(this).parent().find(".collapsed,.collapsible").removeClass("collapsible").removeClass("collapsed");
              $(this).children().not('legend').not('[type="radio"]').show();
            });
        }
      }else{
        var options={
          start: 'first'
        };
        $.extend(options, customOptions);
        return this.each(function() {
          $(this).find("legend").not("fieldset fieldset fieldset legend,.collapsed,.collapsible").bind('click.collapse',function(e) {
            if ($(this).parent().hasClass('collapsed'))
              $(this).parent().removeClass('collapsed').addClass('collapsible');
            $(this).removeClass('collapsed');
            $(this).parent().children().not('legend').not('[type="radio"]').slideToggle( "slow" , function() {
              if ($(this).is(":visible"))
                $(this).parent().find("legend").addClass('collapsible');
              else
                $(this).parent().addClass('collapsed').children('legend').addClass('collapsed');
            });
          }).addClass('collapsible').parent().addClass('collapsible');
          switch(params.start){
            case 'close':
              $(this).find("legend").click();
              break;
            case 'first':
              $(this).find("legend").each(function(index){
                if(index>0)
                  $(this).click();
              });
              break;
          }
        });
      }
    }
  });
})(jQuery);
