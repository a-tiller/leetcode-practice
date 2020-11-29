var canReach = function(arr, start) {
  if (start < 0 || start >= arr.length) return false;
  if (arr[start] < 0) return false;
  if (arr[start] === 0) return true;

  arr[start] = -arr[start];
  return canReach(arr, start + arr[start]) || canReach(arr, start - arr[start])
};