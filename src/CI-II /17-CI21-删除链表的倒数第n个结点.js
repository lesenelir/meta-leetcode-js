/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 思路： 快慢指针 - fast指针先移动，再一起移动slow和fast指针
  // 链表 创建虚拟头节点
  let newList = new ListNode(0, head)
  let [slow, fast] = [newList, newList]
  let count = n + 1
  while (count--) {
    fast = fast.next
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return newList.next
};
