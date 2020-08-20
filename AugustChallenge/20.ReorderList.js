var reorderList = function(head) {
  // find midpoint and split the lists
  let mid = head;
  let head2 = head;

  while (head2.next){
    mid = mid.next;
    head2.next && head2 = head2.next;
    head2.next && head2 = head2.next;
  }

  head2 = mid.next;
  mid.next = null;

  // reverse second half of list
  let prev = null;

  while(head2) {
    [head2.next, head2, prev] = [prev, head2.next, head2];
  }

  head2 = prev;

  // merge lists
  let current = head;

  while (head2) {
    [current.next, head2.next, current, head2] = [head2, current.next, current.next, head2.next];
  }

  return head;
};
