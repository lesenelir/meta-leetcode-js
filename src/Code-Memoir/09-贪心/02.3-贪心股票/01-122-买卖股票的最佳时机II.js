/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 思路：贪心算法
  // 每次选取有利润(>0)的进行合并 -> 利润是可以分解的
  let profit = new Array(prices.length).fill(0),
      res = 0

  for (let i = 1; i < prices.length; i++) {
    profit[i] = prices[i] - prices[i-1]
  }

  for (let i = 0; i < profit.length; i++) {
    if (profit[i] > 0) res += profit[i]
  }

  return res
};
