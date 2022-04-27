// 完全背包问题是：物品的种类个数有无数个，可以随便取N次，保证背包的价值Value Max
function fn() {

  let weight = [1, 3, 4, 5]
  let value = [15, 20, 30, 55]
  let bagSize = 6

  function fullBackPack() {
    // dp行是物品种类 + 1 ； dp列是背包容量 + 1
    // const dp = new Array(weight.length + 1).fill(0).map(() => new Array(bagSize + 1).fill(0))
    // console.log(dp)
    const dp = new Array(bagSize + 1).fill(0)
    console.log(dp)

    // 初始化第一个元素为0 dp[0] = 0
    for (let i = 0; i <= weight.length; i++) { // 遍历物品
      for (let j = weight[i]; j <= bagSize; j++) {
        dp[j] = Math.max(dp[j], dp[j-weight[i]] + value[i])
      }
    }
    console.log(dp)
    console.log(dp[bagSize])
  }
  fullBackPack()

}

fn()





//
// function test_completePack1() {
//   let weight = [1, 3, 5]
//   let value = [15, 20, 30]
//   let bagWeight = 4
//   let dp = new Array(bagWeight + 1).fill(0)
//   for(let i = 0; i <= weight.length; i++) {
//     for(let j = weight[i]; j <= bagWeight; j++) {
//       dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
//     }
//   }
//   console.log(dp)
// }
// test_completePack1()









// Note : 不管是完全背包还是01背包两层for循环的内外嵌套关系是谁都是无所谓的


