/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let stack = []
  let res = new Array(nums.length).fill(-1)
  stack.push(0)

  for (let i = 1; i < nums.length * 2; i++) {
    const top = stack[stack.length - 1]
    if (nums[i] <= nums[top]) { // 元素比栈顶元素小则入栈
      stack.push(i)
    } else {
      while (stack.length && nums[i % nums.length] > nums[stack[stack.length - 1]]) {
        const index = stack.pop()
        res[index] = nums[i % nums.length]
      }
      stack.push(i % nums.length)
    }
  }

  return res
};
