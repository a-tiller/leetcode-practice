var maxProfit = function(k, prices) {
  if (k === 0) return 0;
  // 1. Generate a list of the profitable transactions in the form [startVal, endVal]. Record
  //    the total profit for the list.

  let started = false;
  let profit = 0;
  let start = -1;
  let transactions = [];

  for (let i = 0; i < prices.length; i++) {
    if (!started) {
      if (prices[i + 1] > prices[i]) {
        start = i;
        started = true;
      }
    } else if (i + 1 === prices.length || prices[i + 1] < prices[i]) {
      transactions.push([prices[start], prices[i]]);
      profit += prices[i] - prices[start];
      started = false;
    }
  }

  // 2. Reducing transactions is a matter of merging adjacent transactions. The profit of the merged
  //    transaction of [...[startA, endA], [startB, endB]...] is:
  //    mergedProfit =  max(endB - startA, endA - startA, endB - startB)
  //    so the cost of the merger is ((endB - startB) + (endA - startA)) - mergedProfit.
  //    So one way to reach k transactions is to loop until the list has length k, performing
  //    the least costly merger each loop.
  //    Subtract the cost of the merger from the original max profit to keep an updated profit total.

  function smallestCostMerge(t) {
    let cheapestStart = -1;
    let cheapestCost = Infinity;
    let replacement = [];

    for (let i = 0; i < t.length - 1; i++) {
      const [startA, endA] = t[i];
      const [startB, endB] = t[i + 1];
      const originalProfit = (endB - startB) + (endA - startA);
      const [BA, AA, BB] = [endB - startA, endA - startA, endB - startB];

      if (BA > AA && BA > BB) {
        const cost = originalProfit - BA;
        if (cost < cheapestCost) {
          cheapestStart = i;
          cheapestCost = cost;
          replacement = [startA, endB];
        }
      } else if (AA > BB) {
        const cost = originalProfit - AA;
        if (cost < cheapestCost) {
          cheapestStart = i;
          cheapestCost = cost;
          replacement = [startA, endA];
        }
      } else {
        const cost = originalProfit - BB;
        if (cost < cheapestCost) {
          cheapestStart = i;
          cheapestCost = cost;
          replacement = [startB, endB];
        }
      }
    }

    t.splice(cheapestStart, 2, replacement);

    return cheapestCost;
  }

  while(transactions.length > k) {
    profit -= smallestCostMerge(transactions)
  }

  return profit;
};