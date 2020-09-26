var findPoisonedDuration = function(timeSeries, duration) {
  if (!timeSeries.length) return 0;

  const poisoned = new Array(timeSeries[timeSeries.length - 1] + duration + 1).fill(0);

  timeSeries.forEach(time => {
    for (let i = 0; i < duration; i++) {
      poisoned[time + i]++;
    }
  });

  let result = 0;

  poisoned.forEach(time => {
    if (time) result++;
  });

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