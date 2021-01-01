var search = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  const pivot = findPivotInRotatedArray(nums);

  if (target >= nums[0]) {
    max = pivot !== -1 ? pivot : nums.length - 1;
  } else {
    min = pivot + 1;
  }

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (nums[mid] === target) return true;
    if (nums[mid] < target) min = mid + 1;
    else max = mid - 1;
  }

  return false;
};

function findPivotInRotatedArray(array) {
  let pivot = -1;
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (array[mid] > array[mid + 1]) {
      pivot = mid;
      break;
    }

    if (array[mid] < array[min]) max = mid - 1;
    else if (array[mid] > array[min]) min = mid + 1;
    else min++;
  }

  return pivot;
}