/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  // 网格的DFS 要visited
  let res = 0,
      row = grid.length,
      col = grid[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, traversal(i, j))
      }
    }
  }
  return res

  function traversal(i, j) {
    if (i < 0 || i >= row || j < 0 || j >= col) {
      return 0
    }
    if (grid[i][j] === 0) return 0

    grid[i][j] = 0 // 自身用海水覆盖，再覆盖周围上下左右的陆地
    let top = traversal(i - 1, j)
    let right = traversal(i, j + 1)
    let bottom = traversal(i + 1, j)
    let left = traversal(i, j - 1)
    return top + right + bottom + left + 1
  }

};
