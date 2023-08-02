/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // dp含义： dp[i] 到达第i个台阶的最小花费
  let dp = [cost[0], cost[1]]

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
  }
  // 最后一步不需要花费，所以取倒数第一步和倒数第二步的最小值
  return Math.min(dp[cost.length - 1], dp[cost.length - 2])
};

var minCostClimbingStairs2 = function(cost) {
  // dp[i] 代表爬到第 i 层，需要花费 dp[i] 费用
  let len = cost.length,
    dp = new Array(len)

  dp[0] = cost[0]
  dp[1] = cost[1]

  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
  }

  return Math.min(dp[len - 1], dp[len - 2])
};
