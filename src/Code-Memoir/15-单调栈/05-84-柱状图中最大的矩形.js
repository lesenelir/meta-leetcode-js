/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  // 单调栈： 找左右两侧第一个小于自己高度的元素， 栈底到栈顶从小到大的元素
  let stack = []
  let res = 0
  // Note: 需要做一个数组扩容
  heights = [0, ...heights, 0]
  console.log(heights)
  stack.push(0)

  for (let i = 1; i < heights.length; i++) {
    const top = stack[stack.length - 1]
    if (heights[i] > heights[top]) {
      stack.push(i)
    } else if (heights[i] === heights[top]) {
      stack.pop()
      stack.push(i)
    } else {
      while (heights[i] < heights[stack[stack.length - 1]]) {
        let mid = stack[stack.length - 1]
        stack.pop()
        let left = stack[stack.length - 1]
        let right = i
        let h = heights[mid]
        let w = right - left - 1
        res = Math.max(res, h * w)
      }
      stack.push(i)
    }
  }
  return res
};
