/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // 动态规划是递归的优化版本
  // dp[i]表示 凑成金额为i所需要的最少金币个数
  const dp = new Array(amount + 1).fill(Infinity)

  dp[0] = 0

  for (let i = 0; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue
      dp[i] = Math.min(dp[i], dp[i-coin] + 1)
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
};
