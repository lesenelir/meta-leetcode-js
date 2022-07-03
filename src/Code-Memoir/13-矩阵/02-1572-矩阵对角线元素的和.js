/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let sum = 0,
      row = mat.length,
      col = mat[0].length

  if (row % 2  === 0) {
    outputMain(0, 0)
    outputSub(0, col - 1)
  } else {
    const mid = Math.floor(row / 2)
    outputMain(0, 0)
    outputSub(0, col - 1)
    sum -= mat[mid][mid]
  }

  return sum

  // 从[0][0]遍历主对角线至[row - 1][col - 1]
  function outputMain(i, j) {
    while (i < row && j < col) {
      sum += mat[i][j]
      i++
      j++
    }
  }

  // 从[0][col - 1]遍历副对角线至[row - 1][0]
  function outputSub(i, j) {
    while (i < row && j >= 0) {
      sum += mat[i][j]
      i++
      j--
    }
  }

};
