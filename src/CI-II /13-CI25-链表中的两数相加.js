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
  // 思路：先翻转链表，再从高位进行加法，结果保存到一个新的链表里
  let newList = new ListNode(0, null)
  let newCurrent = newList

  let list1 = reverseList(l1)
  let list2 = reverseList(l2)
  // console.log(list1, list2)
  let [p1, p2] = [list1, list2]
  let carry = 0

  while (p1 || p2) { // p1 === null && p2 === null 退出循环
    let x = p1 ? p1.val : 0
    let y = p2 ? p2.val : 0

    let sum = x + y + carry
    newCurrent.next = new ListNode(sum % 10, null)
    newCurrent = newCurrent.next
    carry = Math.floor(sum / 10)

    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
  }
  if (carry !== 0) {
    newCurrent.next = new ListNode(carry, null)
    newCurrent = newCurrent.next
  }

  console.log(newList.next)
  return reverseList(newList.next)

  // 翻转链表
  function reverseList(head) {
    let pre = null
    let cur = head
    while (cur) {
      let temp = cur
      cur = cur.next
      temp.next = pre
      pre = temp
    }
    return pre
  }

};
