/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
    while (n >= 4) {
      const word = [];
      if (!read4(word)) return buf.length;
      buf.push(...word)
      n -= 4;
    }

    const remainder = [];
    if (!read4(remainder)) return buf.length;
    while (n > 0) {
      buf.push(remainder.shift())
      n--;
    }

    return buf.length;
  };
};