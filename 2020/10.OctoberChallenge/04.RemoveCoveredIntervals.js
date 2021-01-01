var removeCoveredIntervals = function(intervals) {
  let remove = 0;
  let compare = 0;

  intervals.sort(([as, af], [bs, bf]) => (as === bs ? bf - af : as - bs));

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][1] <= intervals[compare][1]) remove++;
    else compare = i;
  }

  return intervals.length - remove;
};

let intervals = [];
console.log(removeCoveredIntervals(intervals)) // 0

intervals = [[1,4],[3,6],[2,8]];
console.log(removeCoveredIntervals(intervals)) // 2

intervals = [[1,4],[2,3]];
console.log(removeCoveredIntervals(intervals)) // 1

intervals = [[0,10],[5,12]];
console.log(removeCoveredIntervals(intervals)) // 2

intervals = [[3,10],[4,10],[5,11]];
console.log(removeCoveredIntervals(intervals)) // 2

intervals = [[1,2],[1,4],[3,4]];
console.log(removeCoveredIntervals(intervals)) // 1