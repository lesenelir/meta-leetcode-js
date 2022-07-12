/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  // dp[i][j]表示：字符串i到j的最长回文子串的长度
  const dp = new Array(s.length).fill(0).map(() => new Array(s.length). fill(0))
  // console.log(dp)

  // 初始化：
  // i === j 字符串的下标相等时 代表当前的回文子串的长度为1
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1
  }
  // console.log(dp)

  // 状态转移方程：
  // 从下开始遍历
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i+1][j-1] + 2
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
      }
    }
  }
  return dp[0][s.length - 1]
};
