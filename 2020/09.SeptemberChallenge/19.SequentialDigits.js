var sequentialDigits = function(low, high) {
  const results = [];
  const digits = '123456789';

  const min = low.toString().length;
  const max = high.toString().length;

  for (let i = min; i <= max; i++) {
    for (let j = 0; j <= digits.length - i; j++) {
      num = +digits.substring(j, j + i);
      if (num >= low && num <= high) results.push(num);
    }
  }

   return results;
};

console.log(sequentialDigits(100,300)); // [123, 234]
console.log(sequentialDigits(1000,13000)); // [1234,2345,3456,4567,5678,6789,12345]
console.log(sequentialDigits(0,200)); // [1,2,3,4,5,6,7,8,9,12,23,34,45,56,67,78,89,123]
console.log(sequentialDigits(10,1000000000));
console.log(sequentialDigits(342,353)) // [345]