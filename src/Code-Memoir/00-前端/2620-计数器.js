/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
  return function() {
    return n++
  };
};

const c = createCounter(10)
c()
c()
