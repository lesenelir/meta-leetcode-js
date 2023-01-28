/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let newS = s.trim()

  let arr = newS.split(' '),
    len = arr.length,
    res = ''

  // console.log(arr)

  for (let i = len - 1; i >= 0; i--) {
    if (i === 0 && arr[i] !== '') res += arr[i]
    else if (arr[i] !== '') res += arr[i] + ' '
  }
  // console.log(res)

  return res
};
