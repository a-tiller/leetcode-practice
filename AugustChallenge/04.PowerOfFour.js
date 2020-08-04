var isPowerOfFour = function(num) {
  if (num <= 0) return false

  let n = num;
  let counter = 0

  while (n > 1) {
   n >>= 2
   counter++
  }

  return num === Math.pow(4, counter)
};

console.log(isPowerOfFour(1))
console.log(isPowerOfFour(2))
console.log(isPowerOfFour(3))
console.log(isPowerOfFour(4))
console.log(isPowerOfFour(8))
console.log(isPowerOfFour(16))
console.log(isPowerOfFour(17))