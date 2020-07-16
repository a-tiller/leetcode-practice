var myPow = function(x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n *= -1;
  }

  let total = 1;

  while (n > 0) {
    total *= x;
    n--;
  }

  return total;
};
