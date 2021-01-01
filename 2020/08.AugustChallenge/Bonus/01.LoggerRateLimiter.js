var Logger = function() {
  this.recents = new Map();
};

Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  this.recents.forEach((v, k) => {
    if (timestamp - k >= 10) {
      this.recents.delete(k);
    }
  })

  let found = false;

  this.recents.forEach((v) => {
    if (v.has(message)) {
      found = true;
    }
  });

  if (!found) {
    if (this.recents.has(timestamp)) {
      this.recents.get(timestamp).add(message);
    } else {
      this.recents.set(timestamp, new Set([message]));
    }

    return true;
  }

  return false;
};