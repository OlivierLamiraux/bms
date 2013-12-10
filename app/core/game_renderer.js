
define(function(require) {
  
  return function(desire) {

var renderer = { }
var hook = desire('hook')
var display = desire('display')

renderer.start = function(game) {

  function frame() {
    var game = desire('game')
    var event = { game: game }
    hook('game.frame', event)
    display.render()
    window.requestAnimationFrame(frame)
  }

  window.requestAnimationFrame(frame)

}

return renderer

  }

})
