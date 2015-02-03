// http://www.github.com/oomushi/jquery.collapse.js
(function($) {
  $.fn.extend({
    collapse: function(customOptions) {
      if(typeof customOptions == 'string'){
        switch(customOptions){
          case 'destroy':
            return this.each(function(){
              $(this).children(".collapsed,.collapsible").removeClass("collapsible").removeClass("collapsed")
                     .children('legend').unbind('click.collapse')
                     .siblings('.collapse-hidden').removeClass('collapse-hidden').show();
            });
        }
      }else{
        var options={
          animation: 'slow',
          start: 'first',
          create: function(event, element){},
          beforeClick: function(event, element){},
          afterClick: function(event, element){}
        };
        $.extend(options, customOptions);
        return this.each(function() {
          $(this).children("fieldset").children('legend').not(".collapsed,.collapsible").bind('click.collapse',function(e) {
            $(this).trigger('collapsebeforeclick',$(this).parent('.collapsible'));
            $(this).siblings().toggleClass("collapse-hidden").slideToggle(options.animation);
            $(this).parent().toggleClass('collapsed');
            $(this).trigger('collapseafterclick',$(this).parent('.collapsible'));
          }).parent().addClass('collapsible');
          switch(options.start){
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
          $(this).on("collapsecreate",options.create);
          $(this).on("collapsebeforeclick",options.beforeClick);
          $(this).on("collapseafterclick",options.afterClick);
          $(this).trigger('collapsecreate',$(this));
        });
      }
    }
  });
})(jQuery);
