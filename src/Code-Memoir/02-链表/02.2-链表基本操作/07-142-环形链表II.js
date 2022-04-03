/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null
  let [fast, slow] = [head, head]
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      slow = head
      while (slow !== fast) {
        fast = fast.next
        slow = slow.next
      }
      // 此时已经相遇 返回相遇节点
      return slow
    }
  }
  return null // 不存在环
};

// Note:  环形的相遇节点：从头节点出发的指针，和从相遇节点出发的指针，两者每次都走一个节点，相遇的节点就是环形节点的入口节点
