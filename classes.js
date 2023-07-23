class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`yyo man ${this.name} with age ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  hisMark() {
    console.log(
      `the student with name ${this.name} and age ${this.age} has mark ${this.grade}`
    );
  }
}

let user1 = new Person("shibu", 45);
let user2 = new Person("sasi", 50);

let student1 = new Student("ramu", 50, 30);
let student2 = new Student("shosha", 30, 10);

console.log(user2.name);

user1.sayHello();

student1.hisMark();
student2.hisMark();
