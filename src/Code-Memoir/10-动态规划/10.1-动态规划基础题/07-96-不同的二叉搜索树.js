/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }
  return dp[n]
};

// dp[i] 1到节点i组成的二叉搜索树的个数为dp[i]
// dp[i] += dp[以j为头结点左子树节点数量] * dp[以j为头结点右子树节点数量]
// j相当于头节点的元素，从1遍历到i为止
// dp[i] += dp[j - 1] * dp[i - j]; ，j-1 为j为头结点左子树节点数量，i-j 为以j为头结点右子树节点数量

