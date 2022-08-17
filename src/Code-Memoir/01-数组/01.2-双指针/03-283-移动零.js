/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针：slow用作需要更新的元素；fast用于遍历数组
var moveZeroes = function(nums) {
  // slow 指向0位置，fast用来遍历数组，
  let slow = 0
  for (let fast = slow; fast < nums.length; fast++) {
    if (nums[slow] !== 0) { // 保证slow永远指向为0的元素
      slow++
      continue
    }
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      nums[fast] = 0
      slow++
    }
  }
};
