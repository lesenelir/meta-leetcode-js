/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // 二分查找
  let res = []
  res[0] = findFirstPlace()
  res[1] = findLastPlace()
  return res

  function findFirstPlace() {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (target < nums[mid]) {
        right = mid - 1
      } else if (target > nums[mid]) {
        left = mid + 1
      } else {
        // 相等情况，判断该元素是否是第一个元素
        if (nums[mid] !== nums[mid - 1] || mid === 0) {
          return mid
        } else { // 该元素不是第一个元素
          right = mid - 1
        }
      }
    }
    return -1
  }

  function findLastPlace() {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (target < nums[mid]) {
        right = mid - 1
      } else if (target > nums[mid]) {
        left = mid + 1
      } else {
        // 相等情况，判断该元素是否是最后一个元素
        if (nums[mid] !== nums[mid+1] || mid === nums.length - 1) {
          return mid
        } else {
          left = mid + 1
        }
      }
    }
    return -1
  }

};
