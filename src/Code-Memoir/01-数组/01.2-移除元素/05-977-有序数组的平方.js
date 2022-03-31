/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 左右双指针：最大值的位置一定是左右两边
var sortedSquares = function(nums) {
  let [left, right] = [0, nums.length - 1]
  let res = []
  let index = nums.length - 1
  while (left <= right) { // 相等情况还是要处理
    if (nums[left] * nums[left] > nums[right] * nums[right]) {
      res[index] = nums[left] * nums[left]
      left++
      index--
    } else {
      res[index] = nums[right] * nums[right]
      right--
      index--
    }
  }
  return res
};

console.log(sortedSquares([-4,-1,0,3,10]))
