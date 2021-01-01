var maxAncestorDiff = function(root) {
  let result = 0;

  const dfs = (node, minSeen = root.val, maxSeen = root.val) => {
    result = Math.max(Math.abs(node.val - minSeen), Math.abs(node.val - maxSeen), result);
    if (node.left) dfs(node.left, Math.min(node.val, minSeen), Math.max(node.val, maxSeen));
    if (node.right) dfs(node.right, Math.min(node.val, minSeen), Math.max(node.val, maxSeen));
  };

  dfs(root);

  return result
};
