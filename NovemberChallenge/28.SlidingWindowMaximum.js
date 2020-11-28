var maxSlidingWindow = function(nums, k) {
  const currentWindow = [nums[0]];

  for (let i = 1; i < k; i++) {
    const num = nums[i];
    while (num > currentWindow[currentWindow.length - 1]) currentWindow.pop();
    currentWindow.push(num);
  }

  let maxForEachWindow = [currentWindow[0]];

  for (let i = k; i < nums.length; i++) {
    const num = nums[i];

    while (num > currentWindow[currentWindow.length - 1]) currentWindow.pop();
    if (currentWindow[0] === nums[i - k]) currentWindow.shift();
    currentWindow.push(num);

    maxForEachWindow.push(currentWindow[0]);
  }

  return maxForEachWindow;
};