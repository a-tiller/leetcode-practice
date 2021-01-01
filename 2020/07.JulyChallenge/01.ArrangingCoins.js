
var arrangeCoins = function(n) {
  let counter = 1;

  while (n - counter >= 0) {
    n -= counter;
    counter++;
  }

  return counter - 1;
};

console.log(arrangeCoins(6))