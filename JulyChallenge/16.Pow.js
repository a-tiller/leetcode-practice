var myPow = function(x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n *= -1;
  }

  return x *=  myPow(x, n - 1);
};