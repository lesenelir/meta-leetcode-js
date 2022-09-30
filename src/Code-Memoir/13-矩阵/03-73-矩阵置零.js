/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length,
    n = matrix[0].length,
    res = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) res.push([i, j])
    }
  }

  let len = res.length
  for (let i = 0; i < len; i++) {
    setZero(res[i][0], res[i][1])
  }

  // 根据坐标进行设置行列0
  function setZero(i, j) {
    // 根据第j列设置所有行的相关值为0
    for (let row = 0; row < m; row++) {
      matrix[row][j] = 0
    }

    // 设置第i行所有列的值为0
    for (let col = 0; col < n; col++) {
      matrix[i][col] = 0
    }
  }

};
