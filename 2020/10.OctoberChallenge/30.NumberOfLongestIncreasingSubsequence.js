var findNumberOfLIS = function(nums) {
  const lens = new Array(nums.length).fill(1);
  const counts = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (lens[j] + 1 > lens[i]) {
          lens[i] = lens[j] + 1;
          counts[i] = counts[j];
        } else if (lens[j] + 1 === lens[i]) {
          counts[i] += counts[j];
        }
      }
    }
  }

  let len = 0;
  let count = 0;

  for (let i = 0; i < lens.length; i++) {
    if (lens[i] > len) {
      len = lens[i];
      count = counts[i]
    } else if (lens[i] === len) {
      count += counts[i]
    }
  }

  return count;
};

let test = [];
console.log(findNumberOfLIS(test)); // 0

test = [1,3,5,4,7];
console.log(findNumberOfLIS(test)); // 2

test = [2,2,2,2,2];
console.log(findNumberOfLIS(test)); // 5

test = [1,2,4,3,5,4,7,2];
console.log(findNumberOfLIS(test)); // 3