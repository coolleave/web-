const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.end('<h1> home </h1>')
})

app.all('*',(req,res)=>{
    res.end('<h1> 404 not found </h1>')
} )

app.listen(9000, ()=>{
    console.log('port 9000 is listening')
})