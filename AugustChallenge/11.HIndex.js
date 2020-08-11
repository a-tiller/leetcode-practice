var hIndex = function(citations) {
  const n = citations.length;
  const buckets = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const val = citations[i];
    val > n ? buckets[n]++ : buckets[val]++;
  }

  let papers = 0;
  for (let j = n; j >= 0; j--) {
    papers += buckets[j]

    if (papers >= j) return j;
  }

  return 0;
};

let cites = [];
console.log(hIndex(cites)); // 0

cites = [3,0,6,1,5];
console.log(hIndex(cites)); // 3

cites = [3,0,6,1,5,2,5,8,9,12,64,23,7];
console.log(hIndex(cites)); // 6

cites = [1];
console.log(hIndex(cites)); // 1