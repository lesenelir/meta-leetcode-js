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
  // 交换节点
  let newList = new ListNode(0, head), // 添加一个虚拟头节点
      cur = newList,
      temp1,
      temp2

  while (cur.next && cur.next.next) {
    temp1 = cur.next
    temp2 = cur.next.next

    // 进行交换节点操作
    cur.next = temp2
    temp1.next = temp2.next
    temp2.next = temp1

    cur = cur.next.next // 移动cur为第三个节点
  }

  return newList.next
};
