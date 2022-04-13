/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const targetIndex = nums.length - k
  let [left, right] = [0, nums.length - 1]
  while (left < right) {
    const index = partition(nums, left, right) // 找到基准值下标
    if (index === targetIndex) {
      return nums[index]
    } else if (index < targetIndex){ // 返回基准值下标 小于 目标下标
      left = index + 1
    } else {
      right = index - 1
    }
  }
  return nums[left]

  // 分区
  function Partition(arr, left, right) {
    let pivot = arr[left]
    while (left < right) {
      // 从右边查找
      while (left < right && arr[right] > pivot) {
        right--
      }
      arr[left] = arr[right]

      while (left < right && arr[left] <= pivot) {
        left++
      }
      arr[right] = arr[left]
    }
    arr[left] = pivot
    return left // 返回基准的下标
  }

};
