const fw = require("fs")
fw.readFile("./观书有感.txt", (err,data)=>{
    if(err){
        console.log("读取失败")
    }
    console.log(data.toString())
})