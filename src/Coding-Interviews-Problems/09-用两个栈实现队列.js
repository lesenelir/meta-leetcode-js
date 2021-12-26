var CQueue = function() {
  this.stackA = []
  this.stackB = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.stackB.length) {
    return this.stackB.pop()  // 弹出末端元素
  } else {
    while (this.stackA.length) {  // B为空，循环判断A不为空则压入B栈中
      this.stackB.push(this.stackA.pop())
    }
    if (this.stackB.length) {
      return this.stackB.pop()
    } else {
      return -1
    }
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
