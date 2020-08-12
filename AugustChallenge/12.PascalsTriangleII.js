var getRow = function(rowIndex) {
  const row = [1]
  for (let i = rowIndex; i > 0; i--) {
    for (let j = row.length - 1; j > 0; j--) {
      row[j] += row[j - 1];
    }
    row.push(1);
  }
  return row;
};

console.log(getRow(0)); / //          [ 1 ]
console.log(getRow(1)); / //        [ 1, 1 ]
console.log(getRow(2)); / //       [ 1, 2, 1 ]
console.log(getRow(3)); / //     [ 1, 3, 3, 1 ]
console.log(getRow(4)); / //   [ 1, 4, 6, 4, 1 ]
console.log(getRow(5)); / // [ 1, 5, 10, 10, 5, 1 ]