var findRightInterval = function(intervals) {
  const results = new Array(intervals.length).fill(-1);
  const sortedIndices = new Array(intervals.length).fill(0).map((v, i) => (i)).sort((a, b) => (intervals[a][0] - intervals[b][0]));

  for (let i = 0; i < sortedIndices.length; i++) {
    const current = sortedIndices[i];
    let start = 0;
    let end = sortedIndices.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (intervals[sortedIndices[mid]][0] >= intervals[current][1]) {
        results[current] = sortedIndices[mid];
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return results;
};

let test = [];
console.log(findRightInterval(test)); // []

test = [[1,2]];
console.log(findRightInterval(test)); // [-1]

test =  [ [3,4], [2,3], [1,2] ];
console.log(findRightInterval(test)); // [-1, 0, 1]

test =  [ [1,4], [2,3], [3,4] ];
console.log(findRightInterval(test)); // [-1, 2, -1]