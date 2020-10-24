var bagOfTokensScore = function(tokens, P) {

  let maxScore = 0;
  let score = 0;

  tokens.sort((a, b) => (a - b));

  while (tokens.length) {
    while (tokens[0] <= P) {
      P -= tokens.shift();
      score += 1
    }

    maxScore = Math.max(maxScore, score);

    if (!score) break;

    P += tokens.pop()
    score--;
  }

  return maxScore;
};