/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1)
  let setResult = new Set()

  for (const number of nums2) {
    if (set1.has(number)) {
      setResult.add(number)
    }
  }

  return Array.from(setResult) // [...setResult]
};


// Note： 对于去重可以考虑set集合，set是一种特殊的map。
//        set中的key和value都是一样的
