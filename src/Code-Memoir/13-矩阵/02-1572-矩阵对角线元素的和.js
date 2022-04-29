/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let sum = 0

  // 找起始坐标
  if (mat.length % 2 === 0) { // 偶数
    outputMain(0, 0)
    outputSub(0, mat[0].length - 1)
    console.log(sum)
  } else {  // 奇数
    outputMain(0, 0)
    outputSub(0, mat[0].length - 1)
    const mid = Math.floor(mat.length / 2)
    sum -= mat[mid][mid]
  }
  return sum

  function outputMain(i, j) {
    while (i < mat.length && j < mat[0].length) {
      sum += mat[i][j]
      i++
      j++
    }
  }

  function outputSub(i, j) {
    while (i < mat.length && j >= 0) {
      sum += mat[i][j]
      i++
      j--
    }
  }
};
