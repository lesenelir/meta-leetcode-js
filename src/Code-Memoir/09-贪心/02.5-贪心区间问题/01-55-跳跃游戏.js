/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 能跳到第3个格子，则尝试1～3之间所有格子的最大距离
  let len = nums.length,
    res = 0

  for (let i = 0; i < len; i++) {
    if (i > res) return false // 当前的下标大于能跳到的最大距离，则返回为false
    res = Math.max(res, nums[i] + i)
  }

  return true
};
