var minDepth = function(root) {
  if (!root) return 0;

  const branches = [];
  root.left && branches.push(minDepth(root.left));
  root.right && branches.push(minDepth(root.right));

  return 1 + (branches.length ? Math.min(...branches) : 0);
};