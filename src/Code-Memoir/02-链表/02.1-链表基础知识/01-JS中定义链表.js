// 链表的定义 - 参考leetcode
function LinkList(val, next) {
  this.val = (val === undefined ? 0: val)
  this.next = (next === undefined ? null : next)
}

class ListNode {
  val
  next = null
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

// 数组内的元素在内存中是连续分布的 ； 链表内的元素在内存中不是连续分布的
