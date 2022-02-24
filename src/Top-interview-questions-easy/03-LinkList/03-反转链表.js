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

// Note: 对于新创建节点要设置null， 不能使用构造函数方式。如果使用构造函数方式，会造成多出节点个数
var reverseList = function(head) {
  let newNode = null // 此处相当于新创建了一个节点，但是没有设置节点，只是设置为null 【反转链表需要设置null】
  while (head !== null) {
    let temp = head.next
    head.next = newNode
    newNode = head
    head = temp
  }
  return newNode
};
