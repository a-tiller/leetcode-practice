var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val, null, null);

  if (val < root.val) {
    if (root.left) insertIntoBST(root.left, val);
    else root.left = new TreeNode(val, null, null)
  } else if (val > root.val) {
    if (root.right) insertIntoBST(root.right, val);
    else root.right = new TreeNode(val, null, null)
  }

  return root;
};