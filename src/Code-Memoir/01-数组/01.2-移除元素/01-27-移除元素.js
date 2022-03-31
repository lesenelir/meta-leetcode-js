/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 原地删除元素： 可以用暴力，也可以用双指针
var removeElement = function (nums, val) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index++] = nums[i]
    }
  }
  return index
};
