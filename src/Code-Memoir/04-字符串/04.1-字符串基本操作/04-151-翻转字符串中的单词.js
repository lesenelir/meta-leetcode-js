/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // 从后往前遍历，遇到空格则截断字符串放入新的字符串中
  let len = s.length,
      right = len - 1,
      left = right,
      res = ''

  while (left >= 0) {
    if (res) res += ' '

    // 找单词尾部
    while (s[right] === ' ') {
      right--
    }
    left = right

    // 找单词头部，跳出循环时，left 指向 ' '
    while (s[left] && s[left] !== ' ') {
      left--
    }

    // 有了单词头部和单词尾部，遍历输出元素
    for (let i = left + 1; i <= right; i++) {
      res += s[i]
    }

    // right跳转至left位置，此时right指向为0，等待遍历修改下一个单词
    right = left
  }

  return res.trim()
};
