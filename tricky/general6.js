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
