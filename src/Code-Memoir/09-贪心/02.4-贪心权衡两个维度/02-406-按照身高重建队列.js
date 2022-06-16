/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let queue = []
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0] // 身高不同按照身高从大到小排序
    } else{
      return a[1] - b[1] // 身高相同按照序列升序排序
    }
  })
  console.log(people)

  // 第二个数当做索引位置
  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i])
  }
  return queue
};
