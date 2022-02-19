/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 定义对象，代表属性代表元素，值代表是否有数字
  let row = {}
  let col = {}
  let box = {}
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const num = board[i][j]
      if (num !== '.') { // 数字
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        if (row[i + '' + num] || col[j + '' + num] || box[boxIndex + '' + num]) {
          return false
        }
        row [i + '' + num] = true
        col[j + '' + num] = true
        box [boxIndex + '' + num] = true
      }
    }
  }
  return true
};
