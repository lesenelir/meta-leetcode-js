/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 思路：每次遇到下标就走完所有路径
  // 维护[0, cover]长度的区间，cover的值会随着数组的长度改变而变化
  let cover = 0,
      len = nums.length

  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, nums[i] + i)
    if (cover >= len - 1) return true
  }

  return false
};
