async function main1(params) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        }, params);
    })
}

async function  main2(params) {
    const message = [
        "Initializing Hacking <span class='dot'> ...</span></br>",
        "Reading Your Files <span class='dot'> ...</span>",
        "Password Files Detected <span class='dot'> ...</span>",
        "Sending all Passwords and Personal files to server <span class='dot'> ...</span>",
        "Cleanning up<span class='dot'> ...<span>"
    ]

    let terminal = document.getElementById('terminal')

    for(let i = 0; i < message.length; i++){
        terminal.innerHTML += message[i] + "</br>"

        await main1(Math.floor(Math.random() * 7000) + 1000)
    }
}

main2()