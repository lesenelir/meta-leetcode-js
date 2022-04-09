/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let newS = s.trim()
  // [left, right] 代表一个单词的长度
  let right = newS.length - 1
  let left = right
  let res = []
  while (left >= 0) {
    // 先找到单词的尾部
    while (newS[right] === ' ') {
      right--
    }
    left = right
    // 找到left的单词开头位置
    while (newS[left] && newS[left] !== ' ') {
      left--
    }
    // 此时left值为 ' '
    // 进行遍历
    for (let i = left + 1; i <= right; i++) {
      res.push(newS[i])
    }
    res.push(' ')
    right = left
  }
  res.pop() // 退格最后一个空格
  return res.join('')
};
