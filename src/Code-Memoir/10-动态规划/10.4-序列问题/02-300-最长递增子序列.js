/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // dp[i] 是以nums[i]结尾的最长递增子序列的长度
  // 初始化都为1
  // 即，初始化时:以nums[i]结尾的最长递增子序列的长度都为1
  // 状态转移方程: dp[i]以i结尾的最长递增子序列是 j从0~i-1各个位最大值+1
  const dp = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  console.log(dp)
  return Math.max(...dp)
};
