/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 确定dp含义：第i个数的斐波那契值为dp[i]
  let dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};


// 递归斐波那契数
/**
 * @param {number} n
 * @return {number}
 */
var fib2 = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib2(n - 1) + fib2(n - 2)
};

