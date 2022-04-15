/**
 * 链接：https://ac.nowcoder.com/acm/contest/5657/A
 来源：牛客网

 题目描述
 计算a+b
 打开以下链接可以查看正确的代码
 https://ac.nowcoder.com/acm/contest/5657#question
 数据范围： 数据组数 1 \le t \le 100 \1≤t≤100  , 数据大小满足 1 \le n \le 1000 \1≤n≤1000
 输入描述:
 输入包括两个正整数a,b(1 <= a, b <= 1000),输入数据包括多组。
 输出描述:
 输出a+b的结果
 示例1
 输入
 复制
 1 5
 10 20
 输出
 复制
 6
 30
 *
 *
 */

let line
while (line = readline()) { // 数据多次读入利用循环, line得到的是字符串
  let arrStr = line.split('')
  let arr = arrStr.map(item => parseInt(item))
  print(arr[0] + arr[1])
}


