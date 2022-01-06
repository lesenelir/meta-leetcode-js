/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  双指针表示法
var mergeTwoLists = function(l1, l2) {
  let newList = new ListNode(-1)
  let node = newList
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      node.next = l1
      l1 = l1.next
    } else {
      node.next = l2
      l2 = l2.next
    }
    // 当前结点后移一位置
    node = node.next
  }
  // 此时某一个链表的元素已经全部安插到新链表中
  while (l1 !== null) {
    node.next = l1
    node = node.next
    l1 = l1.next
  }
  while (l2 !== null) {
    node.next = l2
    node = node.next
    l2  = l2.next
  }
  return newList.next
};


// 递归表示
var mergeTwoLists2 = function(l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1

  let newNodeList = new ListNode()
  if (l1.val < l2.val) {
    newNodeList = l1;
    newNodeList.next = mergeTwoLists2(l1.next, l2);
  } else {
    newNodeList = l2;
    newNodeList.next = mergeTwoLists2(l1, l2.next);
  }
  // 返回合并链表
  return newNodeList
};

