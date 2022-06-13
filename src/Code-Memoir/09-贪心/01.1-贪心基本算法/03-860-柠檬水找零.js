/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  // 贪心: 只有三种情况 5 10 20
  if (bills[0] > 5) return false

  let fiveCount = 0,
      tenCount = 0

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i]
    if (bill === 5) {
      fiveCount++
    } else if (bill === 10) {
      fiveCount--
      tenCount++
    } else if (bill === 20) {
      if (tenCount > 0) { // 优先找零10块的零钱
        tenCount--
        fiveCount--
      } else { // 没有十块找零三张5块
        fiveCount -= 3
      }
    }
    // 判断失败
    if (fiveCount < 0 || tenCount < 0) {
      return false
    }
  }
  return true

};
