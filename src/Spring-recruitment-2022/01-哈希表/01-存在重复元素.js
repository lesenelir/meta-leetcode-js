/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let set = new Set(nums)
  let newArr = [...set]

  if (newArr.length !== nums.length) {
    return true
  } else {
    return false
  }

};
