var sumRootToLeaf = function(root) {
  if (!root) return 0;

  let result = 0;

  function sumLeaves(node, val = 0) {
    if (!node) return;
    const currentVal = (val << 1) + node.val;
    if (!node.left && !node.right) result += currentVal;
    sumLeaves(node.left, currentVal);
    sumLeaves(node.right, currentVal);
  }

  sumLeaves(root);

  return result;
};
