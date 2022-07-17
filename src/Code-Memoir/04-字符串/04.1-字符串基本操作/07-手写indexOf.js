let strA = 'cde',
    srrB = 'abcdem'

console.log(srrB.indexOf(strA))


function f(strA, strB) {
  for (let i = 0; i < strB.length; i++) {
    if (strB[i] === strA[0]) {
      // 截取当前 i ～ strA.length 字符串与strA进行比较
      let temp = strB.slice(i, i + strA.length)
      if (temp === strA) {
        return i
      }
    }
  }
  return -1
}

f(strA, srrB)
