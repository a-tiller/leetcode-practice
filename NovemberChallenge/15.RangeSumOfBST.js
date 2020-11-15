var rangeSumBST = function(root, low, high) {
  let sum = 0;

  // if BST cannot contain duplicate values, replace with > and < respectively.
  if (root.left && root.val >= low) sum += rangeSumBST(root.left, low, high);
  if (root.right && root.val <= high) sum += rangeSumBST(root.right, low, high);

  if (root.val >= low && root.val <= high) sum += root.val;

  return sum;
};