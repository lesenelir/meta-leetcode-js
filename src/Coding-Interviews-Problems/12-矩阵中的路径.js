/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

//  回溯、深度优先搜索

var exist = function (board, word) {

  let rowLength = board.length
  let colLength = board[0].length
  let index = 0     // word 从0开始遍历

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (DFS(row, col, index, rowLength, colLength, board, word)) return true
    }
  }

  return false
};

// 深度遍历算法，查看能否找到
var DFS = function (row, col, index, rowLength, colLength, board, word) {

  if (row < 0 || col < 0 || row > rowLength - 1 || col > colLength - 1 || board[row][col] !== word[index]) {
    return false
  }

  // 如果走到这里则board[row][col] = word[index]
  if (index === word.length - 1) return true

  // 递归
  let temp = board[row][col]
  board[row][col] = 0

  let res = DFS(row - 1, col, index + 1, rowLength, colLength, board, word) ||
      DFS(row + 1, col, index + 1, rowLength, colLength, board, word) ||
      DFS(row, col - 1, index + 1, rowLength, colLength, board, word) ||
      DFS(row, col + 1, index + 1, rowLength, colLength, board, word)

  board[row][col] = temp

  return res
}

