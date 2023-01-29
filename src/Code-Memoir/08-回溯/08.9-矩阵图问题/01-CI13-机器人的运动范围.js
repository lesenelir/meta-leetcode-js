/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  let visited = new Array(m).fill().map(() => new Array(n).fill(false))

  let res = traversal(0, 0)
  return res

  function traversal(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || getSum(i) + getSum(j) > k) {
      return 0
    }

    visited[i][j] = true

    // 直接规定只能走下 和 右， 不能往回走
    return 1 + traversal(i + 1, j) + traversal(i, j + 1)
  }


  function getSum(x) {
    let sum = 0

    while (x) {
      sum += x % 10
      x = Math.floor(x / 10)
    }
    return sum
  }

};
