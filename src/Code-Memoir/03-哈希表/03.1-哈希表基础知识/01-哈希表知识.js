// 当需要判断一个元素是否出现在集合里，可以考虑哈希法


// 获取字符串中出现次数前5个字符
let str = 'asdhaklns jkfgsdasdsdknv,asdasd'

function getStr(str) {
  let res = [],
      map = new Map()

  for (const item of str) {
    if (!map.has(item)) {
      map.set(item, 1)
    }
    map.set(item, map.get(item) + 1)
  }

  console.log(map)
  let arr = [...map.entries()].sort((a, b) => b[1] - a[1])

  for (let i = 0; i < 5; i++) {
    res.push(arr[i][0])
  }
  console.log(res)
}

getStr(str)

/**
 * Note：
 *  - map 可以通过 Array.from 或 [...map] 来转数组 ， 当转成数组后，方便操作
 */
