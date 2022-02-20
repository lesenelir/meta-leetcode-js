/**
 * @param {string} s
 * @return {number}
 */

// 字符串查找第一个没有重复出现的字符

/**
 *    字符串和Map之间的操作
 *
 *      可以考虑obj map 对象
 *         属性、键 存放字符； 属性值、值 存放字符出现的次数
 */
var firstUniqChar = function(s) {
  const map = new Map()
  for (const item of s) {
    if (!map.has(item)) { // 没有item，新添加item到map
      map.set(item, 1) // map[item] = 1
    } else { // map有item，新添加item的值加1
      map.set(item, map.get(item) + 1) // map[item] += 1
    }
  }
  // 在map中找第一个没有重复出现item
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1 ) {
      return i
    }
  }
  return -1
};

// Note：
// 1. 遍历 字符串可以用fori，也可以用forof。如果要用下标，则使用fori；如果要用元素可以使用forof
//        不过字符串遍历最好还是用fori
// 2. map存储数据操作要熟练


/*
let str = 'codell'
const map = new Map()
for (const item of str) {
  if (!map.has(item)) { // 没有item，新添加item到map
    map.set(item, 1)
  } else { // map有item，新添加item的值加1
    map.set(item, map.get(item) + 1)
  }
}
console.log(map)

for (const [key, value] of map.entries()) {
  console.log(key, value)
}
*/
