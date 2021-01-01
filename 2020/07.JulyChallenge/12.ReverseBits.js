var reverseBits = function(n) {
  let result = 0;
  let count = 32;

  while (count > 0) {
    result <<= 1;
    result += n & 1;
    n >>= 1;
    count--;
  }

  return result >>> 0;
};
