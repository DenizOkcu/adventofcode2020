var fs = require("fs");

function splitAtNewline(data) {
  return data.split("\n").map(function (item) {
    return parseInt(item, 10);
  });
}

function multiplyWhereAandBare2020(reportData) {
  var result,
    arrayA = Array.from(reportData),
    arrayB = Array.from(reportData);

  arrayA.forEach(function (a) {
    // shift numbers from arrayB
    // which we dont need to compare
    arrayB.shift();
    arrayB.forEach(function (b) {
      if (a + b == 2020) {
        result = a * b;
      }
    });
  });

  return result;
}

try {
  var data = fs.readFileSync("input1.txt", "utf8");
  console.log(multiplyWhereAandBare2020(splitAtNewline(data)));
} catch (e) {
  console.error(e.stack);
}
