const func = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(func(1)(2)(10));