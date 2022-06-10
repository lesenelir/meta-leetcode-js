/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let path = [],
      res = []

  backTracking(0)
  return res

  function backTracking(startIndex) {
    // 递归终止条件
    if (path.length > 4) return
    if (path.length === 4 && startIndex === s.length) {
      res.push(path.slice().join("."))
      return
    }

    // 单层递归逻辑
    for (let i = startIndex; i < s.length; i++) {
      if (!isValid(s.slice(startIndex, i+1))) continue
      path.push(s.slice(startIndex, i+1))
      backTracking(i+1) // 递归下一层
      path.pop() // 回溯
    }
  }

  // 判断字符是否满足条件
  function isValid(str) {
    if (str[0] === '0' && str.length !== 1) return false
    let num = Number(str)
    if (isNaN(num)) return false
    if (0 <= num && num<= 255) return true
  }

};
