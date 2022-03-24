/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 快慢指针，慢指针走一步，快指针走两步，如果有环，必定相遇
var hasCycle = function(head) {
  if (!head || !head.next) return false
  let [slow, fast] = [head, head]
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      return true
    }
  }
  return false
};
