/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  // 两次遍历
  let len = nums.length,
      leftSum = 0,
      rightSum = 0

  let sum = nums.reduce((pre, item) => {
    pre += item
    return pre
  }, 0)

  for (let i = 0; i < len; i++) {
    leftSum += nums[i]
    rightSum = sum - leftSum + nums[i] // 多减了一次nums[i],需要重新加一个
    if (leftSum === rightSum) return i
  }

  return -1
};
