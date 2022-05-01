/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let [left, right] = [0, nums.length - 1]
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    // 中间元素值和下标相等，则没有出现的元素在mid右侧
    if (nums[mid] === mid) left = mid + 1
    else right = mid - 1
  }
  return left
};
