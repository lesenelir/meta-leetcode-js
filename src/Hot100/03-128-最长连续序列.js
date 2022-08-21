/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // 数字连续的最长序列
  // 1. 先排序，再从前往后找最长连续上升序列
  if (nums.length === 0) return 0
  let len = nums.length,
      count = 1,
      res = 0

  nums.sort((a, b) => a - b)

  for (let i = 1; i < len; i++) {
    if (nums[i] - nums[i-1] === 1) {
      count++
    } else if (nums[i] - nums[i-1] === 0) {
      continue
    } else {
      res = Math.max(res, count)
      count = 1
    }
  }
  // console.log(nums, res, count)
  // 排除最后还是连续，没有进入else情况
  res = Math.max(res, count)

  return res
};
