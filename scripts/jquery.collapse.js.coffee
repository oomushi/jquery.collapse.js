# http://www.github.com/oomushi/jquery.collapse.js
(($) ->
  $.fn.extend collapse: (customOptions) ->
    if typeof customOptions is "string"
      switch customOptions
        when "destroy"
          @each ->
            $(this).find("legend").unbind "click.collapse"
            $(this).parent().find(".collapsed,.collapsible").removeClass("collapsible").removeClass "collapsed"
            $(this).children().not("legend").not("[type=\"radio\"]").show()
            true
    else
      options = start: "first"
      $.extend options, customOptions
      @each ->
        $(this).find("legend").not("fieldset fieldset fieldset legend,.collapsed,.collapsible").bind("click.collapse", (e) ->
          $(this).parent().removeClass("collapsed").addClass "collapsible"  if $(this).parent().hasClass("collapsed")
          $(this).removeClass "collapsed"
          $(this).parent().children().not("legend").not("[type=\"radio\"]").slideToggle "slow", ->
            if $(this).is(":visible")
              $(this).parent().find("legend").addClass "collapsible"
            else
              $(this).parent().addClass("collapsed").children("legend").addClass "collapsed"
            true
          true
        ).addClass("collapsible").parent().addClass "collapsible"
        switch params.start
          when "close"
            $(this).find("legend").click()
          when "first"
            $(this).find("legend").each (index) ->
              $(this).click()  if index > 0
              true
  true
) jQuery
