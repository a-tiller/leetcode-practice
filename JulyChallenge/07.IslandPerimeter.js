var islandPerimeter = function(grid) {
  let perimeter = 0;
  const height = grid.length;

  if (height === 0) {
    return perimeter;
  }

  const width = grid[0].length;

  const checkUp = (grid, row, col) => {
    if (row - 1 >= 0) {
      if (grid[row - 1][col]) {
        return 0;
      }
    }

    return 1;
  };

  const checkDown = (grid, row, col) => {
    if (row + 1 < height) {
      if (grid[row + 1][col]) {
        return 0;
      }
    }

    return 1;
  };

  const checkLeft = (grid, row, col) => {
    if (col - 1 >= 0) {
      if (grid[row][col - 1]) {
        return 0;
      }
    }

    return 1;
  }

  const checkRight = (grid, row, col) => {
    if (col + 1 < width) {
      if (grid[row][col + 1]) {
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
