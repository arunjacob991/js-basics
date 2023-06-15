const arr = ["arun", "shibu", "aswin", "senthur"]

const [first, second, ...bakki] = arr;

console.log(bakki);

const obj = {
    a: {
        z: 10
    },
    b: 2,
}

const {a : {z: letter}, b, c = "lastLetter"} = obj;

console.log(c);