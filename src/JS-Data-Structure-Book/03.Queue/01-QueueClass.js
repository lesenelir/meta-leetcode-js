/**
 * 用对象方式实现队列
 */

class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0  // 指向队头指针
    this.items = {}
  }

  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++  // 队头指针后移
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  size() {
    return this.count - this.lowestCount
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

// 使用队列类
const queue = new Queue()
queue.enqueue('Lee')
queue.enqueue('Lesenelir')
console.log(queue.toString())

console.log(queue.size())
console.log(queue.isEmpty())

queue.dequeue()
