var buildTree = function(inorder, postorder) {

  if (!inorder.length) return null;

  let poPos = postorder.length - 1;

  const valueToIndex = new Map();
  inorder.forEach((v, i) => {
    valueToIndex.set(v, i);
  });

  const treeBuilder = (start, end) => {

    if (start > end) return null;

    const node = new TreeNode(postorder[poPos]);
    poPos--;

    if (start === end) return node;

    const ioPos = valueToIndex.get(node.val);
    node.right = treeBuilder(ioPos + 1, end);
    node.left = treeBuilder(start, ioPos - 1);

    return node;
  }

  return treeBuilder(0, inorder.length - 1);
};
