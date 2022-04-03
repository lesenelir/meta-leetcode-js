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
var removeNthFromEnd = function (head, n) {
  let node = new ListNode(0, head)
  let [slow, fast] = [node, node]
  let count = 0
  while (count < n + 1) { // 添加虚拟节点后，fast先走n+1步骤
    fast = fast.next
    count++
  }

  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return node.next
};
