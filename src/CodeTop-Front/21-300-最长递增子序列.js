/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 子序列不是连续子数组，不需要连续
  // dp[i] 以i结尾的最长子序列的长度, j 从0 ~ i-1 各个位最大值+1
  let dp = new Array(nums.length),
      len = dp.length

  // 初始化
  dp.fill(1)

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
};
