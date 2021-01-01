var toGoatLatin = function(S) {
  const VOWELS = new Set('aeiouAEIOU');
  return S.split(' ').map((word, index) => {
    return (VOWELS.has(word[0]) ? word : word.slice(1) + word[0]) + 'ma' + 'a'.repeat(index + 1);
  }).join(' ');
};

let test = 'I speak Goat Latin';
console.log(toGoatLatin(test));

test = 'The quick brown fox jumped over the lazy dog'
console.log(toGoatLatin(test));