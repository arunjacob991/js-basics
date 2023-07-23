let Person = function(name, age){
     
    this.name = name;
    this.age = age;
    this.getName = function(){
        console.log(`The man is ${this.name} with age ${this.age}`)
    }

}

let personOne = new Person("dasan", 50);
let personTwo = new Person("vijayan", 60)


personOne.getName();
personTwo.getName();