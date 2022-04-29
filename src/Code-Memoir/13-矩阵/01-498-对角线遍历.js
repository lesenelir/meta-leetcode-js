/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  let res = []

  // 对于第一行遍历列
  let index = 0
  for (let i = 0; i < mat[0].length; i++) {
    if (index % 2 === 0) { // 偶数往上
      outputUp(i, 0)
    } else { // 奇数往下
      outputDown(0, i)
    }
    index++
  }

  // 对于最后一列遍历行
  for (let i = 1; i < mat.length; i++) {
    if (index % 2 === 0) {
      outputUp(mat[0].length - 1, i)
    } else {
      outputDown(i, mat[0].length - 1)
    }
    index++
  }

  return res

  function outputUp(i, j) {
    while (i >= 0 && j < mat[0].length) {
      res.push(mat[i][j])
      i--
      j++
    }
  }

  function outputDown(i, j) {
    while (i < mat.length && j >=0) {
      res.push(mat[i][j])
      i++
      j--
    }
  }
};

console.log(findDiagonalOrder([[1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]]))
