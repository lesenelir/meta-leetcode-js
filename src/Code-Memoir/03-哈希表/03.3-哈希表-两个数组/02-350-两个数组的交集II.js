/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map = new Map()
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      map.set(nums1[i], map.get(nums1[i]) + 1)
    } else {
      map.set(nums1[i], 1)
    }
  }

  let res = []
  for (let i = 0; i < nums2.length; i++) {
    let count = map.get(nums2[i])
    if (count > 0) {
      res.push(nums2[i])
      count--
    }
  }
  return res
};


var intersect2 = function(nums1, nums2) {
  // 返回与元素出现次数最小的交集元素
  // 考虑出现次数可以考虑用map来处理
  let map1 = getMap(nums1),
      map2 = getMap(nums2),
      res = []

  for (let [key, value] of map1.entries()) {
    if (map2.has(key)) {
      if (map2.get(key) > value) {
        for (let i = 0; i < value; i++) {
          res.push(key)
        }
      } else {
        for (let i = 0; i < map2.get(key); i++) {
          res.push(key)
        }
      }
    }
  }

  return res

  // 获取map函数
  function getMap(arr) {
    let len = arr.length,
        map = new Map()

    for (let i = 0; i < len; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], 1)
      } else {
        map.set(arr[i], map.get(arr[i]) + 1)
      }
    }

    return map
  }
};

// Note： 对于要考虑出现的次数，则使用map

//       Hash表 map 好处 就是 查询某一个key的时候 是O(1)时间复杂度
