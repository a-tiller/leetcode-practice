var largestOverlap = function(A, B) {
  function compare(position, offset, size, fixed, shifted) {
    const [pr, pc] = position;
    if (!fixed[pr][pc]) return false;
    const or = pr + offset[0];
    const oc = pc + offset[1];
    if (or < 0 || or >= size || oc < 0 || oc >= size || !shifted[or][oc]) return false;
    return true;
  }

  let result = 0;
  let N = A.length;

  for (let rOffset = 0; rOffset < N; rOffset++) {
    for (let cOffset = 0; cOffset < N; cOffset++) {
      let counterA = 0;
      let counterB = 0;
      for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
          if (compare([row, col], [rOffset, cOffset], N, A, B)) counterA++;
          if (compare([row, col], [rOffset, cOffset], N, B, A)) counterB++;
        }
      }
      result = Math.max(result, counterA, counterB);
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

console.log(largestOverlap(testA, testB)); // 1
