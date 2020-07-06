var plusOne = function(digits) {

  let i = digits.length - 1;
  do {
    digits[i] = (digits[i] + 1) % 10;
    i--;
  } while (digits[i + 1] === 0)

  if (digits[0] === 0) digits.unshift(1);P

  return digits;
};
