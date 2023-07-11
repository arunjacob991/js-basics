let promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello");
  }, 2000);
});

async function myFunc(){
    let result = await promise;
    console.log(result);
    console.log("YYo machan...")
}

myFunc();

// function newFunc() {
//   promise.then((res) => {
//     console.log(res);
//     console.log("YYo brooi...");
//   });
// }

// newFunc();
