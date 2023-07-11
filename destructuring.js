const arr = ["arun", "shibu", "aswin", "senthur"]

const [first, ,second, ...bakki] = arr;



// console.log(second);

// const obj = {
//     a: {
//         z: 10
//     },
//     b: 2,
// }

// const {a : {z: letter}, b, c = "lastLetter"} = obj;

// console.log(c);

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: undefined,
    e : {
        ee : undefined
    },
    

}


const {a : aaa, b, e : {ee : letterE = "its letter E"}, d = {}, f } = obj || { f : "letterF"};

console.log(letterF);