const obj = {
  name: "shibu",
  age: 25,
  getName(a, b) {
    console.log(this, a, b); 
  },
};

// obj.getName = obj.getName.bind(obj)

const objDup = {
  a: 1,
  b: 2,
  name: "shoshamma"
};


let aa = obj.getName;

aa.apply(obj, [5, 7])