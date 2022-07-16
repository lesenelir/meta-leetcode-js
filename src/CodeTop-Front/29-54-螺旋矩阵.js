/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = [],
      m = matrix.length,
      n = matrix[0].length,
      [top, right, bottom, left] = [0, n - 1, m - 1, 0]

  while (true) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++
    if (top > bottom) break

    // 从上到下
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    right--
    if (right < left) break

    // 从右到左
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--
    if (bottom < top) break

    // 从下到上
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left])
    }
    left++
    if (left > right) break
  }

  return res
};
