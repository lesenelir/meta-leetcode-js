// DFS 在网格问题的典型应用

let arr = [
  [1, 2, 3],
  [4, 5, 6]
]

// 输出从最左上到右下的路径总共有多少条，并把每一条路径输出出来
function problemSolve(arr) {
  let dir = [
      [-1, 0], // 上
      [0, 1],  // 右
      [1, 0],  // 下
      [0, -1]  // 左
  ]

  let path = [],
      res = [],
      row = arr.length,
      col = arr[0].length,
      visited = new Array(row).fill(false).map(() => new Array(col).fill(false))

  path.push(arr[0][0])
  visited[0][0] = true
  traversal(0, 0)
  return res

  function traversal(curX, curY) {
    if (curX === row - 1 && curY === col - 1) {
      res.push([...path])
      return
    }

    // 顺时针遍历找答案
    for (let i = 0; i < dir.length; i++) {
      let newX = curX + dir[i][0],
          newY = curY + dir[i][1]

      if (newX >= 0 && newX < row && newY >= 0 && newY < col) {
        if (!visited[newX][newY]) {
          path.push(arr[newX][newY])
          visited[newX][newY] = true
          traversal(newX, newY)
          visited[newX][newY] = false
          path.pop()
        }
      }
    }
  }

}

let res = problemSolve(arr)
console.log(res)
