var flatten = function(head) {
  if (head === null) {
   return head;
  }

  const stack = [head];
  let current, previous = null;

  while (stack.length) {
    current = stack.pop();

    if (current.next) {
      stack.push(current.next);
    }

    if (current.child) {
      stack.push(current.child);
    }

    if (previous) {
      previous.next = current;
    }

    current.prev = previous;
    current.child = null;
    previous = current;
  }

  return head;
};
