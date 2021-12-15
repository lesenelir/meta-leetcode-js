/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找，可以做到时间复杂度为O(logn)
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
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
  return left
};

// Note: 注意事项：
// 1. 二分查找的边界是： left <= right
// 2. 二分查找的mid 取值是要向下取整
// 3. 二分查找 适用于有序数组、或者类似于有序的数组
