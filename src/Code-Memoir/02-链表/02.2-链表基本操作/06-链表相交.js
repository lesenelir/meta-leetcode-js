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
  let [pa, pb] = [headA, headB]
  let map = new Map()

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

// Note: 两次遍历，把pa的遍历结果放在map中，在pb遍历的时候去查看map中是否有pb的值

