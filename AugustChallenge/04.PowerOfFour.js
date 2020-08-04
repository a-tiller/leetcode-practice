var isPowerOfFour = function(num) {
  if (num & (num - 1)) return false
  if (num <= 0) return false

  const MASK = 0xAAAAAAAA >> 1

  return !!(num & MASK);
};

// console.log(isPowerOfFour(1)) // true
// console.log(isPowerOfFour(2)) // false
// console.log(isPowerOfFour(3)) // false
// console.log(isPowerOfFour(4)) // true
// console.log(isPowerOfFour(8)) // false
// console.log(isPowerOfFour(16)) // true
// console.log(isPowerOfFour(17)) // false