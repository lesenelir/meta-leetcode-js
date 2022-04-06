/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || s[i] !== stack[stack.length - 1]) {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }

  return stack.join('')
};
