const obj = {
    a: 1,
    b: 2,
    c: function(){
        console.log(this);
    }
}

obj.c = obj.c.bind(obj)

let x = obj.c;

// x();

x.call(obj)

