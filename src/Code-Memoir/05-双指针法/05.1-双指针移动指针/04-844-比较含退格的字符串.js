/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let resultS = stringToArray(s)
  let resultT = stringToArray(t)

  if (resultS.length !== resultT.length) return false
  for (let i = 0; i < resultS.length; i++) {
    if (resultS[i] !== resultT[i]) {
      return false
    }

  }
  return true

  function stringToArray(str) {
    let result = []
    for (const item of str) {
      if (item !== '#') {
        result.push(item)
      } else {
        result.pop()
      }
    }
    return result
  }
};

// Note: 对于有退格操作的数组，可以运用栈思想
