/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // map的key是异位词；值是一个数组，里面存放所有的值
  let map = new Map()

  for (const str of strs) {
    let strKey = str.split('').sort().join('')     // 当且仅当 字符串排序相等，则是异位词
    if (map.has(strKey)) {
      let temp = map.get(strKey) // temp 是数组
      temp.push(str)
      map.set(strKey, temp)
    } else {
      map.set(strKey, [str])
    }
  }
  return Array.from(map.values())
};

// let str = 'anb'
// console.log(str.split('').sort().join(''))
