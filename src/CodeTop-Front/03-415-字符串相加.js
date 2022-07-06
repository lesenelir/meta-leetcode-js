const arr = ['alice', 'lee', 'cat']

let res = arr.map((item) => {
  return item[0].toUpperCase() + item.slice(1)
})

console.log(res)

let temp = arr.map((item) => {
  return `<p>${item}</p>`
})

console.log(temp)
