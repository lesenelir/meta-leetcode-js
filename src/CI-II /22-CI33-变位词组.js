/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // 思路： map key存放排序后的异位词 ； value存放一个数组，数组里面存放strs的值
  let map = new Map()

  for (let str of strs) {
    let strKey = str.split('').sort().join('')
    if (!map.has(strKey)) {
      map.set(strKey, [str])
    } else {
      let temp = map.get(strKey) // temp是数组
      temp.push(str)
      map.set(strKey, temp)
    }
  }

  return [...map.values()]
};
