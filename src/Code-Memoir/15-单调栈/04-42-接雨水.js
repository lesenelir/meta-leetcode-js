/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // 单调栈，维护一个单调递减的栈
  // 当前高度小于栈顶高度则入栈下标，当前高度大于栈顶高度，说明可以接雨水
  let res = 0,
      stack = [],
      len = height.length

  for (let i = 0; i < len; i++) {
    // 当前高度大于栈顶元素高度时
    while (stack.length !== 0 && height[i] > height[stack[stack.length - 1]]) {
      let bottom = stack.pop() // 底部
      if (stack.length === 0) break // 没有左墙 break
      let right = i
      let left = stack[stack.length - 1]
      let curHeight = Math.min(height[left], height[right]) - height[bottom]
      res += (right - left - 1) * curHeight
    }
    stack.push(i)
  }

  return res
};

var trap2 = function(height) {
  // 单调栈： 维护一个从栈底到栈顶-从大到小的栈
  let stack = []
  let res = 0
  stack.push(0)

  for (let i = 1; i < height.length; i++) {
    const top = stack[stack.length - 1]
    if (height[i] < height[top]) {
      stack.push(i)
    } else if (height[i] === height[top]) {
      stack.pop()
      stack.push(i)
    } else { // 待插入元素大于单调栈的栈顶元素，出现凹槽
      while (stack.length && height[i] > height[stack[stack.length - 1]]) {
        let mid = stack[stack.length - 1] // 底部元素
        stack.pop()
        // 弹出元素后 栈顶元素是底部元素左侧的元素
        if (stack.length) {
          let left = stack[stack.length - 1]
          let right = i
          let h = Math.min(height[left], height[right]) - height[mid]
          let w = right - left - 1
          res += h * w
        }
      }
      stack.push(i)
    }
  }
  return res
};
