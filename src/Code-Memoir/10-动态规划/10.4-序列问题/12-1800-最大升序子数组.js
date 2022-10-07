/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  // dp, dp[i] 以 nums[i]结尾的最大升序子数组和
  let len = nums.length,
    dp = new Array(len).fill(0)

  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i-1]) dp[i] = dp[i-1] + nums[i]
    else dp[i] = nums[i]
  }

  return Math.max(...dp)
};

// 直接遍历模拟
var maxAscendingSum2 = function(nums) {
  // 模拟
  let res = nums[0],
    temp = nums[0],
    len = nums.length

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i-1]) temp += nums[i]
    else temp = nums[i]
    res = Math.max(res, temp)
  }

  return res
};
