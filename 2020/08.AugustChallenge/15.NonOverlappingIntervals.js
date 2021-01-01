var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let deletions = 0;

  let first = 0;
  let second = 1;

  while (second < intervals.length) {
    if (intervals[first][1] > intervals[second][0]) {
      deletions++;
      if (intervals[first][1] > intervals[second][1]) {
        first = second;
      }
    } else {
      first = second;
    }
    second++;
  }

  return deletions;
};

let test = [];
console.log(eraseOverlapIntervals(test)); // 0

test = [[1,2],[2,3],[3,4],[1,3]];
console.log(eraseOverlapIntervals(test)); // 1

test = [[1,2],[1,2],[1,2]];
console.log(eraseOverlapIntervals(test)); // 2

test = [[1,2],[2,3]];
console.log(eraseOverlapIntervals(test)); // 0

test = [[0,2],[1,3],[1,3],[2,4],[3,5],[3,5],[4,6]];
console.log(eraseOverlapIntervals(test)); // 4