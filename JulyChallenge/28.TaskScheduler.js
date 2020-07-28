var leastInterval = function(tasks, n) {
  const taskCounts = new Map();

  tasks.forEach((letter) => {
    let current = 0;
    if (taskCounts.has(letter)) {
      current = taskCounts.get(letter);
    }
    taskCounts.set(letter, current + 1)
  });

  let max = 0;
  let maxCount = 0;

  taskCounts.forEach((v) => {
    if (v > max) {
      max = v;
      maxCount = 1;
    } else if (v === max) {
      maxCount++;
    }
  });

  return Math.max(((max - 1) * (n + 1)) + maxCount, tasks.length);
};

// let tasks =  ["A","A","A","B","B","B"];
// let n = 2;

// console.log(leastInterval(tasks, n));

// tasks =  ["A","A","A","B","B","B"];
// n = 0;

// console.log(leastInterval(tasks, n));

// tasks =  ["A","A","A","A","A","A","B","C","D","E"];
// n = 2;

// console.log(leastInterval(tasks, n));

// tasks =  ["A","A","A","A","A","A","B","C","D","E","F","G","H","I","J","K","L"];
// n = 2;

// console.log(leastInterval(tasks, n));