/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 快慢指针
  // 删除一个节点：要知道该节点的前一个节点
  // 关键在于：创建一个 虚拟头节点省去对头节点的特殊操作
  let newList = new ListNode(0, head),
      fast = newList,
      slow = newList

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  // 此时，fast指向最后一个节点，slow指向代删除的前一个节点
  slow.next = slow.next.next

  return newList.next

};

// Note： 知识点：关于一次遍历就获得链表长度 并进行操作的题
// 链表题目 多用添加节点的方式来处理，以便忽略头节点特殊处理
