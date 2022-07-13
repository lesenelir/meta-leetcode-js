/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 快速排序
  let left = 0,
      right = nums.length - 1

  quickSort(nums, left, right)
  return nums

  function quickSort(nums, left, right) { // 快排
    if (left < right) {
      let pivot = Partition(nums, left, right)
      quickSort(nums, left, pivot - 1)
      quickSort(nums, pivot + 1, right)
    }
  }

  function Partition(nums, left, right) { // 分区
    let pivot = nums[left]
    while (left < right) {
      // 从后找小
      while (left < right && nums[right] > pivot) right--
      nums[left] = nums[right]
      // 从前找大
      while (left < right && nums[left] <= pivot) left++
      nums[right] = nums[left]
    }
    // left 与 right相遇， 存放基准
    nums[left] = pivot
    return left
  }

};
