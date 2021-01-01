var orangesRotting = function(grid) {
  const height = grid.length;

  if (height === 0)  return -1;

  const width = grid[0].length;

  let keepGoing = true;
  let hasChanged = false;
  let minutes = 0;

  while (keepGoing) {
    keepGoing = false;
    hasChanged = false;

    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        if (grid[row][col] === 2) {
          if (row > 0 && grid[row - 1][col] === 1) {
            grid[row - 1][col] = 'toRot';
          }
          if (row < height - 1 && grid[row + 1][col] === 1) {
            grid[row + 1][col] = 'toRot';
          }
          if (col > 0 && grid[row][col - 1] === 1) {
            grid[row][col - 1] = 'toRot';
          }
          if (col < width - 1 && grid[row][col + 1] === 1) {
            grid[row][col + 1] = 'toRot';
          }
        }
      }
    }

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (grid[i][j] === 1) {
          keepGoing = true;
        } else if (grid[i][j] === 'toRot') {
          grid[i][j] = 2;
          hasChanged = true;
        }
      }
    }

    if (hasChanged) {
      minutes++;
    } else if (keepGoing) {
      return -1;
    }
  }

  return minutes;
};