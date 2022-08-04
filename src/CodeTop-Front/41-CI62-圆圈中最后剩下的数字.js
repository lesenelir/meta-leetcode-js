/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  // 约瑟夫环问题
  // f(n, m) 代表 最后生还者的索引号
  // f(n, m) = ( f(n-1, m) + m ) % n

  let pos = 0 // 最后生还者的起始坐标

  for (let i = 2; i <= n; i++) {
    pos = (pos + m) % i
  }

  return pos

};
