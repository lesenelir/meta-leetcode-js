/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */


var search = function (nums, target) {
  if (nums.length === 1) {
    return target === nums[0];
  }

  // 1. 找到分界点最小值
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) {  //  最小值在数组的右侧
      left = mid + 1
    } else if (nums[mid] < nums[right]) {  // 最小值在数组的左侧
      right = mid
    } else {  // 去重复值
      right--
    }
    if (nums[right] > nums[right - 1] && nums[right] > nums[right + 1]) {  // 特殊情况[1,1,1,1,3,1]
      left = right + 1
    }
  }
  // 跳出循环，此时left = right = mid ， left指向最小值下标
  if (target > nums[0]) { // 在数组左侧查找
    if (left !== 0) {
      return BinarySearch(0, left - 1, nums, target)
    } else {  // 数组本身有序
      return BinarySearch(0, nums.length - 1, nums, target)
    }
  } else if (target < nums[0]) { // 在数组右侧进行查找
    return BinarySearch(left, nums.length - 1, nums, target)
  } else { // target === nums[0]
    return true
  }

};

// 二分查找算法
const BinarySearch = function (left, right, nums, target) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      return true   // 找到
    }
  }
  return false  // 没找到
}

console.log(search([1, 1, 3], 3))

// Note:
// 此题的关键在于找到数组的分界点left

