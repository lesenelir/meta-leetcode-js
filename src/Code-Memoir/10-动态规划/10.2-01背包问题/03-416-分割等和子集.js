/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  // 背包体积是sum / 2 ; 物品的价值和重量都是数字值
  // 正好装满背包 则有两个相同的子集元素和
  // dp[j] 背包容量为j 可以凑成j的最大子集总和是dp[j]
  let sum = nums.reduce((pre, item) => {
    pre += item
    return pre
  }, 0)

  let bagSize = Math.floor(sum / 2)

  // 初始化，01背包如果没有负值，则都可以初始化为0
  const dp = new Array(bagSize + 1).fill(0)

  for (let i = 0; i < nums.length; i++) { // 物品数是数组中元素
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j- nums[i]] + nums[i])
      if (dp[j] === sum / 2) {
        return true
      }
    }
  }
  return dp[sum / 2] === sum / 2

};

let res = [1, 2,3].reduce((acc, item) => {
   acc += item
  return acc
}, 0)
console.log(res)
