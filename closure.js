function value(){
    let num = 10;
    function func(){
        return num;
    }
    console.log(func());
}

value();

// ***********

let result = 50;

let output = () => {
    console.log(result);
}

output();

// **********

let string = function(){
    function func(){
        console.log(str);
    }
    let str = "Hello my boiii...."
    func();
}


string();


// *********

