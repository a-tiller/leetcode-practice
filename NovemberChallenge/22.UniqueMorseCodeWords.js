var uniqueMorseRepresentations = function(words) {
  const charCodeOffset = 'a'.charCodeAt();
  const letterTable = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  const transformations = new Set();

  words.forEach((word) => {
    let transformation = '';
    for (let i = 0; i < word.length; i++) {
      transformation += letterTable[word.charCodeAt(i) - charCodeOffset];
    }
    transformations.add(transformation);
  });

  return transformations.size;
};