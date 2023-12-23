// async function getdata() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }

async function getdata() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')    
    // let data = await x.text()
    // console.log(data);

    let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'Abc',    
            body: 'body',
            useId: 1,
            profession: "full stack developer"
        }),
        headers: {
            'Content-type' : 'application/json'
        },
    })

    let data = await x.text()
    return data
}

async function main(params) {    
    console.log("data 1");
    console.log("data 2");
    console.log("load data");

    let data = await getdata()
    
    console.log(data);
    
    console.log("Process data...");
    console.log("Your data is accepted");
}

main()

// getdata().then(() => {
//     console.log(data);
    
//     console.log("Process data...");
//     console.log("Your data is accepted");
    
// }).catch((err) => {
    // console.log(err);
// });


let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res)=>res.json())
.then((res)=>console.log(res))