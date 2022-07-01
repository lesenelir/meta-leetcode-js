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
  let pa = headA,
      pb = headB,
      map = new Map()

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
