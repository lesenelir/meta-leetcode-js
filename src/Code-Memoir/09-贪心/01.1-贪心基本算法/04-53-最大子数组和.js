/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var maxSubArray1 = function(nums) {
  // 动态规划 dp[i] 以 nums[i] 结尾的最大子数组和是dp[i]
  // dp[i] 有两个方向选择：dp[i-1] + nums[i] 和 nums[i]
  let len = nums.length
  dp = new Array(len).fill(0)

  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  }

  return Math.max(...dp)
};



var maxSubArray = function(nums) {
  // count 用来表示区间长度
  let res = -Infinity,
      count = 0

  for(let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (count > res) { // count > 0  且 count > res 更新res
      res = count
    }
    if (count <= 0) count = 0 // 开始重新统计区间长度
  }

  return res
};
