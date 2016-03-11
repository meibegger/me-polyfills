/***********************************************************************************************************************
 * ANIMATION FRAME
 * Add window.requestAnimationFrame and window.cancelAnimationFrame to all browsers
 **********************************************************************************************************************/
// as described in http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

(function(window) {
  var lastTime = 0;
  var vendors = ['webkit', 'moz', 'ms'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame || !window.cancelAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
}(window));

