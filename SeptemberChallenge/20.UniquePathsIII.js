var uniquePathsIII = function(grid) {

  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;
  const offsets = [[1, 0], [0, 1], [0, -1], [-1, 0]];

  let pathlength = 0;
  let results = 0;
  let start = [0,0];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const val = grid[row][col];
      if (val > -1) pathlength++;
      if (val === 1) start = [row, col];
    }
  }

  function dfs(loc, path = 1) {
    const [row, col] = loc;
    const prev = grid[row][col];

    grid[row][col] = 3;

    offsets.forEach(([r, c]) => {
      const rr = row + r;
      const cc = col + c;
      if (rr < 0 || rr >= rows || cc < 0 || cc >= cols) return;
      if (grid[rr][cc] === 0) dfs([rr, cc], path + 1);
      else if (grid[rr][cc] === 2 && path + 1 === pathlength) results++;
    });

    grid[row][col] = prev;
  }

  dfs(start);

  return results;
};

let test = []
console.log(uniquePathsIII(test)) // 0

test =  [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
console.log(uniquePathsIII(test)) // 2

test =  [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
console.log(uniquePathsIII(test)) // 4

test =  [[0,1],[2,0]]
console.log(uniquePathsIII(test)) // 0