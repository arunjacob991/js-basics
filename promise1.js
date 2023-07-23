let promise1 = new Promise((res, rej) => {
  res(["shibu", "thankan"]);
});

let promise2 = new Promise((res, rej) => {
  res(["sheela", "shosha"]);
});

let promise3 = new Promise((res, rej) => {
  rej("nothing");
});

//promise.all return promise when all are success 

let allPromise = Promise.all([promise1, promise2, promise3]);

// promise.allSettled return all promise with a status

let allPromiseSettled = Promise.allSettled([promise1, promise2, promise3]);

// promise.any return first resolved promise

let allPromiseAny = Promise.allSettled([promise1, promise2, promise3]);


//promise.race return first promise whether it is success or failure 

let allPromiseRace = Promise.allSettled([promise1, promise2, promise3]);

allPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
