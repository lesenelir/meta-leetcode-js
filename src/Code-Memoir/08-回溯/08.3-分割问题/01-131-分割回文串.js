/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  // 分割问题是另一种组合问题
  let res = [],
    path = [],
    len = s.length

  backTracking(0)
  return res

  function backTracking(startIndex) {
    if (startIndex >= len) {
      res.push([...path])
      return
    }

    for (let i = startIndex; i < len; i++) {
      if (!isPalindrome(s, startIndex, i)) continue
      path.push(s.slice(startIndex, i + 1))
      backTracking(i + 1)
      path.pop()
    }
  }

  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) return false
      left++
      right--
    }
    return true
  }

};
