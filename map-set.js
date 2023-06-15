let map = new Map();

map.set(1, "number");
map.set("1", "string");
map.set(true, "bool");

// console.log(map.get(true));

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john)
set.add(pete)

console.log(set.size);

for(let i of set){
    console.log(i.name);
}