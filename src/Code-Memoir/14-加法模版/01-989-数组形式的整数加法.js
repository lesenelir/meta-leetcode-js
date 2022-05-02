/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  let res = []
  let carry = 0
  let i = num.length - 1
  while (i >= 0 || k !== 0) { // k === 0 && i < 0 循环才结束
    const x1 = i >= 0 ? num[i] : 0
    const x2 = k !== 0 ? k % 10 : 0

    let sum = x1 + x2 +carry
    res.unshift(sum % 10)
    carry = Math.floor(sum / 10)

    i--
    k = Math.floor(k / 10)
  }
  if (carry !== 0) res.unshift(carry)
  console.log(res)
  return res
};
