let weight = [1, 3, 4, 5]
let value = [15, 20, 30, 55]
let bagSize = 4


// let weight = [4, 5, 6, 2, 2]
// let value = [6,4,5,3,6]
// let bagSize = 10


function solve(weight, value, bagSize) {
  let F = weight.length,
      C = bagSize,
      dp = new Array(F).fill(0).map(() => new Array(C + 1).fill(0)),
      path = new Array(F).fill(0).map(() => new Array(C + 1).fill(0))

  // console.log(dp)

  // 初始化
  for (let j = weight[0]; j <= C; j++) {
    dp[0][j] = value[0]
    path[0][j] = 1
  }

  // for (let j = C; j >= weight[0]; j--) {
  //   dp[0][j] = dp[0][weight[0]] + value[0]
  //   path[0][j] = 1
  // }

  // 状态转移方程
  for (let i = 1; i < F; i++) {
    for (let j = 1; j <= C; j++) {
      if (j < weight[i]) {
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
        if (dp[i-1][j-weight[i]] + value[i] > dp[i-1][j]) {
          // 放入的文件i的最大缓存价值 大于 不放入文件i的最大缓存价值
          path[i][j] = 1
        }
      }
    }
  }

  console.log(dp)
  console.log(dp[F-1][C])
  console.log(path)

  let i = F-1,
      j = C

  // while (i > 0 && j > 0) {
  //   if (dp[i][j] === dp[i-1][j-weight[i]] + value[i]) {
  //     console.log(i, j)
  //     j = j - weight[i]
  //   }
  //   i--
  // }
  while (i >= 0 && j >= 0) {
    if (path[i][j] === 1) {
      console.log(i, j)
      console.log(i,'就是需要添加文件的编号')
      j = j - weight[i]
    }
    i--
  }

}

solve(weight, value, bagSize)

