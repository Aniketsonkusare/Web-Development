console.log("This is a variable file");

// var is a global scope
var a = 23;
var b = "aniket";
var _c = "This is a valid Variable";
// var 33_ = "This is a not a Valid Variable"

console.log(a,b,_c);
console.log(a + b + 8);

console.log(typeof a,typeof b,typeof _c);

// let is a block scope
{
    let a1 = "Aniket"
    console.log(a1);
}

const a2 = 6;
// a2 = a2 + 1;  not allowed because a2 is constant
console.log(a2);


// Primitive data type

let x = "aniket";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);


// object

let o = {
    "name" : "aniket",
    "job role" : "front end developer"
}
console.log(o);
o.salary = "20000"
