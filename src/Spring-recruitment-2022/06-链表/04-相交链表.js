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
  if (!headA || !headB) return null
  let map = new Map()

  let pa = headA
  while (pa !== null) {
    map.set(pa, pa)
    pa = pa.next
  }

  let pb= headB
  while (pb !== null) {
    if (map.has(pb)) {
      return pb
    }
    pb = pb.next
  }
  return null
};
