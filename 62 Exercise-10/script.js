function adjective() {    
    let a = "Crazy"
    let b = "Amazing"
    let c = "Fire"
    let d = Math.floor(Math.random()*3)
    
    if(d == 0){
        return a;
    }
    else if(d == 1){
        return b;
    }
    else if (d == 2) {
        return c;
    }
}
    
function shopname() {
    let a = "Engine"
    let b = "Foods"
    let c = "Garments"
    let d = Math.floor(Math.random()*3)

    if (d == 0) {
        return a;
    }
    else if (d == 1) {
        return b;
    }
    else if (d == 2) {
        return c;
    }
}

function anotherword() {
    let a = "Bros"
    let b = "Limited"
    let c = "Hub"
    let d = Math.floor(Math.random()*3)

    if (d == 0) {
        return a;
    }
    else if (d == 1) {
        return b;
    }
    else if (d == 2) {
        return c;
    }
}
document.write("<h4>if you are reload the page change the Business Name</h4>")
document.write("<h4>Business Name:</h4>", adjective(), shopname(), anotherword() );