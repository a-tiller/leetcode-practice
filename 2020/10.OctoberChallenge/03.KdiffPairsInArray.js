var findPairs = function(nums, k) {
  const aList = {};
  const bList = {};
  let foundPairs = 0;

  nums.forEach(number => {
    if (aList.hasOwnProperty(number) && aList[number]) {
        foundPairs++;
        aList[number] = false;
        bList[number + k] = false;
    }
    if (!aList.hasOwnProperty(number - k)) aList[number - k] = true;

    if (bList.hasOwnProperty(number) && bList[number]) {
      foundPairs++;
      bList[number] = false;
      aList[number - k] = false;
    }
    if (!bList.hasOwnProperty(number + k)) bList[number + k] = true;
  });

  return foundPairs;
};

let testNums = [];
let k = 0;
console.log(findPairs(testNums, k)) // 0

testNums = [3,1,4,1,5];
k = 2;
console.log(findPairs(testNums, k)) // 2

testNums = [1,2,3,4,5];
k = 1;
console.log(findPairs(testNums, k)) // 4

testNums = [1,3,1,5,4];
k = 0;
console.log(findPairs(testNums, k)) // 1

testNums = [1,2,4,4,3,3,0,9,2,3];
k = 3;
console.log(findPairs(testNums, k)) // 2

testNums = [-1,-2,-3];
k = 1;
console.log(findPairs(testNums, k)) // 2