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
var swapPairs = function (head) {
  if (!head || !head.next) return head

  let node = new ListNode(0, head)
  let cur = node

  while (cur.next && cur.next.next) { // 对于链表的更换，基本上要进行临时节点的保存
    let temp1 = cur.next
    let temp2 = cur.next.next
    cur.next = temp2
    temp1.next = temp2.next // temp2是第二个节点，要保证temp2.next是原来的
    temp2.next = temp1

    cur = cur.next.next
  }

  return node.next
};
