/**
 * @param {number[]} nums
 * @return {number}
 */

// 同向双指针
// 同向双指针是要有一个slow和fast，slow用于保存下一次要保存的下标位置，fast用于遍历数组


var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0

  let slow = 1
  for (let fast = slow; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  // 此时slow保存着没重复数组的长度
  return slow
};
