var rotateRight = function(head, k) {
  if (!head) return head;

  let p = head;

  for (let i = 0; i < k; i++) {
    p = p.next || head;
  }

  let split = head;

  while (p.next) {
    p = p.next;
    split = split.next;
  }

  const newHead = split.next || head;
  p.next = head;
  split.next = null;
  return newHead;
};