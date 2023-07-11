let map = new Map();

map.set("first", "first");
map.set(1, "one");
map.set("1", "strOne");
map.set(true, "true");
map.set(NaN, "Not a number");
map.set(undefined, "undefined");
map.set(null, "null");

// console.log(map.get("first"));
// console.log(map.has("1"));
// console.log(map.delete(true))
// console.log(map.get(true))
// console.log(map.has(true))

// console.log(map.entries())

// console.log(map.size)
// console.log(map.clear())
// console.log(map.size)

let set = new Set();

set.add("john");
set.add("john");
set.add("mary");
set.add("mathew");

// console.log(set)

for(let i of set){
    console.log(i)
}

set.add(["shibu", "vasu", "1", true]);

// for(let i of set){
//     console.log(i)
// }

// console.log(set.has("john"));
// console.log(set.delete("john"));
// console.log(set.has("john"));
// console.log(set.size);
// console.log(set.clear());
// console.log(set.size);


