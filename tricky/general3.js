function user(one, ...rest) {
  console.log(one);
  console.log(rest);
}

const person = "Machan";
const age = 21;

user`${person} is ${age} who is pwoli`;

// this is tagged template literal
