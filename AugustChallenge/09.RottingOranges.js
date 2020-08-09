var orangesRotting = function(grid) {
  const rows = grid.length;
  if (!rows) return -1;
  const cols = grid[0].length;

  const fresh = new Set();
  let rot = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const v = grid[r][c]
      if (v === 1) {
        fresh.add(`${[r, c]}`);
      } else if (v === 2) {
        rot.push([r, c]);
      }
    }
  }

  const offsets = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  const spread = function(r, c, s) {
    offsets.forEach(([rr, cc]) => {
      const pos = [r + rr, c + cc];
      if (fresh.has(`${pos}`)) {
        fresh.delete(`${pos}`);
        s.push(pos);
      }
    });
  };

  let days = 0;

  while (rot.length && fresh.size !== 0) {
    const rotting = [];
    rot.forEach(([row, col]) => spread(row, col, rotting));
    rot = rotting;
    days++;
  }

  return fresh.size ? -1 : days;
};


// let grid = [[]];
// console.log(orangesRotting(grid)); // 0

// grid = [[2,1,1],[1,1,0],[0,1,1]];
// console.log(orangesRotting(grid)); // 4

// grid = [[2,1,1],[0,1,1],[1,0,1]];
// console.log(orangesRotting(grid)); // -1

// grid = [[0,2]];
// console.log(orangesRotting(grid)); // 0
