/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
  if (!head) {
    const insert = new Node(insertVal, null);
    insert.next = insert;
    return insert;
  }

  head.seen = true;
  let current = head.next;

   while (!current.seen) {
     if (current.val <= insertVal && current.next.val >= insertVal) break;
     if (current.val > current.next.val && (current.val < insertVal || insertVal < current.next.val)) break;
     current = current.next;
   }

   current.next = new Node(insertVal, current.next);
   head.seen = false;
   return head;
};