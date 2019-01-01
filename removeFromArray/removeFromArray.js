const removeFromArray = function(arr, ...others) {
  let val = others;
  var newArray = arr;
  var i = 0;
  do {
    if ((arr.indexOf(val[i])) != -1) {
      var pos = arr.indexOf(val[i]);
      arr.splice(pos, 1);
      newArray = arr;
      i++;
    } else {i++}
  } while (i < val.length);
  return newArray;
};

module.exports = removeFromArray
