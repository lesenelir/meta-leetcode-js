/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  // 动态规划
  // dp[i] 到第i级台阶共有 dp[i]种方法
  // dp[i] = dp[i-1] + dp[i-2]

  const dp = new Array(n + 1)
  dp[0] = 1
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }

  return dp[n]
};
