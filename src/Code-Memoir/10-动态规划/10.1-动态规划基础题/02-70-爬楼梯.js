/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 确定dp含义： dp[i] 爬楼梯的方案数
  // dp公式
  let dp = new Array(n + 1)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};


// n  -  方案数
// 0      没有方案
// 1      1
// 2      2
// 3      3
// 4      5
// 5      8

// Note: 确定递推公示： dp[n]=dp[n−1]+dp[n−2]
//          爬到第n阶台阶的是爬到第n-1台阶再爬一步 + 爬到第n-2台阶再爬两步
