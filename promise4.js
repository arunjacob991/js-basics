const promise1 = Promise.resolve("Success 1");
const promise2 = Promise.reject("Error 2");
const promise3 = Promise.resolve("Success 3");
const promise4 = Promise.reject("Error 4");

Promise.allSettled([promise1, promise2, promise3, promise4])
  .then((res) => {
    const filteredPromise = res.filter((res) => res.status == "fulfilled");

    const result = filteredPromise.map((result) => result.value);

    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
