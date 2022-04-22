/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''

  for (let i = 0; i < strs[0].length; i++) { // 遍历第一个字符串的某个数位
    let charItem = strs[0][i]
    for (let j = 1; j < strs.length; j++) {  // 遍历每一个字符串
      if (strs[j][i] !== charItem || strs[j].length === i) { // 不相等 或者 某个元素的长度正好为i已经遍历完
        return strs[0].slice(0, i)
      }
    }
  }
  return strs[0]
};
