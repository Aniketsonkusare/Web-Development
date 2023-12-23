console.log("Your Promise accepted after 2 second.");

let promise1 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if (a < 0.5) {
        reject("Your Promise are reject");
    }
    else{
        setTimeout(() => {
            resolve("Your Promise 1 are accept")
        }, 2000);
    }
})

let promise2 = new Promise((resolve,reject)=>{
    let a = Math.random()
    if (a < 0.5) {
        reject("Your Promise are reject");
    }
    else{
        setTimeout(()    => {
            resolve("Your Promise 2 are accept")
        }, 2000);
    }
})


let p3 = Promise.all([promise1,promise2])
p3.then((e)=>{
    console.log(e);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("this is a finally.method()");
})
