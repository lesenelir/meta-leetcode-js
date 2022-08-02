/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // 动态规划：
  // dp[i][j] 移动到坐标为 （i， j）的路径有dp[i][j]条

  // const dp = []
  // for (let i = 0; i < m; i++) {
  //   dp[i] = new Array(n)
  // }

  const dp = new Array(m).fill().map(() => new Array(n).fill())

  // 初始化条件
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  // 递推公式
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }

  return dp[m - 1][n - 1]
};
