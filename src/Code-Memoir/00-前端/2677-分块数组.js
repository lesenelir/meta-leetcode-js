/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  let res = [],
    len = arr.length

  for (let i = 0; i < len; i += size) {
    res.push(arr.slice(i, i + size))
  }

  return res
};
