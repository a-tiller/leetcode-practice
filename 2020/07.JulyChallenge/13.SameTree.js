var isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p && q || p && !q) {
    return false;
  }

  const pStack = [p];
  const qStack = [q];

  while (pStack.length > 0 || qStack > 0) {
    let a = pStack.pop();
    let b = qStack.pop();

    if (a.val !== b.val) {
      return false;
    }

    if (a.right && !b.right || !a.right && b.right || a.left && !b.left || !a.left && b.left) {
      return false;
    }

    if (a.right) {
      pStack.push(a.right);
      qStack.push(b.right);
    }

    if (a.left) {
      pStack.push(a.left);
      qStack.push(b.left);
    }
  }

  return true;
};