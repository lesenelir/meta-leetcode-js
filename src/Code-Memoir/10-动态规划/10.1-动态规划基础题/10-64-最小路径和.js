/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // dp[i][j] 到达 (i, j) 最小的路径和是 dp[i][j]
  let m = grid.length,
    n = grid[0].length,
    dp = new Array(m).fill().map(() => new Array(n).fill(0))

  dp[0][0] = grid[0][0]

  // 初始化第一行
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + grid[0][j]
  }

  // 初始化第一列
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0]
  }

  // 状态转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i-1][j] + grid[i][j], dp[i][j-1] + grid[i][j])
    }
  }

  return dp[m - 1][n - 1]
};
