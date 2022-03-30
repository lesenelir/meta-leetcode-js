/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let [left, right] = [1, num]
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid * mid === num) {
      return true
    } else if (mid * mid > num) { // 相乘大于这个数，则往小查找
      right = mid - 1
    } else { // 相乘小于这个数，则往大查找
      left = mid + 1
    }
  }
  return false
};

// Note:对于数字的范围内的查找，且有序无重复值，可以使用二分查找
