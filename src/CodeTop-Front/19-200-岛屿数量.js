/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // DFS 递归
  // 递归把某个位数为1的值递归
  let m = grid.length,
      n = grid[0].length,
      res = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '0') continue
      traversal(i, j) // 下标为1
      res++
    }
  }
  return res

  function traversal(i, j) {
    // 递归终止条件
    // 当坐标出圈 或 当前坐标值为0，则递归终止
    if (i < 0 || j < 0 || i >= m || j >= n) return
    if (grid[i][j] === '0') return

    // 单层递归逻辑
    // 对于某一个节点坐标值为1时 把上下左右坐标的值都置为0
    grid[i][j] = '0'
    traversal(i - 1, j) // 上
    traversal(i, j + 1) // 右
    traversal(i + 1, j) // 下
    traversal(i, j - 1) // 左
  }

};
