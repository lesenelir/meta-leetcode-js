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
  // 删除链表找到该节点的前一个节点
  // 快慢指针
  let newList = new ListNode(0, head),
      slow = newList,
      fast = newList

  while (n--) {
    fast = fast.next
  }

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return newList.next
};
