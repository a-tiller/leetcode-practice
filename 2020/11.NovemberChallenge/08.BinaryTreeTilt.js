var findTilt = function(root) {

  let tiltSum = 0;

  const sumAndTilt = (node) => {
    if (!node) return 0;

    const leftSum = sumAndTilt(node.left);
    const rightSum = sumAndTilt(node.right);

    tiltSum += Math.abs(rightSum - leftSum);

    return leftSum + rightSum + node.val;
  }

  sumAndTilt(root);

  return tiltSum;
};
