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

// 以下是暴力方法：

/**
 * @param {number[]} height
 * @return {number}
 */
var trap3 = function(height) {
  let res = 0,
    len = height.length

  // 暴力，对于当前的元素，找左右两侧超过自己的最大值，取这两个值的相对小的 - 自己的值就是能存储的水
  for (let i =  1; i < len - 1; i++) {
    let currentHeight = height[i],
      leftHeight = 0,
      rightHeight = 0

    // 找左边的超过自己的最大值
    for (let l = 0; l < i; l++) {
      if (height[l] > currentHeight) leftHeight = Math.max(leftHeight, height[l])
    }

    // 找右边超过自己的最大值
    for (let r = i + 1; r < len; r++) {
      if (height[r] > currentHeight) rightHeight = Math.max(rightHeight, height[r])
    }

    if (leftHeight && rightHeight) {
      res += Math.min(leftHeight, rightHeight) - currentHeight
    }
  }

  return res
};


