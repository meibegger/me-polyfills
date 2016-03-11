/***********************************************************************************************************************
 * EVENT & CUSTOM EVENT
 * Add Event and CustomEvent support for IE9/10/11
 **********************************************************************************************************************/
// as described in https://github.com/krambuhl/custom-event-polyfill/blob/master/custom-event-polyfill.js

(function(window) {
  try {
    new CustomEvent("test");
  } catch(e) {
    var CustomEvent = function(event, params) {
      var evt;
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
  try {
    new Event("test");
  } catch(e) {
    var Event = function(event, params) {
      var evt;
      params = params || {
        bubbles: false,
        cancelable: false
      };

      evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, params.bubbles, params.cancelable);
      return evt;
    };

    Event.prototype = window.Event.prototype;
    window.Event = Event; // expose definition to window
  }
}(window));
