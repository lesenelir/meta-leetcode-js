/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  // 递归方法来解决，逆序打印链表可以用“归”的方法来解决
  let arr = []

  traversal(head)
  return arr

  function traversal(cur) {
    if (!cur) return

    traversal(cur.next)
    arr.push(cur.val)
  }

};