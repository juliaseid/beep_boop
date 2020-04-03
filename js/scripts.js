var tempNum = [];
var output = [];
var localNums = [];
var readOut = "";

var numGen = function (num) {
  for (i=0; i<=num; i+=1) {
    tempNum.push(i);
  }
  return tempNum;

};

var outputGen = function (numbers) {
  output=numbers.slice()
  for (i=0; i<numbers.length; i+=1) {
    var charAt = output[i];
    var charAtStr = charAt.toString();
    if (charAtStr.includes("3")) {
      localNums[i] = output.splice(i, 1, "Won't you be my neighbor?")
    }
    else if (charAtStr.includes("2")) {
      localNums[i] = output.splice(i, 1, "Boop!")
    }
    else if (charAtStr.includes("1")) {
      localNums[i] = output.splice(i, 1, "Beep!")
    }
  }
  readOut = output.join(" ")
return readOut;
}


$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    var numbers = numGen(input);
    outputGen(numbers);
    $("#songText").empty().append("<li>" + readOut + "</li>");
    $("#song").show();
    $("#entry").trigger("reset");
  })
});