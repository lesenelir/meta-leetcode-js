/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  let str = String(n),
      len = str.length,
      res = [],
      count = 0

  for (let i = len - 1; i >= 0; i--) {
    if (count === 3) {
      res.unshift('.')
      res.unshift(str[i])
      count = 1 // 此处要赋值count = 1 ， 因为，此时已经添加了元素
      continue
    }
    res.unshift(str[i])
    count++
  }

  return res.join('')
};
