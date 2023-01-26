/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let newList = new ListNode(0, head),
    pre = newList,
    cur = newList.next

  console.log(newList)

  while (cur) {
    if (cur.val === val) {
      // let temp = cur.next
      // pre.next = temp
      // cur = temp
      pre.next = cur.next
      cur = cur.next
    } else {
      cur = cur.next
      pre = pre.next
    }
  }

  return newList.next
};
