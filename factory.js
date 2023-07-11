function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("I am " + this.name + " and I am " + age + " years old");
    },
  };
}

let person1 = createPerson("shibu", 25);
let person2 = createPerson("sansa", 30);

person1.greet();
person2.greet();




