var rotateRight = function(head, k) {
  if (!head) return head;

  let p = head;
  let counter = 1;

  while (p.next) {
    counter++;
    p = p.next;
  }

  p.next = head;

  let split = (counter - (k % counter) - 1)
  while (split > 0) {
    head = head.next;
    split--;
  }
  let newHead = head.next;
  head.next = null;

  return newHead;
};