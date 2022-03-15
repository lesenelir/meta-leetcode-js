/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 精准二分查找
var search = function (nums, target) {
  let [left, right] = [0, nums.length - 1]
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      return mid
    }
  }

  return -1
};
