var myPow = function(x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n *= -1;
  }

  let total = 1;
  let base = x;

  while (n > 0) {
    if (n & 1) total *= base;
    n >>>= 1;
    base *= base
  }

  return total;
};
