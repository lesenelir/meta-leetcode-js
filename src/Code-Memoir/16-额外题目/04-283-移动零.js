/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 快慢指针
  // slow指针指向0位置，即要修改的位置坐标  fast指针找非0
  let slow = 0,
      len = nums.length

  for (let fast = slow; fast < len; fast++) {
    if (nums[slow] !== 0) {
      slow++
      continue
    }
    // 此时slow指向0位置
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      nums[fast] = 0
      slow++
    }
  }

};
