function greet(name, myFunc){
    console.log("Hellooii")

    myFunc(name)
}

function sayName(name){
    console.log("YYo man " + name)
}



setTimeout(greet, 2000, "Shukkoor", sayName)