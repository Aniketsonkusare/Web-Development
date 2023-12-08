let arr = [1,2,3,5,90]
arr[0] = 5666;

console.log(arr, typeof arr);
console.log(arr.length);

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);

console.log(arr.toString());
console.log("join method =>", arr.join(" and "));

arr.pop()
console.log("Pop method",arr);

arr.push("abc")
console.log("Push method",arr);

arr.shift()
console.log("Shift Method",arr);

arr.unshift("Tom")
console.log("Unshift method",arr);

const c = delete arr[5]
console.log(c);

console.log(arr.length);

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];

console.log("Concat Method", a1.concat(a2,a3)); 

let a4 = [1,9,2]
console.log("sort method", a4.sort());

let number = [1,2,3,4,5,6]
console.log(number);
console.log("Splice Method",number.splice(1,2,999,888));
console.log("Splice Method",number.splice(1,3,999,888));

let num = [1,2,3,4]
console.log("Slice method", num.slice(2));
console.log("Slice method", num.slice(1,3));
console.log("Reverse Method", num.reverse());