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
var reverseList = function(head) {
  let pre = null
  let cur = head

  while (cur !== null) {
    let temp = cur.next // 【易错】：保存cur的后面一个节点，方便后面cur的移动
    cur.next = pre // 改变指针指向
    pre = cur // 先移动pre
    cur = temp // 再移动cur
  }

  return pre  //
};

// Note： 反转链表用两个指针来完成
