var eraseOverlapIntervals = function(intervals) {
  const allIntervals = new Map();

  intervals.forEach(([start, end], index) => {
    for (let i = start; i < end; i++) {
      if (allIntervals.has(i)) {
        allIntervals.get(i).push(index);
      } else {
        allIntervals.set(i, [index]);
      }
    }
  });

  const adjacency = new Map();
  const addOverlap = (a, b) => {
    if (adjacency.has(a)) {
      adjacency.get(a).add(b);
    } else {
      adjacency.set(a, new Set([b]));
    }
  }

  allIntervals.forEach((indices) => {
    if (indices.length > 1) {
      for (let i = 0; i < indices.length; i++) {
        for (let j = 0; j < indices.length; j++) {
          if (i !== j) {
            addOverlap(indices[i], indices[j]);
            addOverlap(indices[j], indices[i]);
          }
        }
      }
    }
  });

  let counter = 0;

  while(adjacency.size > 0) {
    let longestLength = -Infinity;
    let longestVal;

    adjacency.forEach((nodes, val) => {
      if (nodes.size > longestLength) {
        longestLength = nodes.size;
        longestVal = val;
      }
    });

    adjacency.delete(longestVal);
    adjacency.forEach((nodes, val) => {
      nodes.delete(longestVal);
      if (!nodes.size) {
        adjacency.delete(val);
      }
    })
    counter++;
  }

  return counter;
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
console.log(eraseOverlapIntervals(test)); // 4  --- FAILS: OUTPUT 5