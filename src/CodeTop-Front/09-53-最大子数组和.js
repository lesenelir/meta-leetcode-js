/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // dp[i] 以nums[i]结尾的最大子数组和是dp[i]
  const dp = new Array(nums.length)
  dp[0] = nums[0]
  let res = dp[0]

  for (let i = 1; i < dp.length; i++) {
    if (dp[i-1] > 0) {
      dp[i] = dp[i-1] + nums[i]
    } else {
      dp[i] = nums[i]
    }
  }

  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i])
  }

  return res

};
