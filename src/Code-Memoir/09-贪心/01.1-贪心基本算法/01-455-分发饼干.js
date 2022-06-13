/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  // 贪心思路：优先满足胃口大的g数组
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let res = 0,
      index = s.length - 1

  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      res++
      index--
    }
  }

  return res

};


// Note: 第17行通过自减方式遍历数组是常用的方式
