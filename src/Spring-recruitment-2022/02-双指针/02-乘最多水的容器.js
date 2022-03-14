/**
 * @param {number[]} height
 * @return {number}
 */

// 对向双指针
var maxArea = function (height) {
  let [left, right] = [0, height.length - 1]
  let res = 0

  while (left < right) {
    // 每次移动高度最小的指针
    let area = Math.min(height[left], height[right]) * (right - left)
    res = Math.max(res, area)
    if (height[left] <= height[right]) {
      left++
    } else {
      right--
    }

  }

  return res
};
