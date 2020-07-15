var reverseWords = function(s) {
  let wordBuilder = '';
  let wordArray = [];
  let position = 0;
  let stringBuilder = '';

  while (position < s.length) {
    if (s[position] !== ' ') {
      wordBuilder += s[position];
    }
    if (s[position] === ' ' || position + 1 === s.length) {
      if (wordBuilder.length) {
        wordArray.push(wordBuilder);
        wordBuilder = '';
      }
    }
    position++;
  }

  for (let i = wordArray.length - 1; i >= 0; i--) {
    if (i > 0) {
      stringBuilder += wordArray[i] + ' ';
    } else {
      stringBuilder += wordArray[i];
    }
  }

  return stringBuilder;
};
