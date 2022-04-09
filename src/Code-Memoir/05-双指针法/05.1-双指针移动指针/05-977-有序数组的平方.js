/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let result = []
  let [left, right] = [0, nums.length - 1]
  let index = nums.length - 1
  while (left <= right) { // 取到等号的原因：left和right相遇时，还要进入循环进行操作
    if (nums[right] * nums[right] > nums[left] * nums[left]) {
      result[index] = nums[right] * nums[right]
      right--
      index--
    } else if (nums[right] * nums[right] < nums[left] * nums[left]) {
      result[index] = nums[left] * nums[left]
      left++
      index--
    } else {
      result[index] = nums[left] * nums[left]
      left++
      index--
    }
  }
  return  result
};

// Note： 头尾指针
