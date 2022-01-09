/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let row = matrix.length
  let col = matrix[0].length

  let res = []
  // 边界变量定义
  let [left, right, up, down] = [0, row - 1, 0, col - 1]
  // 模拟过程
  while (1) {
    // 从左往右
    for (let i = left; i <= right; i++) {
      res.push(matrix[up][i])
    }
    if (++up > down) break   // 从左往右遍历完，上边界下移，如果超过下边界则退出
    // 从上往下
    for (let i = up; i <= down; i++) {
      // res.push(matrix[i][right])
      res.push(matrix[i][right])
    }
    if (--right < left) break // 从上往下遍历完，右边界左移，如果小于左边界则退出
    // 从右往左
    for (let i = right; i >= left; i--) {
      res.push(matrix[down][i])
    }
    if (--down > up) break // 从右往左遍历完，下边界上移，如果大于上边界则退出
    // 从下往上
    for (let i = down; i >= up; i--) {
      res.push(matrix[i][left])
    }
    if (++left > right) break  // 从下往上遍历完，左边界右移，如果大于右边界则退出
  }
  return res
};
