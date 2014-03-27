// http://www.github.com/oomushi/jquery.collapse.js
$.fn.collapse = function(params) {
  var defaultStart='first';
  if(params==undefined)
    params={};
  if(params.start==undefined)
    params.start=defaultStart;
  return this.each(function() {
    $(this).find("legend").not("fieldset fieldset fieldset legend,.collapsed,.collapsible").click(function() {
      if ($(this).parent().hasClass('collapsed'))
        $(this).parent().removeClass('collapsed').addClass('collapsible');
      $(this).removeClass('collapsed');
      $(this).parent().children().not('legend').not('[type="radio"]').toggle('slide', { direction: "up" }, function() {
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
};

