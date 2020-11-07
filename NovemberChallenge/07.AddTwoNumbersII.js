/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const digits1 = [];
  while (l1) {
    digits1.unshift(l1.val);
    l1 = l1.next;
  }

  const digits2 = [];
  while (l2) {
    digits2.unshift(l2.val);
    l2 = l2.next;
  }

  const resultDigits = [];
  const len = Math.max(digits1.length, digits2.length);
  let remainder = 0;

  for (let i = 0; i < len; i++) {
    const digit1 = digits1[i] || 0;
    const digit2 = digits2[i] || 0;
    const sum = digit1 + digit2 + remainder;
    resultDigits.unshift(sum % 10);
    remainder = (sum - (sum % 10)) / 10;
  }

  if (remainder) resultDigits.unshift(remainder);

  const head = new ListNode(resultDigits.length ? resultDigits[0] : 0);
  let curr = head;

  for (let i = 1; i < resultDigits.length; i++) {
    const node = new ListNode(resultDigits[i]);
    curr.next = node;
    curr = node;
  }

  return head;
};