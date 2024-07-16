const http = require('http')

const server = http.createServer((request,respond) => {
    respond.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table{
            border-collapse: collapse;
        }

        td{
            padding: 20px 40px;
        }

        table tr:nth-child(odd){
            background-color: #aef;
        }

        table tr:nth-child(even){
            background-color: #fcb;
        }
    </style>
</head>
<body>
    <table border="1">
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</body>

<script>
    let tds = document.querySelectorAll('td')
    tds.forEach(item => {
        item.onclick = function(){
            this.style.background = '#444'
        }
    })
</script>
</html>`)
   
})

server.listen(9000, ()=>{
    console.log('server is running')
})