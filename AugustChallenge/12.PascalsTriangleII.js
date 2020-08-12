var getRow = function(rowIndex) {
  const row = [1]
  let count = 0;
  while (count < rowIndex) {
    for (i = row.length - 1; i > 0; i--) {
      row[i] = row[i] + row[i - 1];
    }
    row.push(1);
    count++;
  }
  return row;
};

console.log(getRow(0)); / //          [ 1 ]
console.log(getRow(1)); / //        [ 1, 1 ]
console.log(getRow(2)); / //       [ 1, 2, 1 ]
console.log(getRow(3)); / //     [ 1, 3, 3, 1 ]
console.log(getRow(4)); / //   [ 1, 4, 6, 4, 1 ]
console.log(getRow(5)); / // [ 1, 5, 10, 10, 5, 1 ]