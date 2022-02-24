/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 判断链表是否有环，使用快慢指针： 慢指针每次走一步，快指针每次走两步，如果相遇就有环，如果有一个为空则没有环
var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  let [slow, fast] = [head, head]
  while (fast !== null && fast.next !== null) { // fast走两步，所以需要fast.next !== null
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      return true
    }
  }
  return false
};


// Note: 以不同的速度奔跑，如果有环的话，总会在某一时刻相遇
