var detectCycle = function(head) {
  if (!head || !head.next) return null;

  let slow = head.next;
  let fast = head.next.next;

  while (slow !== fast) {
    if (!fast) return null;
    slow = slow.next;
    fast = fast.next;
    if (fast) fast = fast.next;
  }

  slow = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};