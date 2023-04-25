/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0,
    right = nums.length

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else if (nums[mid] < nums[mid + 1]) {
      left = mid + 1
    }
  }

  return left
};
