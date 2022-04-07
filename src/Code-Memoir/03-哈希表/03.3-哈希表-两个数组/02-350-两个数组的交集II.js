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

// Note： 对于要考虑出现的次数，则使用map

//       Hash表 map 好处 就是 查询某一个key的时候 是O(1)时间复杂度
