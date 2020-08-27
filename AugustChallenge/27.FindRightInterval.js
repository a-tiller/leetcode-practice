var findRightInterval = function(intervals) {
  const results = new Array(intervals.length).fill(-1);
  const sortedIndices = new Array(intervals.length).fill(0).map((v, i) => (i)).sort((a, b) => (intervals[a][0] - intervals[b][0]));

  for (let i = 0; i < sortedIndices.length; i++) {
    const end = intervals[sortedIndices[i]][1];
    for (let j = i + 1; j < sortedIndices.length; j++) {
      const start = intervals[sortedIndices[j]][0];
      if (start >= end) {
        results[sortedIndices[i]] = sortedIndices[j]
        break;
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