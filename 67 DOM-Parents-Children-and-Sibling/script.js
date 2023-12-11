console.log("hello world");

console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)
console.log(document.body.TEXT_NODE);
console.log(document.body.children);
console.log(document.body.childNodes);

let container = document.body.childNodes[1];

console.log(container.lastElementChild)
container.lastElementChild.style.color = "white"
container.lastElementChild.style.backgroundColor = "black"
container.lastElementChild.style.borderEndStartRadius = "15px"
container.lastElementChild.style.borderStartEndRadius = "15px"
container.lastElementChild.style.borderEndEndRadius = "15px"
container.lastElementChild.style.borderStartsRadius = "15px"

container.firstElementChild.style.color = "white"
container.firstElementChild.style.backgroundColor = "black"
container.firstElementChild.style.borderEndStartRadius = "15px"
container.firstElementChild.style.borderStartEndRadius = "15px"
container.firstElementChild.style.borderEndEndRadius = "15px"
container.firstElementChild.style.borderStartsRadius = "15px"