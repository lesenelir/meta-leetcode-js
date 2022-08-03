/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // 动态规划
  // dp[i][j] 到坐标(i, j)的最短路径的和为dp[i][j]
  const m = grid.length,
      n = grid[0].length

  let dp = new Array(m).fill().map(() => new Array(n).fill())

  // 初始化
  // 第一列和第一行都只有一条路径，所以路径的和需要累加
  dp[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) { // 初始化第一列
    dp[i][0] = dp[i-1][0] + grid[i][0]
  }
  for (let j = 1; j < n; j++) { // 初始化第一行
    dp[0][j] = dp[0][j-1] + grid[0][j]
  }

  // 状态转移方程
  // dp[i][j] 是从上方和左方最小值 + 自身的grid值
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    }
  }

  return dp[m-1][n-1]
};
