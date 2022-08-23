// 使用两个数组的push pop 实现队列的操作
// 两个栈，一个栈用来存放队列元素，当需要队列的元素出队时，把In的栈元素push到Out数组总，再出Out第一个栈元素
// 进栈元素，需要把Out栈元素依次压入In栈，直至Out栈为空，再进栈元素
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
MyQueue.prototype.pop = function() { // 查看stackOut是否为空，如果不为空则输出栈pop，如果为空，则把输入栈全部推进输出栈，再pop一个元素
  const size = this.stackOut.length
  if (size) {
    return this.stackOut.pop()
  }
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
  return !this.stackOut.length && !this.stackIn.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
