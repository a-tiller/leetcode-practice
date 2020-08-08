var closestValue = function(root, target) {

  let a = Infinity;
  let b = -Infinity;

  const binarySearch = function(n, t) {
    if (!n) return;

    const v = n.val;

    if (v === t) {
      a = v;
    } else if (v > t) {
      a = Math.min(a, v);
      binarySearch(n.left, t);
    } else {
      b = Math.max(b, v);
      binarySearch(n.right, t);
    }
  }

  binarySearch(root, target);

  return a - target < target - b ? a : b;
};
