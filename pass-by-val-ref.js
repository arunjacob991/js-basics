function one() {
  let a = 100;
  two(a);
  console.log(a, "one");
}

function two(a) {
  a = a + 1;
  console.log(a, "101-two");
}

one();

// **************************

function first() {
  let obj = {
    a: 100,
  };
  second(obj);
  console.log(obj.a, "first");
}

function second(obj) {
  obj.a = obj.a + 1;
  console.log(obj.a, "second");
}

first();

// **********************

// function arrOne() {
//   let a = [100];
//   arrTwo(a);
//   console.log(a[0], "arrOne");
// }

// function arrTwo(a) {
//   a[0] = a[0] + 1;
//   console.log(a[0], "arrTwo");
// }

// arrOne();
