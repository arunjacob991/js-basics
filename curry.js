const func = (a) => (b) => (c) => {
  return a + b + c;
};

console.log(func(3)(4)(5));

// ************************************************

const request = function (greet) {
  return function (name) {
    return function (msg) {
      return greet + name + msg;
    };
  };
};

console.log(request("Hello..")("Unnimon...")("How are you"));
