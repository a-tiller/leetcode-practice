var maxProfit = function(prices) {
  let cost1 = Infinity;
  let cost2 = Infinity;
  let profit1 = 0;
  let profit2 = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    cost1 = Math.min(cost1, price);
    profit1 = Math.max(profit1, price - cost1);
    cost2 = Math.min(cost2, price - profit1);
    profit2 = Math.max(profit2, price - cost2);
  }

  return profit2;
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