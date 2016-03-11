/***********************************************************************************************************************
 * MATCHES
 * Add matches support for all IEs and others (http://caniuse.com/#feat=matchesselector)
 **********************************************************************************************************************/
// as described in https://developer.mozilla.org/en/docs/Web/API/Element/matches#Browser_compatibility
(function(ElementPrototype) {
  ElementPrototype.matches = ElementPrototype.matches ||
  ElementPrototype.matchesSelector ||
  ElementPrototype.mozMatchesSelector ||
  ElementPrototype.msMatchesSelector ||
  ElementPrototype.oMatchesSelector ||
  ElementPrototype.webkitMatchesSelector ||
  function (selector) {
    var $element = this
      , $matches = [].slice.call(document.querySelectorAll(selector))
      ;
    return $matches.indexOf($element)!==-1;
  }
})(Element.prototype);

