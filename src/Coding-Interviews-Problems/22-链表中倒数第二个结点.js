/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 顺序查找
var getKthFromEnd = function (head, k) {
  let node = head
  let length = 0
  while (node !== null) {
    node = node.next
    length++
  }
  // 此时获得链表的长度
  node = head
  for (let i = 0; i < length - k; i++) {
    node = node.next
  }
  return node
};

// 快慢指针
var getKthFromEnd2 = function (head, k) {
  let fast = head, slow = head

  // 快指针先走k步，设置快慢指针之间的距离
  for (let i = 0; i < k; i++) {
    fast = fast.next
  }
  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }
  return slow
};
