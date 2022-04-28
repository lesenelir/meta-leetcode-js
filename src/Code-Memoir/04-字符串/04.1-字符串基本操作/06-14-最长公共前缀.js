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

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix2 = function(strs) {
  if (strs.length === 0) return ''
  let res = ''
  for (let j = 0; j < strs[0].length; j++) { // 遍历数组第一个元素内的字符 - 第j位
    // strs[0]是第一个元素
    let charItem = strs[0][j]
    for (let i = 1; i < strs.length; i++) { // 第i个
      if (strs[i][j] !== charItem) {
        return res
      }
    }
    res += strs[0][j]
  }
  return res
};
