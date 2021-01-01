var flipAndInvertImage = function(A) {
  const len = A.length;

  for (let i = 0; i < len; i++)  {
    let left = 0;
    let right = len - 1;

    while (left <= right) {
      [A[i][left], A[i][right]] = [A[i][right]^1, A[i][left]^1];
      left++;
      right--;
    }
  }

  return A;
};
