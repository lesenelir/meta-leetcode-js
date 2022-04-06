/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  let arr = []
  for (let [key,value] of map.entries()) {  // 注意：此处的循环
    arr.push({
      key,
      value
    })
  }

  arr.sort((a, b) => b.value - a.value)

  return arr.slice(0, k).map((item) => item.key)
};

// Note : 利用数组可以保存对象的方法进行保存

let map = {1: 3, 2: 2, 3: 1}
console.log(Array.from(map))

