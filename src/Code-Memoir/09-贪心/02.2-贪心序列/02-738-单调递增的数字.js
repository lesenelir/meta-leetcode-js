/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
  // 贪心算法： 从后向前遍历 如果之前一位大于该位，则该位为9，之前一位减减
  let arr = String(n).split('').map(item => parseInt(item)),
      flag = arr.length, // flag 用来标记赋值9从哪里开始
      len = arr.length

  for (let i = len - 1; i > 0; i--) { // 第一位不遍历
    if (arr[i-1] > arr[i]) {
      flag = i
      arr[i-1]--
    }
  }

  // 赋值9
  for (let i = flag; i < arr.length; i++) {
    arr[i] = 9
  }
  return Number(arr.join(''))


  // 暴力解法：循环判断每一个数字 - 超时
  // for (let i = n; i >= 0; i--) {
  //   if (isValid(i)) return i
  // }

  // function isValid(num) {
  //   let arr = String(num).split('').map(item => parseInt(item)),
  //       len = arr.length

  //   for (let i = 1; i < len; i++) {
  //     if (arr[i] < arr[i-1]) {
  //       return false
  //     }
  //   }
  //   return true
  // }
};
