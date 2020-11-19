var decodeString = function(s) {
  let position = 0;
  let numLength = 0;

  while (position < s.length) {
    if (+s[position] >= 0 && +s[position] < 10) numLength++;

    if (s[position] === '[') {
      let repeatValue = +s.slice(position - numLength, position);
      let startOfEncodedBlock = position++;
      let bracketCounter = 1;

      while (bracketCounter) {
        if (s[position] === '[') bracketCounter++;
        else if (s[position] === ']') bracketCounter--;
        position++;
      }

      return s.slice(0, startOfEncodedBlock - 1 - numLength)
        + decodeString(s.slice(startOfEncodedBlock, position - 1)).repeat(repeatValue)
        + decodeString(s.slice(position));
    }

    position++
  }

  return s;
};