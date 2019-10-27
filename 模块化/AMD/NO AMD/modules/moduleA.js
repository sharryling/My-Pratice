// moduleA.js
(function(window, $) {
  let name = "moduleA"
  function func() {
    console.log(name)
  }
  $("body").css("background", "blue")
  window.moduleA = func
})(window, jQuery)

