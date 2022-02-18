/**
 * @param {number[]} digits
 * @return {number[]}
 */

// BigInt不会发生整形溢出
var plusOne2 = function(digits) {
  return (BigInt(digits.join('')) + 1n).toString().split('')
};
//
let arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(arr.join(''))
console.log(toString(BigInt(arr.join('')) + 1n))

/**
 *  该问题考虑超级大数 运算
 */

var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // 从后往前+1
    digits[i] = digits[i] + 1
    digits[i] = digits[i] % 10
    if (digits[i] !== 0) {
      return digits
    }
  }
  digits.unshift(1) // 9 99 999 ...
  return digits
};
