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
// 双指针解决
var reverseList = function (head) {
  let current = head
  let pre = null
  let temp
  while (current !== null) {
    temp = current.next
    current.next = pre
    pre = current
    current = temp
  }
  return pre
};

// 递归方式
// 令F(node)为问题:反转以node为头节点的单向链表；
// 一般，我们需要考虑F(n)和F(n-1)的关系，那么这里，如果n代表以node为头节点的单向链表，那么n-1就代表以node.next为头节点的单向链表.
// 所以，我们令F(node.next)为问题：反转以node.next为头节点的单向链表；
// 那么，F(node)和F(node.next)之间的关系是？这里我们来简单画个图，假设我们反转3个节点的链表：
// 1 -> 2 -> 3
// 那么，F(node=1)=F(node=2)+?
// 这里假设子问题F(node=2)已经解决，那么我们如何解决F(node=1)：
/**
 *  此时链表的结点顺序是 1 -> 3 -> 2     f(node=2)
 *
 *
 */

// 很明显，我们需要反转node=2和node=1， 即 node.next.next=node; 同时 node.next=null;
// 所以，这个问题就可以是：F(node=1)=F(node=2)+ 反转node=2和node=1
var reverseList2 = function (head) {
  if (head === null || head.next === null) return head

  const newHead = reverseList2(head.next)
  head.next.next = head
  head.next = null
  return newHead
};
