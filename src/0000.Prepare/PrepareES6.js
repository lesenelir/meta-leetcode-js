// 1. 多使用const 少使用let
for (let i = 0; i < 6; i++) {
  console.log(i)
}
// console.log(i)  // 访问不了let块级作用域

// 2. 箭头函数
const printName = (name) => {
  return "Hello " + name
};
console.log(printName("lesenelir"))

const printName2 = name => "hello " + name
console.log(printName2("lesenelir"))

const ages = [16, 17, 19, 21]
const resultAge = ages.filter(function (age) {
  return age > 18
})
console.log(resultAge)

const resultAge2 = ages.filter(age => age > 18)
console.log(resultAge2)

// Note: 普通函数会重新绑定this值，箭头函数不会重新绑定this值
// 重新绑定this值用普通函数（重新绑定调用的对象上）；    不重新绑定this值用箭头函数

// 3. 模版字符串
const weather = {
  city: "Guangzhou",
  temperature: 21,
  humidity: "94%"
}
const weatherForecast = `下面播报一则天气预报:
城市是${weather.city}，气温是${weather.temperature}，度湿度是${weather.humidity}`
console.log(weatherForecast)

const cal = (x) => {
  return `你输入的参数是${x}， 它的平方是${x * x}`
}
console.log(cal(2))

// 4. Set
const numberSet = new Set()
numberSet.add(1)
numberSet.add(2)
numberSet.add(3)
numberSet.add(1)    // set不会保存重复的元素
console.log(numberSet)  // Set(3) { 1, 2, 3 }
numberSet.delete(2)
// 查看是否有元素
console.log(numberSet.has(1))  // true
console.log(numberSet.size)

numberSet.forEach((number) => {
  console.log(number)
})

// 5. Map
const mapNumber = new Map()
mapNumber.set("name", "lesenelir")
mapNumber.set("age", 18)
mapNumber.set("hobby", ["movies", "LOL"])
console.log(mapNumber)
// map 中获取元素是get  设置元素是set
console.log(mapNumber.get("name") + " " + mapNumber.get("age") + " " + mapNumber.get("hobby"))
console.log(mapNumber.size)
console.log(mapNumber.has("age"))
mapNumber.set("age", 23)
mapNumber.delete("hobby")
console.log(mapNumber)

// 6. 解构赋值
// 6.1 对象的解构赋值
const person = {
  name: "lesenelir",
  age: 18,
  social: {
    Youtube: "lee",
    qq: 110
  }
}
const {name, social: {Youtube}} = person   // 解构赋值，其中包含嵌套赋值
console.log(name)
console.log(Youtube)
const {name: OwnName, social: {Youtube: OwnYoutue}} = person  // 解构赋值，并重新定义变量名
console.log(OwnName)
console.log(OwnYoutue)

// 6.2 数组解构赋值
let str = "lesenelir,18,lee"
const strArr = str.split(",")
console.log(strArr)
const [Bigname, age, smallName] = strArr
console.log(Bigname, age, smallName)

// Note: 对象解构赋值要用{}包围， 数组解构赋值要用[]包围

// 6.3 解构赋值最常见的用途：变量互换
let a = 1
let b = 2
;[a, b] = [b, a]    // 注意点： [] ()开头的句，第一行要有分号
console.log(a, b)

// 7. 剩余和扩展参数
// 7.1 剩余参数
function sortNumbers(...nums) {
  if (nums.length === 0) return []
  else {
    // return nums.sort(function (a, b) {
    //   return a - b
    // })
    return nums.sort((a, b) => a - b)    // JS中要对
  }
}
console.log(sortNumbers(1, 2, 10, 7, 3))

// 7.2 扩展参数
const a7 = [1, 2, 3]
const b7 = [4, "5", "6"]     // js数组可以不是同一种类型
const result7 = [...a7, ...b7]
console.log(result7)

// 8. 字符串方法
const string = "abcd"
const substring = "ab"
console.log(string.includes(substring))
console.log(string.startsWith("a"))
console.log(string.startsWith("bc", 1))

// 9. for of 循环
const foods = ["apple", "pear", "orange"]
for (const [index, value] of foods.entries()) {
  console.log(`第${index}的水果是${value}`)
}
