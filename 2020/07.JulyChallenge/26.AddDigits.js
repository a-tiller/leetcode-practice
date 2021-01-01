var addDigits = function(num) {
  return 1 + ((num - 1) % 9);
};

console.log(addDigits(1)) // 1
console.log(addDigits(2)) // 2
console.log(addDigits(3)) // 3
// ...
console.log(addDigits(13)) // 4
console.log(addDigits(14)) // 5
console.log(addDigits(15)) // 6
console.log(addDigits(16)) // 7
// ...
console.log(addDigits(654)) // 6
console.log(addDigits(655)) // 7
console.log(addDigits(656)) // 8
console.log(addDigits(657)) // 9
console.log(addDigits(658)) // 1

// Answers are in cycles of 9, but never 0, so it's 1 + (? % 9)
// The cycle starts at 1 for 1, so ? has to come out to 0 for 1 and increment as n goes up
// so ? is (n - 1)


// Then we just have to check num = 0 to see if we need to handle a special case,
// but it turns out 1 + ((0 - 1) % 9) = 0, so no special handling is needed