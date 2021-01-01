var findPoisonedDuration = function(timeSeries, duration) {
  if (!timeSeries.length) return 0;

  let result = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    result += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
  }

  result += duration;

  return result;
};

let testTimes = [];
let testDuration = 0;
console.log(findPoisonedDuration(testTimes, testDuration)); // 0

testTimes = [1,4];
testDuration = 2;
console.log(findPoisonedDuration(testTimes, testDuration)); // 4

testTimes = [1,2];
testDuration = 2;
console.log(findPoisonedDuration(testTimes, testDuration)); // 3