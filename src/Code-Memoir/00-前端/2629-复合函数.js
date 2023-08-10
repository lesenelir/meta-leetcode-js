/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  let len = functions.length,
    f = null

  return function(x) {
    if (len === 0) return x

    for (let i = len - 1; i >= 0; i--) {
      f = functions[i](i === len - 1 ? x : f)
    }

    return f
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */


var compose2 = function(functions) {
  // 函数从右往左计算
  let len = functions.length,
    res = 0

  return function(x) {
    if (len === 0) return x

    for (let i = len - 1; i >= 0; i--) {
      res = functions[i](i === len - 1 ? x : res)
    }

    return res
  }
};
