/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // dp[i] 斐波那契数列第i项的值
  const dp = new Array(n + 1)

  // 初始化
  dp[0] = 0
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % 1000000007
  }

  return dp[n]
};
