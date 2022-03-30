/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let [left, right] = [0, nums.length - 1]
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target < nums[mid]) {
      right = mid - 1
    } else if (target > nums[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  // 此时left > right
  return left
};

console.log(searchInsert([1,3,5,6], 4))
