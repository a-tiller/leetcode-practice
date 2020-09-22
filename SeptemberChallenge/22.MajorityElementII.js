var majorityElement = function(nums) {

  let [candidateOne, candidateTwo, countOne, countTwo] = [null, null, 0, 0];

  nums.forEach(num => {
    if (num === candidateOne) countOne++;
    else if (num === candidateTwo) countTwo++;
    else if (countOne === 0) {
      candidateOne = num;
      countOne++;
    }
    else if (countTwo === 0) {
      candidateTwo = num;
      countTwo++;
    }
    else {
      countOne--;
      countTwo--;
    }
  });

  countOne = countTwo = 0;

  nums.forEach(num => {
    if (num === candidateOne) countOne++;
    else if (num === candidateTwo) countTwo++;
  });

  const results = [];
  const limit = Math.min(nums.length / 3);
  if (countOne > limit) results.push(candidateOne);
  if (countTwo > limit) results.push(candidateTwo);

  return results;
};

console.log(majorityElement([1,2]))