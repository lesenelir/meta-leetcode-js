/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  // 贪心思路：优先满足胃口大的g数组
  // 胃口g 食物s，尽可能的满足则是大饼干满足更多的人
  let res = 0,
      sIndex = 0

  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)

  for (let i = 0; i < g.length; i++) {
    if (s[sIndex] >= g[i]) {
      sIndex++
      res++
    }
  }

  return res
};


// Note: 第17行通过自增方式遍历数组是常用的方式
