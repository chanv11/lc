function isValid(str) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const arr = []

  for (let i = 0; i < str.length; i++) {
    if (map[s[i]]) {
      arr.push(map[str[i]])
    } else {
      if (!arr || arr.pop() !== s[i]) {
        return false
      }
    }
  }
  return arr.length === 0
}