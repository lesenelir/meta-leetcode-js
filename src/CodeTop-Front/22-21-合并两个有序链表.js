/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // 创建一个新链表
  let newList = new ListNode(0, null),
      l1 = list1,
      l2 = list2,
      cur = newList

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }

  // 此时有一条链已经遍历完 l1 === null or l2 === null
  while (l1) {
    cur.next = l1
    l1 = l1.next
    cur = cur.next
  }
  while (l2) {
    cur.next = l2
    l2 = l2.next
    cur = cur.next
  }

  return newList.next

};
