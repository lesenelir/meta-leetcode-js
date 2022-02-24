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
var isPalindrome = function (head) {
  // 通过栈来获取链表的逆序数值
  let arr = []
  let h = head  // 保持head头指针不变
  while (h !== null) {
    arr.push(h.val)
    h = h.next
  }
  console.log(arr)
//   console.log(head)
  while (head !== null) {
    if (head.val !== arr.pop()) {
      return false
    }
    head = head.next
  }
  return true
};


// Note： 回文链表的处理 类似于 反转链表
