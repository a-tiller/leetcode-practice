var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  const maxForRange = function(start, end) {
    let mindex, maxdex, value = 0;
    let currentMindex = 0;
    let currentMin = Infinity;

    for (let i = start; i < end; i++) {
      let price = prices[i];

      if (price < currentMin) {
        currentMindex = i;
        currentMin = price
      } else if (price - currentMin > value) {
        mindex = currentMindex;
        maxdex = i;
        value = price - currentMin;
      }
    }

    return { mindex, maxdex, value };
  }

  const splitTransaction = function(start, finish) {
    const startPrice = prices[start];
    const endPrice = prices[finish];
    let peakSeen = 0;
    let split = 0;

    for (let i = start; i < finish; i++) {
      let price = prices[i];

      if (price > peakSeen) {
        peakSeen = price;
      } else {
        const splitHere = (peakSeen - startPrice) + (endPrice - price);
        if (splitHere > split) {
          split = splitHere;
        }
      }
    }

    return split;
  }

  const bigTransaction = maxForRange(0, prices.length);

  let sum = bigTransaction.value + Math.max(maxForRange(0, bigTransaction.mindex).value, maxForRange(bigTransaction.maxdex, prices.length).value);
  let split = splitTransaction(bigTransaction.mindex, bigTransaction.maxdex);

  return Math.max(sum, split);
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