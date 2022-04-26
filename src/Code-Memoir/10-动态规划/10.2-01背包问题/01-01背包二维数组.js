function fn() {
  /**
   * 物品0 重量：1，价值：15
   * 物品1 重量：3，价值：20
   * 物品2 重量：4，价值：30
   * 物品3 重量：5，价值：55
   */
  let weight = [1, 3, 4, 5]
  let value = [15, 20, 30, 55]
  let bagSize = 6

  function zeroOneBackpack() {
    // dp 的行代表物品的id - 每一个物品 都有一个weight
    // dp的列代表当前背包的容量

    // 定义的数组长度应该是"物品个数+1"  此处 用 weight.length + 1 代替
    // 定义的数组dp列的情况代表了当前背包的容量大小 所以dp数组的列长度是 ： 总共背包大小 + 1

    // const dp = new Array(weight.length + 1).fill(0).map(()=> new Array(bagSize + 1).fill(0))  // 方案一定义二维数组
    const dp = new Array(weight.length + 1)
    for (let i = 0; i < dp.length; i++) {
      dp[i] = new Array(bagSize + 1).fill(0)
    }

    // 初始化
    // 初始化之前就已经全部 fill(0)
    // 但实质需要的初始化条件是：第一行 + 第一列 元素为0
    // 第一行为0： 物品编号为0情况，即没有物品 不管当前背包容量是多少 能 存储的最大价值dp 值都是0
    // 第一列为0： 对于所有物品而言，如果背包的容量大小为0 则 能存储的最大价值dp 值都是0

    // 遍历 以及 状态转移方程
    // 先遍历物品 - 再遍历背包容量
    for (let i = 1; i <= weight.length; i++) { // 此处遍历物品的长度大小就是 weight.length
      for (let j = 1; j <= bagSize; j++) {
        if (j < weight[i - 1]) { // 当前物品的重量大于背包的容量，则当前物品的dp[i][j]是不能取weight[i-1]
          dp[i][j] = dp[i - 1][j]
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i - 1]] + value[i - 1]) // i-1是当前物品的
        }
      }
    }

    console.log(dp[weight.length][bagSize])
  }
  zeroOneBackpack()

}

fn()
