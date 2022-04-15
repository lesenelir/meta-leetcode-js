/**
 *
 * 链接：https://ac.nowcoder.com/acm/contest/5657/H
 来源：牛客网

 输入描述:
 输入有两行，第一行n

 第二行是n个字符串，字符串之间用空格隔开
 输出描述:
 输出一行排序后的字符串，空格隔开，无结尾空格
 示例1
 输入
 复制
 5
 c d a bb e
 输出
 复制
 a bb c d e
 *
 */
let K = readline()
let arr = readline().split(' ').sort()
print(arr.sort().join(' '))

