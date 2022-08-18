/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  // 只包含两种元素的最长连续子序列
  // 最长滑动窗口长度
  let [left, right] = [0, 0],
      maxLen = Number.MIN_VALUE,
      len = fruits.length,
      n = 0, // 记录遇到第三次水果上一个水果的起始位置，即水果发生变化，且起始位置
      arr = []  // 存放水果的篮子

  arr.push(fruits[left])
  while (right < len) {
    if (!arr.includes(fruits[right])) {
      // 不存在，且arr只有一种水果，则放入
      if (arr.length <= 1) {
        arr.push(fruits[right])
      } else {
        // 如果有两种水果，遇到了第三种水果，则更新
        left = n
        arr[0] = fruits[right - 1] // 前一种水果
        arr[1] = fruits[right] // 第三种水果
      }
    }
    if (fruits[right] !== fruits[n]) {
      n = right
    }
    maxLen = Math.max(maxLen, right - left + 1)
    right++
  }

  return maxLen
};
