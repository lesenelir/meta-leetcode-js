/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  let sum = stones.reduce((accmulator, item) => {
    accmulator += item
    return accmulator
  }, 0)

  const bagSize = Math.floor(sum / 2)
  const dp = new Array(bagSize + 1).fill(0)

  for (let i = 0; i < stones.length; i++) {
    for (let j = bagSize; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j-stones[i]] + stones[i])
    }
  }
  return sum - dp[bagSize] - dp[bagSize]
};
