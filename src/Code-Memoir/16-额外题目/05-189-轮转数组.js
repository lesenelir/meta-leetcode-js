/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let len = nums.length
  k = k % len

  // 以k为节点分为三次旋转
  reverse(nums, len - k, len - 1)
  reverse(nums, 0, len - k - 1)
  reverse(nums, 0, len - 1)

  return nums

  // 旋转数组使用双指针做法
  function reverse(arr, left, right) {
    // 相等就跳出循环，所以不需要取到等号
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

};
