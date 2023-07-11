let str = "yyooMannn..you are awesome...."

let subStr = "Mannn"

const regex = /[a-z]/g;

let newStr = "  hoyyaa  "

console.log(newStr)
console.log(newStr.trim())
console.log(newStr.trimStart())
console.log(newStr.trimEnd())

let num = "2"

console.log(num.padStart(5, '0'))
console.log(num.padEnd(5, '0'))

console.log(subStr.match(regex))

console.log(str.split(' '))

console.log(str.slice(1, 5))
console.log(str.substring(5, 10))

console.log(subStr.concat(' ', num))

console.log(str.replace('you', 'we'))
console.log(subStr.replace('n', 'z'))
console.log(subStr.replaceAll('n', 'z'))

console.log(str.toUpperCase())
console.log(subStr.toLowerCase())

const stringObj = new String('fooooFFooooo')

console.log(stringObj)
console.log(stringObj.toString())