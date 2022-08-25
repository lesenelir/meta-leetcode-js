/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  // 二分法找到最近的第一个位置，再用双指针进行比较移动位置数字
  let len = arr.length,
      [left, right] = [0, len - 1]

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] > x) {
      right = mid - 1
    } else if (arr[mid] < x) {
      left = mid + 1
    } else {
      left = mid
      break
    }
  }
  // left是元素x要插入的位置, 即pos位置
  // console.log(left)
  let pos = left,
      res = []

  // 进行双指针，确定左右端点
  let i = (pos - k < 0) ? 0 : pos - k,
      j = (pos + k >= len) ? len - k : pos + k

  while (j - i + 1 !== k) {
    if(Math.abs(arr[i] - x) > Math.abs(arr[j] - x)) {
      i++
    } else {
      j--
    }
  }

  for (let k = i; k <= j; k++) {
    res.push(arr[k])
  }

  return res
};
