/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  // 此处的this.arr 是指实例对象的属性有arr
  this.arr = matrix
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let res = 0
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      res += this.arr[i][j]
    }
  }
  return res
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
