import {defaultEquals} from "./util/equalsFun";
import {Node} from "./util/Node";

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0          // 链表中元素数量
    this.head = undefined
    this.equalsFn = equalsFn
  }

  // 1. 向链表尾部添加元素
  push(element) {
    const node = new Node(element)
    let current
    if (this.head === null) {  // 空元素
      this.head = node
    } else {
      current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  // 2. 链表中移除元素
  removeAt(index) {
    if (index < 0 || index >= this.count) return undefined

    let current = this.head
    if (index === 0) {
      this.head = current.next // 移除只有一个元素，直接移除
    } else {
      let pre
      for (let i = 0; i < index; i++) {
        pre = current
        current = current.next
      }
      pre.next = current.next
    }
    this.count--
    return current.element
  }

  // 3. 根据元素位置查找元素
  getElementAt(index) {
    if (index < 0 || index >= this.count) return undefined
    let node = this.head
    for (let i = 0; i < index && node !== null; i++) {
      node = node.next
    }
    return node
  }

  // 4. 根据指定位置插入元素
  insert(element, index) {
    if (index < 0 || index > this.count) return false

    const node = new Node(element)
    if (index === 0) {  // 在第一个位置添加
      const current = this.head
      node.next = current
      this.head = node
    } else {
      const pre = this.getElementAt(index - 1)
      const current = pre.next
      node.next = current
      pre.next = node
    }
    this.count++
    return true
  }

  // 5. 返回一个元素的位置
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  // 6. 从链表中删除元素
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 7. 链表大小
  size() {
    return this.count
  }

  // 8. 判空
  isEmpty(element) {
    return this.size() === 0
  }

  // 9. 获取头结点
  getHead() {
    return this.head
  }

  // 10. toString方法，将LinkedList转换成字符串
  toString() {
    if (this.head === null) {
      return ''
    }

    let objString = `${this.head.element}`
    let current = this.head.next

    for (let i = 0; i < this.size() && current !== null; i++) {
      objString = `${objString},  ${current.element}`
      current = current.next
    }
    return objString
  }

}
