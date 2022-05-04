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
  let [pa, pb] = [headA, headB]
  while (pa) {
    // 存入的是链表
    map.set(pa, pa)
    pa = pa.next
  }

  // console.log(map)
  while (pb) {
    if (map.has(pb)) {
      return pb // 后面的链表都相等
    }
    pb = pb.next
  }

  return null
};
