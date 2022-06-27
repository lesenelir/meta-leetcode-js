/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  // 哈希 + 排序数组 -> 解决该问题
  // map key为nums元素，value为比该元素小的元素个数
  let arr = [...nums],
      map = new Map,
      res = []
  // 对数组进行排序，数组的下标即比该元素小的元素个数
  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) { // 对于重复的元素map不保存
      map.set(arr[i], i)
    }
  }

  for (let i = 0; i < nums.length; i++) {
    res[i] = map.get(nums[i])
  }

  return res


  // 暴力
  // let res = [],
  //     len = nums.length,
  //     count
  //
  // for (let i = 0; i < len; i++) {
  //   count = 0
  //   for (let j = 0; j < len; j++) {
  //     if (nums[j] < nums[i]) count++
  //     if (j === len - 1) res.push(count)
  //   }
  // }
  //
  // return res
};
