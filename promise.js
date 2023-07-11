const promise1 = new Promise((res, rej) => {
    res("resolved1")
})

const promise2 = new Promise((res, rej) => {
    res("resolved2")
})

promise1.then((res) => {
    console.log(res)
})

promise2.then(res => {
    console.log(res)
})