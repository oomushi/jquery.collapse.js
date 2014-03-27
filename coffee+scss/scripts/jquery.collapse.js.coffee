# http://www.github.com/oomushi/jquery.collapse.js
$.fn.collapse = (params) ->
  defaultStart = "first"
  params = {}  if params is `undefined`
  params.start = defaultStart  if params.start is `undefined`
  @each ->
    $(this).find("legend").not("fieldset fieldset fieldset legend,.collapsed,.collapsible").click(->
      $(this).parent().removeClass("collapsed").addClass "collapsible"  if $(this).parent().hasClass("collapsed")
      $(this).removeClass "collapsed"
      $(this).parent().children().not("legend").not("[type=\"radio\"]").toggle "slide",
        direction: "up"
      , ->
        if $(this).is(":visible")
          $(this).parent().find("legend").addClass "collapsible"
        else
          $(this).parent().addClass("collapsed").children("legend").addClass "collapsed"
        return

      return
    ).addClass("collapsible").parent().addClass "collapsible"
    switch params.start
      when "close"
        $(this).find("legend").click()
      when "first"
        $(this).find("legend").each (index) ->
          $(this).click()  if index > 0
          return

