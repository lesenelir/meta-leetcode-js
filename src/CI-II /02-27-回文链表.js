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
  let pointer = head
  let res = []
  while (pointer) {
    res.push(pointer.val)
    pointer = pointer.next
  }

  let [left, right] = [0, res.length - 1]
  while (left < right) { // 相等就跳出循环
    if (res[left] !== res[right]) {
      return false
    }
    left++
    right--
  }
  return true
};
