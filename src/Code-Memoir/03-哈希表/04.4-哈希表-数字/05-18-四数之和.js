/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // 类似于三数之和，比三数之和多一个循环
  let res = [],
      len = nums.length

  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue

    for (let j = i + 1; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j-1]) continue

      let [left, right] = [j + 1, len - 1]
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum > target) {
          right--
        } else if (sum < target){
          left++
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        }
      }
    }
  }

  return res
};
