const quicksort = function(nums, start = 0, end = nums.length - 1) {
  const partitionIndex = (array, left, right) => {
    const pivot = array[Math.floor((left + right) / 2)];

    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
      }
    }

    return left;
  };

  const index = partitionIndex(nums, start, end);

  if (start < index - 1) quicksort(nums, start, index - 1);
  if (index < end) quicksort(nums, index, end);

  return nums;
};

let test = [];
console.log(quicksort(test));

test = [3, 0, 2, 5, -1, 4, 1 ];
console.log(quicksort(test));

test =  [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
console.log(quicksort(test));