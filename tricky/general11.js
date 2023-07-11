const getList = ([x, ...y]) => [x, y];
const getUser = (user) => {
  return {
    name: user.name,
    age: user.age,
  };
};

const user = { name: "Lydia", age: 21 };
console.log(getUser(user));

const list = [1, 2, 3, 4];
console.log(getList(list));
