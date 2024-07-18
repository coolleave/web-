// 1、导包
const express = require('express')
// 2、创建对象
const app = express()
// 3.创建路由
app.get('/home', (require,respond)=>{
    respond.setHeader('content-type', 'text/html;charset=utf-8')  // 修改字符
    respond.end("你好！")
})
// 4、监听端口

app.listen(9000, ()=>{
    console.log('a server with express is running!')
})