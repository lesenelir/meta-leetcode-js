/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  // 最长上升子序列变形 - 300 题
  // dp[i] 为 以pairs[i]结尾的最长数对链长度
  let len = pairs.length,
      dp = new Array(len).fill(1)

  pairs.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return dp[len - 1]

  // 暴力解法 超时
  // let path = [],
  //     res = 0,
  //     len = pairs.length

  // // pairs 数组排序，以第一个字符排序，如果第一个字符相等 则 以第二个字符排序
  // pairs.sort((a, b) => {
  //   if (a[0] === b[0]) {
  //     return a[1] - b[1]
  //   } else {
  //     return a[0] - b[0]
  //   }
  // })

  // traversal(0)
  // return res

  // function traversal(startIndex) {
  //   res = Math.max(res, path.length)

  //   for (let i = startIndex; i < len; i++) {
  //     if (path.length !== 0 && path[path.length - 1][1] >= pairs[i][0]) continue
  //     path.push(pairs[i])
  //     traversal(i + 1)
  //     path.pop()
  //   }

  // }

};
