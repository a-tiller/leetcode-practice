var islandPerimeter = function(grid) {
  let perimeter = 0;
  const height = grid.length;

  if (height === 0) {
    return perimeter;
  }

  const width = grid[0].length;

  const checkUp = (grid, x, y) => {
    if (x - 1 >= 0) {
      if (grid[x - 1][y]) {
        return 0;
      }
    }

    return 1;
  };

  const checkDown = (grid, x, y) => {
    if (x + 1 < height) {
      if (grid[x + 1][y]) {
        return 0;
      }
    }

    return 1;
  };

  const checkLeft = (grid, x, y) => {
    if (y - 1 >= 0) {
      if (grid[x][y - 1]) {
        return 0;
      }
    }

    return 1;
  }

  const checkRight = (grid, x, y) => {
    if (y + 1 < width) {
      if (grid[x][y + 1]) {
        return 0;
      }
    }

    return 1;
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j]) {
        perimeter += checkUp(grid, i, j) + checkDown(grid, i, j) + checkLeft(grid, i, j) + checkRight(grid, i, j);
      }
    }
  }



  return perimeter;
};
