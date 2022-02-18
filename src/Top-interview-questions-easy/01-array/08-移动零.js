/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 双指针【重要】 快慢指针遍历数组
// slow 保存要替换的数组下标
// fast 遍历slow后数组元素
var moveZeroes = function(nums) {
  let slow = 0
  for (let fast = slow; fast < nums.length; fast++) {
    if (nums[slow]!== 0) {
      slow++
      continue
    }
    if (nums[fast] !== 0) { // 此时slow指向元素为0 slow为代替换下标位置
      nums[slow] = nums[fast]
      nums[fast] = 0
      slow++
    }
  }
};

