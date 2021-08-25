module.exports = function check(str, bracketsConfig) {
  let temp = []
  let brackets = {}

  for (let k = 0; k < bracketsConfig.length; k++) {
    brackets[bracketsConfig[k][0]] = bracketsConfig[k][1]
  }

  console.log(brackets)

  for (let i = 0; i < str.length; i++) {
    if (Object.keys(brackets).includes(str[i])) {
      temp.push(str[i])
    } else if (Object.values(brackets).includes(str[i])) {
      if (temp.length > 0) {
        if (brackets[temp[temp.length - 1]] === str[i]) {
          temp.pop()
        } else {
          return false
        }
      }
    }
  }

  if (temp.length === 0) {
    return true
  } else {
    return false
  }
}
