/**
 *
 *链接：https://ac.nowcoder.com/acm/contest/5657/E
 来源：牛客网

 计算一系列数的和
 打开以下链接可以查看正确的代码
 https://ac.nowcoder.com/acm/contest/5657#question

 数据范围：数据组数满足 1 \le t \le 100 \1≤t≤100  ，每组数据中的整数个数满足 1 \le n \le 100 \1≤n≤100  ，每个数据大小满足 1 \le val \le 100 \1≤val≤100
 输入描述:
 输入的第一行包括一个正整数t(1 <= t <= 100), 表示数据组数。
 接下来t行, 每行一组数据。
 每行的第一个整数为整数的个数n(1 <= n <= 100)。
 接下来n个正整数, 即需要求和的每个正整数。
 输出描述:
 每组数据输出求和的结果
 示例1
 输入
 复制
 2
 4 1 2 3 4
 5 1 2 3 4 5
 输出
 复制
 10
 15
 *
 *
 */

let K = parseInt(readline())
while (K--) {
  let line = readline()
  let arrStr = line.split(' ')
  let arr = arrStr.map(item => parseInt(item))
  let res = 0
  for (let i = 1; i < arr.length; i++) {
    res += arr[i]
  }
  print(res)
}


