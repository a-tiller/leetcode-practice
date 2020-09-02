var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (t < 0) return false;

  const bucketMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const bucket = (t === 0) ? num : Math.floor(num / t);

    if (bucketMap.has(bucket)) return true;
    if (bucketMap.has(bucket - 1) && (num - bucketMap.get(bucket - 1)) <= t) return true;
    if (bucketMap.has(bucket + 1) && (bucketMap.get(bucket + 1) - num) <= t) return true;
    bucketMap.set(bucket, num);

    if (i >= k) {
      bucketMap.delete(Math.floor(nums[i - k] / t));
    }
  }

  return false;
};

let nums = []
let k = 0;
let t = 0;
console.log(containsNearbyAlmostDuplicate(nums, k, t)); // false

nums = [1,2,3,1];
k = 3;
t = 0;
console.log(containsNearbyAlmostDuplicate(nums, k, t)); // true

nums = [1,0,1,1];
k = 1;
t = 2;
console.log(containsNearbyAlmostDuplicate(nums, k, t)); // true

nums = [1,5,9,1,5,9];
k = 2;
t = 3;
console.log(containsNearbyAlmostDuplicate(nums, k, t)); // false

nums = [-1, -1];
k = 1;
t = -1;
console.log(containsNearbyAlmostDuplicate(nums, k, t)); // false

nums = [-1, -1];
k = 1;
t = 0;
console.log(containsNearbyAlmostDuplicate(nums, k, t)); // true

nums = [2, 1];
k = 1;
t = 1;
console.log(containsNearbyAlmostDuplicate(nums, k, t)); // true


