let a = Number(prompt("enter the first number"))
let b = Number(prompt("enter the second number"))
let random = Math.random()

let addition = a + b;
let substraction = a - b;
let multiplication = a * b;
let divi = a/b;
let expo = a ** b;

if (random < 0.1) {
    console.log("addition" ,substraction);
    console.log("substraction" ,divi);
    console.log("multiple" , addition);
    console.log("divi" , expo);
}
else{
    console.log("addition",addition);
    console.log("substraction",substraction);
    console.log("multiplication",multiplication);
    console.log("divi",divi);
}
