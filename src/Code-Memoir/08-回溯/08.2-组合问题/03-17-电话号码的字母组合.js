 /**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let arr = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'],
      res = [],
      path = []

  if (digits.length === 0) return []
  if (digits.length === 1) return arr[parseInt(digits[0])].split('')

  backTracking(0)
  return res

  function backTracking(startIndex) { // startIndex 是digital
    // 递归终止条件
    if (path.length === digits.length) {
      res.push(path.join(''))
      return
    }

    // 单层递归逻辑
    for (const item of arr[parseInt(digits[startIndex])]) {
      path.push(item)
      backTracking(startIndex + 1)
      path.pop()
    }
  }
};
