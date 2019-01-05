const sumAll = function(a, b) {
  var lowNum = 1;
  var highNum = 2;

  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  } else if (a < 0 || b < 0) {
    return "ERROR";
  } else if (a > b) {
  lowNum = b;
  highNum = a;
  } else {
  lowNum = a;
  highNum = b;
};
  var i = lowNum;
  var numArray = [];
  for (i; i <= highNum; i++) {
    numArray.push(i);
  }
  var sum = numArray.reduce(function(a, b) { return a + b; }, 0);
  return sum;
}

module.exports = sumAll
