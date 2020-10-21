var asteroidCollision = function(asteroids) {
  const results = [];

  for (let i = 0; i < asteroids.length; i++) {
    const current = asteroids[i]

    if (current > 0 || results.length === 0 || results[results.length - 1] < 0) {
      results.push(current)
    } else if (Math.abs(current) >= results[results.length - 1]) {
        if (current + results[results.length - 1] !== 0) i--;
        results.pop()
    }
  }

  return results;
};