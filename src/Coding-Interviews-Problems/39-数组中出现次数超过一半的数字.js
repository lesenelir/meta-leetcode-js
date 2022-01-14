/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0]

  const [len, count] = [nums.length, Math.floor(nums.length / 2)]
  // 双指针， slow指针遍历nums数组的元素，fast指针锁定slow指针指向的元素，进行遍历
  let [slow, fast] = [0, 1]
  nums.sort((a, b) => a - b)
  // console.log(nums)

  let res = 1
  while (slow < len) {
    if (nums[slow] === nums[fast]) {
      fast++
      res++
      if (res > count) break
    } else { // 不相等
      slow = fast
      fast++
      if (nums[slow] === nums[fast]) res++
    }
  }
  console.log(slow)
  console.log(res)
  return nums[slow]

};


console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log("============")
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))
