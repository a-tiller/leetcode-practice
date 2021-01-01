var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val, null, null);

  let current = root;
  while (true) {
    if (val < current.val) {
      if (current.left) current = current.left;
      else {
        current.left = new TreeNode(val, null, null);
        return root;
      }
    } else {
      if (current.right) current = current.right;
      else {
        current.right = new TreeNode(val, null, null);
        return root;
      }
    }
  }
};