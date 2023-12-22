let button = document.getElementById("btn")

button.addEventListener("click",() => {
    document.body.style.backgroundColor = "red"
    document.body.style.color = "white"
    document.querySelector(".box").innerHTML = "<h1>h1 tag</h1>"
})

let button2 = document.getElementById("btn2")

button2.addEventListener("click",() => {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.querySelector(".box").innerHTML = "box"
})

let button3 = document.getElementById("btn3")

button3.addEventListener("dblclick",()=>{
    document.querySelector(".box2").style.backgroundColor = "black"
    document.querySelector(".box2").style.color = "white"
    document.querySelector(".box2").style.width = "100px"
    document.querySelector(".box2").style.height = "100px"
    document.querySelector(".box2").style.display = "flex"
    document.querySelector(".box2").style.justifyContent = "center"
    document.querySelector(".box2").style.alignItems = "center"
})

let button4 = document.getElementById("btn4")

button4.addEventListener("dblclick",()=>{
    document.querySelector(".box2").style.backgroundColor="white"
    document.querySelector(".box2").style.color="black"
    document.querySelector(".box2").style.width = "100px"
    document.querySelector(".box2").style.height = ""
    document.querySelector(".box2").style.display = ""
    document.querySelector(".box2").style.justifyContent = ""
    document.querySelector(".box2").style.alignItems = ""
})

document.addEventListener("contextmenu",()=>{
    alert("if you are clicked right click show alert box")
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode);
})