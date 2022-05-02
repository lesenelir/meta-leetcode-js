/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    if (digits[i] === 10) {
      digits[i] = 0
    } else {
      return digits
    }
  }
  // 如果函数没有在for循环中return结束，则都为10,所以最后要开头➕1
  // 此时前面的digits的结果都为10，则要在开头新增一个数字1
  digits.unshift(1) // 9999...
  return digits
};
