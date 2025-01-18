// console.log("hello there");

// setInterval(() => {
//     console.log("amit makasare");

// }, );

// console.log("i am ")


// squre using arrow fuction
let sqr=(n)=>{
    return n*n;  
}
console.log(sqr(33))


// funciton who print 5times hellow world using setInterval


   let id= setInterval(()=>{
        console.log("hellow world");
    },2000)

    setTimeout(() => {
        clearInterval(id)
    }, 10000);
