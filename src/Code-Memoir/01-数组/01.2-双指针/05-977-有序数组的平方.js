/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 左右双指针：最大值的位置一定是左右两边
var sortedSquares = function(nums) {
  // 左右指针： 数组平方的最大位一定在两侧
  let left = 0,
      right = nums.length - 1,
      res = []

  while (left <= right) {
    if (nums[left] * nums[left] > nums[right] * nums[right]) {
      res.unshift(nums[left] * nums[left])
      left++
    } else {
      res.unshift(nums[right] * nums[right])
      right--
    }
  }

  return res
};

console.log(sortedSquares([-4,-1,0,3,10]))
