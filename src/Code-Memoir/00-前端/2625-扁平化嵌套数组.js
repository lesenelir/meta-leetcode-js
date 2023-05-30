/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  let res = []

  for (let item of arr) {
    if (Array.isArray(item)) {
      if (n > 0) {
        // res = [...res, ...flat(item, n - 1)]
        res.push(...flat(item, n - 1))
      } else {
        res.push(item)
      }
    } else {
      res.push(item)
    }
  }

  return res

};
