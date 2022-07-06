/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 最长上升子序列
  // 只是找最长的长度，而且还不是子数组，可以用dp来做
  // dp[i] 表示以nums[i]结尾的最长上升子序列的长度
  // 状态转移方程：dp[i]以i结尾的最长递增子序列是 j从0~i-1各个位最大值+1
  let dp = new Array(nums.length),
      len = dp.length

  // 初始化 - 以nums[i]结尾的最长递增子序列长度都是1
  dp.fill(1)

  for (let i = 1; i < len; i++) { // 遍历顺序
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1) // 状态转移方程 - dp[j]最大值赋给dp[i]
      }
    }
  }

  return Math.max(...dp)
};
