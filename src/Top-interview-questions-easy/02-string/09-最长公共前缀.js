/**
 * @param {string[]} strs
 * @return {string}
 */

// 查找最长公共前缀

// Note： 注：最长的公共前缀，最长的MAX必不可能超过

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""

  let pre = strs[0]
  for (let i = 1; i < strs.length; i++) {
    // 不断截取
    while (strs[i].indexOf(pre) !== 0) {
      pre = pre.slice(0, pre.length - 1)
    }
  }
  return pre
};

// Note: A.indexOf("B") 字符串B在字符串A中第一次出现的位置
console.log(("Hello World").indexOf("llo"))
