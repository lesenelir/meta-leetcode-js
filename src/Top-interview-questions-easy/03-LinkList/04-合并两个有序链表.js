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
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2
  if (list2 === null) return list1

  let [head1, head2] = [list1, list2]
  let newList = new ListNode(-1)
  let node = newList
  while (head1 !== null && head2 !== null) {
    if (head1.val < head2.val) {
      node.next = head1
      head1 = head1.next
    } else {
      node.next = head2
      head2 = head2.next
    }
    node = node.next
  }
  // 此时有一个链表元素已经全部放入新链表中
  while (head1 !== null) {
    node.next = head1
    head1 = head1.next
    node = node.next
  }
  while (head2 !== null) {
    node.next = head2
    head2 = head2.next
    node = node.next
  }

  // 关键点： 对于新创建节点的链表，最后返回的链表不包含头节点 。 即： newList.next
  return newList.next
};
