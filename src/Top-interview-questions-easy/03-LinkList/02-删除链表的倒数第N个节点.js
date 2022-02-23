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
// fast 指针用来遍历链表最后指向删除节点位置， slow 指针代表删除的前一位
var removeNthFromEnd = function(head, n) {
  let [slow, fast] = [head, head]
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  if (fast === null) { // 删除头节点
    return head.next
  }
  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return head
};

// 求链表长度
function findListLength(head) {
  let node = head
  let len = 0
  while (node.next !== null) {
    node = node.next
    len++
  }
  return len
}


