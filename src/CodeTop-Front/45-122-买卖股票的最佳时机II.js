/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 贪心，每次收集上坡的路
  let res = 0,
      len = prices.length

  for (let i = 1; i < len; i++) {
    if (prices[i] > prices[i-1]) {
      res += prices[i] - prices[i-1]
    }
  }

  return res
};
