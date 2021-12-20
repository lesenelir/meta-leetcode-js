/**
 * @param {number[]} nums
 * @return {number}
 */

// 快慢指针，slow指针用来指代可以存放的位置，fast指针用来扫描遍历数组
// 允许可以重复多少次，slow就从num开始存放，nums[fast] !== nums[slow - num]
var removeDuplicates = function (nums) {
  if (nums.length < 3) return nums.length
  let slow = 2
  for (let fast = slow; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 2]) {   // 查看可以插入slow位置的前两个位置
      nums[slow] = nums[fast]
      slow++
    }
  }
  return slow
};
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))
