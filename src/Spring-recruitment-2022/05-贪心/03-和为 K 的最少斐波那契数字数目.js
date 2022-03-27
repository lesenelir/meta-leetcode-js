/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
  let fib = [1, 1]
  let a = 1, b = 1
  while (a + b <=  k) {
    let c = a + b
    fib.push(c)
    a = b
    b = c
  }
  console.log(fib)
  let count = 0
  for (let i = fib.length - 1; i >= 0; i--) { // 从最大的位置开始取
    if (k >= fib[i]) {
      k = k - fib[i]
      count++
    }
    if (k < 0) break
  }
  return count
};
