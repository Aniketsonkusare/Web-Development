function creatCard(title,cName,views,monthOld,duration,thumbil) {
    let viewsnumber
    if (views < 1000000) {
        viewsnumber = views/1000 + "K";
    }
    else if (views > 1000000) {
        viewsnumber = views/100000 + "M";
    }
    else{
        viewsnumber = views/1000 + "K";
    }
    
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbil}" 
        alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <h3>${cName} . ${viewsnumber} views . ${monthOld} months ago</h3>
    </div>
    </div>`

    document.querySelector(".container").innerHTML = 
    document.querySelector(".container").innerHTML + html  
}

creatCard("Introduction to HTML | Sigma web Development Course #1","CodeWithHarry", "560000", 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")
