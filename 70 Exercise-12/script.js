let a = document.getElementsByClassName("box")
console.log(a,typeof a);

let b = Array.from(a)
b.forEach((element)=>{
    let random = Math.random()
    if (random > 0.9) {
        element.style.backgroundColor = "red"
        element.style.color = "white"
    }
    if (random > 0.8 && random < 0.9) {
        element.style.backgroundColor = "yellow"
        element.style.color = "red"
    }
    if (random > 0.6 && random < 0.8) {
        element.style.backgroundColor = "pink"
        element.style.color = "blue"
    }
    if (random > 0.4 && random < 0.6) {
        element.style.backgroundColor = "gray"
        element.style.color = "red"
    }
    if (random > 0.2 && random < 0.4) {
        element.style.backgroundColor = "black"
        element.style.color = "white"
    }
    if (random > 0 && random < 0.2) {
        element.style.backgroundColor = "khaki"
        element.style.color = "black"
    }
})