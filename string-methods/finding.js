let str = "yyooMannn..you are awesome...."

let subStr = "Mannn"

let re = /[a-z]/;

console.log(str)

console.log(str.search(re))

console.log(str.indexOf(subStr))

console.log(str.includes(subStr))

console.log(str.startsWith('yyo'))
console.log(str.endsWith('yyo'))