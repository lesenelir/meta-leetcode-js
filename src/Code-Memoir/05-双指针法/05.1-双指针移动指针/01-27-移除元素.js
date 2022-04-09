/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast]
    }
  }
  return slow
};

// Note： 快慢指针用一个for循环去做两个for循环做的事情
// 通常慢指针 fast指针用来遍历数组；slow指针用来保存下标
