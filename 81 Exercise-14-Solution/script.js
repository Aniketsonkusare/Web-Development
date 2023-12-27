const addItem = async (item) => {
    await randomdelay();
    let div = document.createElement("div");
    div.innerHTML = item
    document.body.append(div)
}

const randomdelay = () => {
    return new Promise ((resolve,reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    })
}

async function main() {
    
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if (last.innerHTML.endsWith("...")) {
           last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else{
            last.innerHTML = last.innerHTML + "."
        }

    }, 100);

    let text = [
        "Initializing Hacking",
        "Reading your Files",
        "Password Files Detected",
        "Sending all Password and Personal files to server",
        "Cleanning up"
    ]
    
    
    for (const item of text) {
      await addItem(item) 
    }
    await randomdelay()
    clearInterval(t);
}
main()