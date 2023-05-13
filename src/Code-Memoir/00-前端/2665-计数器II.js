/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let res = init
  return {
    increment() {
      return ++res
    },
    decrement() {
      return --res
    },
    reset() {
      res = init
      return res
    }
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
