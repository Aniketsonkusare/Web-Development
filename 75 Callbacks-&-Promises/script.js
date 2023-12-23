// Synchronous Function one by one execute

console.log("one");    
console.log("Two");    
console.log("Three");

// Asynchronous Function one by one execute
console.log("one");

setTimeout(() => {
    console.log("Two");
}, 2000);

console.log("Three");

// callback Funtion

const fn = () => {
    console.log("this is a function");
}

const abc = () => {
    console.log("this is a abc function");
}

const callback = (arg) => {
    console.log(arg);
    fn()
    abc()
}

const loadscript = (src,callback) => {
    const script = document.createElement("script")
    script.src = src;
    script.onload = callback("callback",fn,abc)
    document.head.append(script);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)