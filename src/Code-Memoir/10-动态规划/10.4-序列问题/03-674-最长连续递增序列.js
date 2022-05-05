/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  // dp[i] 以nums[i]结尾的最长连续子序列
  // 初始化自身长度就是递增的 即为1\
  // 状态转移方程： 原先的基础上
  const dp = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1] < nums[i]) {
      dp[i] = dp[i-1] + 1
    }
  }

  console.log(dp)
  return Math.max(...dp)
};
