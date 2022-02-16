/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 *    删除排序中的重复项 ： 快慢指针
 *      快慢指针的重点：slow保存下一个将要赋值的下标位置，fast指针用来遍历数组根据条件找元素
 *
 */

var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0
  let slow = 1
  for (let fast = slow; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  return slow
};
