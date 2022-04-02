/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let [top, right, bottom, left] = [0, n - 1, n - 1, 0]
  let num = 1
  let res = []
  for (let i = 0; i < n; i++) { // 建立二维数组
    res[i] = []
  }
  while (num <= n * n) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      res[top][i] = num++
    }
    top++
    // 从上到下
    for (let i = top; i <= bottom; i++) {
      res[i][right] = num++
    }
    right--
    // 从右到左
    for (let i = right; i >= left; i--) {
      res[bottom][i] = num++
    }
    bottom--
    // 从下到上
    for (let i = bottom; i >= top; i--) {
      res[i][left] = num++
    }
    left++
  }
  return res
};

// Note： 此类模拟题目，确定好区间合闭
