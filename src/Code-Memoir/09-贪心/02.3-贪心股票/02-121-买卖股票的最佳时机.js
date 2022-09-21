/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let len = prices.length,
      res = 0,
      low = 0

  for (let i = 0; i < len; i++) {
    low = Math.min(low, prices[i])
    res = Math.max(res, prices[i] - low)
  }

  return res
};
