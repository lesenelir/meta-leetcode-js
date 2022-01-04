/**
 * @param {number[]} nums
 * @return {number[]}
 */


// 方法一、快慢指针
var exchange = function (nums) {
  let slow = 0

  // fast 指向奇数时，与slow数交换
  for (let fast = slow; fast < nums.length; fast++) {
    if (nums[fast] % 2 !== 0) {
      ;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
  }
  return nums
};

// 方法二、首位指针 (夹逼思想)----------类似于快速排序
var exchange2 = function (nums) {
  let left = 0
  let right = nums.length - 1

  // 首位指针，首指针找偶数；尾指针找奇数
  while (left < right) {
    while (left < right && nums[left] & 1) left++;
    // 偶数，继续向左找，直到找到奇数
    while (left < right && !(nums[right] & 1)) right--;
    ;[nums[left], nums[right]] = [nums[right], nums[left]]
  }
  return nums
};
