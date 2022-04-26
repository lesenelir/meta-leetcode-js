function fn() {
  let weight = [1, 3, 4, 5]
  let value = [15, 20, 30, 55]
  let bagSize = 6

  // 处理01背包问题
  function zeroOneBagProblem() {
    const len = weight.length
    // const dp = new Array(weight.length + 1).fill(0).map(() => new Array(bagSize + 1).fill(0)) // 二维数组表示
    const dp = new Array(bagSize + 1).fill(0)
    for (let i = 0; i < len; i++) { // 遍历物品
      for (let j = bagSize; j >= weight[i]; j--) { // 逆序遍历背包 保证物品i只被放入一次
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
      }
    }
    // return dp[bagSize]
    console.log(dp[bagSize])
  }
  zeroOneBagProblem()
}

fn()

// dp[j] 表示背包容量为j时，能获得的最大价值
