/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let r = s.length - 1, l = r, res = "";
  while (l >= 0) {
    //先找到单词的尾部
    while (s[r] === " ") {
      r--;
    }
    l = r;

    //给上次单词加空格，排除第一次
    if (l >= 0 && res) {
      res += " ";
    }

    //再找到单词的头部
    while (s[l] && s[l] !== " ") {
      l--;
    }

    //遍历单词并添加
    for (let i = l + 1; i <= r; i++) {
      res += s[i];
    }

    //跳到下一个单词
    r = l;
  }

  return res;
};
