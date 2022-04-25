/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = []
  let row = matrix.length
  let col = matrix[0].length

  let [top, right, bottom, left] = [0, col - 1, row - 1, 0]

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
    if (left > right) break
    // 从右到左
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--
    if (top > bottom) break
    // 从下到上
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left])
    }
    left++
    if (left > right) break
  }

  return res
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
