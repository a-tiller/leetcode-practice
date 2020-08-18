var numsSameConsecDiff = function(N, K) {
  if (N === 1) {
    return [0,1,2,3,4,5,6,7,8,9];
  }

  const results = [];

  const dfs = (prefix, remaining = N - 1) => {
    if (remaining === 0) {
      results.push(+prefix);
      return;
    }

    const last = +prefix[prefix.length - 1];

    if (K === 0) {
      dfs(prefix + last, remaining - 1);
      return;
    }

    if (last - K > -1) {
      dfs(prefix + (last - K), remaining - 1);
    }
    if (last + K < 10) {
      dfs(prefix + (last + K), remaining - 1);
    }
  }

  for (let i = 1; i < 10; i++) {
    dfs(i.toString());
  }

  return results;
};

console.log(numsSameConsecDiff(3, 7)) // [181,292,707,818,929]
console.log(numsSameConsecDiff(2, 1)) // [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
console.log(numsSameConsecDiff(2, 0)) // [11,22,33,44,55,66,77,88,99]

