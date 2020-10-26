var champagneTower = function(poured, query_row, query_glass) {
  const tower = new Array(query_row + 1)
                  .fill(0)
                  .map((_, row) => (new Array(row + 1).fill(0)));

  tower[0][0] = poured;

  for (let row = 0; row < query_row; row++) {
    for (let glass = 0; glass < tower[row].length; glass++) {
      const overflow = Math.max(tower[row][glass] - 1, 0);

      tower[row + 1][glass] += overflow / 2;
      tower[row + 1][glass + 1] += overflow / 2;
    }
  }

  return Math.min(tower[query_row][query_glass], 1);
};

console.log(champagneTower(1,1,1)) // 0
console.log(champagneTower(2,1,1)) // 0.5
console.log(champagneTower(100000009,33,17)) // 1
