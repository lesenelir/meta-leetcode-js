/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length

  // 创建二维数组
  const dp = new Array(row)
  for (let i = 0; i < row; i++) {
    dp[i] = new Array(col).fill(0) // 提前进行初始化0
  }

  // 初始化
  for (let i = 0; i < row && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1
  }
  for (let i = 0; i < col && obstacleGrid[0][i] === 0; i++) {
    dp[0][i] = 1
  }

  // 状态转移方程
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[row - 1][col - 1]
};

// dp[i][j] 表示机器人到坐标(i, j) 有多少条路径
// 有障碍物，(i, j)则需要表示初始状态dp[i][j]为0

// Note: 创建二维数组后，可以用fill用来赋初始值
