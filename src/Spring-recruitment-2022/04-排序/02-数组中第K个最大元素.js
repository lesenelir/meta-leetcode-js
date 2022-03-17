/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const targetIndex = nums.length - k;
  let [left, right] = [0, nums.length - 1]
  while (left < right) {
    const index = partition(nums, left, right);
    if (index === targetIndex) {
      return nums[index];
    } else if (index < targetIndex) {
      left = index + 1;
    } else {
      right = index - 1;
    }
  }
  return nums[left];


  function partition(arr, low, high) {
    let pivot = arr[low]
    while (low < high) {
      while (low < high && arr[high] > pivot) {
        high--
      }
      arr[low] = arr[high]
      while (low < high && arr[low] <= pivot) {
        low++
      }
      arr[high] = arr[low]
    }
    arr[low] = pivot
    return low
  }
};
