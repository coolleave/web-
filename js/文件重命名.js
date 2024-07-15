const fs = require("fs")


const files = fs.readdirSync("./素材")
files.forEach(file => {
    console.log(file)
    let [num, name] = file.split(" ")
    console.log(num)
    
    if (parseInt(num) < 10) {
        newName = '0' + file
        console.log(newName)
        fs.rename(`./素材/${file}`, `./素材/${newName}`, err => {
            if(err) {
                console.log(`${file}重命名失败`)
                return
            }
            console.log(`${file}重命名成功！！`)
        })
    }
})

