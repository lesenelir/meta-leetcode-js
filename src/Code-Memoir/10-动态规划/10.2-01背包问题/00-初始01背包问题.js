let weight = [1, 3, 4, 5]
let value = [15, 20, 30, 55]
let bagSize = 4


function solve(weight, value, bagSize) {
  let F = weight.length,
      C = bagSize,
      dp = new Array(F).fill(0).map(() => new Array(C + 1).fill(0))

  // console.log(dp)

  // 初始化
  for (let j = weight[0]; j <= C; j++) {
    dp[0][j] = value[0]
  }

  // 状态转移方程
  for (let i = 1; i < F; i++) {
    for (let j = 1; j <= C; j++) {
      if (j < weight[i]) {
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
      }
    }
  }

  console.log(dp)

  console.log(dp[F-1][C])
}

solve(weight, value, bagSize)

