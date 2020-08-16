var maxProfit = function(prices) {
  const len = prices.length;
  if (len < 2) return 0;

  const leftToRight = new Array(len).fill(0);
  let minSeen = prices[0];
  for (let i = 1; i < len; i++) {
    const price = prices[i];
    minSeen = Math.min(price, minSeen);
    leftToRight[i] = Math.max(leftToRight[i - 1], price - minSeen);
  }

  let profit = leftToRight[len - 1];
  let maxSeen = prices[len - 1];
  for (let i = len - 2; i > 0; i--) {
    const price = prices[i];
    maxSeen = Math.max(price, maxSeen);
    const buyHere = maxSeen - price;
    profit = Math.max(profit, leftToRight[i - 1] + buyHere);
  }

  return profit;
};

let test = []
console.log(maxProfit(test)); // 0

test = [3,3,5,0,0,3,1,4];
console.log(maxProfit(test)); // 6

test = [1,2,3,4,5];
console.log(maxProfit(test)); // 4

test = [7,6,4,3,1];
console.log(maxProfit(test)); // 0

test = [6,1,3,2,4,7];
console.log(maxProfit(test)); // 7