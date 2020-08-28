var rand10 = function() {
  while (true) {
    const row = rand7();
    const col = rand7();
    const idx = col + (row - 1) * 7;

    if (idx <= 40) {
      return 1 + (idx - 1) % 10;
    }
  }
};
