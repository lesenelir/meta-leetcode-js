/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // 二分查找 - 有序数组，时间复杂度logn
  let [left, right] = [0, nums.length]

  while (left <= right) { // 相等情况还是要进行遍历
    let mid = Math.floor((left + right) / 2)
    if (target < nums[mid]) {
      right = mid - 1
    } else if (target > nums[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return left
};

// target 是在一个[left, right] 左闭右闭区间，
// Note: left是要插入的位置
