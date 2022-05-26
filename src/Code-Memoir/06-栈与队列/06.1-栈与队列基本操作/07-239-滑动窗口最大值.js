/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // 类似于单调栈： 维护一个单调递减的数列
  let stack = []
  let res = []
  for(let i = 0; i < nums.length; i++){
    // 遍历到的元素大于等于当前数列中的元素 则 依次删除数列中的元素
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]){
      stack.pop()
    }
    stack.push(i)
    if (i - k >= stack[0]) stack.shift()
    if (i >= k - 1) res.push(nums[stack[0]])
  }
  return res
};
