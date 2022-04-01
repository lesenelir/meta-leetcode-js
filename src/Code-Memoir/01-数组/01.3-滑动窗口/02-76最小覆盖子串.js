/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s === t) return s
  let left = 0
  let right = 0
  let need = {} // need对象，key保存t的字符，value对应字符出现的此处（动态变更）
  let needSave = {} // needSave对象，用来永久保存t字符出现的次数（静态，永不变）
  let minLength = 0
  let res = ''

  for (const tElement of t) {
    if (!need[tElement]) {
      need[tElement] = 1
      needSave[tElement] = 1
    } else {
      need[tElement] = need[tElement] + 1
      needSave[tElement] = needSave[tElement] + 1
    }
  }

  let needType = Object.keys(need).length  // need的属性值长度，即有多少种元素

  while (right < s.length) {
    let c = s[right]
    if (need[c] !== 0 && need[c] !== undefined) { // need[c]存在并且值不为零
      need[c] -= 1
      if (need[c] === 0) { // 如果字符为零，则种类减少1
        needType -= 1
      }
    }

    while (needType === 0) { // 满足条件开始缩小长度
      let c2 = s[left]
      let windowStr = s.slice(left, right + 1)
      if (right - left + 1 < minLength || minLength === 0) {
        minLength = right - left + 1
        res = s.slice(left, right + 1)
      }
      // 可以缩减数组长度，从左边开始缩减

      // 查找c2元素在windowStr出现的次数，如果出现次数大于needSave[c2]，则右移；如果出现次数小于等于needSave[c2]，则用于维护needType值
      // let count = 0
      // for (const item of windowStr) {
      //   if (c2 === item) count++
      // }

      let count = windowStr.split(c2).length - 1
      if (need[c2] !== undefined && count <= needSave[c2]) {
        need[c2] += 1 // 左边+1
        needType += 1
      }
      left++
    }
    right++
  }
  return res
};
console.log(minWindow("acbbaca","aba"))



// Note:
//       线性统计字符串中字符出现的次数，可以用分割方法 - 1
var str ="abc#def#hig";
// var len =str.split("#").length-1
// console.log(len);
console.log(str.split('#'))
