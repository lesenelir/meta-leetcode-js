/**
 * 用数组方式实现栈
 */

class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }

}

// 使用栈类
const stack = new Stack()
console.log(stack.isEmpty())

stack.push(1)
stack.push(8)

console.log(stack.peek())

stack.push(5)
console.log(stack.size())

stack.pop()
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())

stack.clear()
console.log(stack)

// console.log(stack.toString())
