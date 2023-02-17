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

// Note： 此题收获：对于map中的数据，可以通过遍历entries 作为一个对象的key value 传入数组当作item


let map = {1: 3, 2: 2, 3: 1}
console.log(Array.from(map))

var topKFrequent2 = function(nums, k) {
  let len = nums.length,
    map = new Map(),
    res = []

  for (let i = 0; i < len; i++) {
    if (!map.has(nums[i])) map.set(nums[i], 1)
    else map.set(nums[i], map.get(nums[i]) + 1)
  }

  // arr 是 一个二维数组
  let arr = [...map.entries()]
  arr.sort((a, b) => b[1] - a[1])

  for (let i = 0; i < k; i++) {
    res.push(arr[i][0])
  }

  return res
};
