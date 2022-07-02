/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  // 快慢指针模拟
  let i = 0,
      j = 0

  while (i < name.length && j < typed.length) {
    if (name[i] === typed[j]) {
      i++
      j++
    } else {
      // 字符不一致，则移动typed的指针
      if (j === 0) return false
      while (typed[j] === typed[j-1]) { // 找后一位不相同的字符
        j++
      }
      if (name[i] === typed[j]) {
        i++
        j++
      } else { // 找到下一位不相同的指针后若name和typed值都不一致则返回false
        return false
      }
    }
  }

  // name没有匹配完，name的长度大于typed 则说明typed没有输入那么多字符
  if (i < name.length) {
    return false
  }

  // typed没有匹配完， 查看最后的字符是否都是相等
  // name匹配完后，如果typed最后的字符有不和name最后字符相等的字符则返回false
  while (j < typed.length) {
    if (typed[j] === typed[j-1]) j++
    else return false
  }

  return true
};
