var removeElements = function(head, val) {
  while (head !== null && head.val === val) {
    head = head.next;
  }

  let current = head;

  while (current !== null && current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head
};