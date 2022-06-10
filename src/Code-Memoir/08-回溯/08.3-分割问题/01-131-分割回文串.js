/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  // 切割问题 类似于 组合问题
  let res = [],
      path = []

  backTracking(0)
  return res

  function backTracking(startIndex) {
    // 递归终止条件
    if (startIndex >= s.length) {
      res.push([...path])
      return
    }

    // 单层递归逻辑
    for (let i = startIndex; i < s.length; i++) {
      if (isPalindrome(s, startIndex, i)) {
        let str = s.substr(startIndex, i - startIndex + 1)
        path.push(str)
      } else {
        continue
      }
      backTracking(i+1) // 递归下一层
      path.pop() // 回溯
    }

  }

  function isPalindrome(str, start, end) {
    let [left, right] = [start, end]
    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }

};
