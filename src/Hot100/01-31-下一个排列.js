/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // 字典序：基于单词序列的排序
  // 找到某个数字的下一个排序
  let len = nums.length

  for (let i = len - 1; i >= 0; i--) {
    for (let j = len - 1; j > i; j--) {
      if (nums[i] < nums[j]) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
        // 交换位置后，交换点后是降序排序，则在交换点后进行升序排序
        // 由于交换点后的序列是降序排序，所以交换首位元素可以得到升序序列
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
          [nums[left], nums[right]] = [nums[right], nums[left]]
          left++
          right--
        }
        return nums
      }
    }
  }

  // 此时nums的字典序是最大的，则返回第一个字典序，即从小到达排序
  return nums.sort((a, b) => a - b)

};
