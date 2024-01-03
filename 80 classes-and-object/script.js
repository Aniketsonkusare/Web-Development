// let obj = {
//     a: 1,
//     b: "aniket",
// }

// console.log(obj);

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal 


class Animal  {

    constructor(name){
        this.name = name
        console.log("object is created...");
    }

    run(){
        console.log("animal is running");
    }

    jump(){
        console.log("animal is jumping");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("object is created and he is a lion...");
    }
    run(){
        console.log("lion...");
    }
    jump(){
        super.jump()
        console.log("this...");
    }
}

let a = new Animal("don")
console.log(a);

let l = new Lion("Shera")
console.log(l);