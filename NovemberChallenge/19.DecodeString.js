var decodeString = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char !== ']') {
      stack.push(char);
      continue;
    }

    const reversedSubstring = [];
    while (stack[stack.length - 1] !== '[') {
      reversedSubstring.push(stack.pop());
    }

    // removes trailing [
    stack.pop();

    const reversedNumber = [];
    while(isDigit(stack[stack.length - 1])) {
      reversedNumber.push(stack.pop());
    }

    const repeatValue = reversedNumber.reverse().join('');
    const repeatableSubstring = reversedSubstring.reverse().join('');

    stack.push(...repeatableSubstring.repeat(repeatValue).split(''));
  }

  return stack.join('');
};

function isDigit(char) {
  return /\d/.test(char)
}