/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 遍历二维数组，输出岛屿的数量
  let m = grid.length,
      n = grid[0].length,
      res = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        res++
        traversal(i, j) // 将该节点的上下左右节点都用海水淹没
      }
    }
  }

  return res

  // 做深度搜索，包括此结点的岛屿边界，该结点的上下左右
  function traversal(i, j) {
    // 递归终止条件
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return
    }
    if (grid[i][j] === '0') return

    // 对于某一个节点grid[i]===1而言递归把其上下左右都设置为0，用海水淹没
    grid[i][j] = '0' // 将(i, j)变成海水
    // 淹没上下左右的陆地
    traversal(i+1, j)
    traversal(i-1, j)
    traversal(i, j+1)
    traversal(i, j-1)
  }

};
