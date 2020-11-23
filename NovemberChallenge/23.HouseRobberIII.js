var rob = function(root) {
  const dfs = (node) => {
    if (node === null) return [0, 0];

    const [leftWithRoot, leftWithoutRoot] = dfs(node.left)
    const [rightWithRoot, rightWithoutRoot] = dfs(node.right)

    const withRoot = node.val + leftWithoutRoot + rightWithoutRoot;
    const withoutRoot = Math.max(leftWithRoot, leftWithoutRoot) + Math.max(rightWithRoot, rightWithoutRoot);

    return [withRoot, withoutRoot];
  }

  return Math.max(...dfs(root));
};