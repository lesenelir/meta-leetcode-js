/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 双重循环暴力算法 => 超时
  let low = prices[0],
      res = 0,
      len = prices.length

  for (let i = 0; i < len; i++) {
    low = Math.min(low, prices[i]) // 当前价格前的最小值
    res = Math.max(res, prices[i] - low) // 对于第i天最大的利润是现在的价值 - 之前价格最小值
  }

  return res
};
