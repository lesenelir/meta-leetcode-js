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
  // 思路： 判断链表是否有无环，可以用fast和slow指针进行“龟兔赛跑”比赛判断，如果相遇则有环
  // 环的入口： 有环后移动slow归位，继续移动fast和slow 直至相遇的节点为环的节点
  if (!head || !head.next) return null
  let [fast, slow] = [head, head]

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) { // 相遇则代表有环
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }
  return null
};
