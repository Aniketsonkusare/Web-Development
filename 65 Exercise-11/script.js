// factorial find using reduce

const num = [1,2,3,4,5,6]
const factorial = num.reduce((accl,val) => 
    accl * val
)
console.log(factorial);


let arr2 = [1,2,3,4,5,6]
const factorial1 = (a,b) => {
    return a * b;
}
document.write("<h1>Find Factorial of reduce</h1>")
document.write("The Factorial of 6 is ",arr2.reduce(factorial1));
        
// factorial find using for loop    

function factorial2() {
    var i,num,f;
    f = 1;
    num = document.getElementById("num").value;
    for(i = 1; i <= num; i++){
        f = f * i
    } 
    i = i - 1;
    document.getElementById("res").innerHTML = "The Factorial of the number " + i + " is " + f; 
}