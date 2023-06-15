const obj = {
  name: "shibu",
  age: 25,
};

const objDup = {
  name: "ramu",
  age: 30,
};

function func() {
  return this.name + "-" + this.age;
}

obj.f = func;
objDup.f = func;

// console.log(objDup, ">>>>>");

const user = {
  name: "sasi",
  getName: () => this.name,
};

console.log(user.getName());
