/***********************************************************************************************************************
 * ARRAY
 * Add isArray for IE<9
 **********************************************************************************************************************/
// as described in https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

(function() {
  if(!Array.isArray) {
    Array.isArray = function (vArg) {
      return Object.prototype.toString.call(vArg) === "[object Array]";
    };
  }
})();