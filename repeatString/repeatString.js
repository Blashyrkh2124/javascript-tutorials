const repeatString = function(text, timesRepeat) {
  var textRepeated = text;
  if (timesRepeat > 0) {
  for (i = 1; i < timesRepeat; i++) {
    textRepeated = textRepeated.concat(text);
  } return textRepeated
} else if (timesRepeat == 0) {
  return "";
} else {return "ERROR"};
};

repeatString("test", 3);
module.exports = repeatString
