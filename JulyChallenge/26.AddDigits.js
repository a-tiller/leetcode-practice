var addDigits = function(num) {
  let stringSum = num.toString();

  while (stringSum.length > 1) {
    let sum = 0;
    for (let i = 0; i < stringSum.length; i++) {
      sum += +stringSum[i];
    }
    stringSum = sum.toString();
  }

  return +stringSum;
};

console.log(addDigits(38)) // 2