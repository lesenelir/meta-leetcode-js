/**
 *
 * 链接：https://ac.nowcoder.com/acm/contest/5657/J
 来源：牛客网

 输入描述:
 多个测试用例，每个测试用例一行。
 每行通过,隔开，有n个字符，n＜100
 输出描述:
 对于每组用例输出一行排序后的字符串，用','隔开，无结尾空格
 示例1
 输入
 复制
 a,c,bb
 f,dddd
 nowcoder
 输出
 复制
 a,bb,c
 dddd,f
 nowcoder
 *
 */

let line
while (line = readline()) {

  let arr = line.split(',')
  print(arr.sort().join(','))

}

