/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let arr = []
  arr[0] = searchFirst(nums, target)
  arr[1] = searchLast(nums, target)
  return arr

  function searchFirst(nums, target) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (target < nums[mid]) {
        right = mid - 1
      } else if (target > nums[mid]) {
        left = mid + 1
      } else { // 找到元素，判断是否是第一个元素
        if (nums[mid - 1] !== nums[mid] || mid === 0) { // 前一个数和当前数不一致，则是第一个元素
          return mid
        } else {
          right = mid - 1 // 该元素不是第一个出现的元素，则继续往前面查找
        }
      }
    }
    return -1
  }

  function searchLast(nums, target) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (target < nums[mid]) {
        right = mid - 1
      } else if (target > nums[mid]) {
        left = mid + 1
      } else {
        if (nums[mid+1] !== nums[mid] || mid === nums.length - 1) { // 当前元素是不是该数字的最后出现的元素
          return mid
        } else {
          left = mid + 1 // 该元素不是最后一个出现的元素，则继续往后查找
        }
      }
    }
    return -1
  }

};
