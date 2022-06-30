/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 回文链表 - 通过栈来存储链表val
  let res = [],
      cur = head

  while (cur) {
    res.push(cur.val)
    cur = cur.next
  }

  let [left, right] = [0, res.length - 1]
  while (left < right) {
    if (res[left] !== res[right]) {
      return false
    }
    left++
    right--
  }

  return true
};
