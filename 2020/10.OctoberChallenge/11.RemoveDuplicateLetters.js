var removeDuplicateLetters = function(s) {
  const letterMap = {};
  let size = 0;
  let result = "";
  let pos = 0;

  for (let i = 0; i < s.length; i++) {
    if (!letterMap.hasOwnProperty(s[i])) {
      letterMap[s[i]] = 1 << size;
      size++;
    }
  }

  function hasLetters(string, map = letterMap) {
    let v = 0;
    for (let i = 0; i < string.length; i++) {
      v |= (map[string[i]] || 0);
    }
    return v;
  }

  function sumLetters(letters, map = letterMap) {
    let v = 0;
    for (let i = 0; i < letters.length; i++) {
      v += (map[letters[i]] || 0);
    }
    return v;
  }

  while (size > 0) {
    const remaining = Object.keys(letterMap).sort();
    for (let i = 0; i < remaining.length; i++) {
      const letter = remaining[i]
      const candidate = s.indexOf(letter, pos);
      if (hasLetters(s.slice(candidate)) === sumLetters(remaining)) {
        result += letter;
        pos = candidate + 1;
        delete letterMap[letter];
        size--;
        break;
      }
    }
  }

  return result;
};

let test = "bcabc"
console.log(removeDuplicateLetters(test)) // abc

test = "cbacdcbc"
console.log(removeDuplicateLetters(test)) // acdb

test = "ecbacba"
console.log(removeDuplicateLetters(test)) // eacb
