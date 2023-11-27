function name(occupation) {
    console.log("Harsh occupation is a " + occupation);
    console.log("Aniket occupation is a " + occupation);
    console.log("Deep occupation is a " + occupation);
}

name("front end developer")

function sum(a,b,c=3) {
    // console.log(a + b);    
    return a + b + c
}

result = sum(5,3)
result1 = sum(2,2)
result2 = sum(3,3)


console.log("the sum of this number is ",result);
console.log("the sum of this number is ",result1);
console.log("the sum of this number is ",result2);

const func1 = (x) => {
    console.log("i am an arrow function",x);
}

func1(30)
func1(32)
func1(33)