/**
 * @param {Function} fn
 */
function memoize(fn) {
  // 返回该函数 记忆后 的结果
  // 相同的输入，不会再调用第二次的函数，反而会返回一个缓存值
  let obj = {}
  return function(...args) {
    let key = JSON.stringify(args)
    if (key in obj) {
      return obj[key]
    }
    return obj[key] = fn(...args)
  }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
