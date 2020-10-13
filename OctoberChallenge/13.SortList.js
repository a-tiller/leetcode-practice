var sortList = function(head) {
    if (!head) return head;

    const pivot = head;
    let low = null;
    let high = null;

    let current = pivot.next;

    while(current) {
      const next = current.next;

      if (current.val <= pivot.val) {
        current.next = low;
        low = current;
      } else {
        current.next = high;
        high = current;
      }

      current = next;
    }

    pivot.next = sortList(high);
    let newHead = sortList(low)
    if (!newHead) return pivot;

    current = newHead;
    while (current.next) {
      current = current.next;
    }
    current.next = pivot;

    return newHead;
};