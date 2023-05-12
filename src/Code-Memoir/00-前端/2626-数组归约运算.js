/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  // return nums.reduce(fn, init)
  nums.forEach(item => {
    init = fn(init, item)
  })

  return init
};
