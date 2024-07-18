const express = require('express')

// 使用解构赋值
const {singer} = require('./singer.json')

const app = express()
let result = singer.find(item =>{
    
})


app.get('/singer/:id', (req,res)=>{
   
    let {id} = req.params

   

    let result = singer.find(item =>{
       
        if(item.id === Number(id)) {
            return true
        }
    })
    console.log(result)
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${result.name}</h1>
    <img src="${result.pic_src}">
    <p>${result.intrducion}</p>
</body>
</html>`)
})


app.listen(9000, ()=>{
    console.log('an app with express is runing ')
})