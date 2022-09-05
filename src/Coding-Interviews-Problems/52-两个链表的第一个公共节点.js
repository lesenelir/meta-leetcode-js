/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // 用map存储链表
  let map = new Map(),
      p1 = headA,
      p2 = headB

  while (p1) {
    map.set(p1, p1)
    p1 = p1.next
  }

  // 遍历p2 看p2的节点在map中有无
  while (p2) {
    if (map.has(p2)) {
      return p2
    }
    p2 = p2.next
  }

  return null
};
