/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  if (head.val === val) return head.next

  let current = head
  let pre = head

  while (current.val !== val) {
    pre = current
    current = current.next
  }
  // 此时current指向待删除结点
  pre.next = current.next
  return head
};
