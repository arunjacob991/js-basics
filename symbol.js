let id1 = Symbol("id");
let id2 = Symbol("id")


const obj = {
 name: "muthumani",
 [id1] : "puthu symbol",
 [id2] : "veroru symbol"
}


const keys = Reflect.ownKeys(obj)

console.log(keys)

for(let i of keys){
    console.log(i)
}
