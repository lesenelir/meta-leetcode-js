/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 快慢指针
  // index 指向0位置（需要替换的位置）
  // i 指向非0位置（需要和0元素交换）
  let index = 0,
      len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[index] !== 0) {
      index++
      continue
    }

    // 此时index指向0元素
    if (nums[i] !== 0) {
      nums[index] = nums[i]
      nums[i] = 0
      index++
    }
  }

};
