var insert = function(intervals, newInterval) {
  if (!intervals.length) return [newInterval];

  const result = [];
  let workingFirst = newInterval[0];
  let workingLast = newInterval[1];

  while (intervals.length) {
    const [first, last] = intervals.shift();

    if (last < workingFirst) {
      result.push([first, last])
    } else if (first <= workingLast) {
      workingFirst = Math.min(first, workingFirst);
      workingLast = Math.max(last, workingLast);
    } else {
      result.push([workingFirst, workingLast], [first, last], ...intervals);
      return result;
    }
  }

  result.push([workingFirst, workingLast])
  return result;
};

let intervals = [];
let newInterval = [];
console.log(insert(intervals, newInterval));

intervals = [[1,3],[6,9]];
newInterval = [2,5];
console.log(insert(intervals, newInterval)); // [[1,5],[6,9]]

intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
newInterval = [4,8];
console.log(insert(intervals, newInterval)); // [[1,2],[3,10],[12,16]]

intervals = [[1,5]];
newInterval = [2,3];
console.log(insert(intervals, newInterval)); // [[1,5]]
