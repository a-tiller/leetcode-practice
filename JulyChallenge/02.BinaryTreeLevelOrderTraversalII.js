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
  const result = [];

  const walk = (node, depth) => {
    if (node === null) {
      return;
    }

    if (result[depth] === undefined) {
      result[depth] = [];
    }

    result[depth].push(node.val);
    walk(node.left, depth + 1);
    walk(node.right, depth + 1);
  }

  walk(root, 0);

  return result.reverse();
};