/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // 要生成所有可能的情况，类似于排列组合，如果只需要知道个数，可以用dp
  // 找方法的题目，一般可以用回溯方法来解决；回溯法也称为树形图法
  // 回溯法是自顶向下；动态规划是自底向上
  // 要知道具体的组合类别，则需要用回溯DFS
  // 字符串任意一个位置的左侧： 左括号 >= 右括号
  let res = []

  traversal('', 0, 0)
  return res

  function traversal(cur, leftNum, rightNum) {
    // 递归终止条件
    if (cur.length === 2 * n) {
      res.push(cur)
      return
    }

    // 单层递归逻辑
    if (leftNum < n) {
      traversal(cur + '(', leftNum + 1, rightNum)
    }
    if (rightNum < leftNum) {
      traversal(cur + ')', leftNum, rightNum + 1)
    }
  }

};
