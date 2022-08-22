/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  // 类似于链表找环，使用快慢指针，有环则无限循环，不是快乐数
  let slow = n,
      fast = getN(n)

  while (fast !== 1) {
    slow = getN(slow)
    fast = getN(getN(fast))
    if (fast === slow) return false
  }

  return true

  // 获取数字n的平方和结果集
  function getN(n) {
    // 该函数从最后一位开始计算，并舍去最后一位
    let sum = 0
    while (n > 0) {
      let temp = n % 10
      sum += temp * temp
      n = Math.floor(n / 10)
    }
    return sum
  }

};
