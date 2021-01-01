var getHint = function(secret, guess) {
  let bulls = 0;
  let cows = 0;

  const guessSpares = new Array(10).fill(0);

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++
    } else {
      guessSpares[guess[i]]++;
    }
  }

  for (let i = 0; i < secret.length; i++) {
    if (guess[i] !== secret[i] && guessSpares[secret[i]]) {
      cows++;
      guessSpares[secret[i]]--;
    }
  }

  return `${bulls}A${cows}B`;
};

let s = ""
let g = ""
console.log(getHint(s, g));  // 0A0B

s = "1807"
g = "7810"
console.log(getHint(s, g)); // 1A3B

s = "1123"
g = "0111"
console.log(getHint(s, g)); // 1A1B