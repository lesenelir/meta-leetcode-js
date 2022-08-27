/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let m = grid.length,
      n = grid[0].length,
      res = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, traversal(i, j))
      }
    }
  }
  return res

  // 对于(i, j) 为1 的用海水淹没
  function traversal(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n) return 0
    if (grid[i][j] === 0) return 0

    // 对于一个i,j为1 的陆地而言，自身用海水覆盖，再遍历上下左右覆盖全部
    grid[i][j] = 0
    return traversal(i+1, j) + traversal(i-1, j) + traversal(i, j+1) + traversal(i, j-1) + 1
  }

};
