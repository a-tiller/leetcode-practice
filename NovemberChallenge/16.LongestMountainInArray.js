var longestMountain = function(A) {
  let longestMountain = 0;

  for (let i = 1; i < A.length - 1; i++) {
    let left = i - 1;
    let right = i + 1;
    const isPeak = A[i] > A[left] && A[i] > A[right];

    if (!isPeak) continue;

    while (left > 0 && A[left] > A[left - 1]) {
      left--;
    }

    while (right < A.length && A[right] > A[right + 1]) {
      right++;
    }

    longestMountain = Math.max(longestMountain, right - left + 1);
  }

  return longestMountain;
};