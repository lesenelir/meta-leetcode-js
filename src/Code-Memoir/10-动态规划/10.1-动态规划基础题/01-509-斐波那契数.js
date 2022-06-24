/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // dp[i] 表示 第i项的斐波那契数列的值是dp[i]
  let dp = []

  // dp初始化
  dp[0] = 0
  dp[1] = 1

  for (let i = 2; i <= n; i++) { // 递归遍历顺序
    dp[i] = dp[i-1] + dp[i-2]   // 递推公式
  }
  // console.log(dp)
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

