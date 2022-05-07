/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && !calculate(1, nums.length - 1)) {
      return i
    }
    if (i === nums.length - 1 && !calculate(0, nums.length - 2)) {
      return i
    }

    let leftSum = calculate(0, i - 1)
    let rightSum = calculate(i + 1, nums.length - 1)
    if (leftSum === rightSum) {
      return i
    }
  }
  return -1

  function calculate (left, right) {
    let sum = 0
    for (let i = left; i <= right; i++) {
      sum += nums[i]
    }
    return sum
  }

};
