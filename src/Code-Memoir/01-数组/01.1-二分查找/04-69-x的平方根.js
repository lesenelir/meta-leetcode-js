/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let [left, right] = [1, x]
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid * mid === x) {
      return mid
    } else if (mid * mid < x) {
      if (((mid + 1) * (mid + 1)) > x) { // 此时mid+1相乘大于该数，则返回mid为结果值
        return mid
      } else { // 往大查找
        left = mid + 1
      }
    } else { // 往小查找
      right = mid - 1
    }
  }
  return 0 // 输入0则直接返回
};

// Note: 对于一个算数平方根，是在1到x范围内找 且满足 k2 <= x < (k+1)2
