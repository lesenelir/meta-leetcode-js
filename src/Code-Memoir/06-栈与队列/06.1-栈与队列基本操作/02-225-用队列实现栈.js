// 使用一个数组来实现栈
var MyStack = function() {
  this.queue = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let size = this.queue.length
  while (size-- > 1) {
    this.queue.push(this.queue.shift())
  }
  return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  const x = this.pop()
  this.queue.push(x)
  return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
