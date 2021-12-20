/**
 * @param {number[]} nums
 * @return {number}
 */

// 查找数组中是否有重复的元素;
// 用一个map哈希表，键值保存元素的值，哈希表有该元素则返回，没有则加入到哈希表

var findRepeatNumber = function(nums) {
  var map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {  // O(1)复杂度
      return nums[i]
    }
    map.set(nums[i], i)
  }
  return -1
};


// 方法二2
var findRepeatNumber2 = function(nums) {
  // nums.sort(function (a, b) {
  //   return a - b
  // })
  // 对数组进行升序排序
  nums.sort((a, b) => a- b)
  for (let i = 1; i < nums.length; i++) {  // 从第一个元素开始查找，而不是从第0个元素开始查找
    if (nums[i] === nums[i-1]) {
      return nums[i]
    }
  }
  return -1
};

console.log(findRepeatNumber2([1,4,3,5]))
