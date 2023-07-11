const obj = {
  name: "kimi",
  greet() {
    return this.name;
  },
};

// console.log(Object.getPrototypeOf(obj))

// proxy - below

const msg = {
  msg1: "Yyo",
  msg2: "Mannn",
};

const user = {
  get(msg, prop, receiver) {
    return "hooyyaa";
  },
};

const proxy = new Proxy(msg, user);

console.log(proxy.msg1);
console.log(proxy.msg2);
