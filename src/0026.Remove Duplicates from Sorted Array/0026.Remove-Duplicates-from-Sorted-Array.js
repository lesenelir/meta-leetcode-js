/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 2021-12-13
 */

// 暴力解法
// var removeDuplicates = function(nums) {
//   let result = []
//   result.push(nums[0])
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i-1]) {
//       result.push(nums[i])
//     }
//   }
//   return result
// };
// console.log(removeDuplicates([1,1,2]))


// 双指针解法、快慢指针
// 慢指针用来保存可放置位置下标、快指针用来扫描遍历数组；
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0
  let slow = 1
  for (let fast = slow; fast < nums.length; fast++) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  return slow
};
console.log(removeDuplicates([1,1,2]))
