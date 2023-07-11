let obj = {
  name: "shibu",
};

// let person = [obj];

let weakmap = new WeakMap();

weakmap.set(obj, "objectValue");

obj = null;

console.log(weakmap.get(obj))


let user = {
    name: "vasu"
}

let weakSet = new WeakSet();

weakSet.add(user);

user = null;

console.log(weakSet.has(user))

