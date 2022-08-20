/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 双指针操作：pre 、 cur
  // 关键在于：断链之前保存cur.next这个节点
  let cur = head,
      pre = null

  while (cur) {
    let temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }

  return pre
};

// Note： 反转链表用两个指针来完成
