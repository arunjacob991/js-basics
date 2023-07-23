function getItem1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5)
        },1000)
    })
}

function getItem2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5)
        },1000)
    })
}

function getItem3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5)
        },1000)
    })
}

// Using .then below

getItem1().then((value1) => {
    return getItem2().then((value2) => {
        return getItem3().then((value3) => {
            console.log(value1 + value2 + value3)
        })
    })
})
.catch((error) => {
    console.log(error)
})


// Using async await below

async function sum(){
    try{
        const value1 = await getItem1();
        const value2 = await getItem2();
        const value3 = await getItem3();
        
        console.log(value1 + value2 + value3)
    }
    catch(error){
        console.log(error)
    }
}

sum();