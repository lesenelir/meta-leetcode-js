/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = []
  let [i, j] = [a.length - 1, b.length - 1]
  let carry = 0
  while (i >= 0 || j >= 0) { // i < 0 && j < 0 跳出循环
    // 把字符转成整形
    let x = i >= 0 ? a[i] - '0' : 0
    let y = j >= 0 ? b[j] - '0' : 0

    let sum = x + y + carry
    res.unshift(sum % 2)
    carry = Math.floor(sum / 2)

    i--
    j--
  }
  // carry 存在不等于0 就要添加carry
  if (carry !== 0) res.unshift(carry)
  return res.join('')
};
