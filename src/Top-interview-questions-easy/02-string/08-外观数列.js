/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  const s = countAndSay(n - 1);

  let string = "";
  let count = 1;
  let item = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === item) {
      count++;
    } else {
      string += `${count}${item}`;
      count = 1;
      item = s[i];
    }
  }
  return string + `${count}${item}`;
};
