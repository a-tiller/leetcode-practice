var titleToNumber = function(s) {
  const CODEPOINTBASE = "A".codePointAt(0) - 1;
  let sum = 0;
  for (let i = s.length; i > 0; i--) {
    const val = s.codePointAt(i - 1) - CODEPOINTBASE;
    sum += val * Math.pow(26, s.length - i);
  }
  return sum;
};

let test = "";
console.log(titleToNumber(test));

test = "A";
console.log(titleToNumber(test)); // 1

test = "AB";
console.log(titleToNumber(test)); // 28

test = "ZY";
console.log(titleToNumber(test)); // 701

test = "AAA";
console.log(titleToNumber(test)); // 703