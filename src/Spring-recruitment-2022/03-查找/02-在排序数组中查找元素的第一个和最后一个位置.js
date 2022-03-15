/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 模糊二分查找
var searchRange = function (nums, target) {
  let arr = []
  arr[0] = searchFirst(nums, target)
  arr[1] = searchLast(nums, target)
  return arr

  // 查找第一个target元素位置
  function searchFirst(nums, target) {
    // 从普通的二分查找进行改写
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        // 此处区别于普通的二分查找
        if (mid === 0 || nums[mid - 1] !== nums[mid]) { // 前一个元素不相等，则是第一个出现的元素
          return mid
        } else {
          // 不是第一个出现的元素，则往左边界查找
          right = mid - 1
        }
      } else if (target > nums[mid]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return -1
  }

  // 查找最后一个target元素位置
  function searchLast(nums, target) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        // 此处有区别于普通的二分查找
        if (mid === nums.length - 1 || nums[mid + 1] !== nums[mid]) { // 后一个元素不相等，则是最后一个出现的元素
          return mid
        } else {
          // 不是最后一个出现的元素，往有边界查找
          left = mid + 1
        }
      } else if (target > nums[mid]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return -1
  }

};


// Note: 模糊查找的关键在于： 对于重复元素的处理！

