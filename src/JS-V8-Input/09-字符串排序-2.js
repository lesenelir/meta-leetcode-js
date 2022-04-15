/**
 *
 * 链接：https://ac.nowcoder.com/acm/contest/5657/I
 来源：牛客网

 输入描述:
 多个测试用例，每个测试用例一行。

 每行通过空格隔开，有n个字符，n＜100
 输出描述:
 对于每组测试用例，输出一行排序过的字符串，每个字符串通过空格隔开
 示例1
 输入
 复制
 a c bb
 f dddd
 nowcoder
 输出
 复制
 a bb c
 dddd f
 nowcoder
 *
 */

let line
while (line = readline()) {
  let arr = line.split(' ')
  print(arr.sort().join(' '))
}

