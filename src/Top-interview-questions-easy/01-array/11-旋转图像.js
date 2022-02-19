/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let length = matrix.length;
  //因为是对称的，只需要计算循环前半行即可
  for (let i = 0; i < length / 2; i++)
  for (let j = i; j < length - i - 1; j++) {
    let temp = matrix[i][j];
    let m = length - j - 1;
    let n = length - i - 1;
    matrix[i][j] = matrix[m][i];
    matrix[m][i] = matrix[n][m];
    matrix[n][m] = matrix[j][n];
    matrix[j][n] = temp;
  }
};
