var isPowerOfFour = function(num) {
  if (num & (num - 1)) return false   // checks to see if only a single bit is set (i.e. is a power of two)
  if (num <= 0) return false // checks to see if non-negative (since powers of 4 are all positive)

  const MASK = 0xAAAAAAAA >> 1 // 0xA = 1010; 0xAA = 10101010; so 0xAA >> 1 = 01010101 (i.e. bits set in the indices corresponding to powers of 4)

  return !!(num & MASK); // 0 if the single bit is in a non-corresponding index, num if it's a power of four; double negation converts to boolean
};

// console.log(isPowerOfFour(1)) // true
// console.log(isPowerOfFour(2)) // false
// console.log(isPowerOfFour(3)) // false
// console.log(isPowerOfFour(4)) // true
// console.log(isPowerOfFour(8)) // false
// console.log(isPowerOfFour(16)) // true
// console.log(isPowerOfFour(17)) // false