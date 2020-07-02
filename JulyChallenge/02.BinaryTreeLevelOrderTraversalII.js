/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) {
    return [];
  }

  const queue = [{depth: 0, node: root}];
  const result = [];
  let currentLevel = [];
  let currentDepth = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.depth > currentDepth) {
      result.unshift(currentLevel);
      currentLevel = [];
      currentDepth++;
    }

    currentLevel.push(current.node.val);

    if (current.node.left !== null) {
      queue.push({depth: currentDepth + 1, node: current.node.left});
    }
    if (current.node.right !== null) {
      queue.push({depth: currentDepth + 1, node: current.node.right});
    }
  }

  result.unshift(currentLevel);

  return result;
};