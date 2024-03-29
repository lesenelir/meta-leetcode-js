/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = new Array(m).fill(1).map(() => new Array(n).fill(1))

  // 赋值就已经进行了初始化，接下去就是写状态转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
};

var uniquePaths2 = function (m, n) {
  // const dp = new Array(m).fill().map(item => new Array(n))
  // Note: JS创建二维数组需要在map前添加fill

  const dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n)
  }
  // 初始化边界条件
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1
  }
  // 状态转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};
// 机器人在遇到与终点相邻格子的位置应该直接进入Finish

// dp[i][j] 机器人到坐标(i, j)的不同路径的总数

let arr = []
arr.fill()
console.log(arr)
