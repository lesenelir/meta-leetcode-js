/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  // 全排列 -> 元素可重，但不可复选
  let res = [],
      path = [],
      len = s.length,
      used = new Array(len).fill(false)

  traversal()
  // 以上获得了全排列的结果
  // ["aab","aba","aab","aba","baa","baa"]
  let set = new Set(res)
  return [...set]

  function traversal() {
    if (path.length === len) {
      res.push([...path].join(''))
      return
    }

    for (let i = 0; i < len; i++) {
      if (used[i] === true) continue
      used[i] = true
      path.push(s[i])
      traversal(i + 1)
      path.pop()
      used[i] = false
    }
  }

};
