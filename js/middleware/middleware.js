const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

// 全局中间件 用于记录访问网站的日志
app.use(function(req,res,next)  {
   let {url,ip} = req
   fs.appendFileSync(__dirname+'/pubilic/access.log', `url:${url} ip:${ip}\r\n`)
   next()
   
})

app.use(express.static(__dirname+'/尚品汇'))



app.get('/home',(req,res) => {
    res.end('home!')
})

app.get('/admin',(req,res) => {
    res.end('admin!')
})
app.get('/settings',(req,res) => {
    res.end('settings!')
})
app.get('/banner',(req,res) => {
    res.end('banner!')
})
app.get('/login',(req,res) => {
    res.end('home!')
})




app.listen(9000,()=>{
    console.log('an app with server is running');
})