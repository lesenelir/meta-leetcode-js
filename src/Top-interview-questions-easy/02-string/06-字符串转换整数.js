/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MAX = Math.pow(2, 31) - 1
  const MIN = -Math.pow(2, 31)

  const result = parseInt(s.trim().match(/^[-+]?[0-9]*/g)[0]) || 0
  return result < MIN ? MIN : (result > MAX ? MAX : result)
};
