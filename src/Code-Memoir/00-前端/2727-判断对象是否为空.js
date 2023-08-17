/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  let flag = false

  if (Array.isArray(obj)) {
    flag = obj.length === 0
  } else {
    let item = JSON.stringify(obj)
    flag = item.length === 2
  }

  return flag
};
