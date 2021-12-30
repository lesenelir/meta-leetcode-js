/**
 * @param {number} n
 * @return {number}
 */

// 贪心算法证明此题
var cuttingRope = function (n) {
  if (n === 1) return 1
  if (n === 2) return 1
  if (n === 3) return 2
  if (n === 4) return 4
  let ans = 1
  let mod = 1000000007
  while (n > 4) {
    ans = ans * 3 % mod
    n = n - 3
  }
  return (ans * n) % mod
};
