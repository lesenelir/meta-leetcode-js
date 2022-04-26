/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {

  let minNum = Math.min(...nums)
  let maxNum = Math.max(...nums)

  return gcd(minNum, maxNum)

  function gcd(a, b) {
    if (b === 0) return a
    return gcd(b , a % b)
    // return b ? gcd(b, a % b) : a
  }

};
