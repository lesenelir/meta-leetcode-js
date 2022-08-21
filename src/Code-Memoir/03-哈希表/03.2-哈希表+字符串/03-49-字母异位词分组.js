/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // map的key是异位词；值是一个数组，里面存放所有的值
  let map = new Map(),
      len = strs.length,
      str,
      key

  for (let i = 0; i < len; i++) {
    str = strs[i]
    key = str.split('').sort().join('') // 排序后字符串
    if (map.has(key)) {
      let temp = map.get(key)
      temp.push(str)
      map.set(key, temp)
    } else {
      map.set(key, [str]) // value保存数组
    }
  }

  return [...map.values()]
};

let str = 'anb'
console.log(str.split('').sort().join(''))

// Note: 异位词可以考虑：map + 异位词的排序是相同的

