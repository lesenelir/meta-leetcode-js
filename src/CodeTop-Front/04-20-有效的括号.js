/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 栈
  let stack = [],
      len = s.length,
      obj = {
        "(": ")",
        "{": "}",
        "[": "]"
      },
      key

  if (len % 2 !== 0) return false

  for (let i = 0; i < len; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
    } else {
      key = stack.pop()
      if (obj[key] !== s[i]) {
        return false
      }
    }
  }

  // 如果stack还有元素没有匹配完，则有若干个元素没有匹配
  if (stack.length) {
    return false
  } else {
    return true
  }

};
