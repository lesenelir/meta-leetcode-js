/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  // 遍历找每一个字母的最远边界，这个边界就是分割点
  // 字符最远出现位置下标和当前位置下标位置相等，则找到了分割点

  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i)
  }
  // console.log(map)

  let res = [],
      left = 0,
      right = 0

  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, map.get(s[i])) // 当前字母的最远右边界
    if (right === i) {
      res.push(right - left + 1) // 区间长度
      left = i + 1 // 下一个区间长度由下一个字符位置开始
    }
  }
  return res

};
