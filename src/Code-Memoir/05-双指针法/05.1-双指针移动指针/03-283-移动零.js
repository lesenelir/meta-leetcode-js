/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let slow = 0
  for (let fast = slow; fast < nums.length; fast++) {
    if (nums[slow] !== 0) { // 保证slow指向0位置
      slow++
      continue
    }
    if (nums[fast] !== 0) {
      ;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }

  }
  return nums
};


// Note: 对于保证把某个数字往后移的题目，slow指针指向要被移动的位置
