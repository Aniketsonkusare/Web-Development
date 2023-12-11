console.log("Aniket");

let cont = document.getElementsByClassName("container")
cont[0].style.display = "flex"
cont[0].style.justifyContent = "center"

let abcd = document.getElementsByClassName("box")
console.log(abcd);

abcd[2].style.backgroundColor = "red";
abcd[2].style.color = "white";
abcd[2].style.borderTopLeftRadius = "12px";
abcd[2].style.borderTopRightRadius = "12px";
abcd[2].style.borderBottomLeftRadius = "12px";
abcd[2].style.borderBottomRightRadius = "12px";
            // or
document.getElementsByClassName("box")[2].style.backgroundColor = "red"

document.getElementById("blackbox").style.backgroundColor = "black"
document.getElementById("blackbox").style.color = "white"
document.getElementById("blackbox").style.borderTopLeftRadius = "12px";
document.getElementById("blackbox").style.borderTopRightRadius = "12px";
document.getElementById("blackbox").style.borderBottomLeftRadius = "12px";
document.getElementById("blackbox").style.borderBottomRightRadius = "12px";

document.querySelector(".box3").style.backgroundColor = "chartreuse"
document.querySelector(".box3").style.borderTopLeftRadius = "12px";
document.querySelector(".box3").style.borderTopRightRadius = "12px";
document.querySelector(".box3").style.borderBottomLeftRadius = "12px";
document.querySelector(".box3").style.borderBottomRightRadius = "12px";

document.querySelectorAll(".box4").forEach(e =>{
    e.style.backgroundColor = "green"
    e.style.color = "white"
    e.style.borderTopLeftRadius = "12px"
    e.style.borderTopRightRadius = "12px"
    e.style.borderBottomLeftRadius = "12px"
    e.style.borderBottomRightRadius = "12px"
})