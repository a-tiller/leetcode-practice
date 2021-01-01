var maxProfit = function(prices) {
  let bestSale = 0;
  let minSeen = Infinity;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    bestSale = Math.max(bestSale, price - minSeen);
    minSeen = Math.min(minSeen, price);
  }

  return bestSale;
};

let test = [];
console.log(maxProfit(test)) // 0

test = [7,1,5,3,6,4];
console.log(maxProfit(test)) // 5

test = [7,6,4,3,1];
console.log(maxProfit(test)) // 0
