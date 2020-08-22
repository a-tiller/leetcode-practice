/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
  let success = false;
  const offsets = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  function search ([rowOffset, colOffset], row, col)  {
    if (row === destination[0] && col === destination[1]) success = true;
    if (success) return;

    let current, next = [row, col];

    while (maze[next[0]][next[1]] !== 1) {
      current = next;
      next = [current[0] + rowOffset, current[1] + colOffset];
      if (maze[next[0]] === undefined || maze[next[0]][next[1]] === undefined) break;
    }
    if (maze[current[0]][current[1]] === 2) return;
    maze[current[0]][current[1]] = 2;
    offsets.forEach((offset) => (search(offset, current[0], current[1])));
    //maze[current[0]][current[1]] -= 2;
  }

  offsets.forEach((offset) => (search(offset, start[0], start[1])));

  return success;
};

//console.log(hasPath([[0,0],[0,0]],[0,0],[1,1]));
console.log(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]],[0,4],[4,4]));