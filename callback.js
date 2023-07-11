console.log("first");

function getData(callback) {
  setTimeout(() => {
    callback("Data function");
  }, 1000);
}

getData((value) => {
  console.log(value);
});

console.log("last");

// callback hell..

function getItem1(cb) {
  setTimeout(() => {
    cb(5);
  }, 1000);
}
function getItem2(cb) {
  setTimeout(() => {
    cb(5);
  }, 1000);
}
function getItem3(cb) {
  setTimeout(() => {
    cb(5);
  }, 1000);
}

getItem1((value) => {
  getItem2((value2) => {
    getItem3((value3) => {
      console.log(value + value2 + value3)
    })
  })
})