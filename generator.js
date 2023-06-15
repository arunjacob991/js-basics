function* func(){

    console.log("First value");
    yield 100;

    console.log("Second value");
    yield 200;


}

let generator = func();

console.log(generator.next());
console.log(generator.next());