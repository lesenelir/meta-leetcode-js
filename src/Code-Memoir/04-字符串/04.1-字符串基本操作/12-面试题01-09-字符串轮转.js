/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
  // 轮转，不仅需要考虑字符数量，还要考虑字符的相对位置要有序
  // 字符串相加，肯定包括了所有了轮转的结果
  let m = s1.length,
    n = s2.length,
    newS = s1 + s1

  if (m !== n) return false

  return newS.includes(s2)
};
