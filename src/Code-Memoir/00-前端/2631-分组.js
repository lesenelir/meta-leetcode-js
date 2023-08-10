/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  // 数组分组的代码
  let res = {}

  for (let item of this) {
    let key = fn(item)
    if (!res[key]) res[key] = []
    res[key].push(item)
  }

  return res
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
