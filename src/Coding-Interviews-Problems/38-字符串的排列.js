/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  // 字符串的所有排列 ---> 全排列问题
  // 元素可重，但不可复选 ， 使用set对结果集进行排除相同结果
  let res = [],
      path = [],
      used = new Array(s.length).fill(false),
      set

  traversal()
  set = new Set(res)
  return [...set]

  function traversal() {
    if (path.length === s.length) {
      res.push([...path].join(''))
      return
    }

    for (let i = 0; i < s.length; i++) {
      if (used[i] === true) continue
      used[i] = true
      path.push(s[i])
      traversal(i + 1)
      path.pop()
      used[i] = false
    }
  }

};
