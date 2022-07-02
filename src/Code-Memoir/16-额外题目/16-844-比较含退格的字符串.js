/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  // 栈思想
  let sFinal = getFinalStr(s),
      tFinal = getFinalStr(t)

  return sFinal === tFinal

  function getFinalStr(str) {
    let res = [],
        len = str.length

    for (let i = 0; i < len; i++) {
      if (str[i] !== '#') {
        res.push(str[i])
      } else {
        res.pop()
      }
    }
    return res.join()
  }

};
