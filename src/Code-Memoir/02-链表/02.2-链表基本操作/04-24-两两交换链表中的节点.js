/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // 类似于翻转链表：断链之前需要保存节点
  // 设置虚拟节点：不需要对头节点做特殊处理
  if (!head || !head.next) return head

  let newList = new ListNode(0, head),
      cur = newList

  while (cur.next && cur.next.next) {
    let node1 = cur.next,
        node2 = cur.next.next,
        temp = node2.next

    cur.next = node2
    node2.next = node1
    node1.next = temp

    cur = cur.next.next // cur指向第三个节点
  }

  return newList.next
};
