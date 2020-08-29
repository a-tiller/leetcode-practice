/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
  const offsets = [[0, 1], [-1, 0], [0, -1], [1, 0]];
  const visited = new Set();
  let currentFacing = 0;

  function turn() {
    robot.turnLeft();
    currentFacing = (currentFacing + 1) % 4;
  }

  function dfs(x = 0, y = 0, returnFacing = 0) {
    const possible = [0, 1, 2, 3];

    robot.clean();
    visited.add(`${x} ${y}`)

    while(possible.length) {
      const next = possible.pop();
      while (currentFacing !== next) {
        turn();
      }
      const newX = x + offsets[next][0];
      const newY = y + offsets[next][1];
      if (!visited.has(`${newX} ${newY}`)) {
        if (robot.move()) {
          dfs(newX, newY, (next + 2) % 4 )
        }
      }
    }

    while (currentFacing !== returnFacing) {
      turn();
    }
    robot.move();
  }

  dfs();
};