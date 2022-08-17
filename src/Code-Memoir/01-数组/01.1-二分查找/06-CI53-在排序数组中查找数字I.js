/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 思路：查找元素第一次出现的位置；查找元素最后一次出现的位置，两者区间之差是出现的次数
  // 该题目和34一样
  let flag = false
  let first = findFirstIndex(nums, target)
  let last = findLastIndex(nums, target)
  return flag ? last - first + 1 : 0

  function findFirstIndex(nums, target) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        // 设置标志位
        flag = true
        if (nums[mid - 1] !== nums[mid] || mid === 0) { // 元素第一次出现的位置是上一个元素值不同，或mid下标为0
          return mid
        } else {
          //right = mid - 1
          right--
        }
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return left
  }

  function findLastIndex(nums, target) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        // 设置标志位
        flag = true
        if (nums[mid + 1] !== nums[mid] || mid === nums.length - 1) { // 元素最后一个位置是后元素和当前元素不同
          return mid
        } else {
          left++
        }
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return left
  }

};

// 对于一个数字出现的次数 是 最后一次出现的次数 - 第一次出现的次数 + 1
