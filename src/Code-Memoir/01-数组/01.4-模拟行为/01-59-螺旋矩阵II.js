/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let [top, right, bottom, left] = [0, n - 1, n - 1, 0],
      res = new Array(n).fill().map(() => new Array(n).fill()),
      num = 1

  while (true) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      res[top][i] = num++
    }
    top++
    if (top > bottom) break
    // 从上到下
    for (let i = top; i <= bottom; i++) {
      res[i][right] = num++
    }
    right--
    if (left > right) break
    // 从右到左
    for (let i = right; i >= left; i--) {
      res[bottom][i] = num++
    }
    bottom--
    if (top > bottom) break
    // 从下到上
    for (let i = bottom; i >= top; i--) {
      res[i][left] = num++
    }
    left++
    if (left > right) break
  }

  return res
};
