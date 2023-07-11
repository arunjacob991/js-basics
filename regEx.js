let str = "yyo Mann...let some RegEx..HihiHi"

let regEx = /yyo/gi

console.log(str.match(regEx))


let num = "12345"

console.log(num.match(/\d/ig))


// flags - 
// g - global
// i - upper/lower
// s- new line
// y - sticky mode
// u - unicode
// m - multiline

// a-z/A-Z
// \d - digit - \D - non-digit
// \s - space - \S - non-space
// \w - wordly char - \W - non-wordly
// . - dot is any char except newline
// ^ - $ - start and end
// [...] - search for any char amoung given
// {...} - search in limits
// (...) - search part of match as a seperate item
// + - one or more - eg- \d+
// ? - zero or one
// * - zero or more
