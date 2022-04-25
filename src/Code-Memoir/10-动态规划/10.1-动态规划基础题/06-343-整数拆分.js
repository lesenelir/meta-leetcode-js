/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], Math.max(dp[i - j] * j, (i - j) * j))
    }
  }
  return dp[n]
};

// dp[i] 含义： 分拆数字i，得到的最大乘积是dp[i]

// Note: 对于从0开始遍历到n ， 数组的长度要达到 n + 1
