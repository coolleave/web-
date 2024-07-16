const http = require("http")


// 创建服务器
const server = http.createServer((request,response)=>{
    // 设置请求头 字符编码
    response.setHeader("content-type", 'text/html;charset=utf-8')

    // 使用结构复制语法解析出method 和 pathname 
    let {method} = request
    let {pathname} = new URL(request.url,"http://127.0.0.1")  // URL 解析出pathname再加上域名
    if(method === "GET" && pathname === '/login'){
        response.end('登录')
    }

    else if(method === "GET" && pathname === '/registe'){
        response.end('注册')
    }

    else{
        response.end('404 not found')
    }

   
})

 // 监听9000 端口
 server.listen(9000, ()=>{
    console.log('server is running')
})