/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  // Note: 环形遍历推荐使用while遍历
  //       右移动 (i + 1) % len  ;   左移 (len + i - 1) % len

  let len = code.length,
    res = []

  if (k === 0) {
    for (let i = 0; i < len; i++) {
      res.push(0)
    }
  }

  if (k > 0) {
    for (let i = 0; i < len; i++) {
      let start = (i + 1) % len,
        temp = 0,
        newK = k
      // 对于环形可以用while来模拟
      while (newK--) {
        temp += code[start]
        start = (start + 1) % len
      }
      res.push(temp)
    }
  }

  if (k < 0) {
    for (let i = 0; i < len; i++) {
      let start = (len + i - 1) % len,
        temp = 0,
        newK = k
      while (newK++) {
        temp += code[start]
        start = (len + start - 1) % len
      }
      res.push(temp)
    }
  }

  return res
};
