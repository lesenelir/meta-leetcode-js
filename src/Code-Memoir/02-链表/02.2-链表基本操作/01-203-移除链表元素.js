/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 链表双指针
// 设置虚拟节点：可以省去单独对头节点的操作; 返回值需要做特殊的处理
var removeElements = function(head, val) {
  let newList = new ListNode(0, head)
  let current = newList
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return newList.next
};
// Note： 对于需要对头节点单独处理的操作，可以创建一个虚拟节点，最后返回虚拟列表的next
