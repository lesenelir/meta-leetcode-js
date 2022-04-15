/**
 *
 *链接：https://ac.nowcoder.com/acm/contest/5657/G
 来源：牛客网

 输入描述:
 输入数据有多组, 每行表示一组输入数据。

 每行不定有n个整数，空格隔开。(1 <= n <= 100)。
 输出描述:
 每组数据输出求和的结果
 示例1
 输入
 复制
 1 2 3
 4 5
 0 0 0 0 0
 输出
 复制
 6
 9
 0
 *
 *
 */
let line
while (line = readline()) {
  let arr = line.split(' ').map(item => parseInt(item))
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    res += arr[i]
  }
  print(res)
}


