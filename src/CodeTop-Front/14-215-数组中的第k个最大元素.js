/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let left = 0,
      right = nums.length - 1,
      targetIndex = nums.length - k // 第k大对应的下标

  while (left < right) {
    const index = Partition(nums, left, right) // index是找到中心轴的位置
    if (index === targetIndex) {
      return nums[index]
    } else if (index < targetIndex) { // 当前的中心轴 < 目标值下标
      left = index + 1
    } else {
      right = index - 1
    }
  }
  return nums[left]

  // 快速排序分区，找pivot中心轴
  function Partition(arr, left, right) {
    let pivot = arr[left]

    while (left < right) {
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
    return left
  }

};
