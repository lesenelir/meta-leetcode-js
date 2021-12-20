/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {

  if (matrix.length === 0 || matrix[0].length === 0) {  // 二维数组行或列为0
    return false
  }

  // 从右上角开始查找
  // 目标值比该元素小，则删除该元素所在列
  // 目标值比该元素大，则删除该元素所在行

  let row = 0, col = matrix[0].length - 1
  let flag = false
  // 循环终止的条件是row递增行超出二维数组的行，col递减小于二维数组的列
  while (row < matrix.length && col >= 0) {
    if (target < matrix[row][col]) {  // 目标值小，删除该元素所在的列
      col--
    } else if (target > matrix[row][col]) { // 目标值大，删除该元素所在行
      row++
    } else { // 相等
      flag = true
      break
    }
  }
  return flag
};


console.log(findNumberIn2DArray(
    [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
    , 1))
