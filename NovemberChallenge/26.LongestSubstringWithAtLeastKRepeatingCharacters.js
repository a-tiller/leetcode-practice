var longestSubstring = function(s, k) {
  const letterOffset = 'a'.charCodeAt(0);

  const prefixCounts = new Array(s.length).fill(0);
  prefixCounts.unshift(new Array(26).fill(0));

  for (let i = 0; i < s.length; i++) {
    prefixCounts[i + 1] = [...prefixCounts[i]]
    prefixCounts[i + 1][s[i].charCodeAt(0) - letterOffset]++;
  }

  let result = 0;

  for (let i = 1; i < prefixCounts.length; i++) {
    for (let j = 0; j < i; j++) {
      if (i - j < result) continue;

      let allCountsAtLeastK = true;

      for (let l = 0; l < 26; l++) {
        const subStringCharCount = prefixCounts[i][l] - prefixCounts[j][l];
        if (subStringCharCount > 0 && subStringCharCount < k) {
          allCountsAtLeastK = false;
          break;
        }
      }

      if (allCountsAtLeastK) result = i - j;
    }
  }

  return result;
};