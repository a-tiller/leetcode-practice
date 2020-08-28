var rand10 = function() {
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += rand7()
  }

  return sum % 10 + 1;
};
