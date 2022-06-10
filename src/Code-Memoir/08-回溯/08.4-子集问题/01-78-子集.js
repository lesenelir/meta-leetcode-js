/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // 子集问题是回溯的经典题型
  // 组合问题是收集叶子节点；子集问题是所有节点
  let path = [],
      res = []

  backTracking(0)
  return res

  function backTracking(startIndex) {
    res.push([...path])  // 子集问题要收集所有节点，组合问题只收集叶子节点，可以处理叶子节点内
    // 递归终止条件
    if (startIndex > nums.length) {
      return
    }

    // 单层递归逻辑
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backTracking(i + 1)
      path.pop()
    }
  }

};
