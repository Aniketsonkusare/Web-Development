// let div = document.createElement("div")
// div.innerHTML = "I have been inserted <b>append method</b>"
// div.setAttribute("class","created")
// document.querySelector(".container").append(div)

// let div2 = document.createElement("div")
// div2.innerHTML = "I have been inserted <b>prepend method</b>"
// div2.setAttribute("class","created")
// document.querySelector(".container").prepend(div2)

// let div3 = document.createElement("div")
// div3.innerHTML = "I have been inserted <b>before method</b>"
// div3.setAttribute("class","created")
// document.querySelector(".container").before(div3)

// let div4 = document.createElement("div")
// div4.innerHTML = "I have been inserted <b>after method</b>"
// div4.setAttribute("class","created")
// document.querySelector(".container").after(div4)

// let div5 = document.createElement("div")
// div5.innerHTML = "I have been inserted <b>replaceWith method</b>"
// div5.setAttribute("class","created")
// document.querySelector(".container").replaceWith(div5)

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend","<b>add after container(afterend)</b>")

let cont1 = document.querySelector(".container")
cont1.insertAdjacentHTML("afterbegin","<b>add start container(afterbegin)</b>")

let cont2 = document.querySelector(".container")
cont2.insertAdjacentHTML("beforeend","<b>add before end container(beforeend)</b>")

let cont3 = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin","<b>add before start container(beforebegin)</b>")


document.querySelector(".container").classList
document.querySelector(".container").className

document.querySelector(".container").classList.add("aniket")

document.querySelector(".container").classList.remove("aniket")

document.querySelector(".container").classList.toggle("aniket")

document.querySelector(".container").classList.toggle("aniket")

document.querySelector(".container").classList.toggle("aniket")
