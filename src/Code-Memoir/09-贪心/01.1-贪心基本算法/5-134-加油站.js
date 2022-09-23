/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const gasLen = gas.length
  let start = 0
  let curSum = 0
  let totalSum = 0

  for(let i = 0; i < gasLen; i++) {
    curSum += gas[i] - cost[i]
    totalSum += gas[i] - cost[i]
    if(curSum < 0) {
      curSum = 0
      start = i + 1
    }
  }

  if(totalSum < 0) return -1

  return start
};


// 暴力方法
var canCompleteCircuit2 = function(gas, cost) {
  let len = gas.length

  for (let i = 0; i < len; i++) {
    let rest = gas[i] - cost[i],
      index = (i + 1) % len

    // 模拟以i为起点，模拟一周
    while (rest >= 0 && index !== i) {
      rest += gas[index] - cost[index]
      index = (index + 1) % len
    }
    // 模拟一周结束，如果一周后有剩余油量，则返回下标
    if (rest >= 0 && index === i) return i
  }

  return -1
  // Note: for 适合 从头到尾的遍历，while 适合 环形遍历
};
