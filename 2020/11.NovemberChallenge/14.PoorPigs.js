var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  const tests = (minutesToTest / minutesToDie) + 1;

  return Math.ceil(Math.log(buckets) / Math.log(tests));
};