var reverseWords = function(s) {
  return s.split(' ').reverse().reduce((a, v) => {
    if (v.length > 0) {
      if (a.length > 0) {
        return a + ' ' + v;
      }
      return v;
    }
    return a;
  }, '');
};
