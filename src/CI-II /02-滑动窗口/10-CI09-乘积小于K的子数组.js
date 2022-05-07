/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  // 双指针： 难点 在于 right - left + 1 的理解
  let res = 0
  let [left, right] = [0, 0]
  let total = 1
  while (right < nums.length) {
    total *= nums[right]

    // 不满足情况后，移动left左指针
    while (total >= k) {
      total = Math.floor(total / nums[left])
      left++
    }
    if (left <= right) {
      res += right - left + 1
    }
    right++
  }
  return res
};
