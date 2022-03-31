/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针： slow保存下一个坐标元素，fast用来遍历元素
var removeDuplicates = function(nums) {
  let slow = 1
  for (let fast = 0; fast <nums.length; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  return slow
};
