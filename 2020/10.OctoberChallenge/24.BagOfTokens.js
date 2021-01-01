var bagOfTokensScore = function(tokens, P) {
  let [s, l, r] = [0, 0, tokens.length - 1];

  tokens.sort((a, b) => (a - b));

  while (true) {
    if (tokens[l] <= P) {
      P -= tokens[l]
      s++;
      l++;
    } else if (s > 0 && l < r) {
      P += tokens[r];
      s--;
      r--;
    } else {
      break;
    }
  }

  return s;
};