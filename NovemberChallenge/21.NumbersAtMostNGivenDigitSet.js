var atMostNGivenDigitSet = function(digits, n) {
  const digitsOfN = n.toString();

  let shortCombinations = 0;
  // first sum up all the combinations that are an order of magnitude or more smaller than n
  // since 0 isn't a possibile digit, every digit can appear in every place of a combination
  // of length i
  for (let i = 1; i < digitsOfN.length; i++) {
    shortCombinations += Math.pow(digits.length, i);
  }

  // now figure out the full-length combinations

  // going from most to least significant digit in n:
  // for every member of digits that is less than that digit, any member of digits can follow.
  // but if the digit is in digits, only members of digits less than next most significant digit
  // can follow.

  // So if n is 4321 and digits is [4,3,2,1], 1.X.X.X, 2.X.X.X, 3.X.X.X are all going to be fine,
  // but 4 can only be followed by 1, 2, or 3.
  // How many combinations are there like that? The same number as there are below 321

  // So the total combinations is:
  // numDigitsLessThanCorrespondingNDigit * (number of digits ** (place - 1))
  // + atMostNGivenDigitSet(digits, nWithMSDTruncated)

  // The recursion can be avoided (along with a lot of duplicate calculation) if we memoize
  // from the bottom up.


  const dp = new Array(digitsOfN.length).fill(0);
  dp.unshift(1) // there is only one combination when the least significant digit matches

  digitsOfN.split('').reverse(); // we want to go from the least to most significant digit
  for (let i = 1; i < dp.length; i++) {
    const digitOfN = digitsOfN[i - 1];
    digits.forEach(digit => {
      if (digit < digitOfN) {
        dp[i] += Math.pow(digits.length, i - 1)
      } else if (digit === digitOfN) {
        dp[i] += dp[i - 1];
        // since we only ever use the previous value we could save space by memoizing
        // previous rather than the whole array if we wanted.
      }
    });
  }

  const fullLengthCombinations = dp[dp.length - 1];

  return shortCombinations + fullLengthCombinations;
};