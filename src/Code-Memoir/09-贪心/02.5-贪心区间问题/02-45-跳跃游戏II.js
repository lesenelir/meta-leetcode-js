/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // 思路：以最小的步数
  // 维护[0, cover]区间
  let res = 0,
      nextIndex = 0, // 下一步覆盖最远距离下标
      curIndex = 0  // 当前覆盖最远距离下标

  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nextIndex, nums[i] + i) // 更新下一步覆盖的最远距离

    if (i === curIndex) {
      res++
      curIndex = nextIndex
    }

  }

  return res
};

console.log(jump([2,3,1,1, 4]))
