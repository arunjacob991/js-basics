let obj = {
  name: "suku",
  age: 25,
  isPwoli: true,
};

let user = {
  name: "kuttu",
  age: 50,
  sadhanam: "kollam",
};

let num = {
  a: 1,
  b: 2,
};

let hoyy = num;

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// console.log(Object.assign(obj, user, num))

let newObj = Object.create(num);
// console.log(newObj.a)
for (let i in newObj) {
  console.log(newObj[i]);
}

console.log(Object.is(num, hoyy));

num.a = 3;

console.log(num);

// Object.freeze(num);

// num.a = 5

// console.log(num)

num.c = 10;

console.log(num)

Object.seal(num);

num.d = 20;

console.log(num)