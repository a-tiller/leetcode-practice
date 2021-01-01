var minMeetingRooms = function(intervals) {
  const starts = [];
  const ends = [];

  intervals.forEach(([start, end]) => {
    starts.push(start);
    ends.push(end);
  });

  starts.sort((a, b) => (a - b));
  ends.sort((a, b) => (a - b));

  let rooms = 0;
  let sPos = 0;
  let ePos = 0;

  while (sPos < starts.length) {
    if (starts[sPos] < ends[ePos]) {
      rooms++;
    } else {
      ePos++;
    }
    sPos++;
  }

  return rooms;
};

let testIntervals = [];
console.log(minMeetingRooms(testIntervals)) // 0

testIntervals = [[0, 30],[5, 10],[15, 20]];
console.log(minMeetingRooms(testIntervals)) // 2

testIntervals = [[7,10],[2,4]];
console.log(minMeetingRooms(testIntervals)) // 1