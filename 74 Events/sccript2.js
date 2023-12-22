document.querySelector(".child").addEventListener("click",(e) => {
    e.stopPropagation()
    alert("child was clicked")
})

document.querySelector(".childcontainer").addEventListener("click",(e) => {
    alert("childcontainer was clicked")
})

document.querySelector(".container").addEventListener("click",() => {
    e.stopPropagation()
    alert("container was clicked")
})

function getRandomcolor() {
    let val1 = Math.ceil(0 + Math.random() * 255)
    let val2 = Math.ceil(0 + Math.random() * 255)
    let val3 = Math.ceil(0 + Math.random() * 255)
    return `rgb(${val1}, ${val2}, ${val3})`
}

setInterval(() => {
    document.querySelector(".childcontainer").style.background =  getRandomcolor()
}, 1000);


const a = setTimeout(() => {
    document.querySelector(".childcontainer").style.background =  getRandomcolor()
}, 2000);

console.log(a);
