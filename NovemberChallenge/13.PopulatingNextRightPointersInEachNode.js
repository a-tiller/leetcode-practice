var connect = function(root) {
  if (!root) return root;

  let node = root;
  let nextLevel = root.left;

  while (nextLevel) {
    node.left.next = node.right;
    if (node.next) {
      node.right.next = node.next.left;
      node = node.next;
    } else {
      node = nextLevel;
      nextLevel = node.left;
    }
  }

  return root;
};