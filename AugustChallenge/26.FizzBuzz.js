var fizzBuzz = function(n) {
  const results = [];
  for (let i = 1; i <= n; i++) {
    if (!(i % 3 || i % 5)) {
      results.push('FizzBuzz');
    } else if (!(i % 3)) {
      results.push('Fizz');
    } else if (!(i % 5)) {
    results.push('Buzz');
    } else {
      results.push(i.toString());
    }
  }

  return results;
};

console.log(fizzBuzz(15));