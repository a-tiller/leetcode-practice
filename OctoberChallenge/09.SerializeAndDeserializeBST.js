/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const serializedTree = []

  function preorderSerialize(node, storage) {
    if (!node) return;

    storage.push(node.val);
    preorderSerialize(node.left, storage);
    preorderSerialize(node.right, storage);
  }

  preorderSerialize(root, serializedTree);

  return serializedTree.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const serializedTree = data.split(',');
  let pos = 0;

  function preorderDeserialize(min, max, arr) {
    if (pos > arr.length || !arr[pos]) return null;

    const current = +arr[pos];
    if (current > max || current < min) return null;

    pos++;
    const node = new TreeNode(current);
    node.left = preorderDeserialize(min, current, serializedTree);
    node.right = preorderDeserialize(current, max, serializedTree);
    return node;
  }

  return preorderDeserialize(-Infinity, Infinity, serializedTree);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */