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

