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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;

  let sum = 0;

  const dfs = (node, isLeft = false) => {
    if (isLeft && node.left === null && node.right === null) {
      sum += node.val;
    }

    node.left && dfs(node.left, true);
    node.right && dfs(node.right);
  }

  dfs(root);

  return sum;
};
