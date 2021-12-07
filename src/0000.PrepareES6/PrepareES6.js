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

