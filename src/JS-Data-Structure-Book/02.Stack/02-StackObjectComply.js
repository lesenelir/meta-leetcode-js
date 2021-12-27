/**
 * 用对象方式实现栈
 * 键值是count
 */

class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  isEmpty() {
    return this.count === 0
  }

  clear() {
    this.count = 0
    this.items = {}
  }

  size() {
    return this.count
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }

}

// 使用栈类

const stack = new Stack()
console.log(stack.isEmpty())

stack.push(1)
stack.push(8)

console.log(stack.peek())
console.log(stack.toString())

stack.push(5)
console.log(stack.size())

stack.pop()
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())

stack.clear()
console.log(stack)
