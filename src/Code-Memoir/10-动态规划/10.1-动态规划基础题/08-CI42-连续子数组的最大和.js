/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // dp[i] 以nums[i]结尾的连续最大子数组和
  let res = nums[0]
  const dp = new Array(nums.length)

  // 初始化
  dp[0] = nums[0]

  // 遍历 以及 状态转移方程
  for (let i = 1; i < nums.length; i++) {
    if (dp[i-1] > 0) {
      dp[i] = dp[i-1] + nums[i]
    } else {
      dp[i] = nums[i]
    }
  }

  return Math.max(...dp)
};
