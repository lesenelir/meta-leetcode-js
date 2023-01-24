/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  if (grid.length === 0) return 0

  // 类似于机器人走路，只能往右边走 或者 往下边走
  let m = grid.length,
    n = grid[0].length,
    dp = new Array(m).fill().map(() => new Array(n).fill(0))

  dp[0][0] = grid[0][0]

  // 初始化
  // 第0行
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + grid[0][j]
  }

  // 第0列
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0]
  }

  // 转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    }
  }

  return dp[m-1][n-1]
};
