var getHint = function(secret, guess) {
  let bulls = 0;
  let cows = 0;

  const secretSpares = new Map();
  const guessSpares = new Map();

  for (let i = 0; i < guess.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      if (!secretSpares.has(secret[i])) {
        secretSpares.set(secret[i], 1);
      } else {
        secretSpares.set(secret[i], secretSpares.get(secret[i]) + 1);
      }
      if (!guessSpares.has(guess[i])) {
        guessSpares.set(guess[i], 1);
      } else {
        guessSpares.set(guess[i], guessSpares.get(guess[i]) + 1);
      }
    }
  }

  guessSpares.forEach((v, k) => {
    cows += Math.min(v, (secretSpares.get(k) || 0));
  })

  return `${bulls}A${cows}B`;
};

let s = ""
let g = ""
console.log(getHint(s, g));

s = "1807"
g = "7810"
console.log(getHint(s, g));

s = "1123"
g = "0111"
console.log(getHint(s, g));