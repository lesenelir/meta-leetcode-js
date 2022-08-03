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
  // 链表结合map 存储map存储链表节点
  if (!headA || !headB) return null

  let map = new Map()

  let pa = headA,
      pb = headB

  while (pa) {
    map.set(pa, pa)
    pa = pa.next
  }

  while (pb) {
    if (map.has(pb)) {
      return pb
    }
    pb = pb.next
  }

  return null
};
