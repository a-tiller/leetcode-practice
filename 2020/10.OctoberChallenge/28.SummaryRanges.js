var summaryRanges = function(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let range = nums[i].toString();

    while (nums[i + 1] === nums[i] + 1) {
      i++;
    }

    if (nums[i] > +range) {
      range += `->${nums[i]}`;
    }

    result.push(range);
  }

  return result;
};

let test = [];
console.log(summaryRanges(test)); // []

test = [0,1,2,4,5,7];
console.log(summaryRanges(test)); // ["0->2","4->5","7"]

test = [0,2,3,4,6,8,9];
console.log(summaryRanges(test)); // ["0","2->4","6","8->9"]

test = [0];
console.log(summaryRanges(test)); // ["0"]

test = [-1];
console.log(summaryRanges(test)); // ["-1"]

