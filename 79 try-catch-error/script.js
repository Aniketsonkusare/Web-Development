let a = parseInt(prompt("enter the first number"))
let b = parseInt(prompt("enter the second number"))

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed")
}

let sum = a + b;

// console.log("sum is ",sum);

function main(params) {
    let x = 1;  
    
    try {
        console.log("sum",sum * x);
        return true
    } catch (error) {
        console.log("This is a error");
        return false
    }
    finally{
        console.log("(finally)this code is definitely executed");
        console.log("finally means final code of execution");
    }
    
}

let c = main()