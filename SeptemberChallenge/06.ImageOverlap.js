var largestOverlap = function(A, B) {
  function compare(position, offset, fixed = A, shifted = B) {
    const [pr, pc] = position;
    if (!fixed[pr][pc]) return false;
    const or = pr + offset[0];
    const oc = pc + offset[1];
    if (or < 0 || or >= shifted.length || oc < 0 || oc >= shifted[0].length || !shifted[or][oc]) return false;
    return true;
  }

  let result = 0;

  for (let rOffset = 1 - B.length; rOffset < B.length; rOffset++) {
    for (let cOffset = 1 - B[0].length; cOffset < B[0].length; cOffset++) {
      let counter = 0;
      for (let row = 0; row < A.length; row++) {
        for (let col = 0; col < A[0].length; col++) {
          if (compare([row, col], [rOffset, cOffset])) counter++;
        }
      }
      result = Math.max(result, counter);
    }
  }

  return result;
};

let testA = [[1,1,0],[0,1,0],[0,1,0]]
let testB = [[0,0,0],[0,1,1],[0,0,1]]

console.log(largestOverlap(testA, testB)); // 3

testA = [[1,0],[0,0]]
testB = [[0,1],[1,0]]

console.log(largestOverlap(testA, testB)); // 1

testA = [[1,0],[1,0]]
testB = [[0,1],[1,0]]

console.log(largestOverlap(testA, testB));
