/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  // 网格DFS
  // 本题重点：计算从当前格到网格和海洋之间穿过的次数
  // 本题为了不记录岛屿内部的周长长度，需要将岛屿内部的格子和海水相区别，用2来覆盖陆地
  let res = 0,
      row = grid.length,
      col = grid[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) { // 只有一个岛屿，遍历grid找到坐标为1的岛屿
        res = traversal(i, j)
      }
    }
  }
  return res

  function traversal(i, j) {
    if (i < 0 || i >= row || j < 0 || j >= col) { // 穿过网格计数+1
      return 1
    }
    if (grid[i][j] === 0) { // 穿过海洋计数+1
      return 1
    }
    if (grid[i][j] === 2) { // 该节点之前访问过，不记录周长长度
      return 0
    }

    grid[i][j] = 2 // 设置之前访问过的节点
    let top = traversal(i -1, j)
    let right = traversal(i, j + 1)
    let bottom = traversal(i + 1, j)
    let left = traversal(i, j - 1)
    return top + right + bottom + left
  }

};
