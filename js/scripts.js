var numGen = function (num) {
  numbers = [];
  for (i=0; i<=num; i+=1) {
    numbers.push(i);
  }
  return numbers;

};

var outputGen = function (numbers, name, color, cookies) {
  var localNums = [];
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
  return output;
}

var verseGen = function (output) {
  var singOut = [];
  var verseOutput = output.slice();
  for (i = 0; i <= (output.length / 5); i++) {
    verse = verseOutput.splice(0, 5);
    singOut.push("<li>" + verse + "</li>")
  };
  return singOut;
}


$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    var name = $("#name").val();
    var color = $("#color").val();
    var cookies = $("#cookie").val();
    var numbers = numGen(input);
    var output = outputGen(numbers, name, color, cookies);
    singOut = verseGen(output);
    $("#songText").empty().append(singOut);
    $("#song").show();
    $("#entry").trigger("reset");
  })
});