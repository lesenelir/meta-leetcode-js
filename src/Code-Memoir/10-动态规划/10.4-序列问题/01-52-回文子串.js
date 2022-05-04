/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  // 暴力写法
  // 遍历循环
  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (isCorrectStr(i, j)) {
        count++
      }
    }
  }
  return count + s.length

  function isCorrectStr(i, j) {
    let [left, right] = [i, j]
    while (left <= right) { // 相等时候也要进行判断
      if (s[left] !== s[right]) return false
      left++
      right--
    }
    return true
  }

};
