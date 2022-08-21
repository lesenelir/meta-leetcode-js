/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  // 最长连续上升序列
  // dp[i] 为以nums[i]结尾的下标最大的递增长度是dp[i]
  let dp = new Array(nums.length).fill(1),
      len = nums.length

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i-1]) {
      dp[i] = dp[i-1] + 1
    }
  }

  return Math.max(...dp)
};
