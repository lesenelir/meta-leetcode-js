/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let newStr = s + s
  let newStr1 = newStr.slice(1, -1) // 破坏子串完整性
  return newStr1.indexOf(s) !== -1
};
