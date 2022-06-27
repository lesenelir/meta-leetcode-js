/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  // 找数组最大值，在该最大值处往两端遍历，是否是有序的递减序列
  if (arr.length < 3) return false
  let index = 0,
      maxNum = Number.MIN_VALUE,
      len = arr.length

  for (let i = 0; i < len; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i]
      index = i
    }
  }
  console.log(index)

  // 最大值下标是数组第一个或者最后一个都返回false
  // 最大值在数组开头 或 数组结尾 都意味着：该数组是单调的
  if (index === 0 || index === len - 1) return false

  // 从最大值往右边遍历
  for (let i = index + 1; i < len; i++) {
    if (arr[i] >= arr[i-1]) {
      return false
    }
  }

  // 从最大值往左边遍历
  for (let i = index - 1; i >= 0; i--) {
    if (arr[i] >= arr[i+1]) {
      return false
    }
  }

  return true
};


// 双指针做法
var validMountainArray2 = function(arr) {
  // 双指针做法:
  if (arr.length < 3) return false
  let len = arr.length,
      [left, right] = [0, len - 1]

  // 移动左指针
  while (left < len - 1 && arr[left] < arr[left + 1]) { // 注意left范围是len - 1，避免left越界
    left++
  }

  // 移动右指针
  while (right > 0 && arr[right] < arr[right - 1]) {
    right--
  }

  // 判断
  return left === right && left !== 0 && right !== len - 1;

}
