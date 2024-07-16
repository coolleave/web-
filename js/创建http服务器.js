const { isUtf8 } = require("buffer");
const http = require("http")

server = http.createServer((resquest, response)=>{
    response.setHeader("charset","utf-8");
    let body = ''

    // 绑定data事件
    resquest.on('data', chunk=>{
        body += chunk
    })

    // 绑定end事件
    resquest.on('end', ()=>{
        console.log(body)
        response.end("hello!")
    })

    
})

server.listen(9000,()=>{
    console.log("server is runing!")
})