(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 5);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();


// **********************

function foo() {
  'use strict';
  err = 1;
  try {
    throw 'hello';
  } catch (err) {
    console.log(err); // hello
    var err = 2;
  }
  console.log(err); // 1
}
foo();