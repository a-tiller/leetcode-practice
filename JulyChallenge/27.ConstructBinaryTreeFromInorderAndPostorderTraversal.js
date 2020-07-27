var buildTree = function(inorder, postorder) {

  if (inorder.length === 0) return null;

  let node = new TreeNode(postorder[postorder.length - 1])
  let pos = inorder.indexOf(node.val);


  if (pos > 0) {
    node.left = buildTree(inorder.slice(0, pos),  postorder.slice(0, pos));
  }

  if (pos < inorder.length - 1) {
    node.right = buildTree(inorder.slice(pos + 1), postorder.slice(pos, postorder.length - 1));
  }

  return node;
};
