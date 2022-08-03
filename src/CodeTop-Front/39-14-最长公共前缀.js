/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // f l o w e r
  // f l o w
  // f l i g h t
  // 按照列遍历

  let res = '',
      col = strs[0].length,
      row = strs.length,
      charItem

  // 先遍历列拿到某一个字符，再遍历行， 查看每一行的元素值是否和该元素相等
  for (let j = 0; j < col; j++) {
    charItem = strs[0][j]
    for (let i = 1; i < row; i++) {
      if (strs[i][j] !== charItem) {
        return res
      }
    }
    res += charItem
  }
  return res
};
