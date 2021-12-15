/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 二分查找
// 排序和搜索，对于一种有序的数组，基本可以使用二分查找搜索算法
// 二分查找核心：从而达到"丢弃到一半的数据"

var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  // let split = -1    // 分界点就是最小值
  while (left < right) {  // 注意此处找分界点没有等号=
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) {  // 最小值是在mid右侧
      left = mid + 1
    } else if (nums[mid] < nums[right]) {
      right = mid
    } else {   // 减去重复的值
      right--
    }
  }
  // 跳出循环此时left = right = mid， left保存最小值下标
  // split = nums[left]   // 找到分界点值
  if (target > nums[0]) {  // 在数组左侧进行查找
    if (left !== 0) {
      return BinarySearch(0, left - 1, nums, target)
    } else {
      return BinarySearch(0, nums.length - 1, nums, target)
    }
  } else if (target < nums[0]) { // 在数组右侧进行查找
    return BinarySearch(left, nums.length - 1, nums, target)
  } else {
    return 0
  }
};

const BinarySearch = function (left, right, nums, target) {
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

console.log(search([1, 3, 5], 3))

// Note:
// 题目的思路关键是找到数组中间的分界点
// leetcode 11 对于一个旋转的数组找到最小值，在本题中即为数组的分界点
