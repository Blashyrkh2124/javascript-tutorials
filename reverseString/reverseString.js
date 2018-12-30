const reverseString = function(text) {
  var array = Array.from(text);
  var toString = "";
  for (i = array.length; i > 0; i--) {
    toString = toString.concat(array.pop());
  } return toString;
};

module.exports = reverseString
