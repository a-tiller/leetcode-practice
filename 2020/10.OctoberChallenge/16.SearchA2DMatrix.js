var searchMatrix = function(matrix, target) {

  function ordinalToMatrixPos(ordinal) {
    const row = Math.floor((ordinal - 1) / cols);
    const col = (ordinal - 1) % cols;
    return [row, col];
  }

  function valAt(o) {
    const [r, c] = ordinalToMatrixPos(o);
    return matrix[r][c]
  }

  const rows = matrix.length;
  if (!rows) return false;
  const cols = matrix[0].length

  let min = 1;
  let max = rows * cols;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const val = valAt(mid);

    if (val === target) return true;
    else if (val > target) max = mid - 1;
    else min = mid + 1;
  }

  return false;
};

let testM = [];
let testT = 0;
console.log(searchMatrix(testM, testT)); // false

testM = [[1,3,5,7],[10,11,16,20],[23,30,34,50]];
testT = 3;
console.log(searchMatrix(testM, testT)); // true

testM = [[1,3,5,7],[10,11,16,20],[23,30,34,50]];
testT = 13;
console.log(searchMatrix(testM, testT)); // false

testM = [[1,3]];
testT = 3;
console.log(searchMatrix(testM, testT)); // true

