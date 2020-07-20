var reorderLogFiles = function(logs) {
  const letterLogs = [];
  const digitLogs = [];

  const digits = ['0','1','2','3','4','5','6','7','8','9']

  logs.forEach(log => {
    const startPos = log.indexOf(' ') + 1;
    const splitLog = {
      log,
      words: log.slice(startPos),
    }
    if (digits.includes(splitLog.words[0])) {
      digitLogs.push(splitLog);
    } else {
      letterLogs.push(splitLog);
    }
  });

  letterLogs.sort((a, b) => {
    if (a.words === b.words) {
      return  a.log.localeCompare(b.log)
    }

    return a.words.localeCompare(b.words);
  })

  return letterLogs.map(item => item.log).concat(digitLogs.map(item => item.log));
};

// let logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// console.log(reorderLogFiles(logs))