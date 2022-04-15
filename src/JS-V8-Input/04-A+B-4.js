/**
 *链接：https://ac.nowcoder.com/acm/contest/5657/D
 来源：牛客网

 题目描述
 计算一系列数的和
 打开以下链接可以查看正确的代码
 https://ac.nowcoder.com/acm/contest/5657#question

 数据范围：数据组数满足 1 \le t \le 100 \1≤t≤100  ，每组数据中整数个数满足 1 \le n \le 100 \1≤n≤100  ，每组数据中的值满足 1 \le val \le 100 \1≤val≤100
 输入描述:
 输入数据包括多组。
 每组数据一行,每行的第一个整数为整数的个数n(1 <= n <= 100), n为0的时候结束输入。
 接下来n个正整数,即需要求和的每个正整数。
 输出描述:
 每组数据输出求和的结果
 示例1
 输入
 复制
 4 1 2 3 4
 5 1 2 3 4 5
 0
 输出
 复制
 10
 15
 *
 */

while (true) {
  let line = readline()
  let arrStr = line.split(' ')
  let arr = arrStr.map(item => parseInt(item))
  if (arr[0] === 0) break
  let res = 0
  for (let i = 1; i < arr.length; i++) {
    res += arr[i]
  }
  print(res)
}



