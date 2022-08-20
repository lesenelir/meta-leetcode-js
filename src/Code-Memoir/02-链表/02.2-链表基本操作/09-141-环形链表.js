/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // 判断一个链表是否有环：双指针，fast走两步，slow走一步
  let [slow, fast] = [head, head]

  while (fast && fast.next) { // 对于无环情况，fast总先执行完
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }

  return false
};

var hasCycle2 = function(head) {
  // 通过哈希表来保存遍历的节点
  let map = new Map(),
      cur = head

  while (cur) {
    if (map.get(cur)) return true
    map.set(cur, cur)
    cur = cur.next
  }

  return false
};
