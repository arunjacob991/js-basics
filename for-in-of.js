const str = "newname"
const arr = [1,2,3,4,5]
const obj = {
    a: 1,
    b: 2,
    c: 3
}

// for(let i in obj){
//     console.log(i);
// }
// for(let i of str){
//     console.log(i);
// }

Object.defineProperty(obj, z = {
    value: 10,
    enumerable: false
})

for(let i in obj){
    console.log(i);
}