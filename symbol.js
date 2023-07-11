let id1 = Symbol("id");
let id2 = Symbol("id");

const obj = {
  name: "vasu",
  age: 25,
  [id1]: "something",
  [id2]: "new thing",
};

// console.log(obj);

for(let i in obj){
    console.log(i);
}
