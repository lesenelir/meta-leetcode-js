/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0
  let index = s.length - 1
  // 先考虑胃口大的人
  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      count++
      index--
    }
  }
  return count
};


// Note: 第13行通过自减方式遍历数组是常用的方式
