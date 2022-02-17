/**
 * @param {number[]} nums
 * @return {boolean}
 */


// 方法一： 通过排序，判断前后数字是否相同
var containsDuplicate = function (nums) {
  let flag = false
  nums.sort((a, b) => a- b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i-1]) {
      flag = true
    }
  }
  return flag
};

// 方法二： 通过set
var containsDuplicate2 = function (nums) {
  let flag = false
  let set = new Set(nums)
  // let newNums = Array.from(set) // from()伪数组转换
  let newNums = [...set] // 使用扩展运算符转换
  if (nums.length !== newNums.length) { // 长度不相同，说明有重复元素在set集合中被去除
    flag = true
  }
  return flag
};

/**
    ES5 set集合转array数组：Array.from(集合)
    ES6 使用扩展运算符...
 */

