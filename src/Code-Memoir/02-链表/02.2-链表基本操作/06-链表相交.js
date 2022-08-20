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
  // 链表相交：用map保存链表A的所有节点， 保存指针
  // 遍历链表B用key来查看该节点的值在map中是否有
  let map = new Map(),
      pa = headA,
      pb = headB

  while (pa) {
    map.set(pa, pa)
    pa = pa.next
  }

  while (pb) {
    if (map.get(pb)) {
      return pb
    }
    pb = pb.next
  }

  return null // 没有找到
};

// Note: 两次遍历，把pa的遍历结果放在map中，在pb遍历的时候去查看map中是否有pb的值

