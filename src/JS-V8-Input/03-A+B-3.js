/**
 *
 * 链接：https://ac.nowcoder.com/acm/contest/5657/C
 来源：牛客网

 题目描述
 计算a+b
 打开以下链接可以查看正确的代码
 https://ac.nowcoder.com/acm/contest/5657#question

 数据范围：数据组数满足 1 \le t \le 100 \1≤t≤100  ， 数据大小满足 1 \le n \le 100 \1≤n≤100
 输入描述:
 输入包括两个正整数a,b(1 <= a, b <= 10^9),输入数据有多组, 如果输入为0 0则结束输入
 输出描述:
 输出a+b的结果
 示例1
 输入
 复制
 1 5
 10 20
 0 0
 输出
 复制
 6
 30
 *
 */


let line
while (true) {
  let line = readline()
  let arrStr = line.split(' ')
  let arr = arrStr.map(item => parseInt(item))
  if (arr[0] === 0 && arr[1] === 0) break
  print(arr[0] + arr[1])
}



