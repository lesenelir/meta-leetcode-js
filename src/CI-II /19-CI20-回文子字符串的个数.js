/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  // 动态规划做法
  // dp[i][j] 代表区间[i,j]是否为回文串
  const dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false))
  let res = 0
  // dp 是由从下至上，从左到右遍历
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if ((j-i) <= 1) {
          res++
          dp[i][j] = true
        } else if (dp[i+1][j-1]) {
          res++
          dp[i][j] = true
        }
      }
    }
  }
  console.log(dp)
  return res


  // 暴力方法
  // let count = 0
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = i + 1; j < s.length; j++) {
  //     if (isFindStr(i, j)) count++
  //   }
  // }
  // return count + s.length

  // function isFindStr(i, j) {
  //   let [left, right] = [i, j]
  //   while (left < right) {
  //     if (s[left] !== s[right]) {
  //       return false
  //     }
  //     left++
  //     right--
  //   }
  //   return true
  // }

};
