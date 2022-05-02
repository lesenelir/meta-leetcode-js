/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 链表的数字是逆序排列的，所以链表的第一个位置的数就是个位
  let res = new ListNode(0, null)
  let current = res // 保存新创建链表的移动指针
  let carry = 0

  while (l1 || l2) { // l1 === null && l2 === null 退出循环
    let x = l1 ? l1.val : 0
    let y = l2 ? l2.val : 0

    let sum = x + y + carry
    current.next = new ListNode(sum % 10, null)
    current = current.next
    carry = Math.floor(sum / 10)

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (carry !== 0) {
    current.next = new ListNode(carry, null)
    current = current.next
  }

  return res.next
};
