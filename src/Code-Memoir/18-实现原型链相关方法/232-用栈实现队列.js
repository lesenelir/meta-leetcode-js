var MyQueue = function() {
  this.stackIn = []
  this.stackOut = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  const len = this.stackOut.length

  if (len) {
    return this.stackOut.pop()
  }

  // stackOut is empty
  while (this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop())
  }

  return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  const x = this.pop()
  this.stackOut.push(x)
  return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stackIn.length === 0 && this.stackOut.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


// 思想： 有两个栈， 一个是输入栈，一个是输出栈；输入栈存入元素，输出栈输出元素，如果输出栈为空，输入栈有元素，则把输入栈中的内容存入输出栈中

