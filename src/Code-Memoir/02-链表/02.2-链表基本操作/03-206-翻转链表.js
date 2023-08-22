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
  // 双指针操作：pre 、 cur
  // 关键在于：断链之前保存cur.next这个节点
  let cur = head,
      pre = null

  while (cur) {
    let temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }

  return pre
};

// Note： 反转链表用两个指针来完成

// 方法二：尝试用递归方案来解决
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function(head) {
  // 尝试用递归方案来解决
  let newList = new ListNode(0, null),
    cur = newList

  traversal(head)
  return newList.next

  function traversal(node) {
    if (!node) return

    traversal(node.next)
    cur.next = new ListNode(node.val, null)
    cur = cur.next
  }

};
