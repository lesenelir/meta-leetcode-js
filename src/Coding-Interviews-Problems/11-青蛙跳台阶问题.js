/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n === 0) return 1
  if (n === 1) return 1
  else if (n === 2) return 2

  const dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }
  return dp[n]
};


// 利用数组解构方法来解决有关递推公式问题
var numWays2 = function (n) {
  if (n === 0) return 1
  if (n === 1) return 1
  else if (n === 2) return 2

  let a = 1
  let b = 2

  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b]
  }

  return b
}






