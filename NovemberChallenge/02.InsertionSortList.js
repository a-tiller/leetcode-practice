var insertionSortList = function(head) {
  const dummy = new ListNode();
  let current = dummy;

  while (head) {
    const node = head;
    head = head.next;

    if (current.val > node.val) current = dummy;

    while (current.next && current.next.val < node.val) {
      current = current.next;
    }

    [current.next, node.next] = [node, current.next];
  }

  return dummy.next;
};