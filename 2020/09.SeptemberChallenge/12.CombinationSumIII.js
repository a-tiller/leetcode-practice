var combinationSum3 = function(k, n) {
  const results = [];

  function dfs(start = Math.min(n, 9), tuple = [], prevsum = 0) {
    for (let i = start; i > 0; i--) {
      const sum = prevsum + i;
      if (sum === n && tuple.length === k - 1) {
        results.push([i, ...tuple]);
      } else if (sum < n && tuple.length < k - 1) {
        tuple.push(i)
        dfs(i - 1, tuple, sum);
        tuple.pop();
      }
    }
  }

  dfs();

  return results;
};

console.log(combinationSum3(3,7)); // [[1,2,4]]
console.log(combinationSum3(3,9)); // [[1,2,6], [1,3,5], [2,3,4]]
console.log(combinationSum3(2,18)); // []