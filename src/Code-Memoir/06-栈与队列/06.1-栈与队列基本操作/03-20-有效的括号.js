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
