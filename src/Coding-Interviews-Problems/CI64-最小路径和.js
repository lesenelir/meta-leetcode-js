/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let [m, n] = [grid.length, grid[0].length]
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  // console.log(dp)

  // 初始化条件
  // 第一行和第一列的路径只有一条
  dp[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0]
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + grid[0][j]
  }
  console.log(dp)

  // 遍历
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j]) + grid[i][j]
    }
  }

  return dp[m-1][n-1]

};

// Note： 牢记动态规划5个要点- 尤其是： dp初始化

// dp[i][j] 到坐标(i, j)最小的路径和
