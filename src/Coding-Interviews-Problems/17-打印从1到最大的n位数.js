/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  if (n === 0) return[0]

  let res =  []
  let count = 1
  for (let i = 1; i < Math.pow(10, n); i++) {
    res.push(count)
    count++
  }
  return res
};

// console.log(Math.pow(2, 3))
