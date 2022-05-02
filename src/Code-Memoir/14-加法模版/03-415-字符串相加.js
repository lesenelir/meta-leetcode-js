/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let res = []
  let [i, j] = [num1.length - 1, num2.length - 1]
  let carry = 0
  while (i >= 0 || j >= 0) { // i < 0 && j < 0 跳出循环
    // 把字符转成整形
    let x = i >= 0 ? num1[i] - '0' : 0
    let y = j >= 0 ? num2[j] - '0' : 0

    let sum = x + y + carry
    res.unshift(sum % 10)
    carry = Math.floor(sum / 10)

    i--
    j--
  }
  // carry 存在不等于0 就要添加carry
  if (carry !== 0) res.unshift(carry)
  return res.join('')
};
