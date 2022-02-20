/**
 * @param {number} x
 * @return {number}
 */

// Note： 辗转相除法 笔记
var reverse = function (x) {
  let res = 0
  let flag = x > 0 ? 1: -1
  let num = Math.abs(x)
  while (num !== 0) {
    let t = num % 10
    res = res * 10 + t
    num = Math.floor(num / 10)
  }
  if (res >= (Math.pow(2, 31)) || res <= (Math.pow(2, -31))) {
    return 0
  }
  return res * flag
};
