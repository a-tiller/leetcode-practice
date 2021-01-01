var sortList = function(head) {
  if (!head || !head.next) return head;

  let fast = head.next;
  let slow = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  [slow.next, slow] = [null, slow.next];

  return merge(sortList(head), sortList(slow));
};

const merge = (l1, l2) => {
  const dummy = new ListNode();
  let curr = dummy;

  while(l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  curr.next = l1 ? l1 : l2;

  return dummy.next;
}