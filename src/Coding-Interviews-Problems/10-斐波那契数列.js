/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0
  else if (n === 1) return 1

  const dp = []
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]

};

// 利用数组解构来完成具有递推公式的算法
var fib2 = function (n) {
  if (n ===0) return 0
  if (n === 1) return 1

  let a = 0
  let b = 1

  for (let i = 2; i <=n ; i++) {
    [a, b] = [b, a+b]
  }

  return b
}


console.log(fib2(5))
