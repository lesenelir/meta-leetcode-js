/**
 * @param {number[]} prices
 * @return {number}
 */


/**
 *    交易次数不受限制，收割所有利润呈上升趋势的数据集合
 *
 *    总结： 求上升区间的高度和
 */

var maxProfit = function (prices) {
  let result = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      result += (prices[i] - prices[i - 1])
    }
  }
  return result
};
