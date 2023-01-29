



/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  // 找路径，递归遍历矩阵的模版题
  let m = board.length,
    n = board[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (traversal(i, j, 0)) return true
    }
  }

  return false

  // k 为当前字符在目的字符word中的下标
  function traversal(x, y, k) {
    if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== word[k]) {
      return false
    }

    if (k === word.length - 1) {
      return traversal
    }

    board[x][y] = ''
    let res = traversal(x - 1, y, k + 1)
      || traversal(x + 1, y, k + 1)
      || traversal(x, y - 1, k + 1)
      || traversal(x, y + 1, k + 1)

    board[x][y] = word[k]
    return res
  }

};
