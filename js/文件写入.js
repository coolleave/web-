/*
使用fs写入三人行必有我师座右铭
*/

const { log } = require('console')
const fs = require('fs')

fs.writeFile('./座右铭.txt', '三人行，必有我师焉', err => {
    // err 写入失败 错误对象 写入成功 null
    if (err) {
        console.log('写入失败')
        return
    }
    console.log('写入成功！')
})

let fs_stream = fs.createWriteStream("./观书有感.txt")

fs_stream.write("半亩方塘一鉴开\r\n")
fs_stream.write("天光云影共徘徊\r\n")
fs_stream.write("问渠那得清如许\r\n")
fs_stream.write("为有源头活水来\r\n")

fs_stream.close()