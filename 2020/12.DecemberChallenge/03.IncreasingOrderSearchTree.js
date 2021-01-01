var increasingBST = function(root) {
  const dummy = new TreeNode();
  let current = dummy;

  function inorderBuilder (node) {
    if (!node) return;
    inorderBuilder(node.left);
    node.left = null;

    current.right = node;
    current = current.right;

    inorderBuilder(node.right);
  }

  inorderBuilder(root);

  return dummy.right;
};