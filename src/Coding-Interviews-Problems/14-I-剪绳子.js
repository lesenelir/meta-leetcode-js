/**
 * @param {number} n
 * @return {number}
 */

// 动态规划
// 对于要创建数组，JS可以先赋值数组内的元素值

var cuttingRope = function (n) {

  // 定义dp数组保存 剪绳子后乘积的最大值
  // dp[i] : 长度为i的剪绳后乘积最大值
  let dp = new Array(n + 1).fill(1)   // 如果不调用fill 会返回NAN
  dp[1] = 1
  dp[2] = 1
  dp[3] = 2

  for (let i = 4; i <= n + 1; i++) {
    for (let j = 2; j < i / 2 + 1; j++) { // j代表从第几段开始剪，只剪第一段对乘积无影响，从2开始
      // 剪了第j段，剩下还有i-j可以剪；
      // 如果不剪，则乘积是j*(i-j)
      // 如果剪，则 乘积是j*dp[i-j]
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]))
    }
  }
  return dp[n]

};

console.log(cuttingRope(5))
