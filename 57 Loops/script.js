console.log("for loops");

for(let i = 0; i < 10; i++){
    console.log(i + 1);
}

console.log("for in loop");

let obj = {
    Name: "Aniket",
    Role: "Front end Developer",
    Salary: "20000"
}

for (const key in obj) {
    console.log(obj[key]);
}

console.log("for of loop");

for (const A of "Aniket") {
    console.log(A);
}

console.log("While loop");

let i = 1
while (i <= 6) {
    console.log(i);
    i++;
}

console.log("do while loop");

// minimun one time execute of do while loop

let i1 = 0;
do {
    console.log(i1);
    i1++;
} while (i1 < 6);
