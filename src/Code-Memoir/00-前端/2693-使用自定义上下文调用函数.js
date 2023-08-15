/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
  // call api
  const key = Symbol.for(this) // 从全局Symbol注册表中查找symbol实例
  context[key] = this
  const res = context[key](...args)
  delete context[key]

  return res
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
