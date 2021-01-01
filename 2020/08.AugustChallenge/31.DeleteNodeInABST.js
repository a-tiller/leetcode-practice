var deleteNode = function(root, key) {
  if (!root) return null;

  let current = root;
  let prev = null;
  let prevDir = '';

  while (current.val !== key) {
    prev = current;

    if (current.val < key) {
      current = current.right;
      prevDir = 'right';
    } else {
      current = current.left;
      prevDir = 'left'
    }

    if (!current) return root;
  }

  if (!current.left && !current.right) {
    if (prev) {
      prev[prevDir] = null;
    } else {
      root = null;
    }
    return root;
  }

  if (!current.left) {
    if (prev) {
      prev[prevDir] = current.right;
    } else {
      root = current.right;
    }
    return root;
  }

  if (!current.right) {
    if (prev) {
      prev[prevDir] = current.left;
    } else {
      root = current.left;
    }
    return root;
  }

  let temp = current.left;
  let tempVal = temp.val;
  if (prev) {
    prev[prevDir] = current.right;
  } else {
    root = current.right;
  }
  current = current.right;

  while(true) {
    if (tempVal < current.val) {
      if (!current.left) {
        current.left = temp;
        return root;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = temp;
        return root;
      }
      current = current.right;
    }
  }
};