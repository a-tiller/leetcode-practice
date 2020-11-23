var rob = function(root) {

  const dfs = (node, canRob = true) => {
    if (node === null) return 0;

    if (!canRob) {
      return dfs(node.left) + dfs(node.right);
    }

    const robHere = node.val + dfs(node.left, !canRob) + dfs(node.right, !canRob);
    const skipHere = dfs(node.left) + dfs(node.right);

    return Math.max(robHere, skipHere);
  }

  return dfs(root);
};