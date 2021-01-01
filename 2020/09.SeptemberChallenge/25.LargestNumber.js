var largestNumber = function(nums) {
  nums.sort((a, b) => {
    return (+`${a}${b}` > +`${b}${a}`) ? -1 : 1;
  });
  if (nums[0] === 0) return '0';
  return nums.join('');
};

let test = [10,2]
console.log(largestNumber(test))

test = [3,30,34,5,9]
console.log(largestNumber(test))

test = [3,30,34,5,9,34]
console.log(largestNumber(test))