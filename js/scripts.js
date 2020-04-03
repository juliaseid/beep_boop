var numbers = [];
var output = [];
var localNums = [];
var readOut = "";
var cookies = ""
var color = ""
var name = ""

var numGen = function (num) {
  for (i=0; i<=num; i+=1) {
    numbers.push(i);
  }
  return numbers;

};

var outputGen = function (numbers) {
  output=numbers.slice()
  for (i=0; i<numbers.length; i+=1) {
    var charAt = output[i];
    var charAtStr = charAt.toString();
    if (charAtStr.includes("3")) {
      localNums[i] = output.splice(i, 1, (name + ", Won't you be my neighbor?"))
    }
    else if (charAtStr.includes("2")) {
      localNums[i] = output.splice(i, 1, "Boop!")
    }
    else if (charAtStr.includes("1")) {
      localNums[i] = output.splice(i, 1, "Beep!")
    }
    else if (i%5===0) {
      localNums[i] = output.splice(i, 1, ("I will bring you " + cookies + " cookies!"))
    }
    else if (i%4===0) {
      localNums[i] = output.splice(i, 1, ("We can plant " + color + " flowers by the mailbox!"))
    }
  }
  readOut = output.join(" ")
return readOut;
}


$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    name = $("#name").val();
    color = $("#color").val();
    cookies = $("#cookie").val();
    numGen(input);
    outputGen(numbers);
    $("#songText").append("<li>" + readOut + "</li>");
    $("#song").show();
    $("#entry").trigger("reset");
  })
});