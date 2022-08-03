/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // 原地旋转： 先进行水平翻转，再进行对角线翻转
  let n = matrix.length

  // 1. 先进行水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      ;[matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]]
    }
  }

  // 2. 再进行对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }


  // 添加新的二维数组方法：
  // 新的二维数组构建规则：以第一行为列从下到上进行输出
  // res  matrix
  // 0,0  2,0
  // 0,1  1,0
  // 0,2  0,0

  // let n = matrix.length,
  //     res = new Array(n).fill().map(() => new Array(n).fill())

  // // 构建新的数组图像
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     res[i][j] = matrix[n-j-1][i]
  //   }
  // }

  // 后续操作：把新构建的数组赋给原数组

  // return res

};
