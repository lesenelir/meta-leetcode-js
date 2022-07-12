/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  // 连续递增子序列， 只需要返回最大长度
  // dp[i] 以nums[i]结尾的下标最大的递增长度是dp[i]

  const dp = new Array(nums.length).fill(1), // dp初始化单个元素的长度都为1
      len = dp.length

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i-1]) { // 当前元素大于前一个元素则把当前元素的长度➕1
      dp[i] = dp[i-1] + 1
    }
  }

  return Math.max(...dp)

};
