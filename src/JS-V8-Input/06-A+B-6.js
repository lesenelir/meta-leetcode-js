/**
 * 链接：https://ac.nowcoder.com/acm/contest/5657/F
 来源：牛客网

 计算一系列数的和
 打开以下链接可以查看正确的代码
 https://ac.nowcoder.com/acm/contest/5657#question

 数据范围： 1 \le n \le 1000 \1≤n≤1000  ， 所有数都满足 1 \le val \le 1000 \1≤val≤1000
 输入描述:
 输入数据有多组, 每行表示一组输入数据。
 每行的第一个整数为整数的个数n(1 <= n <= 100)。
 接下来n个正整数, 即需要求和的每个正整数。
 输出描述:
 每组数据输出求和的结果
 示例1
 输入
 复制
 4 1 2 3 4
 5 1 2 3 4 5
 输出
 复制
 10
 15
 *
 */
let line
while(line = readline()){
  let arr = line.split(' ').map( x => parseInt(x))
  let res = 0
  for(let i = 1; i< arr.length; i++){
    res += arr[i]
  }
  print(res)
}



