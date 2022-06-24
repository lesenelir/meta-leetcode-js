/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  // dp[i][j] 表示到坐标(i, j)有dp[i][j]条路径
  let m = obstacleGrid.length,
      n = obstacleGrid[0].length,
      dp = new Array(m).fill().map(() => new Array(n).fill(0)) // 初始化直接设置为0
  // console.log(dp)

  // 初始化
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) { // 有障碍物
      break
    }
    dp[i][0] = 1
  }

  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      break
    }
    dp[0][i] = 1
  }

  // 状态转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1)continue
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }

  return dp[m-1][n-1]
};

// dp[i][j] 表示机器人到坐标(i, j) 有多少条路径
// 有障碍物，(i, j)则需要表示初始状态dp[i][j]为0

// Note: 创建二维数组后，可以用fill用来赋初始值


// Note: js用map创建二维数组时，需要用fill

// const dp = new Array(row).fill().map(() => new Array(col).fill(初始化值))
