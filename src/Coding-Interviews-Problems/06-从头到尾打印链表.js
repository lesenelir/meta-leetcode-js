/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  const stack = []
  let node = head
  while (node !== null) {
    stack.unshift(node.val)
    node = node.next
  }
  return stack
};
