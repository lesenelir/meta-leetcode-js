/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 === 1) return false
  let stack = []
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (const item of s) {
    if (item in map) { // 存入key
      stack.push(item)
      continue
    }
    if (map[stack.pop()] !== item) {
      return false
    }
  }

  return !stack.length
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid2 = function(s) {
  if (s.length % 2 === 1) return false
  let stack = []
  let hash = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  for(let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
    } else { // 右括号
      if (hash[stack.pop()] !== s[i]) {
        return false
      }
    }
  }
  return !stack.length
};

// Note： 左括号则入栈，右括号则出栈并进行对比
