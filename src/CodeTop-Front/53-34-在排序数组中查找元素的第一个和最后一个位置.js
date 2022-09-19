/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let arr = []
  arr[0] = findSearchFirst(nums, target)
  arr[1] = findSearchLast(nums, target)
  return arr

  function findSearchFirst(nums, target) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        if (nums[mid - 1] !== nums[mid] || mid === 0) {
          return mid
        } else {
          right = mid - 1
        }
      }
    }
    return -1
  }

  function findSearchLast(nums, target) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        if (nums[mid] !== nums[mid + 1] || mid === nums.length - 1) {
          return mid
        } else {
          left = mid + 1
        }
      }
    }
    return -1
  }

};
