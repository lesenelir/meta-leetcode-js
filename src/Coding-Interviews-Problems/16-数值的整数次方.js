/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1
  if (n < 0) return 1 / myPow(x, -n)
  // n 为奇数
  if ((n & 1) === 1) return x * myPow(x, n - 1)
  // n为偶数
  if ((n & 1) === 0) return myPow(x * x, n / 2)
};
