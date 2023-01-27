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
var mergeTwoLists = function(l1, l2) {
  let newList = new ListNode(0),
    cur1 = l1,
    cur2 = l2,
    cur = newList

  while (cur1 && cur2) {
    if (cur1.val <= cur2.val) {
      cur.next = new ListNode(cur1.val)
      cur1 = cur1.next
    } else {
      cur.next = new ListNode(cur2.val)
      cur2 = cur2.next
    }
    cur = cur.next
  }

  // 查看cur1 和 cur2是否遍历完
  while (cur1) {
    cur.next = new ListNode(cur1.val)
    cur1 = cur1.next
    cur = cur.next
  }

  while (cur2) {
    cur.next = new ListNode(cur2.val)
    cur2 = cur2.next
    cur = cur.next
  }

  return newList.next
};
