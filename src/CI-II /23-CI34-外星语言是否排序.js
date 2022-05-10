/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let temp = [...words]
  temp.sort((a, b) => {
    if (a === b) return 0
    let len = a.length < b.length ? a.length : b.length
    for (let i = 0; i < len; i++) {
      if (a[i] === b[i]) {
        continue
      }
      return order.indexOf(a[i]) - order.indexOf(b[i])
    }
    return a.length - b.length
  })

  return temp.join(',') === words.join(',')
};
