var reorderList = function(head) {
  if (!head || !head.next) return head;

  const store = [];
  let current = head;

  while (current) {
    store.push(current);
    current = current.next;
  }

  let left = 0;
  let right = store.length - 1;

  while (left < right) {
    store[right].next = store[left].next;
    store[left].next = store[right];
    left++;
    right--;
  }

  store[left].next = null;

  return head;
};
