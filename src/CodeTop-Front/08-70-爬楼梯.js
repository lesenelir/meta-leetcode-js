/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // dp[i] 表示爬上楼的总共有多少种方法
  const dp = []

  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }

  return dp[n]
};
