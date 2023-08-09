/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return []

  let res = new Array(rowsCount).fill().map(() => new Array(colsCount).fill(1)),
    temp = []

  for (let i = 0; i < this.length; i += rowsCount) {
    let path = this.slice(i, i + rowsCount)
    temp.push([...path])
  }

  // 赋值新矩阵
  for (let j = 0; j < colsCount; j++) {
    for (let i = 0; i < rowsCount; i++) {
      if (j % 2 === 0) res[i][j] = temp[j][i]
      else res[rowsCount-i-1][j] = temp[j][i]
    }
  }

  return res
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
