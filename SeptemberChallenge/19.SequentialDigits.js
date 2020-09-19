var sequentialDigits = function(low, high) {
  const results = [];

  function buildNum(s, l) {
    let num = s;
    let next = s + 1;

    for (let i = 1; i < l; i++) {
      num *= 10;
      num += next;
      next++;
    }

    return num;
  }

  const lowString = low.toString()
  let len = lowString.length;

  const candidate = +lowString[0];
  let start = buildNum(candidate, len) >= low ? candidate : candidate + 1;

  while (true) {
    if (start > 10 - len) {
      len++;
      if (len === 10) break;
      start = 1;
      continue;
    }

    const num = buildNum(start, len)

    if (num > high) break;

    results.push(num);
    start++;
  }

   return results;
};

console.log(sequentialDigits(100,300)); // [123, 234]
console.log(sequentialDigits(1000,13000)); // [1234,2345,3456,4567,5678,6789,12345]
console.log(sequentialDigits(0,200)); // [1,2,3,4,5,6,7,8,9,12,23,34,45,56,67,78,89,123]
// console.log(sequentialDigits(10,1000000000));
console.log(sequentialDigits(342,353)) // [345]